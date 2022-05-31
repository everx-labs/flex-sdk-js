import { Flex } from "../flex";
import { OrderInfo } from "./order";
import { TradeInfo } from "./trade";
import { WalletInfo } from "../client/index";
export declare function queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]>;
export declare function queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]>;
export declare function queryWallets(flex: Flex, client: string, trader: string, token?: string): Promise<WalletInfo[]>;
//# sourceMappingURL=query.d.ts.map