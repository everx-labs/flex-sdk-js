import { test } from "./config";
import { FLEX_WALLET_ERROR, PRICE_XCHG_ERROR, TradeSide } from "../flex";
import { expect } from "@playwright/test";
import { ProcessingErrorCode } from "@eversdk/core";

test("Make Order: not enough token balance", async ({ trading }) => {
    try {
        await trading.makeOrderWithRequiredSuccess({
            side: TradeSide.SELL,
            price: 450,
            amount: 1000000,
            waitForOrderbookUpdate: true,
        });
        test.fail(true, "`makeOrder` does not fail");
    } catch (error: any) {
        expect(error.code).toBe(ProcessingErrorCode.MessageRejected);
        expect(error.data.exitCode).toBe(FLEX_WALLET_ERROR.not_enough_balance.exitCode);
    }
});

test("Cancel Order: not existing orderId", async ({ trading }) => {
    try {
        await trading.makeOrderWithRequiredSuccess({
            side: TradeSide.SELL,
            price: 450,
            amount: 10,
            waitForOrderbookUpdate: true,
        });
        await trading.cancelOrderWithRequiredSuccess({
            price: 450,
            orderId: "0x1111111111111",
        });
        test.fail(true, "`cancelOrder` does not fail");
    } catch (error: any) {
        expect(error.code).toBe(ProcessingErrorCode.MessageRejected);
        expect(error.data.exitCode).toBe(PRICE_XCHG_ERROR.canceled.exitCode);
    }
});

test("Cancel Order: price does not exist", async ({ trading }) => {
    try {
        await trading.cancelOrderWithRequiredSuccess({
            price: 1111111,
            orderId: "0x1111111111111",
        });
        test.fail(true, "`cancelOrder` does not fail");
    } catch (error: any) {
        expect(error.code).toBe(ProcessingErrorCode.MessageRejected);
        expect(error.data.exitCode).toBe(PRICE_XCHG_ERROR.incorrect_price.exitCode);
    }
});

test("Make Order: almost expired", async ({ trading }) => {
    try {
        await trading.makeOrderWithRequiredSuccess({
            side: TradeSide.SELL,
            price: 450,
            amount: 10,
            finishTime: Math.round(Date.now() / 1000) + 3 * 60,
        });
        test.fail(true, "`makeOrder` does not fail");
    } catch (error: any) {
        expect(error.code).toBe(ProcessingErrorCode.MessageRejected);
        expect(error.data.exitCode).toBe(PRICE_XCHG_ERROR.expired.exitCode);
    }
});
