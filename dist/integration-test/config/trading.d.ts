import { AccountOptionsEx, CancelOrderResult, Flex, MakeOrderMode, MakeOrderResult, PriceOrder, TokenValue, TraderOptions, TradeSide } from "../../flex";
import { FlexClientAccount } from "../../contracts";
export type TradingOptions = {
    client: AccountOptionsEx;
    trader: TraderOptions;
    market: string;
};
export type TradingMakeOrderOptions = {
    side: TradeSide;
    amount: TokenValue;
    price: TokenValue;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
    waitForOrderbookUpdate?: boolean;
};
export type TradingCancelOrderOptions = {
    price: TokenValue;
    orderId: number | string;
    evers?: bigint | number | string;
    waitForOrderbookUpdate?: boolean;
};
export declare class Trading {
    flex: Flex;
    marketAddress: string;
    client: FlexClientAccount;
    clientAddress: string;
    trader: TraderOptions;
    private constructor();
    static create(flex: Flex, options: TradingOptions): Promise<Trading>;
    makeOrder(options: TradingMakeOrderOptions): Promise<MakeOrderResult>;
    makeOrderWithRequiredSuccess(options: TradingMakeOrderOptions): Promise<PriceOrder>;
    cancelOrder(options: TradingCancelOrderOptions): Promise<CancelOrderResult>;
    cancelOrderWithRequiredSuccess(options: TradingCancelOrderOptions): Promise<void>;
    cancelAllOrders(): Promise<void>;
}
//# sourceMappingURL=trading.d.ts.map