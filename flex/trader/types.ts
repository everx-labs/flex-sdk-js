import { TokenInfo } from "../token";
import { SignerOption } from "../web3";

export type TraderOptions = {
    /** Trader device ID.  Ask Flex Client owner for your ID. */
    id: string;
    /** Private key you Trader will use to sign messages */
    signer: SignerOption;
};

export type OrderInfo = {
    /** May be assigned to some GUID*/
    orderId: string;
    /** Trader ID */
    traderId: string;
    /** Price of Major token */
    price: string;
    /** Price nominator of Major token */
    priceNum: string;
    /** Price scale */
    priceScale: string;
    /** Amount that has been processed */
    amountProcessed: string;
    /** Amount left in the order*/
    amountLeft: string;
    /** Trader's side in the order*/
    side: TradeSide;
    /** Order expiration time */
    finishTime: number;
    /** Market of the order */
    pair: {
        address: string;
    };
};

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
    pair: { address: string };

    /** Price of the major token */
    price: string;

    /** Amount of the major tokens */
    amount: string;

    /** Trade time as a unix time stamp */
    time: number;

    /** Determines the type of the later order (taker) in trade. */
    side: TradeSide;

    /**
     * Determines the users position in trade. Maker or taker.
     * Maker is a trade counterparty whose order was earlier.
     * Taker is a counterparty with a later order.
     */
    liquidity: TradeLiquidity;

    /**
     * User fees for this trade. Measured in major tokens.
     * If the user is a maker then fees is a value
     * received by user as a bonus for making order.
     * Note that in this case the fees is a negative value.
     *
     * If the user is a taker then fees is a value that
     * the user pays to the exchange and maker.
     */
    fees: string;

    /** User fees token. */
    feesToken: TokenInfo;

    /**
     * User's order id related to this trade.
     */
    userOrderId: string;

    /**
     * Cursor value for pagination
     */
    cursor: string;
};

export type PriceOrder = {
    pairAddress: string;
    price: string;
    orderId: string;
};
