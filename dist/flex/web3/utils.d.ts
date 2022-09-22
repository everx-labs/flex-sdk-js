export declare type ExplicitTokens = {
    tokens: number;
};
export declare type ExplicitUnits = {
    units: number | bigint | string;
};
export declare type TokenValue = number | ExplicitTokens | ExplicitUnits;
export declare function toUnits(value: TokenValue, decimals?: string | number): string;
export declare function tokensToUnits(value: number, decimals: string | number): string;
export declare function uint256(value: string): string;
//# sourceMappingURL=utils.d.ts.map