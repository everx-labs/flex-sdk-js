import { Flex } from "../flex";
import { MakeOrderOptions, NewOrderInfo } from "./make-order";
import { CancelOrderOptions } from "./cancel-order";
import { OrderInfo, TradeInfo } from "./types";
import { QueryWalletsOptions } from "./query";
import { WalletInfo } from "../client/index";
import { DeployTraderOptions } from "./deploy-trader";
import { DeployTraderEverWalletOptions, EverWalletInfo } from "./deploy-ever-wallet";
import { DeployTraderTip31WalletOptions, DeployTraderTip31WalletResult } from "./deploy-tip31-wallet";
export * from "./types";
export { DeployTraderOptions, MakeOrderOptions, NewOrderInfo, CancelOrderOptions, QueryWalletsOptions, DeployTraderTip31WalletOptions, DeployTraderEverWalletOptions, WalletInfo, EverWalletInfo, DeployTraderTip31WalletResult, };
export declare class Trader {
    static deploy(flex: Flex, options: DeployTraderOptions): Promise<void>;
    static deployEverWallet(flex: Flex, options: DeployTraderEverWalletOptions): Promise<EverWalletInfo>;
    static deployTip31Wallet(flex: Flex, options: DeployTraderTip31WalletOptions): Promise<DeployTraderTip31WalletResult>;
    static makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo>;
    static cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<void>;
    static queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]>;
    static queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]>;
    static queryWallets(flex: Flex, options: QueryWalletsOptions): Promise<WalletInfo[]>;
}
//# sourceMappingURL=index.d.ts.map