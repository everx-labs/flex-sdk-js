import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { XchgPairAccount } from "../contracts";
export declare type MarketOptions = FlexBoundOptions & {
    address: string;
};
declare type MarketState = {
    pair: XchgPairAccount;
};
export declare class Market extends FlexBoundLazy<MarketOptions, MarketState> {
    constructor(options: MarketOptions);
    protected createState(options: MarketOptions): Promise<MarketState>;
}
export {};
//# sourceMappingURL=market.d.ts.map