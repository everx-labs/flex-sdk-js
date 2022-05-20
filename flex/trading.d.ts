import { MarketOptions } from "./market";
import { ClientOptions } from "./client";
import { Flex } from "./flex";
import { WalletOptions } from "./wallet";
export declare type TradingOrderOptions = {
    client: ClientOptions;
    wallet: WalletOptions;
    market: MarketOptions;
    userId: string;
    amount: number;
    price: number;
};
export declare class Trading {
    static makeOrder(options: TradingOrderOptions, bindFlex?: Flex): Promise<any>;
}
//# sourceMappingURL=trading.d.ts.map