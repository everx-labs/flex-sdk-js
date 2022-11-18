import Decimal from "decimal.js-light";

const BIGINT_0 = BigInt(0);
const BIGINT_1 = BigInt(1);
const BIGINT_10 = BigInt(10);

export function uint256(value: string): string {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
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

function decToInt(dec: DecimalNumber): bigint {
    const f = toMulDiv(dec);
    return f.mul / f.div;
}

function applyExp(n: MulDiv, exp: bigint) {
    let e = exp;
    while (e !== BIGINT_0) {
        if (e > 0) {
            n.mul *= BIGINT_10;
            e -= BIGINT_1;
        } else {
            n.div *= BIGINT_10;
            e += BIGINT_1;
        }
    }
}

function toMulDiv(decimal: DecimalNumber): MulDiv {
    let [decimalPart, exponentPart] = decimal.toString().split("e");
    let exp = exponentPart ? BigInt(exponentPart) : BIGINT_0;

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
        exp -= BigInt(fractionalPart.length);
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

function tokenValueToMulDiv(value: TokenValue, decimals: DecimalNumber): MulDiv {
    let result;
    if (typeof value === "number" || typeof value === "string" || typeof value === "bigint") {
        result = tokensToMulDiv(value, decimals);
    } else if ("tokens" in value) {
        result = tokensToMulDiv(value.tokens, decimals);
    } else {
        result = toMulDiv(value.units);
    }
    return result;
}

export function tokenValueToString(value: TokenValue, decimals: DecimalNumber): string {
    return mulDivToString(tokenValueToMulDiv(value, decimals));
}

function tokensToMulDiv(value: DecimalNumber, decimals: DecimalNumber): MulDiv {
    const f = toMulDiv(value);
    applyExp(f, -decToInt(decimals));
    return f;
}

export function toUnits(value: TokenValue, decimals: DecimalNumber = 9): string {
    const f = tokenValueToMulDiv(value, decimals);
    return (f.mul / f.div).toString();
}

export function priceToUnits(
    price: TokenValue,
    denominator: DecimalNumber,
    majorDecimals: DecimalNumber,
    minorDecimals: DecimalNumber,
): { num: string; denum: string } {
    const denominatorInt = decToInt(denominator);
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
    majorDecimals: bigint,
    minorDecimals: bigint,
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
