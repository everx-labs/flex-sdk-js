import { TokenInfo } from "../token";
import { SignerOption } from "../web3";
export type TraderOptions = {
    id: string;
    signer: SignerOption;
};
export type OrderInfo = {
    orderId: string;
    traderId: string;
    price: string;
    priceNum: string;
    priceScale: string;
    amountProcessed: string;
    amountLeft: string;
    side: TradeSide;
    finishTime: number;
    pair: {
        address: string;
    };
};
export declare enum TradeSide {
    SELL = "SELL",
    BUY = "BUY"
}
export declare enum TradeLiquidity {
    TAKER = "TAKER",
    MAKER = "MAKER"
}
export type TradeInfo = {
    pair: {
        address: string;
    };
    price: number;
    amount: number;
    time: number;
    side: TradeSide;
    liquidity: TradeLiquidity;
    fees: number;
    feesToken: TokenInfo;
    userOrderId: string;
    cursor: string;
};
export type PriceOrder = {
    pairAddress: string;
    price: string;
    orderId: string;
};
//# sourceMappingURL=types.d.ts.map