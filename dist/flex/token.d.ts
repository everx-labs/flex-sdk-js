import { Flex } from "./flex";
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
export declare class Token {
    static queryTokens(flex: Flex): Promise<TokenInfo[]>;
    static queryFields(): string;
}
//# sourceMappingURL=token.d.ts.map