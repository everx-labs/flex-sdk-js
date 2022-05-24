import { FlexBoundLazy } from "./flex";
import { XchgPairAccount } from "../contracts";

export type MarketOptions = {
    address: string,
}

type MarketState = {
    pair: XchgPairAccount,
}

export class Market extends FlexBoundLazy<MarketOptions, MarketState> {
    protected async createState(options: MarketOptions): Promise<MarketState> {
        return {
            pair: new XchgPairAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }

    async getPair() {
        return (await this.getState()).pair;
    }

    async getPairDetails() {
        return (await (await this.getPair()).getDetails()).output;
    }
}
