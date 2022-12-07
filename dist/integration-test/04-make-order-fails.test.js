"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const flex_1 = require("../flex");
const test_1 = require("@playwright/test");
const core_1 = require("@eversdk/core");
(0, config_1.test)("Make Order: not enough token balance", ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield trading.makeOrderWithRequiredSuccess({
            side: flex_1.TradeSide.SELL,
            price: 450,
            amount: 1000000,
            waitForOrderbookUpdate: true,
        });
        config_1.test.fail(true, "`makeOrder` does not fail");
    }
    catch (error) {
        (0, test_1.expect)(error.code).toBe(core_1.ProcessingErrorCode.MessageRejected);
        (0, test_1.expect)(error.data.exitCode).toBe(flex_1.FLEX_WALLET_ERROR.not_enough_balance.exitCode);
    }
}));
(0, config_1.test)("Cancel Order: not existing orderId", ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield trading.makeOrderWithRequiredSuccess({
            side: flex_1.TradeSide.SELL,
            price: 450,
            amount: 10,
            waitForOrderbookUpdate: true,
        });
        yield trading.cancelOrderWithRequiredSuccess({
            price: 450,
            orderId: "0x1111111111111",
        });
        config_1.test.fail(true, "`cancelOrder` does not fail");
    }
    catch (error) {
        (0, test_1.expect)(error.code).toBe(core_1.ProcessingErrorCode.MessageRejected);
        (0, test_1.expect)(error.data.exitCode).toBe(flex_1.PRICE_XCHG_ERROR.canceled.exitCode);
    }
}));
(0, config_1.test)("Cancel Order: price does not exist", ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield trading.cancelOrderWithRequiredSuccess({
            price: 1111111,
            orderId: "0x1111111111111",
        });
        config_1.test.fail(true, "`cancelOrder` does not fail");
    }
    catch (error) {
        (0, test_1.expect)(error.code).toBe(core_1.ProcessingErrorCode.MessageRejected);
        (0, test_1.expect)(error.data.exitCode).toBe(flex_1.PRICE_XCHG_ERROR.incorrect_price.exitCode);
    }
}));
(0, config_1.test)("Make Order: almost expired", ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield trading.makeOrderWithRequiredSuccess({
            side: flex_1.TradeSide.SELL,
            price: 450,
            amount: 10,
            finishTime: Math.round(Date.now() / 1000) + 3 * 60,
        });
        config_1.test.fail(true, "`makeOrder` does not fail");
    }
    catch (error) {
        (0, test_1.expect)(error.code).toBe(core_1.ProcessingErrorCode.MessageRejected);
        (0, test_1.expect)(error.data.exitCode).toBe(flex_1.PRICE_XCHG_ERROR.expired.exitCode);
    }
}));
//# sourceMappingURL=04-make-order-fails.test.js.map