import { Flex, FlexBoundLazy } from "./flex";
import { FlexClientAccount, UserIdIndexAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
import { Token } from "./token";
import { Wallet } from "./wallet";
import { Market } from "./market";
export declare type ClientOptions = {
    address: string;
    signer?: Signer | string;
};
export declare type ClientDeployOptions = {
    everWallet: EverWallet;
    signer: Signer | string;
};
export declare type UserDeployOptions = {
    id: number;
    name: string;
    signer: Signer | string;
    refillWallet: string | number | bigint;
    minRefill: string | number | bigint;
    eversAuth: string | number | bigint;
    eversAll: string | number | bigint;
};
export declare type WalletDeployOptions = {
    token: Token;
    signer?: Signer | string;
};
declare type TradingOptions = {
    market: Market;
    sell: boolean;
    walletSigner: Signer | string;
    userId: string;
};
declare type OrderOptions = TradingOptions & {
    amount: number;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
};
declare type CancelOrderOptions = TradingOptions & {
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
};
export declare type OrderInfo = {
    order_id: string;
    [name: string]: unknown;
};
declare type ClientState = {
    account: FlexClientAccount;
};
export declare class Client extends FlexBoundLazy<ClientOptions, ClientState> {
    static deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client>;
    deployUser(options: UserDeployOptions): Promise<UserIdIndexAccount>;
    deployWallet(options: WalletDeployOptions, useFlex?: Flex): Promise<Wallet>;
    protected createState(options: ClientOptions): Promise<ClientState>;
    getDetails(): Promise<any>;
    getAddress(): Promise<string>;
    private getTradingWallet;
    makeOrder(options: OrderOptions): Promise<OrderInfo>;
    cancelOrder(options: CancelOrderOptions): Promise<void>;
}
export {};
//# sourceMappingURL=client.d.ts.map