import { Flex } from "./flex";
import { Token, TokenInfo } from "./token";

export type MarketInfo = {
    /// Flex Pair account address
    address: string;

    /// Abbreviation used to identify pair.
    /// Derived from major and minor root tickers, i.e. 'EVER/SOL'
    ticker: string;

    /// Major token
    major: TokenInfo;

    /// Minor token
    minor: TokenInfo;

    /// Minimum amount of major token required for an order creation
    /// in token units.
    minAmount: number;

    /// Price tick size numerator
    minMove: string;

    /// Token price denominator
    priceScale: string;

    /// Code hash of price contracts for the pair
    priceCodeHash: string;

    /// Price contracts code BOC encoded with base64
    priceCode: string;

    /// Notification contract address
    notifyAddress: String;
};

export type OrderBookInfo = {
    /// Buys
    bids: OrderBookItem[];

    /// Sells
    asks: OrderBookItem[];
};

/// Market price summary for time range
export type OrderBookItem = {
    /// Major token price
    price: number;

    /// Amount of major tokens
    amount: number;
};

export class Market {
    static async queryOrderBook(flex: Flex, market: string): Promise<OrderBookInfo> {
        const result = await flex.query(`
            market(pairAddress: "${market}") {
                orderBook {
                    bids {
                        price
                        amount
                    }
                    asks {
                        price
                        amount
                    }
                }
            }
        `);
        return result.market.orderBook;
    }

    static async queryPrice(flex: Flex, market: string): Promise<number | null> {
        const result = await flex.query(`
        market(pairAddress: "${market}") {
            price
        }
        `);
        return result.market.price;
    }

    static async queryMarkets(flex: Flex): Promise<MarketInfo[]> {
        return (await flex.query(`pairs { ${Market.queryFields()} }`)).pairs;
    }

    /** @internal */
    static queryFields() {
        return `
            address
            ticker
            major { ${Token.queryFields()} }
            minor { ${Token.queryFields()} }
            minAmount
            minMove
            priceScale
            priceCodeHash
            notifyAddress
        `;
    }
}
