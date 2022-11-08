import {
    abiContract,
    AbiContract,
    Signer,
    TonClient,
    TransactionNode,
} from "@eversdk/core";
import { AccountClass, AccountOptionsEx } from "../../contracts/account-ex";
import { AccountType } from "@eversdk/appkit";
import { EvrSigners } from "./signers";
import { Log } from "../../contracts/helpers";

export { AccountOptionsEx };

enum MessageType {
    Internal,
    ExtIn,
    ExtOut,
}

export type DerivativeTransactionMessage = {
    id: string,
    msg_type: MessageType
};

export type DerivativeTransaction = {
    id: string,
    out_messages: DerivativeTransactionMessage[],
    account_addr: string,
    aborted: boolean
    compute: {
        exit_code: number
    },
    lt: string
};

function derivativeTransactionFields(id: "id" | "id:hash"): string {
    return `
        ${id}
        in_msg
        out_msgs
        out_messages { ${id} dst msg_type }
        account_addr 
        total_fees
        aborted
        compute { 
            exit_code 
        }
        lt
    `;
}

export class EvrAccounts {
    constructor(public everos: TonClient, public signers: EvrSigners, public log: Log) {
    }

    async get<T>(
        accountClass: new (options: { client: TonClient, address?: string, signer?: Signer, log?: Log }) => T,
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
            client: this.everos,
            log: this.log,
            signer: await this.signers.resolve(signer),
        });
    }

    async isActive(address: string): Promise<boolean> {
        const accounts = (await this.everos.net.query_collection({
            collection: "accounts",
            filter: { id: { eq: address } },
            result: "acc_type",
            limit: 1,
        })).result as { acc_type: number }[];
        return accounts.length > 0 && accounts[0].acc_type === AccountType.active;
    }

    async waitForFinalExternalAnswer(
        transaction: TransactionNode,
        abi: AbiContract,
    ): Promise<any> {
        let orig_addr = transaction.account_addr;
        let externalMessages = [];
        const tree = await this.everos.net.query_transaction_tree({
            in_msg: transaction.in_msg,
            abi_registry: [abiContract(abi)],
            timeout: 60000 * 5,
        });
        for (const msg of tree.messages) {
            if ((msg.src == orig_addr) && (msg.dst ?? "") === "") {
                externalMessages.push(msg);
            }
        }
        return externalMessages[0].decoded_body?.value;
    }

    async waitForInternalAnswer(
        transaction: TransactionNode,
        abi: AbiContract[],
    ) {
        let orig_addr = transaction.account_addr;
        let answerMessages = [];
        const tree = await this.everos.net.query_transaction_tree({
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
            [address: string]: AccountClass,
        },
    ): Promise<{ [address: string]: DerivativeTransaction }> {

        const originTransaction: DerivativeTransaction | undefined = (await this.everos.net.query(
            {
                query: `
            query tr($transactionId: String!) {
                blockchain {
                    transaction(hash:$transactionId) { ${derivativeTransactionFields("id:hash")} }
                }
            }
            `,
                variables: {
                    transactionId: originTransactionId,
                },
            })).result.data.blockchain.transaction;

        if (!originTransaction) {
            throw new Error(`Can not wait for derivative transaction: origin transaction ${originTransactionId} is missing on the blockchain.`);
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

        while (uncheckedMessages.length > 0) {
            const checkingMessages = uncheckedMessages;
            uncheckedMessages = [];
            for (const checkingMessage of checkingMessages) {
                // Wait for the transaction to target account will be appeared in the cloud
                let transaction: DerivativeTransaction | undefined = undefined;
                while (!transaction) {
                    transaction = (await this.everos.net.query_collection(
                        {
                            collection: "transactions",
                            filter: {
                                in_msg: { eq: checkingMessage },
                            },
                            result: derivativeTransactionFields("id"),
                        })).result[0];
                    if (!transaction) {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }

                const timeLimit = Date.now() + 60000;
                // Wait for the target account will be updated in the cloud
                const transactionLt = Number(transaction.lt);
                while (true) {
                    const account: { last_trans_lt: string, acc_type: AccountType } | undefined = (await this.everos.net.query_collection(
                        {
                            collection: "accounts",
                            filter: {
                                id: { eq: transaction.account_addr },
                            },
                            result: "last_trans_lt acc_type",
                        })).result[0];
                    if (!account) {
                        this.log.info(`Waiting for derivative transaction was stopped: account ${transaction.account_addr} is missing on the blockchain.`);
                        break;
                    }
                    if (account.acc_type !== AccountType.active) {
                        this.log.info(`Waiting for derivative transaction was stopped: account ${transaction.account_addr} has inactive state ${account.acc_type}.`);
                        break;
                    }
                    if (Number(account.last_trans_lt) > transactionLt) {
                        break;
                    }
                    if (Date.now() > timeLimit) {
                        this.log.info(`Can not wait for derivative transaction: account ${transaction.account_addr} has not been changed during 1 minute.`);
                        break;
                    }
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
                checkTransaction(transaction);
                if (Object.keys(result).length >= Object.keys(accounts).length) {
                    break;
                }
            }
        }
        return result;
    }
}
