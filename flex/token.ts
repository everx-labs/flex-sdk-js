import { FlexBoundLazy } from "./flex";
import { WrapperAccount } from "../contracts";
import { Signer } from "@eversdk/core";

export type TokenOptions = {
    address: string,
    signer?: Signer | string
}

type TokenState = {
    wrapper: WrapperAccount,
}

export class Token extends FlexBoundLazy<TokenOptions, TokenState> {
    protected async createState(options: TokenOptions): Promise<TokenState> {
        return {
            wrapper: new WrapperAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }
}
