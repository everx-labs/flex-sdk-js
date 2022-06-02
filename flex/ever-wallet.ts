import { Flex } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { abiContract, AbiContract, Signer, signerNone } from "@eversdk/core";
import { AccountOptionsEx } from "../contracts/account-ex";
import { amountToUnits } from "../contracts/helpers";
import { Account } from "@eversdk/appkit";

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
    flex: Flex;
    address?: string;
    signer?: Signer | string;

    constructor(options: AccountOptionsEx, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.address = options.address;
        this.signer = options.signer;
    }

    async getAccount(): Promise<MultisigWalletAccount> {
        return await this.flex.getAccount(MultisigWalletAccount, this);
    }

    async transfer(options: SubmitTransactionOptions) {
        const account = await this.getAccount();
        const payload = (await this.flex.web3.abi.encode_message_body({
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
            value: amountToUnits(evers),
            allBalance: false,
            bounce: true,
            payload: "",
        });
    }

    static async topUp(
        flex: Flex,
        options: AccountOptionsEx,
        account: Account,
        balance: number,
    ): Promise<void> {
        await new EverWallet(options, flex).topUp(
            await account.getAddress(),
            balance,
        );
    }
}
