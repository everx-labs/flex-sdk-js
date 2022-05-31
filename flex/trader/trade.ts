import { TokenInfo } from "../token";

export enum TradeSide {
    SELL = "SELL",
    BUY = "BUY",
}

export enum TradeLiquidity {
    TAKER = "TAKER",
    MAKER = "MAKER",
}

export type TradeInfo = {
    /** Flex market (pair) */
    pair: { address: string },

    /** Price of the major token */
    price: number,

    /** Amount of the major tokens */
    amount: number,

    /** Trade time as a unix time stamp */
    time: number,

    /** Determines the type of the later order (taker) in trade. */
    side: TradeSide,

    /**
     * Determines the users position in trade. Maker or taker.
     * Maker is a trade counterparty whose order was earlier.
     *Taker is a counterparty with a later order.
     */
    liquidity: TradeLiquidity,
    /**
     * User fees for this trade. Measured in major tokens.
     * If the user is a maker then fees is a value
     * received by user as a bonus for making order.
     * Note that in this case the fees is a negative value.
     *
     * If the user is a taker then fees is a value that
     * the user pays to the exchange and maker.
     */
    fees: number,


    /** User fees token. */
    feesToken: TokenInfo

    cursor: string
}

