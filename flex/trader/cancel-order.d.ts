import { Flex } from "../flex";
import { TraderOptions } from "./types";
export declare type CancelOrderOptions = {
    client: string;
    trader: TraderOptions;
    market: string;
    price: number;
    orderId: number | string;
    evers?: bigint | number | string;
};
export declare function cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<void>;
//# sourceMappingURL=cancel-order.d.ts.map