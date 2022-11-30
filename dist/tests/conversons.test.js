"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../flex/web3/utils");
const test_1 = require("@playwright/test");
function price(price, denominator, majorDecimals = 8, minorDecimals = 9) {
    const p = (0, utils_1.priceToUnits)(price, denominator, majorDecimals, minorDecimals);
    return `${p.num} / ${p.denum}`;
}
(0, test_1.test)("amount converter", () => {
    (0, test_1.expect)((0, utils_1.toUnitsString)("2777771", 1)).toBe("27777710");
    (0, test_1.expect)((0, utils_1.toUnitsString)("12", 1)).toBe("120");
    (0, test_1.expect)((0, utils_1.toUnitsString)("100", 1)).toBe("1000");
    (0, test_1.expect)((0, utils_1.toUnitsString)("12345678912345678912345.6789", 4)).toBe("123456789123456789123456789");
    (0, test_1.expect)((0, utils_1.toUnitsString)("20", "5")).toBe("2000000");
    (0, test_1.expect)((0, utils_1.toUnitsString)("123", 3)).toBe("123000");
    (0, test_1.expect)((0, utils_1.toUnitsString)("1.23", 2)).toBe("123");
    (0, test_1.expect)((0, utils_1.toUnitsString)("0.123", 2)).toBe("12.3");
    (0, test_1.expect)((0, utils_1.toUnitsString)("0.1230", 4)).toBe("1230");
    (0, test_1.expect)((0, utils_1.toUnitsString)("0", 2)).toBe("0");
    (0, test_1.expect)((0, utils_1.toUnitsString)("0", 9)).toBe("0");
});
(0, test_1.test)("price converter", () => {
    (0, test_1.expect)(price({ units: 277777.1 }, 1)).toBe("277777 / 1");
    (0, test_1.expect)(price(277777.1, 1)).toBe("2777771 / 1");
    (0, test_1.expect)(price({ units: 277777.1 }, 10)).toBe("2777771 / 10");
    (0, test_1.expect)(price({ units: 123.45 }, 1)).toBe("123 / 1");
    (0, test_1.expect)(price({ units: 0.0001 }, 10)).toBe("0 / 10");
    (0, test_1.expect)(price({ units: 100 }, 10)).toBe("1000 / 10");
});
(0, test_1.test)("decimal conversion", () => {
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("2777771", 1)).toBe("277777.1");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("12", 1)).toBe("1.2");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("100", 1)).toBe("10");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("123456789123456789123456789", 4)).toBe("12345678912345678912345.6789");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("123", 3)).toBe("0.123");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("123", 2)).toBe("1.23");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("123", 4)).toBe("0.0123");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("1230", 4)).toBe("0.123");
    (0, test_1.expect)((0, utils_1.decimalFromNumAndDenomAsPowerOf10)("0", 2)).toBe("0");
});
//# sourceMappingURL=conversons.test.js.map