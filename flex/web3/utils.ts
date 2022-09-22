export type ExplicitTokens = {
    tokens: number,
}

export type ExplicitUnits = {
    units: number | bigint | string,
}

export type TokenValue = number | ExplicitTokens | ExplicitUnits;

export function toUnits(value: TokenValue, decimals: string | number = 9): string {
    if (typeof value === "number") {
        return tokensToUnits(value, decimals);
    }
    if ("tokens" in value) {
        return tokensToUnits(value.tokens, decimals);
    }
    return value.units.toString();
}

export function tokensToUnits(value: number, decimals: string | number): string {
    return Math.floor(value * Math.pow(10, Number(decimals))).toString();
}

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}

