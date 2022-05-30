import { Market, MarketOptions } from "./market";
import { Client, ClientOptions, WalletInfo } from "./client";
import { Flex, MakeOrderMode } from "./flex";
import { Signer } from "@eversdk/core";
import { Token, TokenInfo } from "./token";
export declare type TraderOptions = {
    client: Client | ClientOptions | string;
    id: string;
    signer: Signer | string;
};
export declare type MakeOrderOptions = {
    market: Market | MarketOptions | string;
    sell: boolean;
    amount: number;
    price: number;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
};
export declare type CancelOrderOptions = {
    market: Market | MarketOptions | string;
    price: number;
    orderId: number | string;
    evers?: bigint | number | string;
};
export declare enum TradeSide {
    SELL = "SELL",
    BUY = "BUY"
}
export declare enum TradeLiquidity {
    TAKER = "TAKER",
    MAKER = "MAKER"
}
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
export declare type NewOrderInfo = {
    orderId: string;
    transactionHash: string;
};
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
export declare class Trader {
    flex: Flex;
    client: Client;
    id: string;
    signer: Signer | string;
    constructor(options: TraderOptions, flex?: Flex);
    makeOrder(options: MakeOrderOptions): Promise<NewOrderInfo>;
    cancelOrder(options: CancelOrderOptions): Promise<void>;
    queryOrders(): Promise<OrderInfo[]>;
    queryTrades(): Promise<TradeInfo[]>;
    queryWallets(token?: Token | string): Promise<WalletInfo[]>;
    private getPriceDetails;
    private getWallet;
    private generateRandomOrderId;
}
//# sourceMappingURL=trader.d.ts.map