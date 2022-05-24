import { FlexBoundLazy } from "./flex";
import { WrapperAccount } from "../contracts";
import { Signer } from "@eversdk/core";
export declare type TokenOptions = {
    address: string;
    signer?: Signer | string;
};
declare type TokenState = {
    wrapper: WrapperAccount;
};
export declare class Token extends FlexBoundLazy<TokenOptions, TokenState> {
    protected createState(options: TokenOptions): Promise<TokenState>;
}
export {};
//# sourceMappingURL=token.d.ts.map