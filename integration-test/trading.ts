import {
    AccountOptionsEx,
    Flex,
    MakeOrderStatus,
    TokenValue,
    Trader,
    TraderOptions,
    TradeSide,
} from "../flex";
import { FlexClientAccount } from "../contracts";

export type TradingOptions = {
    client: AccountOptionsEx;
    trader: TraderOptions;
    market: string;
};

export type PriceOrder = {
    side: TradeSide;
    price: TokenValue;
    order: string;
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

    async makeOrder(
        side: TradeSide,
        price: TokenValue,
        amount: TokenValue,
        orderId?: string | number,
    ): Promise<PriceOrder> {
        const result = await Trader.makeOrder(this.flex, {
            marketAddress: this.marketAddress,
            clientAddress: this.clientAddress,
            trader: this.trader,
            orderId,
            sell: side === TradeSide.SELL,
            amount,
            price,
            waitForOrderbookUpdate: true,
        });
        switch (result.status) {
            case MakeOrderStatus.STARTING:
            case MakeOrderStatus.FINALIZING:
                throw new Error(`Make order failed with status: ${result.status}`);
            case MakeOrderStatus.ERROR:
                throw result.error;
        }
        const order = result.orderId;
        return {
            side,
            price,
            order,
        };
    }

    async makeSellOrder(
        price: TokenValue,
        amount: TokenValue,
        orderId?: string | number,
    ): Promise<PriceOrder> {
        return this.makeOrder(TradeSide.SELL, price, amount, orderId);
    }

    async makeBuyOrder(
        price: TokenValue,
        amount: TokenValue,
        orderId?: string | number,
    ): Promise<PriceOrder> {
        return this.makeOrder(TradeSide.BUY, price, amount, orderId);
    }

    async cancelOrders(orders: PriceOrder[]): Promise<void> {
        for (const { price, order } of orders) {
            await Trader.cancelOrder(this.flex, {
                marketAddress: this.marketAddress,
                clientAddress: this.clientAddress,
                trader: this.trader,
                price,
                orderId: order,
                waitForOrderbookUpdate: true,
            });
        }
    }
}
