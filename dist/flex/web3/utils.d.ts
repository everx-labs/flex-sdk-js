export declare type ExplicitTokens = {
    tokens: number | string;
};
export declare type ExplicitUnits = {
    units: number | bigint | string;
};
export declare type TokenValue = number | ExplicitTokens | ExplicitUnits;
export declare function toUnits(value: TokenValue, decimals?: string | number): string;
export declare function tokensToUnits(value: number | string, decimals: string | number): string;
export declare function uint256(value: string): string;
export declare function priceToUnits(price: TokenValue, denominator: string | number, majorDecimals: string | number, minorDecimals: string | number): {
    num: string;
    denum: string;
};
//# sourceMappingURL=utils.d.ts.map