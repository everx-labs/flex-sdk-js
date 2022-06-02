import { Flex, MakeOrderMode } from "../exchange";
import { TonClient } from "@eversdk/core";
import { TraderOptions } from "./types";
export declare type MakeOrderOptions = {
    client: string;
    trader: TraderOptions;
    market: string;
    sell: boolean;
    amount: number;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
};
export declare type NewOrderInfo = {
    orderId: string;
    transactionId: string;
};
export declare function makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo>;
export declare function generateRandomOrderId(web3: TonClient): Promise<string>;
//# sourceMappingURL=make-order.d.ts.map