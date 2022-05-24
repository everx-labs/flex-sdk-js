import { Market } from "./market";
import { Client, OrderInfo } from "./client";
import { Flex } from "./flex";
import { Signer } from "@eversdk/core";

export type TradingOptions = {
    client: Client,
    userId: string,
    walletSigner: Signer | string,
};

export type TradingOrderOptions = {
    market: Market,
    sell: boolean,
    amount: number,
    price: number,
    orderId?: number | string,
    evers?: bigint | number | string,
    finishTime?: number;
};

export type TradingCancelOrderOptions = {
    market: Market,
    sell: boolean,
    price: number,
    orderId?: number | string,
    evers?: bigint | number | string,
};

export class Trader {
    flex: Flex;
    client: Client;
    userId: string;
    walletSigner: Signer | string;

    constructor(options: TradingOptions, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.client = options.client;
        this.userId = options.userId;
        this.walletSigner = options.walletSigner;
    }

    async makeOrder(options: TradingOrderOptions): Promise<OrderInfo> {
        return await this.client.makeOrder({
            userId: this.userId,
            walletSigner: this.walletSigner,
            market: options.market,
            sell: options.sell,
            price: options.price,
            amount: options.amount,
            evers: options.evers,
            finishTime: options.finishTime,
            orderId: options.orderId,
        });
    }

    async cancelOrder(options: TradingCancelOrderOptions): Promise<void> {
        return await this.client.cancelOrder({
            userId: this.userId,
            walletSigner: this.walletSigner,
            market: options.market,
            sell: options.sell,
            price: options.price,
            evers: options.evers,
            orderId: options.orderId,
        });
    }

    async getOrders() {
        await this.flex.client.net.query({
            query: `query {
                flex {
                    
                }
            }`,
        });
    }
}
