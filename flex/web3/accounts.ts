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
import { Web3EvrSigners } from "./signers";

export class Web3EvrAccounts {
    constructor(public everos: TonClient, public signers: Web3EvrSigners, public log: Log) {
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
}
