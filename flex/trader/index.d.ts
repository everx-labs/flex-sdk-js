import { WalletInfo } from "../client";
import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { MakeOrderOptions, CancelOrderOptions, OrderInfo } from "./order";
import { TradeInfo } from "./trade";
export declare type TraderOptions = {
    client: string;
    id: string;
    signer: Signer | string;
};
export declare class Trader {
    flex: Flex;
    client: string;
    id: string;
    signer: Signer | string;
    constructor(options: TraderOptions, flex?: Flex);
    makeOrder(options: MakeOrderOptions): Promise<{
        orderId: string;
        transactionId: string;
    }>;
    cancelOrder(options: CancelOrderOptions): Promise<void>;
    queryOrders(): Promise<OrderInfo[]>;
    queryTrades(): Promise<TradeInfo[]>;
    queryWallets(token?: string): Promise<WalletInfo[]>;
}
//# sourceMappingURL=index.d.ts.map