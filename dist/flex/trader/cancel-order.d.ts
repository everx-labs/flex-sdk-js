import { TraderOptions } from "./types";
import { Evr } from "../web3";
export declare type CancelOrderOptions = {
    clientAddress: string;
    trader: TraderOptions;
    marketAddress: string;
    price: number;
    orderId: number | string;
    evers?: bigint | number | string;
};
export declare type CancelOrderResult = {
    transactionId: string;
};
export declare function cancelOrder(evr: Evr, options: CancelOrderOptions): Promise<CancelOrderResult>;
//# sourceMappingURL=cancel-order.d.ts.map