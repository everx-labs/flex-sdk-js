export declare function uint256(value: string): string;
export declare type DecimalNumber = number | bigint | string;
export declare type ExplicitTokens = {
    tokens: DecimalNumber;
};
export declare type ExplicitUnits = {
    units: DecimalNumber;
};
export declare type TokenValue = DecimalNumber | ExplicitTokens | ExplicitUnits;
export declare function toUnitsString(value: TokenValue, decimals: DecimalNumber): string;
export declare function toUnits(value: TokenValue, decimals?: DecimalNumber): string;
export declare function priceToUnits(price: TokenValue, denominator: DecimalNumber, majorDecimals: DecimalNumber, minorDecimals: DecimalNumber): {
    num: string;
    denum: string;
};
//# sourceMappingURL=utils.d.ts.map