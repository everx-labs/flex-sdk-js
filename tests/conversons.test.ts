import { DecimalNumber, priceToUnits, TokenValue, toUnitsString } from "../flex/web3/utils";

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
    expect(toUnitsString("2777771", 1)).toBe("27777710");
    expect(toUnitsString("12", 1)).toBe("120");
    expect(toUnitsString("100", 1)).toBe("1000");
    expect(toUnitsString("12345678912345678912345.6789", 4)).toBe("123456789123456789123456789");
    expect(toUnitsString("20", "5")).toBe("2000000");
    expect(toUnitsString("123", 3)).toBe("123000");
    expect(toUnitsString("1.23", 2)).toBe("123");
    expect(toUnitsString("0.123", 2)).toBe("12.3");
    expect(toUnitsString("0.1230", 4)).toBe("1230");
    expect(toUnitsString("0", 2)).toBe("0");
    expect(toUnitsString("0", 9)).toBe("0");
});

test("price converter", () => {
    expect(price({ units: 277777.1 }, 1)).toBe("277777 / 1");
    expect(price(277777.1, 1)).toBe("2777771 / 1");
    expect(price({ units: 277777.1 }, 10)).toBe("2777771 / 10");
    expect(price({ units: 123.45 }, 1)).toBe("123 / 1");
    expect(price({ units: 0.0001 }, 10)).toBe("0 / 10");
    expect(price({ units: 100 }, 10)).toBe("1000 / 10");
});
