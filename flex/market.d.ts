import { FlexBoundLazy } from "./flex";
import { XchgPairAccount } from "../contracts";
export declare type MarketOptions = {
    address: string;
};
declare type MarketState = {
    pair: XchgPairAccount;
};
export declare class Market extends FlexBoundLazy<MarketOptions, MarketState> {
    protected createState(options: MarketOptions): Promise<MarketState>;
}
export {};
//# sourceMappingURL=market.d.ts.map