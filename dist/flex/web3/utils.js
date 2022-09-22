"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint256 = exports.tokensToUnits = exports.toUnits = void 0;
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
//# sourceMappingURL=utils.js.map