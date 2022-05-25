import { Flex, FlexBoundLazy } from "./flex";
import { XchgPairAccount } from "../contracts";
import { Token, TokenInfo } from "./token";

export type MarketOptions = {
    address: string,
}

type MarketState = {
    pair: XchgPairAccount,
}

export type MarketInfo = {
    /// Flex Pair account address
    address: string

    /// Abbreviation used to identify pair.
    /// Derived from major and minor root tickers, i.e. 'EVER/SOL'
    ticker: string

    /// Major token
    major: TokenInfo

    /// Minor token
    minor: TokenInfo

    /// Minimum amount of major token required for an order creation
    /// in token units.
    minAmount: number

    /// Price tick size numerator
    minMove: string

    /// Token price denominator
    priceScale: string

    /// Code hash of price contracts for the pair
    priceCodeHash: string

    /// Price contracts code BOC encoded with base64
    priceCode: string

    /// Notification contract address
    notifyAddress: String
}

export type OrderBookInfo = {
    /// Buys
    bids: OrderBookItem[],

    /// Sells
    asks: OrderBookItem[],
}

/// Market price summary for time range
export type OrderBookItem = {
    /// Major token price
    price: number

    /// Amount of major tokens
    amount: number
}

export class Market extends FlexBoundLazy<MarketOptions, MarketState> {

    protected async createState(options: MarketOptions): Promise<MarketState> {
        return {
            pair: new XchgPairAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }

    /** @internal */
    static resolve(from: Market | MarketOptions | string, flex?: Flex): Market {
        return from instanceof Market
            ? from
            : new Market(typeof from === "string" ? { address: from } : from, flex);
    }

    async queryOrderBook(): Promise<OrderBookInfo> {
        const result = await this.flex.query(`
            market(pairAddress: "${this.options.address}") {
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

    async queryPrice(): Promise<number | null> {
        try {
            const result = await this.flex.query(`
            market(pairAddress: "${this.options.address}") {
                price
            }
        `);
            return result.market.price;
        } catch {
            return null;
        }
    }

    static async queryMarkets(flex?: Flex): Promise<MarketInfo[]> {
        return (await (flex ?? Flex.default).query(`pairs { ${Market.queryFields()} }`)).pairs;
    }

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
