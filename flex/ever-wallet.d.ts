import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { AbiContract } from "@eversdk/core";
export declare type EverWalletOptions = FlexBoundOptions & {
    address: string;
};
declare type EverWalletState = {
    account: MultisigWalletAccount;
};
declare type SubmitPayloadOptions = {
    dest: string;
    value: string | number | bigint;
    abi: AbiContract;
    fn: string;
    params: object;
};
export declare class EverWallet extends FlexBoundLazy<EverWalletOptions, EverWalletState> {
    constructor(options: EverWalletOptions);
    protected createState(options: EverWalletOptions): Promise<EverWalletState>;
    submitPayload(options: SubmitPayloadOptions): Promise<void>;
}
export {};
//# sourceMappingURL=ever-wallet.d.ts.map