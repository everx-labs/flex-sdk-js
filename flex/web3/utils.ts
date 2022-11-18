/**
 * Amount or Price value that is enumerated in tokens
 */
export type ExplicitTokens = {
    tokens: number | string,
}

/**
 * Amount or Price value that is enumerated in units
 */

export type ExplicitUnits = {
    units: number | bigint | string,
}

/**
 * Amount or Price value that is enumerated in tokens or in units.
 * If passed as `number` then treated as tokens.
 */

export type TokenValue = number | string | ExplicitTokens | ExplicitUnits;

export function toUnits(value: TokenValue, decimals: string | number = 9): string {
    if (typeof value === "number" || typeof value === "string") {
        return tokensToUnits(value, decimals);
    }
    if ("tokens" in value) {
        return tokensToUnits(value.tokens, decimals);
    }
    return value.units.toString();
}

export function tokensToUnits(value: number | string, decimals: string | number): string {
    return Math.floor(Number(value) * Math.pow(10, Number(decimals))).toString();
}

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}

export function priceToUnits(
    price: TokenValue,
    denominator: string | number,
    majorDecimals: string | number,
    minorDecimals: string | number,
): { num: string, denum: string } {
    if (typeof price === "number" || typeof price === "string") {
        return tokenPriceToUnits(price, denominator, majorDecimals, minorDecimals);
    }
    if ("tokens" in price) {
        return tokenPriceToUnits(price.tokens, denominator, majorDecimals, minorDecimals);
    }
    return unitPriceToUnits(price.units, denominator);
}

function tokenPriceToUnits(
    price: number | string,
    denominator: string | number,
    majorDecimals: string | number,
    minorDecimals: string | number,
): { num: string, denum: string } {
    const denom = Math.floor(Number(denominator));
    const price_num = Math.floor(Number(price) * denom * Math.pow(
        10,
        Number(minorDecimals) - Number(majorDecimals),
    ));
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}

function unitPriceToUnits(
    price: number | bigint | string,
    denominator: string | number,
): { num: string, denum: string } {
    const denom = Math.floor(Number(denominator));
    const price_num = BigInt(price) * BigInt(denom);
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
