import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
export { DeployClientOptions };
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
export declare function walletInfoFromApi(result: any): WalletInfo;
export declare class Client {
    static deploy(flex: Flex, options: DeployClientOptions): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map