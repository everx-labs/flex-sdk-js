import { Flex, MakeOrderMode } from "../exchange";
import { TraderOptions } from "./types";
import { Evr, TokenValue } from "../web3";
export declare type MakeOrderOptions = {
    clientAddress: string;
    trader: TraderOptions;
    marketAddress: string;
    sell: boolean;
    amount: TokenValue;
    price: TokenValue;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
    waitForOrderbookUpdate?: boolean;
};
export declare enum MakeOrderStatus {
    STARTING = 0,
    FINALIZING = 1,
    SUCCESS = 2,
    ERROR = 3
}
declare type MakeOrderParams = {
    isSell: boolean;
    majorSymbol: string;
    minorSymbol: string;
    walletAddress: string;
    priceAddress: string;
};
declare type MakeOrderStarting = {
    status: MakeOrderStatus.STARTING;
    params: MakeOrderParams;
    message: string;
    shard_block_id: string;
};
declare type MakeOrderFinalizing = {
    status: MakeOrderStatus.FINALIZING;
    params: MakeOrderParams;
    walletTransactionId: string;
};
declare type MakeOrderSuccess = {
    status: MakeOrderStatus.SUCCESS;
    walletTransactionId: string;
    priceTransactionId: string;
};
declare type MakeOrderError = {
    status: MakeOrderStatus.ERROR;
    error: ErrorInfo;
};
declare type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};
export declare type MakeOrderResult = {
    orderId: string;
} & (MakeOrderStarting | MakeOrderFinalizing | MakeOrderSuccess | MakeOrderError);
export declare function makeOrder(flex: Flex, options: MakeOrderOptions): Promise<MakeOrderResult>;
export declare function waitForMakeOrder(evr: Evr, result: MakeOrderResult): Promise<MakeOrderResult>;
export declare function finalizeMakeOrder(evr: Evr, result: MakeOrderResult, startingTransactionId: string, priceTransactionRequired: boolean): Promise<MakeOrderResult>;
export declare function generateRandomOrderId(evr: Evr): Promise<string>;
export {};
//# sourceMappingURL=make-order.d.ts.map