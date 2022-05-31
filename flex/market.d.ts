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
    flex: Flex;
    address: string;
    constructor(address: string, flex?: Flex);
    queryOrderBook(): Promise<OrderBookInfo>;
    queryPrice(): Promise<number | null>;
    static queryMarkets(flex?: Flex): Promise<MarketInfo[]>;
    static queryFields(): string;
}
//# sourceMappingURL=market.d.ts.map