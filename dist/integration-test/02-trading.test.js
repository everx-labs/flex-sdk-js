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
const trading_1 = require("./trading");
const test = config_1.test.extend({
    trading: [
        ({ flex, config }, use) => __awaiter(void 0, void 0, void 0, function* () {
            const trading = yield trading_1.Trading.create(flex, {
                market: config.market.address,
                client: config.client,
                trader: config.trader,
            });
            yield use(trading);
        }),
        { scope: "worker" },
    ],
    orders: [
        ({}, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use([]);
        }),
        { scope: "worker" },
    ],
});
test(`Sell "0.045", "5.05"`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeSellOrder("0.045", "5.05"));
}));
test.skip(`Sell { tokens: "0.046" }, { tokens: "4.05" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeSellOrder({ tokens: "0.046" }, { tokens: "4.05" }));
}));
test.skip(`Sell { units: "0.000047" }, { units: "3050000000" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeSellOrder({ units: "0.000047" }, { units: "3050000000" }));
}));
test.skip(`Buy "0.048", "6.05"`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeBuyOrder("0.048", "6.05"));
}));
test.skip(`Buy { tokens: "0.049" }, { tokens: "7.05" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeBuyOrder({ tokens: "0.049" }, { tokens: "7.05" }));
}));
test.skip(`Buy { units: "0.000049" }, { units: "7050000000" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    orders.push(yield trading.makeBuyOrder({ units: "0.000049" }, { units: "7050000000" }));
}));
//# sourceMappingURL=02-trading.test.js.map