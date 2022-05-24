import { Market } from "./market";
import { Client, OrderInfo } from "./client";
import { Flex } from "./flex";
import { Signer } from "@eversdk/core";
export declare type TradingOptions = {
    client: Client;
    userId: string;
    walletSigner: Signer | string;
};
export declare type TradingOrderOptions = {
    market: Market;
    sell: boolean;
    amount: number;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
};
export declare type TradingCancelOrderOptions = {
    market: Market;
    sell: boolean;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
};
export declare class Trader {
    flex: Flex;
    client: Client;
    userId: string;
    walletSigner: Signer | string;
    constructor(options: TradingOptions, flex?: Flex);
    makeOrder(options: TradingOrderOptions): Promise<OrderInfo>;
    cancelOrder(options: TradingCancelOrderOptions): Promise<void>;
    getOrders(): Promise<void>;
}
//# sourceMappingURL=trader.d.ts.map