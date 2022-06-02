import { TokenInfo } from "../token";
import { Signer } from "@eversdk/core";
export declare type TraderOptions = {
    id: string;
    signer: Signer | string;
};
export declare type OrderInfo = {
    orderId: string;
    traderId: string;
    price: number;
    amountProcessed: number;
    amountLeft: number;
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
export declare type TradeInfo = {
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
    cursor: string;
};
//# sourceMappingURL=types.d.ts.map