import { Flex } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { AbiContract, Signer } from "@eversdk/core";
export declare type EverWalletOptions = {
    address: string;
    signer?: Signer | string;
};
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
    address: string;
    signer?: Signer | string;
    constructor(options: EverWalletOptions, flex?: Flex);
    getAccount(): Promise<MultisigWalletAccount>;
    transfer(options: SubmitTransactionOptions): Promise<void>;
}
//# sourceMappingURL=ever-wallet.d.ts.map