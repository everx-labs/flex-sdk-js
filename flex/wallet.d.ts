import { Flex, FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../contracts";
import { Market } from "./market";
export declare type WalletOptions = {
    flex?: Flex;
    address: string;
    signer: Signer | string;
};
declare type WalletState = {
    account: FlexWalletAccount;
};
declare type OrderOptions = {
    market: Market;
    clientAddress: string;
    userId: string;
    amount: number;
    price: number;
};
export declare class Wallet extends FlexBoundLazy<WalletOptions, WalletState> {
    constructor(options: WalletOptions);
    protected createState(options: WalletOptions): Promise<WalletState>;
    makeOrder(options: OrderOptions): Promise<void>;
}
export {};
//# sourceMappingURL=wallet.d.ts.map