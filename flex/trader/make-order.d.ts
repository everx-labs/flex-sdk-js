import { Flex, MakeOrderMode } from "../exchange";
import { TraderOptions } from "./types";
import { Evr } from "../web3";
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
export declare function generateRandomOrderId(evr: Evr): Promise<string>;
//# sourceMappingURL=make-order.d.ts.map