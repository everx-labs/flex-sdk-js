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
const flex_1 = require("../../flex");
const contracts_1 = require("../../contracts");
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
    makeOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield flex_1.Trader.makeOrder(this.flex, Object.assign(Object.assign({}, options), { marketAddress: this.marketAddress, clientAddress: this.clientAddress, trader: this.trader, sell: options.side === flex_1.TradeSide.SELL }));
        });
    }
    makeOrderWithRequiredSuccess(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.makeOrder(Object.assign(Object.assign({}, options), { waitForOrderbookUpdate: true }));
            switch (result.status) {
                case flex_1.MakeOrderStatus.STARTING:
                case flex_1.MakeOrderStatus.FINALIZING:
                    throw new Error(`Make order failed with status: ${result.status}`);
                case flex_1.MakeOrderStatus.ERROR:
                    throw result.error;
            }
            return {
                pairAddress: this.marketAddress,
                price: options.price.toString(),
                orderId: result.orderId,
            };
        });
    }
    cancelOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield flex_1.Trader.cancelOrder(this.flex, Object.assign(Object.assign({}, options), { marketAddress: this.marketAddress, clientAddress: this.clientAddress, trader: this.trader }));
        });
    }
    cancelOrderWithRequiredSuccess(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.cancelOrder(Object.assign(Object.assign({}, options), { waitForOrderbookUpdate: true }));
            switch (result.status) {
                case flex_1.CancelOrderStatus.STARTING:
                case flex_1.CancelOrderStatus.FINALIZING:
                    throw new Error(`Make order failed with status: ${result.status}`);
                case flex_1.CancelOrderStatus.ERROR:
                    throw result.error;
            }
        });
    }
    cancelAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield flex_1.Trader.cancelAllOrders(this.flex, {
                clientAddress: this.clientAddress,
                trader: this.trader,
            });
        });
    }
}
exports.Trading = Trading;
//# sourceMappingURL=trading.js.map