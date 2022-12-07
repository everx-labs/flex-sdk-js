import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
import { GetClientInfoResult } from "./client-info";
export { DeployClientOptions };
export type WalletInfo = {
    address: string;
    clientAddress: string;
    traderId: string;
    traderPublicKey: string;
    token: TokenInfo;
    nativeCurrencyBalance: string;
    nativeCurrencyBalanceUnits: string;
    totalBalance: string;
    totalBalanceUnits: string;
    availableBalance: string;
    availableBalanceUnits: string;
    balanceInOrders: string;
    balanceInOrdersUnits: string;
    cursor: string;
};
export declare function walletInfoFromApi(result: any): WalletInfo;
export declare class Client {
    static deploy(flex: Flex, options: DeployClientOptions): Promise<string>;
    static getClientInfo(flex: Flex, clientAddress: string): Promise<GetClientInfoResult>;
}
//# sourceMappingURL=index.d.ts.map