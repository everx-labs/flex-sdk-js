import {
    abiContract,
    AbiContract,
    ProcessingErrorCode,
    Signer,
    TonClient,
    TransactionNode,
} from "@eversdk/core";
import { AccountClass, AccountOptionsEx } from "../../contracts";
import { AccountType } from "@eversdk/appkit";
import { EvrSigners } from "./signers";
import { Log } from "../../contracts/helpers";
import { SdkError } from "../trader/processing";
import { decimalFromNumAndDenomAsPowerOf10 } from "./utils";
import { Evr } from "./evr";

export { AccountOptionsEx };

enum MessageType {
    Internal,
    ExtIn,
    ExtOut,
}

export type DerivativeTransactionMessage = {
    id: string;
    dst: string;
    msg_type: MessageType;
    created_lt: string;
};

export type DerivativeTransaction = {
    id: string;
    out_messages: DerivativeTransactionMessage[];
    account_addr: string;
    aborted: boolean;
    compute: {
        exit_code: number;
    };
    lt: string;
};

function derivativeTransactionFields(id: "id" | "id:hash"): string {
    return `
        ${id}
        out_messages { ${id} dst msg_type created_lt }
        account_addr 
        aborted
        compute { 
            exit_code 
        }
        lt
    `;
}

export class EvrAccounts {
    constructor(public sdk: TonClient, public signers: EvrSigners, public log: Log) {}

    async get<T>(
        accountClass: new (options: {
            client: TonClient;
            address?: string;
            signer?: Signer;
            log?: Log;
            useCachedState?: boolean;
        }) => T,
        options: string | AccountOptionsEx,
    ): Promise<T> {
        let address = undefined;
        let signer = undefined;
        if (typeof options === "string") {
            address = options;
        } else {
            if ("address" in options) {
                address = options.address;
            }
            signer = options.signer;
        }
        return new accountClass({
            address,
            client: this.sdk,
            log: this.log,
            signer: await this.signers.resolve(signer),
        });
    }

    async isActive(address: string): Promise<boolean> {
        const accounts = (
            await this.sdk.net.query_collection({
                collection: "accounts",
                filter: { id: { eq: address } },
                result: "acc_type",
                limit: 1,
            })
        ).result as { acc_type: number }[];
        return accounts.length > 0 && accounts[0].acc_type === AccountType.active;
    }

    async getBalancesUnits(addresses: string[]): Promise<Map<string, bigint>> {
        const accounts = (
            (
                await this.sdk.net.query_collection({
                    collection: "accounts",
                    filter: { id: { in: addresses } },
                    result: "id acc_type balance",
                })
            ).result as { id: string, acc_type: number; balance: string }[]
        );
        const balances = new Map<string, bigint>();
        for(const acc of accounts) {
            if (acc.balance !== undefined && acc.balance !== null) {
                balances.set(acc.id, BigInt(acc.balance))
            }
        }
        for (const address of addresses) {
            if (!balances.has(address)) {
                balances.set(address, BigInt(0));
            }
        }
        return balances;
    }

    async getDecimalBalance(address: string): Promise<string> {
        const balance = (await this.getBalancesUnits([address])).get(address);
        if (balance === undefined || balance === null) {
            return "0";
        }
        return decimalFromNumAndDenomAsPowerOf10(balance.toString(), Evr.NATIVE_DECIMALS);
    }

    async waitForFinalExternalAnswer(transaction: TransactionNode, abi: AbiContract): Promise<any> {
        let orig_addr = transaction.account_addr;
        let externalMessages = [];
        const tree = await this.sdk.net.query_transaction_tree({
            in_msg: transaction.in_msg,
            abi_registry: [abiContract(abi)],
            timeout: 60000 * 5,
        });
        for (const msg of tree.messages) {
            if (msg.src == orig_addr && (msg.dst ?? "") === "") {
                externalMessages.push(msg);
            }
        }
        return externalMessages[0].decoded_body?.value;
    }

    async waitForInternalAnswer(transaction: TransactionNode, abi: AbiContract[]) {
        let orig_addr = transaction.account_addr;
        let answerMessages = [];
        const tree = await this.sdk.net.query_transaction_tree({
            in_msg: transaction.in_msg,
            abi_registry: abi.map(x => abiContract(x)),
            timeout: 60000 * 5,
        });
        for (const msg of tree.messages) {
            if (msg.dst == orig_addr && (msg.src ?? "") !== "") {
                answerMessages.push(msg);
            }
        }
        return answerMessages[0];
    }

    async waitForDerivativeTransactions(
        originTransactionId: string,
        accounts: {
            [address: string]: AccountClass;
        },
    ): Promise<{ [address: string]: DerivativeTransaction }> {
        const originTransaction = await this.queryDerivativeTransaction(originTransactionId);
        if (!originTransaction) {
            throw new Error(
                `Can not wait for derivative transaction: origin transaction ${originTransactionId} is missing on the blockchain.`,
            );
        }

        const result: { [address: string]: DerivativeTransaction } = {};

        let uncheckedMessages: string[] = [];

        function checkTransaction(transaction: DerivativeTransaction) {
            const address = transaction.account_addr;
            const contract = accounts[address];
            if (contract) {
                if (!(address in result)) {
                    result[address] = transaction;
                }
            }
            for (const message of transaction.out_messages) {
                if (message.msg_type === MessageType.Internal) {
                    uncheckedMessages.push(message.id);
                }
            }
        }

        checkTransaction(originTransaction);

        const waitTimeout = new WaitTimeout();
        while (uncheckedMessages.length > 0) {
            const checkingMessages = uncheckedMessages;
            uncheckedMessages = [];
            let hasCheckedMessages = false;
            for (const checkingMessage of checkingMessages) {
                const transaction = await this.queryDerivativeTransactionForMessage(
                    checkingMessage,
                    true,
                );
                if (transaction) {
                    hasCheckedMessages = true;
                    checkTransaction(transaction);
                    if (Object.keys(result).length >= Object.keys(accounts).length) {
                        return result;
                    }
                } else {
                    uncheckedMessages.push(checkingMessage);
                }
            }
            if (hasCheckedMessages) {
                waitTimeout.reset();
            } else {
                await waitTimeout.sleep();
            }
        }
        return result;
    }

    private async queryDerivativeTransaction(
        transactionId: string,
    ): Promise<DerivativeTransaction | undefined> {
        return (
            await this.queryBlockchain(
                `transaction(hash:$transactionId) { ${derivativeTransactionFields("id:hash")} }`,
                {
                    transactionId,
                },
            )
        ).transaction;
    }

    private async queryDerivativeTransactionForMessage(
        messageId: string,
        waitForAccountUpdate: boolean,
    ): Promise<DerivativeTransaction | undefined> {
        // Wait for the transaction to target account will be appeared in the cloud
        const transaction: DerivativeTransaction | undefined = (
            await this.sdk.net.query_collection({
                collection: "transactions",
                filter: {
                    in_msg: { eq: messageId },
                },
                result: derivativeTransactionFields("id"),
            })
        ).result[0];
        if (transaction && waitForAccountUpdate) {
            // Wait for the target account will be updated in the cloud
            const timeLimit = Date.now() + 60000;
            const transactionLt = Number(transaction.lt);
            while (true) {
                const account: { last_trans_lt: string; acc_type: AccountType } | undefined = (
                    await this.sdk.net.query_collection({
                        collection: "accounts",
                        filter: {
                            id: { eq: transaction.account_addr },
                        },
                        result: "last_trans_lt acc_type",
                    })
                ).result[0];
                if (!account) {
                    this.log.info(
                        `Waiting for derivative transaction was stopped: account ${transaction.account_addr} is missing on the blockchain.`,
                    );
                    break;
                }
                if (account.acc_type !== AccountType.active) {
                    this.log.info(
                        `Waiting for derivative transaction was stopped: account ${transaction.account_addr} has inactive state ${account.acc_type}.`,
                    );
                    break;
                }
                if (Number(account.last_trans_lt) > transactionLt) {
                    break;
                }
                if (Date.now() > timeLimit) {
                    this.log.info(
                        `Can not wait for derivative transaction: account ${transaction.account_addr} has not been changed during 1 minute.`,
                    );
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
        return transaction;
    }

    async waitForMessageBody(messageId: string): Promise<string> {
        const waitTimeout = new WaitTimeout();
        while (true) {
            const body: string | undefined = (
                await this.queryBlockchain(`message(hash:$messageId) { body }`, {
                    messageId,
                })
            ).message?.body;
            if (body) {
                return body;
            }
            await waitTimeout.sleep();
        }
    }

    private async queryBlockchain(text: string, variables: Record<string, unknown>): Promise<any> {
        const args = Object.keys(variables)
            .map(x => `$${x}: String!`)
            .join(", ");
        return (
            await this.sdk.net.query({
                query: `query q(${args}) { blockchain { ${text} } }`,
                variables,
            })
        ).result.data.blockchain;
    }
}

class WaitTimeout {
    private delay = 2000;
    private timeout = 40 * 1000;
    private start = 0;
    private limit = 0;

    constructor() {
        this.reset();
    }

    reset() {
        this.start = Date.now();
        this.limit = this.start + this.timeout;
    }

    async sleep() {
        const now = Date.now();
        if (now > this.limit) {
            const error: SdkError = new Error(
                `Blockchain shard experiences degradation. Blocks generation is slow or stopped. Client hasn't received a new block within timeout.`,
            );
            error.code = ProcessingErrorCode.TransactionWaitTimeout;
            throw error;
        }
        await new Promise(resolve => setTimeout(resolve, this.delay));
    }
}
