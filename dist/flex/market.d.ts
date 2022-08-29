import { Flex } from "./flex";
import { TokenInfo } from "./token";
export declare type MarketInfo = {
    address: string;
    ticker: string;
    major: TokenInfo;
    minor: TokenInfo;
    minAmount: number;
    minMove: string;
    priceScale: string;
    priceCodeHash: string;
    priceCode: string;
    notifyAddress: String;
};
export declare type OrderBookInfo = {
    bids: OrderBookItem[];
    asks: OrderBookItem[];
};
export declare type OrderBookItem = {
    price: number;
    amount: number;
};
export declare class Market {
    static queryOrderBook(flex: Flex, market: string): Promise<OrderBookInfo>;
    static queryPrice(flex: Flex, market: string): Promise<number | null>;
    static queryMarkets(flex: Flex): Promise<MarketInfo[]>;
    static queryFields(): string;
}
//# sourceMappingURL=market.d.ts.map