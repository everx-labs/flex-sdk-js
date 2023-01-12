import Decimal from "decimal.js-light";

export interface TokenProperties {
    decimals: DecimalNumber;
}

const BIGINT_1 = BigInt(1);
const BIGINT_10 = BigInt(10);

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    if (value.length === 64) {
        return `0x${value}`;
    }
    return `0x${BigInt(value).toString(16)}`;
}

export type DecimalNumber = number | bigint | string;

/**
 * Amount or Price value that is enumerated in tokens
 */
export type ExplicitTokens = {
    tokens: DecimalNumber;
};

/**
 * Amount or Price value that is enumerated in units
 */

export type ExplicitUnits = {
    units: DecimalNumber;
};

/**
 * Amount or Price value that is enumerated in tokens or in units.
 * If passed as `number` then treated as tokens.
 */

export type TokenValue = DecimalNumber | ExplicitTokens | ExplicitUnits;

type MulDiv = {
    mul: bigint;
    div: bigint;
};

function decToBigInt(dec: DecimalNumber): bigint {
    const f = toMulDiv(dec);
    return f.mul / f.div;
}

function decToInt(dec: DecimalNumber): number {
    const f = toMulDiv(dec);
    return Number(f.mul / f.div);
}

function applyExp(n: MulDiv, exp: number) {
    let e = exp;
    while (e !== 0) {
        if (e > 0) {
            n.mul *= BIGINT_10;
            e -= 1;
        } else {
            n.div *= BIGINT_10;
            e += 1;
        }
    }
}

function toMulDiv(decimal: DecimalNumber): MulDiv {
    let [decimalPart, exponentPart] = decimal.toString().split("e");
    let exp = exponentPart ? Number(exponentPart) : 0;

    if (decimalPart.indexOf(".") >= 0) {
        while (decimalPart.endsWith("0")) {
            decimalPart = decimalPart.substring(0, decimalPart.length - 1);
        }
        if (decimalPart.endsWith(".")) {
            decimalPart = decimalPart.substring(0, decimalPart.length - 1);
        }
    }

    let isNegate;
    if (decimalPart.startsWith("-")) {
        decimalPart = decimalPart.substring(1);
        isNegate = true;
    } else if (decimalPart.startsWith("+")) {
        decimalPart = decimalPart.substring(1);
        isNegate = false;
    } else {
        isNegate = false;
    }

    while (decimalPart.length > 1 && decimalPart.startsWith("0")) {
        decimalPart = decimalPart.substring(1);
    }

    let [intPart, fractionalPart] = decimalPart.split(".");
    if (fractionalPart) {
        intPart = `${intPart}${fractionalPart}`;
        exp -= fractionalPart.length;
    }
    const result = {
        mul: BigInt(intPart),
        div: BIGINT_1,
    };
    applyExp(result, exp);
    if (isNegate) {
        result.mul = -result.mul;
    }
    return result;
}

function mulDivToString(value: MulDiv): string {
    if (value.div === BIGINT_1) {
        return value.mul.toString();
    }
    Decimal.set({
        precision: 100,
    });
    let d = new Decimal(value.mul.toString());

    d = d.div(value.div.toString());
    return d.toFixed();
}

function toUnitsMulDiv(value: TokenValue, token: TokenProperties): MulDiv {
    let result;
    if (typeof value === "number" || typeof value === "string" || typeof value === "bigint") {
        result = tokensToUnitsMulDiv(value, token);
    } else if ("tokens" in value) {
        result = tokensToUnitsMulDiv(value.tokens, token);
    } else {
        result = toMulDiv(value.units);
    }
    return result;
}

export function toFractionalUnitsString(value: TokenValue, token: TokenProperties): string {
    return mulDivToString(toUnitsMulDiv(value, token));
}

function tokensToUnitsMulDiv(value: DecimalNumber, token: TokenProperties): MulDiv {
    const f = toMulDiv(value);
    applyExp(f, decToInt(token.decimals));
    return f;
}

export function toUnits(value: TokenValue, token: TokenProperties): bigint {
    const f = toUnitsMulDiv(value, token);
    return f.mul / f.div;
}

export function toUnitsString(value: TokenValue, token: TokenProperties): string {
    return toUnits(value, token).toString();
}

export function priceToUnits(
    price: TokenValue,
    denominator: DecimalNumber,
    majorDecimals: DecimalNumber,
    minorDecimals: DecimalNumber,
): { num: string; denum: string } {
    const denominatorInt = decToBigInt(denominator);
    const majorDecimalsInt = decToInt(majorDecimals);
    const minorDecimalsInt = decToInt(minorDecimals);
    if (typeof price === "number" || typeof price === "string" || typeof price === "bigint") {
        return tokenPriceToUnits(
            toMulDiv(price),
            denominatorInt,
            majorDecimalsInt,
            minorDecimalsInt,
        );
    }
    if ("tokens" in price) {
        return tokenPriceToUnits(
            toMulDiv(price.tokens),
            denominatorInt,
            majorDecimalsInt,
            minorDecimalsInt,
        );
    }
    return mulDivPriceToUnits(toMulDiv(price.units), denominatorInt);
}

function tokenPriceToUnits(
    price: MulDiv,
    denominator: bigint,
    majorDecimals: number,
    minorDecimals: number,
): { num: string; denum: string } {
    applyExp(price, minorDecimals - majorDecimals);
    return mulDivPriceToUnits(price, denominator);
}

function mulDivPriceToUnits(price: MulDiv, denominator: bigint): { num: string; denum: string } {
    return {
        num: ((price.mul * denominator) / price.div).toString(),
        denum: denominator.toString(),
    };
}

export function decimalFromNumAndDenomAsPowerOf10(intNum: string, powerOf10: number): string {
    let num = intNum;
    while (num.startsWith("0")) {
        num = num.substring(1);
    }
    let len = num.length;
    if (len == 0) {
        return "0";
    }
    if (powerOf10 === 0) {
        return num;
    }
    let dec;
    const d = len - powerOf10;
    if (d === 0) {
        dec = `0.${num}`;
    } else if (len > powerOf10) {
        dec = `${num.substring(0, len - powerOf10)}.${num.substring(len - powerOf10)}`;
    } else {
        dec = `0.${"0".repeat(powerOf10 - len)}${num}`;
    }
    while (dec.endsWith("0")) {
        dec = dec.substring(0, dec.length - 1);
    }
    if (dec.endsWith(".")) {
        dec = dec.substring(0, dec.length - 1);
    }
    return dec;
}
