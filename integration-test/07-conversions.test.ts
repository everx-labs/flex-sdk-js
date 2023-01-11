import { test } from "./config";
import { expect } from "@playwright/test";
import { uint256 } from "../flex";

test.describe("Conversions", () => {
    test("uint256", async () => {
        expect(uint256("1")).toBe("0x1");
        expect(uint256("16")).toBe("0x10");
        expect(uint256("255")).toBe("0xff");
        expect(uint256("0x1")).toBe("0x1");
        expect(uint256("0x01")).toBe("0x01");
        expect(uint256("a1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toBe("0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9");
        expect(uint256("0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toBe("0xa1125f809825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9");
        expect(() => uint256("825a8a2524e03469b70b4087300d95b9799a6d4908ba748ff0b7bd9")).toThrow(/^Cannot convert/);
    });
});
