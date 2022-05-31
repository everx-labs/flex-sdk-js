import { WalletInfo } from "../client";
import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { makeOrder, MakeOrderOptions, CancelOrderOptions, OrderInfo, cancelOrder } from "./order";
import { TradeInfo } from "./trade";
import { queryOrders, queryTrades, queryWallets } from "./query";

export type TraderOptions = {
    client: string,
    id: string,
    signer: Signer | string,
};

export class Trader {
    flex: Flex;
    client: string;
    id: string;
    signer: Signer | string;

    constructor(options: TraderOptions, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.client = options.client;
        this.id = options.id;
        this.signer = options.signer;
    }

    /**
     * Creates an Order on Flex Dex Market
     *
     * @param {MakeOrderOptions} options
     * Order parameters
     *
     * @returns OrderInfo
     */
    async makeOrder(options: MakeOrderOptions): Promise<{
        orderId: string,
        transactionId: string,
    }> {
        return makeOrder({
            ...options,
            flex: this.flex,
            client: this.client,
            trader: this.id,
            traderSigner: this.signer,
        });
    }

    /**
     * Cancels an Order on Flex Dex Market
     *
     * @param {CancelOrderOptions} options
     * Cancel order parameters
     *
     * @returns void
     */
    async cancelOrder(options: CancelOrderOptions): Promise<void> {
        return cancelOrder({
            ...options,
            flex: this.flex,
            client: this.client,
            traderId: this.id,
            traderSigner: this.signer,
        });
    }

    /**
     * Gets the list of Trader's open orders.
     *
     * @returns the list of open orders, including expired orders.
     */
    async queryOrders(): Promise<OrderInfo[]> {
        return queryOrders(this.flex, this.id);
    }

    /**
     * Gets the list of Trader's executed trades.
     *
     * @returns the list of executed trades.
     */
    async queryTrades(): Promise<TradeInfo[]> {
        return queryTrades(this.flex, this.id);
    }

    /**
     * Gets the list of Trader's wallets
     * optionally filtered by a token
     *
     * @param {Token | string} token?
     * Optional parameter with Token instance or token root address
     *
     * @returns list of wallets
     */
    async queryWallets(token?: string): Promise<WalletInfo[]> {
        return queryWallets(this.flex, this.client, this.id, token);
    }
}
