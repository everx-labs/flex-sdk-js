import { Market, MarketOptions } from "./market";
import { Client, ClientOptions } from "./client";
import { Flex } from "./flex";
import { Wallet, WalletOptions } from "./wallet";

export type TradingOrderOptions = {
    client: ClientOptions,
    wallet: WalletOptions,
    market: MarketOptions,
    userId: string,
    amount: number,
    price: number,
};

export class Trading {
    static async makeOrder(options: TradingOrderOptions, bindFlex?: Flex): Promise<any> {
        const flex = bindFlex ?? Flex.default;
        return await new Wallet(options.wallet, flex).makeOrder({
            client: new Client(options.client, flex),
            market: new Market(options.market, flex),
            userId: options.userId,
            price: options.price,
            amount: options.amount,
        });
    }
}
