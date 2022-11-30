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
exports.Trading = void 0;
const flex_1 = require("../flex");
const contracts_1 = require("../contracts");
class Trading {
    constructor(flex, marketAddress, client, clientAddress, trader) {
        this.flex = flex;
        this.marketAddress = marketAddress;
        this.client = client;
        this.clientAddress = clientAddress;
        this.trader = trader;
    }
    static create(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, options.client);
            return new Trading(flex, options.market, client, yield client.getAddress(), options.trader);
        });
    }
    makeOrder(side, price, amount, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield flex_1.Trader.makeOrder(this.flex, {
                marketAddress: this.marketAddress,
                clientAddress: this.clientAddress,
                trader: this.trader,
                orderId,
                sell: side === flex_1.TradeSide.SELL,
                amount,
                price,
                waitForOrderbookUpdate: true,
            });
            switch (result.status) {
                case flex_1.MakeOrderStatus.STARTING:
                case flex_1.MakeOrderStatus.FINALIZING:
                    throw new Error(`Make order failed with status: ${result.status}`);
                case flex_1.MakeOrderStatus.ERROR:
                    throw result.error;
            }
            const order = result.orderId;
            return {
                side,
                price,
                order,
            };
        });
    }
    makeSellOrder(price, amount, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeOrder(flex_1.TradeSide.SELL, price, amount, orderId);
        });
    }
    makeBuyOrder(price, amount, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeOrder(flex_1.TradeSide.BUY, price, amount, orderId);
        });
    }
    cancelOrders(orders) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const { price, order } of orders) {
                yield flex_1.Trader.cancelOrder(this.flex, {
                    marketAddress: this.marketAddress,
                    clientAddress: this.clientAddress,
                    trader: this.trader,
                    price,
                    orderId: order,
                    waitForOrderbookUpdate: true,
                });
            }
        });
    }
}
exports.Trading = Trading;
//# sourceMappingURL=trading.js.map