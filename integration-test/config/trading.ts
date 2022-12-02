import {
    AccountOptionsEx,
    CancelOrderResult,
    CancelOrderStatus,
    Flex,
    MakeOrderMode,
    MakeOrderResult,
    MakeOrderStatus,
    PriceOrder,
    TokenValue,
    Trader,
    TraderOptions,
    TradeSide,
} from "../../flex";
import { FlexClientAccount } from "../../contracts";

export type TradingOptions = {
    client: AccountOptionsEx;
    trader: TraderOptions;
    market: string;
};

export type TradingMakeOrderOptions = {
    /** Trade direction */
    side: TradeSide;
    /** Amount of Major token to buy or sell */
    amount: TokenValue;
    /** Price of Major token */
    price: TokenValue;
    /**
     * Optional uint64 size number, MUST be unique for each Trader's order.
     * If omitted library uses random generator.
     */
    orderId?: number | string;
    /** Amount of native currency attached for processing fees */
    evers?: bigint | number | string;
    /** Order expiration time */
    finishTime?: number;
    /** Order type */
    mode?: MakeOrderMode;

    /** Wait for the transaction which updates the price contract (orderbook) */
    waitForOrderbookUpdate?: boolean;
};

export type TradingCancelOrderOptions = {
    /**
     * Order price
     */
    price: TokenValue;
    /**
     * Optional order ID. If omitted, all orders with this price will be canceled.
     * Otherwise, only order with orderId will be canceled.
     *
     */
    orderId: number | string;
    /**
     * Evers for commission.
     */
    evers?: bigint | number | string;

    /** Wait for the transaction which updates the price contract (orderbook) */
    waitForOrderbookUpdate?: boolean;
};

export class Trading {
    private constructor(
        public flex: Flex,
        public marketAddress: string,
        public client: FlexClientAccount,
        public clientAddress: string,
        public trader: TraderOptions,
    ) {}

    static async create(flex: Flex, options: TradingOptions): Promise<Trading> {
        const client = await flex.evr.accounts.get(FlexClientAccount, options.client);
        return new Trading(flex, options.market, client, await client.getAddress(), options.trader);
    }

    async makeOrder(options: TradingMakeOrderOptions): Promise<MakeOrderResult> {
        return await Trader.makeOrder(this.flex, {
            ...options,
            marketAddress: this.marketAddress,
            clientAddress: this.clientAddress,
            trader: this.trader,
            sell: options.side === TradeSide.SELL,
        });
    }

    async makeOrderWithRequiredSuccess(options: TradingMakeOrderOptions): Promise<PriceOrder> {
        const result = await this.makeOrder({
            ...options,
            waitForOrderbookUpdate: true,
        });
        switch (result.status) {
            case MakeOrderStatus.STARTING:
            case MakeOrderStatus.FINALIZING:
                throw new Error(`Make order failed with status: ${result.status}`);
            case MakeOrderStatus.ERROR:
                throw result.error;
        }
        return {
            pairAddress: this.marketAddress,
            price: options.price.toString(),
            orderId: result.orderId,
        };
    }

    async cancelOrder(options: TradingCancelOrderOptions): Promise<CancelOrderResult> {
        return await Trader.cancelOrder(this.flex, {
            ...options,
            marketAddress: this.marketAddress,
            clientAddress: this.clientAddress,
            trader: this.trader,
        });
    }

    async cancelOrderWithRequiredSuccess(options: TradingCancelOrderOptions): Promise<void> {
        const result = await this.cancelOrder({
            ...options,
            waitForOrderbookUpdate: true,
        });
        switch (result.status) {
            case CancelOrderStatus.STARTING:
            case CancelOrderStatus.FINALIZING:
                throw new Error(`Make order failed with status: ${result.status}`);
            case CancelOrderStatus.ERROR:
                throw result.error;
        }
    }

    async cancelAllOrders() {
        await Trader.cancelAllOrders(this.flex, {
            clientAddress: this.clientAddress,
            trader: this.trader,
        });
    }
}
