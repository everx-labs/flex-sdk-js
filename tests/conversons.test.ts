import { DecimalNumber, priceToUnits, TokenValue, tokenValueToString } from "../flex/web3/utils";

function amount(value: TokenValue, decimals: string | number) {
    return tokenValueToString(value, decimals);
}
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
    expect(amount("2777771", 1)).toBe("277777.1");
    expect(amount("12", 1)).toBe("1.2");
    expect(amount("100", 1)).toBe("10");
    expect(amount("123456789123456789123456789", 4)).toBe("12345678912345678912345.6789");
    expect(amount("20", "5")).toBe("0.0002");
    expect(amount("123", 3)).toBe("0.123");
    expect(amount("123", 2)).toBe("1.23");
    expect(amount("123", 4)).toBe("0.0123");
    expect(amount("1230", 4)).toBe("0.123");
    expect(amount("0", 2)).toBe("0");
});

test("price converter", () => {
    expect(price({ units: 277777.1 }, 1)).toBe("277777 / 1");
    expect(price(277777.1, 1)).toBe("2777771 / 1");
    expect(price({ units: 277777.1 }, 10)).toBe("2777771 / 10");
    expect(price({ units: 123.45 }, 1)).toBe("123 / 1");
    expect(price({ units: 0.0001 }, 10)).toBe("0 / 10");
    expect(price({ units: 100 }, 10)).toBe("1000 / 10");
});
