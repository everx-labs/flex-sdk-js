import { FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../contracts";
export declare type WalletOptions = {
    address: string;
    signer?: Signer | string;
};
declare type WalletState = {
    account: FlexWalletAccount;
};
export declare class Wallet extends FlexBoundLazy<WalletOptions, WalletState> {
    protected createState(options: WalletOptions): Promise<WalletState>;
}
export {};
//# sourceMappingURL=wallet.d.ts.map