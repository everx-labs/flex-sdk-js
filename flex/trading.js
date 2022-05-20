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
const market_1 = require("./market");
const client_1 = require("./client");
const flex_1 = require("./flex");
const wallet_1 = require("./wallet");
class Trading {
    static makeOrder(options, bindFlex) {
        return __awaiter(this, void 0, void 0, function* () {
            const flex = bindFlex !== null && bindFlex !== void 0 ? bindFlex : flex_1.Flex.default;
            return yield new wallet_1.Wallet(options.wallet, flex).makeOrder({
                client: new client_1.Client(options.client, flex),
                market: new market_1.Market(options.market, flex),
                userId: options.userId,
                price: options.price,
                amount: options.amount,
            });
        });
    }
}
exports.Trading = Trading;
//# sourceMappingURL=trading.js.map