import {
    abiContract,
    AbiContract,
    Signer,
    TonClient,
    TransactionNode,
} from "@eversdk/core";
import { Log } from "../../contracts/helpers";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { AccountType } from "@eversdk/appkit";
import { EvrSigners } from "./signers";

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
            //console.log('cur msg = ', msg);
            if (msg.dst == orig_addr && (msg.src ?? "") !== "") {
                answerMessages.push(msg);
            }
        }
        return answerMessages[0];
    }

    async waitForDerivativeTransactionOnAccount(options: {
            originTransactionId: string,
            accountAddress: string,
        },
    ): Promise<TransactionNode> {
        const originTransaction: { out_messages: { id: string, dst: string }[] } | undefined = (await this.everos.net.query_collection(
            {
                collection: "transactions",
                filter: {
                    id: { eq: options.originTransactionId },
                },
                result: "out_messages { id dst }",
            })).result[0];
        if (!originTransaction) {
            throw new Error(`Can not wait for derivative transaction: origin transaction ${options.originTransactionId} is missing on the blockchain.`);
        }
        const msg = originTransaction.out_messages.find(x => x.dst === options.accountAddress);
        if (!msg) {
            throw new Error(`Can not wait for derivative transaction: origin transaction ${options.originTransactionId} has not out message to account ${options.accountAddress}.`);
        }

        // Wait for the transaction to target account will be appeared in the cloud
        let targetTransaction: (TransactionNode & { lt: string }) | undefined = undefined;
        while (!targetTransaction) {
            targetTransaction = (await this.everos.net.query_collection(
                {
                    collection: "transactions",
                    filter: {
                        in_msg: { eq: msg.id },
                    },
                    result: "id in_msg out_msgs account_addr total_fees aborted compute { exit_code } lt",
                })).result[0];
            if (!targetTransaction) {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        // Wait for the target account will be updated in the cloud
        const transactionLt = Number(targetTransaction.lt);
        while (true) {
            const account: { last_trans_lt: string } | undefined = (await this.everos.net.query_collection(
                {
                    collection: "accounts",
                    filter: {
                        id: { eq: options.accountAddress },
                    },
                    result: "last_trans_lt",
                })).result[0];
            if (account && Number(account.last_trans_lt) > transactionLt) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        return targetTransaction;
    }
}
