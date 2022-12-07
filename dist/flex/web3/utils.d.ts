export declare function uint256(value: string): string;
export type DecimalNumber = number | bigint | string;
export type ExplicitTokens = {
    tokens: DecimalNumber;
};
export type ExplicitUnits = {
    units: DecimalNumber;
};
export type TokenValue = DecimalNumber | ExplicitTokens | ExplicitUnits;
export declare function toUnitsString(value: TokenValue, decimals: DecimalNumber): string;
export declare function toUnits(value: TokenValue, decimals?: DecimalNumber): string;
export declare function priceToUnits(price: TokenValue, denominator: DecimalNumber, majorDecimals: DecimalNumber, minorDecimals: DecimalNumber): {
    num: string;
    denum: string;
};
export declare function decimalFromNumAndDenomAsPowerOf10(intNum: string, powerOf10: number): string;
//# sourceMappingURL=utils.d.ts.map