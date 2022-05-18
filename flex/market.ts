import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { XchgPairAccount } from "../contracts";

export type MarketOptions = FlexBoundOptions & {
    address: string,
}

type MarketState = {
    pair: XchgPairAccount,
}

export class Market extends FlexBoundLazy<MarketOptions, MarketState> {
    constructor(options: MarketOptions) {
        super(options);
    }

    protected async createState(options: MarketOptions): Promise<MarketState> {
        return {
            pair: new XchgPairAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }

}
