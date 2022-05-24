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
exports.Trader = void 0;
const flex_1 = require("./flex");
class Trader {
    constructor(options, flex) {
        this.flex = flex !== null && flex !== void 0 ? flex : flex_1.Flex.default;
        this.client = options.client;
        this.userId = options.userId;
        this.walletSigner = options.walletSigner;
    }
    makeOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.makeOrder({
                userId: this.userId,
                walletSigner: this.walletSigner,
                market: options.market,
                sell: options.sell,
                price: options.price,
                amount: options.amount,
                evers: options.evers,
                finishTime: options.finishTime,
                orderId: options.orderId,
            });
        });
    }
    cancelOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.cancelOrder({
                userId: this.userId,
                walletSigner: this.walletSigner,
                market: options.market,
                sell: options.sell,
                price: options.price,
                evers: options.evers,
                orderId: options.orderId,
            });
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.flex.client.net.query({
                query: `query {
                flex {
                    
                }
            }`,
            });
        });
    }
}
exports.Trader = Trader;
//# sourceMappingURL=trader.js.map