"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint256 = exports.toUnits = exports.units = void 0;
function units(value) {
    return { units: value };
}
exports.units = units;
function toUnits(value, decimals = 9) {
    if (typeof value === "number") {
        return Math.floor(value * Math.pow(10, Number(decimals))).toString();
    }
    return value.units.toString();
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