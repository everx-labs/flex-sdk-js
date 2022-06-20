"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint256 = exports.toUnits = void 0;
function toUnits(tokens, decimals = 9) {
    return Math.floor(tokens * Math.pow(10, Number(decimals))).toString();
}
exports.toUnits = toUnits;
function uint256(value) {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}
exports.uint256 = uint256;
//# sourceMappingURL=utils.js.map