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
const makeOrderTests = [
    sell("0.045", "5.05", {
        priceNum: "450",
        priceScale: "10000",
        price: "0.045",
        amountLeft: "5.05",
    }),
    sell({ tokens: "0.046" }, { tokens: "4.05" }, {
        priceNum: "460",
        priceScale: "10000",
        price: "0.046",
        amountLeft: "4.05",
    }),
    sell({ units: "0.000047" }, { units: "3050000000" }, {
        priceNum: "470",
        priceScale: "10000",
        price: "0.047",
        amountLeft: "3.05",
    }),
    buy("0.148", "6.05", {
        priceNum: "1480",
        priceScale: "10000",
        price: "0.148",
        amountLeft: "6.05",
    }),
    buy({ tokens: "0.149" }, { tokens: "7.05" }, {
        priceNum: "1490",
        priceScale: "10000",
        price: "0.149",
        amountLeft: "7.05",
    }),
    buy({ units: "0.000149" }, { units: "7050000000" }, {
        priceNum: "1490",
        priceScale: "10000",
        price: "0.149",
        amountLeft: "7.05",
    }),
];
function makeOrderTest(side, price, amount, expected) {
    return {
        title: `${side} ${JSON.stringify(amount)} for ${JSON.stringify(price)}`,
        side,
        price,
        amount,
        expected: Object.assign(Object.assign({}, expected), { side }),
    };
}
function sell(price, amount, expected) {
    return makeOrderTest(flex_1.TradeSide.SELL, price, amount, expected);
}
function buy(price, amount, expected) {
    return makeOrderTest(flex_1.TradeSide.BUY, price, amount, expected);
}
function title(i) {
    return makeOrderTests[i].title;
}
function runMakeOrder(i, trading, orders) {
    return __awaiter(this, void 0, void 0, function* () {
        const { side, price, amount } = makeOrderTests[i];
        const newOrder = yield trading.makeOrderWithRequiredSuccess({ side, price, amount });
        orders.push(newOrder);
        const order = (yield flex_1.Trader.queryOrders(trading.flex, trading.trader.id)).find(x => x.orderId === newOrder.orderId);
        if (!order) {
            throw new Error(`Order [${newOrder.orderId}] does not found on API.`);
        }
        return order;
    });
}
(0, config_1.test)(title(0), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(0, trading, orders)).toMatchObject(makeOrderTests[0].expected);
}));
(0, config_1.test)(title(1), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(1, trading, orders)).toMatchObject(makeOrderTests[1].expected);
}));
(0, config_1.test)(title(2), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(2, trading, orders)).toMatchObject(makeOrderTests[2].expected);
}));
(0, config_1.test)(title(3), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(3, trading, orders)).toMatchObject(makeOrderTests[3].expected);
}));
(0, config_1.test)(title(4), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(4, trading, orders)).toMatchObject(makeOrderTests[4].expected);
}));
(0, config_1.test)(title(5), ({ trading, orders }) => __awaiter(void 0, void 0, void 0, function* () {
    (0, config_1.expect)(yield runMakeOrder(5, trading, orders)).toMatchObject(makeOrderTests[5].expected);
}));
(0, config_1.test)(`Cancel All Orders`, ({ trading }) => __awaiter(void 0, void 0, void 0, function* () {
    yield trading.cancelAllOrders();
}));
//# sourceMappingURL=02-trading.test.js.map