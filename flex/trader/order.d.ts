import { Flex, MakeOrderMode } from "../flex";
import { TradeSide } from "./trade";
import { Signer } from "@eversdk/core";
export declare type MakeOrderOptions = {
    market: string;
    sell: boolean;
    amount: number;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
};
export declare type CancelOrderOptions = {
    market: string;
    price: number;
    orderId: number | string;
    evers?: bigint | number | string;
};
export declare type OrderInfo = {
    orderId: string;
    traderId: string;
    price: number;
    amountProcessed: number;
    amountLeft: number;
    side: TradeSide;
    finishTime: number;
    pair: {
        address: string;
    };
};
export declare function makeOrder(options: MakeOrderOptions & {
    flex: Flex;
    client: string;
    trader: string;
    traderSigner: Signer | string;
}): Promise<{
    orderId: string;
    transactionId: string;
}>;
export declare function cancelOrder(options: CancelOrderOptions & {
    flex: Flex;
    client: string;
    traderId: string;
    traderSigner: Signer | string;
}): Promise<void>;
//# sourceMappingURL=order.d.ts.map