import { Flex } from "../flex";
import { WalletInfo } from "../client/index";
import { OrderInfo, TradeInfo } from "./types";
export declare function queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]>;
export declare function queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]>;
export declare type QueryWalletsOptions = {
    client: string;
    trader?: string;
    token?: string;
};
export declare function queryWallets(flex: Flex, options: QueryWalletsOptions): Promise<WalletInfo[]>;
//# sourceMappingURL=query.d.ts.map