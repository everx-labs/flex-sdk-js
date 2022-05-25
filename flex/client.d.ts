import { Flex, FlexBoundLazy } from "./flex";
import { FlexClientAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
import { Token, TokenInfo } from "./token";
import { Wallet } from "./wallet";
import { MarketOptions } from "./market";
export declare type ClientOptions = {
    address: string;
    signer?: Signer | string;
};
export declare type ClientDeployOptions = {
    everWallet: EverWallet;
    signer: Signer | string;
};
export declare type TraderDeployOptions = {
    id: string;
    name: string;
    pubkey: string;
    refillWallet: string | number | bigint;
    minRefill: string | number | bigint;
    eversAuth: string | number | bigint;
    eversAll: string | number | bigint;
};
export declare type WalletDeployOptions = {
    token: Token;
    signer?: Signer | string;
};
declare type ClientState = {
    account: FlexClientAccount;
};
export declare type WalletInfo = {
    address: string;
    clientAddress: string;
    traderId: string;
    traderPublicKey: string;
    token: TokenInfo;
    nativeCurrencyBalance: number;
    totalBalance: number;
    availableBalance: number;
    balanceInOrders: number;
    unsaltedPriceCodeHash: string;
    cursor: string;
};
export declare class Client extends FlexBoundLazy<ClientOptions, ClientState> {
    static resolve(from: Client | MarketOptions | string, flex?: Flex): Client;
    static deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client>;
    deployTrader(options: TraderDeployOptions): Promise<void>;
    deployWallet(options: WalletDeployOptions, useFlex?: Flex): Promise<Wallet>;
    protected createState(options: ClientOptions): Promise<ClientState>;
    queryWallets(): Promise<WalletInfo[]>;
}
export declare function walletInfoFromApi(result: any): WalletInfo;
export {};
//# sourceMappingURL=client.d.ts.map