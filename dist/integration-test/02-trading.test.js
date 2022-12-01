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
function makeOrder(trading, side, price, amount, orders) {
    return __awaiter(this, void 0, void 0, function* () {
        const newOrder = yield trading.makeOrder(side, price, amount);
        orders.push(newOrder);
        const order = (yield flex_1.Trader.queryOrders(trading.flex, trading.trader.id)).find(x => x.orderId === newOrder.orderId);
        if (!order) {
            throw new Error(`Order [${newOrder.orderId}] does not found on API.`);
        }
        return order;
    });
}
function sell(trading, price, amount, orders) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield makeOrder(trading, flex_1.TradeSide.SELL, price, amount, orders);
    });
}
function buy(trading, price, amount, orders) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield makeOrder(trading, flex_1.TradeSide.BUY, price, amount, orders);
    });
}
(0, config_1.test)(`Sell "0.045", "5.05"`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield sell(trading, "0.045", "5.05", orders);
    (0, config_1.expect)(order).toMatchObject({
        side: "SELL",
        priceNum: "450",
        priceScale: "10000",
        price: "0.045",
        amountLeft: "5.05",
    });
}));
(0, config_1.test)(`Sell { tokens: "0.046" }, { tokens: "4.05" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield sell(trading, { tokens: "0.046" }, { tokens: "4.05" }, orders);
    (0, config_1.expect)(order).toMatchObject({
        side: flex_1.TradeSide.SELL,
        priceNum: "460",
        priceScale: "10000",
        price: "0.046",
        amountLeft: "4.05",
    });
}));
(0, config_1.test)(`Sell { units: "0.000047" }, { units: "3050000000" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield sell(trading, { units: "0.000047" }, { units: "3050000000" }, orders);
    (0, config_1.expect)(order).toMatchObject({
        side: flex_1.TradeSide.SELL,
        priceNum: "470",
        priceScale: "10000",
        price: "0.047",
        amountLeft: "3.05",
    });
}));
(0, config_1.test)(`Buy "0.148", "6.05"`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield buy(trading, "0.048", "6.05", orders);
    (0, config_1.expect)(order).toMatchObject({
        side: flex_1.TradeSide.BUY,
        priceNum: "1480",
        priceScale: "10000",
        price: "0.148",
        amountLeft: "6.05",
    });
}));
(0, config_1.test)(`Buy { tokens: "0.149" }, { tokens: "7.05" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield buy(trading, { tokens: "0.049" }, { tokens: "7.05" }, orders);
    (0, config_1.expect)(order).toMatchObject({
        side: flex_1.TradeSide.BUY,
        priceNum: "1490",
        priceScale: "10000",
        price: "0.149",
        amountLeft: "7.05",
    });
}));
(0, config_1.test)(`Buy { units: "0.000149" }, { units: "7050000000" }`, ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield buy(trading, { units: "0.000049" }, { units: "7050000000" }, orders);
    (0, config_1.expect)(order).toMatchObject({
        side: flex_1.TradeSide.BUY,
        priceNum: "1490",
        priceScale: "10000",
        price: "0.149",
        amountLeft: "7.05",
    });
}));
(0, config_1.test)(`Cancel All Orders`, ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    yield trading.cancelAllOrders();
}));
//# sourceMappingURL=02-trading.test.js.map