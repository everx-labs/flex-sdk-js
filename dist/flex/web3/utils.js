"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceToUnits = exports.uint256 = exports.tokensToUnits = exports.toUnits = void 0;
function toUnits(value, decimals = 9) {
    if (typeof value === "number") {
        return tokensToUnits(value, decimals);
    }
    if ("tokens" in value) {
        return tokensToUnits(value.tokens, decimals);
    }
    return value.units.toString();
}
exports.toUnits = toUnits;
function tokensToUnits(value, decimals) {
    return Math.floor(value * Math.pow(10, Number(decimals))).toString();
}
exports.tokensToUnits = tokensToUnits;
function uint256(value) {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}
exports.uint256 = uint256;
function priceToUnits(price, denominator, majorDecimals, minorDecimals) {
    if (typeof price === "number") {
        return tokenPriceToUnits(price, denominator, majorDecimals, minorDecimals);
    }
    if ("tokens" in price) {
        return tokenPriceToUnits(price.tokens, denominator, majorDecimals, minorDecimals);
    }
    return unitPriceToUnits(price.units, denominator);
}
exports.priceToUnits = priceToUnits;
function tokenPriceToUnits(price, denominator, majorDecimals, minorDecimals) {
    const denom = Math.floor(Number(denominator));
    const price_num = Math.floor(price * denom * Math.pow(10, Number(minorDecimals) - Number(majorDecimals)));
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
function unitPriceToUnits(price, denominator) {
    const denom = Math.floor(Number(denominator));
    const price_num = BigInt(price) * BigInt(denom);
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
//# sourceMappingURL=utils.js.map