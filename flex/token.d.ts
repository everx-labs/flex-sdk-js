import { Flex, FlexBoundLazy } from "./flex";
import { WrapperAccount } from "../contracts";
import { Signer } from "@eversdk/core";
export declare type TokenOptions = {
    address: string;
    signer?: Signer | string;
};
declare type TokenState = {
    wrapper: WrapperAccount;
};
export declare type TokenInfo = {
    address: string;
    ticker: string;
    name: string;
    decimals: number;
    totalAllocated: number;
    walletCodeHash: string;
    wrapperType: number;
    externalAddress: string;
    reserveWallet: string;
};
export declare class Token extends FlexBoundLazy<TokenOptions, TokenState> {
    protected createState(options: TokenOptions): Promise<TokenState>;
    static queryTokens(flex?: Flex): Promise<TokenInfo[]>;
    static queryFields(): string;
}
export {};
//# sourceMappingURL=token.d.ts.map