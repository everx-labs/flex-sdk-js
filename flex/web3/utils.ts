export function toUnits(tokens: number, decimals: string | number = 9): string {
    return Math.floor(tokens * Math.pow(10, Number(decimals))).toString();
}

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}

