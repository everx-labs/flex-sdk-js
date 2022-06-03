import { MultisigWalletAccount } from "../../contracts";
import { abiContract, AbiContract, signerNone } from "@eversdk/core";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Evr } from "./evr";
import { toUnits } from "./utils";

export type SubmitTransactionOptions = {
    dest: string,
    value: string | number | bigint,
    messageBody: {
        abi: AbiContract,
        fn: string,
        params: object
    }
}

export class EverWallet {
    evr: Evr;
    options: AccountOptionsEx;

    constructor(web3: Evr, options: AccountOptionsEx) {
        this.evr = web3;
        this.options = options;
    }

    async transfer(options: SubmitTransactionOptions) {
        const account = await this.getAccount();
        const payload = (await this.evr.sdk.abi.encode_message_body({
            abi: abiContract(options.messageBody.abi),
            call_set: {
                function_name: options.messageBody.fn,
                input: {
                    _answer_id: 0,
                    ...options.messageBody.params,
                },
            },
            is_internal: true,
            signer: signerNone(),
        })).body;
        await account.runSubmitTransaction({
            dest: options.dest,
            allBalance: false,
            bounce: true,
            value: options.value,
            payload,
        });
    }

    async topUp(address: string, evers: number) {
        const account = await this.getAccount();
        await account.runSubmitTransaction({
            dest: address,
            value: toUnits(evers),
            allBalance: false,
            bounce: false,
            payload: "",
        });
    }

    async getAddress(): Promise<string> {
        return await (await this.getAccount()).getAddress();
    }

    private async getAccount(): Promise<MultisigWalletAccount> {
        return await this.evr.accounts.get(MultisigWalletAccount, this.options);
    }

}
