export declare type TokenValue = number | {
    units: number | bigint | string;
};
export declare function units(value: number | bigint | string): TokenValue;
export declare function toUnits(value: TokenValue, decimals?: string | number): string;
export declare function uint256(value: string): string;
//# sourceMappingURL=utils.d.ts.map