import { PriceOrder, TraderOptions } from "./types";
import { Evr, TokenValue } from "../web3";
import { Flex } from "../flex";
export declare type CancelOrderOptions = {
    clientAddress: string;
    trader: TraderOptions;
    marketAddress: string;
    price: TokenValue;
    orderId: number | string;
    evers?: bigint | number | string;
    waitForOrderbookUpdate?: boolean;
};
export declare enum CancelOrderStatus {
    STARTING = 0,
    FINALIZING = 1,
    SUCCESS = 2,
    ERROR = 3
}
declare type CancelOrderParams = {
    tokenSymbol: string;
    walletAddress: string;
    priceAddress: string;
};
declare type CancelOrderStarting = {
    status: CancelOrderStatus.STARTING;
    params: CancelOrderParams;
    message: string;
    shard_block_id: string;
};
declare type CancelOrderFinalizing = {
    status: CancelOrderStatus.FINALIZING;
    params: CancelOrderParams;
    walletTransactionId: string;
};
declare type CancelOrderSuccess = {
    status: CancelOrderStatus.SUCCESS;
    walletTransactionId: string;
    priceTransactionId: string;
};
declare type CancelOrderError = {
    status: CancelOrderStatus.ERROR;
    error: ErrorInfo;
};
declare type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};
export declare type CancelOrderResult = CancelOrderStarting | CancelOrderFinalizing | CancelOrderSuccess | CancelOrderError;
export declare type CancelAllOrdersParams = {
    clientAddress: string;
    trader: TraderOptions;
};
export declare type CancelAllOrdersResult = {
    orders: PriceOrder[];
};
export declare function cancelOrder(evr: Evr, options: CancelOrderOptions): Promise<CancelOrderResult>;
export declare function waitForCancelOrder(evr: Evr, result: CancelOrderResult): Promise<CancelOrderResult>;
export declare function finalizeCancelOrder(evr: Evr, result: CancelOrderResult, startingTransactionId: string, priceTransactionRequired: boolean): Promise<CancelOrderResult>;
export declare function cancelAllOrders(flex: Flex, options: CancelAllOrdersParams): Promise<CancelAllOrdersResult>;
export {};
//# sourceMappingURL=cancel-order.d.ts.map