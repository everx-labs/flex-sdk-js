import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { AbiContract, Signer } from "@eversdk/core";
export declare type EverWalletOptions = FlexBoundOptions & {
    address: string;
    signer?: Signer | string;
};
declare type EverWalletState = {
    account: MultisigWalletAccount;
};
declare type SubmitTransactionOptions = {
    dest: string;
    value: string | number | bigint;
    messageBody: {
        abi: AbiContract;
        fn: string;
        params: object;
    };
};
export declare class EverWallet extends FlexBoundLazy<EverWalletOptions, EverWalletState> {
    constructor(options: EverWalletOptions);
    protected createState(options: EverWalletOptions): Promise<EverWalletState>;
    transfer(options: SubmitTransactionOptions): Promise<void>;
}
export {};
//# sourceMappingURL=ever-wallet.d.ts.map