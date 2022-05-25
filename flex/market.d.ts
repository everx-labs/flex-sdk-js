import { Flex, FlexBoundLazy } from "./flex";
import { XchgPairAccount } from "../contracts";
import { TokenInfo } from "./token";
export declare type MarketOptions = {
    address: string;
};
declare type MarketState = {
    pair: XchgPairAccount;
};
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
export declare class Market extends FlexBoundLazy<MarketOptions, MarketState> {
    protected createState(options: MarketOptions): Promise<MarketState>;
    static resolve(from: Market | MarketOptions | string, flex?: Flex): Market;
    queryOrderBook(): Promise<OrderBookInfo>;
    queryPrice(): Promise<number | null>;
    static queryMarkets(flex?: Flex): Promise<MarketInfo[]>;
    static queryFields(): string;
}
export {};
//# sourceMappingURL=market.d.ts.map