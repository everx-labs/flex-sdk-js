export type TokenValue = number | {
    units: number | bigint | string
}

export function units(value: number | bigint | string): TokenValue {
    return { units: value };
}

export function toUnits(value: TokenValue, decimals: string | number = 9): string {
    if (typeof value === "number") {
        return Math.floor(value * Math.pow(10, Number(decimals))).toString();
    }
    return value.units.toString();
}

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}

