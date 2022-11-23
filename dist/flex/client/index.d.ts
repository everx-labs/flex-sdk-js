import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
import { GetClientInfoResult } from "./client-info";
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
    cursor: string;
};
export declare function walletInfoFromApi(result: any): WalletInfo;
export declare class Client {
    static deploy(flex: Flex, options: DeployClientOptions): Promise<string>;
    static getClientInfo(flex: Flex, clientAddress: string): Promise<GetClientInfoResult>;
}
//# sourceMappingURL=index.d.ts.map