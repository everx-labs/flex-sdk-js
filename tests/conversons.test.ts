import {
    decimalFromNumAndDenomAsPowerOf10,
    DecimalNumber,
    priceToUnits,
    TokenValue,
    toFractionalUnitsString,
    uint256,
} from "../flex/web3/utils";
import { test, expect } from "@playwright/test";

function price(
    price: TokenValue,
    denominator: DecimalNumber,
    majorDecimals: DecimalNumber = 8,
    minorDecimals: DecimalNumber = 9,
): string {
    const p = priceToUnits(price, denominator, majorDecimals, minorDecimals);
    return `${p.num} / ${p.denum}`;
}

test("amount converter", () => {
    expect(toFractionalUnitsString("2777771", { decimals: 1 })).toBe("27777710");
    expect(toFractionalUnitsString("12", { decimals: 1 })).toBe("120");
    expect(toFractionalUnitsString("100", { decimals: 1 })).toBe("1000");
    expect(toFractionalUnitsString("12345678912345678912345.6789", { decimals: 4 })).toBe(
        "123456789123456789123456789",
    );
    expect(toFractionalUnitsString("20", { decimals: "5" })).toBe("2000000");
    expect(toFractionalUnitsString("123", { decimals: 3 })).toBe("123000");
    expect(toFractionalUnitsString("1.23", { decimals: 2 })).toBe("123");
    expect(toFractionalUnitsString("0.123", { decimals: 2 })).toBe("12.3");
    expect(toFractionalUnitsString("0.1230", { decimals: 4 })).toBe("1230");
    expect(toFractionalUnitsString("0", { decimals: 2 })).toBe("0");
    expect(toFractionalUnitsString("0", { decimals: 9 })).toBe("0");
});

test("price converter", () => {
    expect(price({ units: 277777.1 }, 1)).toBe("277777 / 1");
    expect(price(277777.1, 1)).toBe("2777771 / 1");
    expect(price({ units: 277777.1 }, 10)).toBe("2777771 / 10");
    expect(price({ units: 123.45 }, 1)).toBe("123 / 1");
    expect(price({ units: 0.0001 }, 10)).toBe("0 / 10");
    expect(price({ units: 100 }, 10)).toBe("1000 / 10");
});

test("decimal conversion", () => {
    expect(decimalFromNumAndDenomAsPowerOf10("2777771", 1)).toBe("277777.1");
    expect(decimalFromNumAndDenomAsPowerOf10("12", 1)).toBe("1.2");
    expect(decimalFromNumAndDenomAsPowerOf10("100", 1)).toBe("10");
    expect(decimalFromNumAndDenomAsPowerOf10("123456789123456789123456789", 4)).toBe(
        "12345678912345678912345.6789",
    );
    expect(decimalFromNumAndDenomAsPowerOf10("123", 3)).toBe("0.123");
    expect(decimalFromNumAndDenomAsPowerOf10("123", 2)).toBe("1.23");
    expect(decimalFromNumAndDenomAsPowerOf10("123", 4)).toBe("0.0123");
    expect(decimalFromNumAndDenomAsPowerOf10("1230", 4)).toBe("0.123");
    expect(decimalFromNumAndDenomAsPowerOf10("0", 2)).toBe("0");
});

test("uint256", async () => {
    expect(uint256("1")).toBe("0x1");
    expect(uint256("16")).toBe("0x10");
    expect(uint256("255")).toBe("0xff");
    expect(uint256("0x1")).toBe("0x1");
    expect(uint256("0x01")).toBe("0x01");
    expect(uint256("a1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toBe(
        "0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9",
    );
    expect(uint256("0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toBe(
        "0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9",
    );
    expect(() => uint256("825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toThrow(
        /^Cannot convert/,
    );
});
