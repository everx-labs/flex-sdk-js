import { Flex } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { AbiContract, Signer } from "@eversdk/core";
import { AccountOptionsEx } from "../contracts/account-ex";
import { Account } from "@eversdk/appkit";
export declare type SubmitTransactionOptions = {
    dest: string;
    value: string | number | bigint;
    messageBody: {
        abi: AbiContract;
        fn: string;
        params: object;
    };
};
export declare class EverWallet {
    flex: Flex;
    address?: string;
    signer?: Signer | string;
    constructor(options: AccountOptionsEx, flex?: Flex);
    getAccount(): Promise<MultisigWalletAccount>;
    transfer(options: SubmitTransactionOptions): Promise<void>;
    topUp(address: string, evers: number): Promise<void>;
    static topUp(flex: Flex, options: AccountOptionsEx, account: Account, balance: number): Promise<void>;
}
//# sourceMappingURL=ever-wallet.d.ts.map