"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../flex/web3/utils");
function assertAmount(expected, value, decimals) {
    const actual = (0, utils_1.tokenValueToString)(value, decimals);
    if (actual !== expected) {
        console.log(`${actual} (actual) != ${expected} (expected) (${value} / ${decimals})`);
    }
}
assertAmount("277777.1", "2777771", 1);
assertAmount("1.2", "12", 1);
assertAmount("10", "100", 1);
assertAmount("12345678912345678912345.6789", "123456789123456789123456789", 4);
assertAmount("0.0002", "20", "5");
assertAmount("0.123", "123", 3);
assertAmount("1.23", "123", 2);
assertAmount("0.0123", "123", 4);
assertAmount("0.123", "1230", 4);
assertAmount("0", "0", 2);
function assertPrice(expected, price, denominator, majorDecimals, minorDecimals) {
    const p = (0, utils_1.priceToUnits)(price, denominator, majorDecimals, minorDecimals);
    const actual = `${p.num} / ${p.denum}`;
    if (actual !== expected) {
        console.log(`actual \`${actual}\` != expected \`${expected}\` (${JSON.stringify(price)} / ${denominator}, ${majorDecimals}, ${minorDecimals})`);
    }
}
assertPrice("277777 / 1", { units: 277777.1 }, 1, 8, 9);
assertPrice("2777771 / 1", 277777.1, 1, 8, 9);
assertPrice("2777771 / 10", { units: 277777.1 }, 10, 8, 9);
assertPrice("123 / 1", { units: 123.45 }, 1, 8, 9);
assertPrice("0 / 10", { units: 0.0001 }, 10, 8, 9);
assertPrice("1000 / 10", { units: 100 }, 10, 8, 9);
test(() => {
});
//# sourceMappingURL=api-tests.js.map