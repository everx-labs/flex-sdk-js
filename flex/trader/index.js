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
const flex_1 = require("../flex");
const order_1 = require("./order");
const query_1 = require("./query");
class Trader {
    constructor(options, flex) {
        this.flex = flex !== null && flex !== void 0 ? flex : flex_1.Flex.default;
        this.client = options.client;
        this.id = options.id;
        this.signer = options.signer;
    }
    makeOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, order_1.makeOrder)(Object.assign(Object.assign({}, options), { flex: this.flex, client: this.client, trader: this.id, traderSigner: this.signer }));
        });
    }
    cancelOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, order_1.cancelOrder)(Object.assign(Object.assign({}, options), { flex: this.flex, client: this.client, traderId: this.id, traderSigner: this.signer }));
        });
    }
    queryOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, query_1.queryOrders)(this.flex, this.id);
        });
    }
    queryTrades() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, query_1.queryTrades)(this.flex, this.id);
        });
    }
    queryWallets(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, query_1.queryWallets)(this.flex, this.client, this.id, token);
        });
    }
}
exports.Trader = Trader;
//# sourceMappingURL=index.js.map