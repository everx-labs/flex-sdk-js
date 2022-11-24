import { Flex } from "../flex";
import { MakeOrderOptions, MakeOrderResult, MakeOrderStatus } from "./make-order";
import { CancelOrderOptions, CancelOrderResult, CancelOrderStatus } from "./cancel-order";
import { OrderInfo, TradeInfo } from "./types";
import { QueryWalletsOptions } from "./query";
import { WalletInfo } from "../client";
import { DeployTraderOptions } from "./deploy-trader";
import { DeployTraderEverWalletOptions, EverWalletInfo } from "./deploy-ever-wallet";
import { DeployTraderTip31WalletOptions, DeployTraderTip31WalletResult } from "./deploy-tip31-wallet";
import { GetIndexInfoResult } from "./get-index-info";
import { TopUpOptions, TopUpResult } from "./top-up";
export * from "./types";
export { DeployTraderOptions, MakeOrderOptions, MakeOrderResult, MakeOrderStatus, CancelOrderStatus, CancelOrderOptions, CancelOrderResult, QueryWalletsOptions, DeployTraderTip31WalletOptions, DeployTraderEverWalletOptions, WalletInfo, EverWalletInfo, DeployTraderTip31WalletResult, };
export declare class Trader {
    static deploy(flex: Flex, options: DeployTraderOptions): Promise<void>;
    static deployEverWallet(flex: Flex, options: DeployTraderEverWalletOptions): Promise<EverWalletInfo>;
    static deployTip31Wallet(flex: Flex, options: DeployTraderTip31WalletOptions): Promise<DeployTraderTip31WalletResult>;
    static makeOrder(flex: Flex, options: MakeOrderOptions): Promise<MakeOrderResult>;
    static waitForMakeOrder(flex: Flex, result: MakeOrderResult): Promise<MakeOrderResult>;
    static cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<CancelOrderResult>;
    static waitForCancelOrder(flex: Flex, result: CancelOrderResult): Promise<CancelOrderResult>;
    static queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]>;
    static queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]>;
    static queryWallets(flex: Flex, options: QueryWalletsOptions): Promise<WalletInfo[]>;
    static getIndexInfo(flex: Flex, clientAddress: string, traderId: string): Promise<GetIndexInfoResult>;
    static topUp(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
    static getTopUpInfo(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
}
export declare function makeOrderFinalized(result: MakeOrderResult): boolean;
export declare function cancelOrderFinalized(result: CancelOrderResult): boolean;
//# sourceMappingURL=index.d.ts.map