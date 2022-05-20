import { FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../contracts";
import { Market } from "./market";
import { Client } from "./client";
export declare type WalletOptions = {
    address: string;
    signer: Signer | string;
};
declare type WalletState = {
    account: FlexWalletAccount;
};
declare type OrderOptions = {
    market: Market;
    client: Client;
    userId: string;
    amount: number;
    price: number;
};
export declare class Wallet extends FlexBoundLazy<WalletOptions, WalletState> {
    protected createState(options: WalletOptions): Promise<WalletState>;
    makeOrder(options: OrderOptions): Promise<any>;
}
export {};
//# sourceMappingURL=wallet.d.ts.map