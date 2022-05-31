import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { EverWallet } from "../ever-wallet";
import { TokenInfo } from "../token";
export declare type TraderDeployOptions = {
    id: string;
    name: string;
    pubkey: string;
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
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
export declare type ClientOptions = {
    address: string;
    signer?: Signer | string;
};
export declare type ClientDeployOptions = {
    everWallet: EverWallet;
    signer: Signer | string;
};
export declare class Client {
    flex: Flex;
    address: string;
    signer?: Signer | string;
    constructor(options: ClientOptions, flex?: Flex);
    static deploy(options: ClientDeployOptions, flex?: Flex): Promise<Client>;
    deployTrader(options: TraderDeployOptions): Promise<void>;
    queryWallets(): Promise<WalletInfo[]>;
}
export declare function walletInfoFromApi(result: any): WalletInfo;
//# sourceMappingURL=index.d.ts.map