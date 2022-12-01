import { AccountOptionsEx, Flex, PriceOrder, TokenValue, TraderOptions, TradeSide } from "../../flex";
import { FlexClientAccount } from "../../contracts";
export declare type TradingOptions = {
    client: AccountOptionsEx;
    trader: TraderOptions;
    market: string;
};
export declare class Trading {
    flex: Flex;
    marketAddress: string;
    client: FlexClientAccount;
    clientAddress: string;
    trader: TraderOptions;
    private constructor();
    static create(flex: Flex, options: TradingOptions): Promise<Trading>;
    makeOrder(side: TradeSide, price: TokenValue, amount: TokenValue, orderId?: string | number): Promise<PriceOrder>;
    makeSellOrder(price: TokenValue, amount: TokenValue, orderId?: string | number): Promise<PriceOrder>;
    makeBuyOrder(price: TokenValue, amount: TokenValue, orderId?: string | number): Promise<PriceOrder>;
    cancelAllOrders(): Promise<void>;
}
//# sourceMappingURL=trading.d.ts.map