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
exports.Market = void 0;
const token_1 = require("./token");
class Market {
    static queryOrderBook(flex, market) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield flex.query(`
            market(pairAddress: "${market}") {
                orderBook {
                    bids {
                        price
                        amount
                    }
                    asks {
                        price
                        amount
                    }
                }
            }
        `);
            return result.market.orderBook;
        });
    }
    static queryPrice(flex, market) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield flex.query(`
            market(pairAddress: "${market}") {
                price
            }
        `);
                return result.market.price;
            }
            catch (_a) {
                return null;
            }
        });
    }
    static queryMarkets(flex) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield flex.query(`pairs { ${Market.queryFields()} }`)).pairs;
        });
    }
    /** @internal */
    static queryFields() {
        return `
            address
            ticker
            major { ${token_1.Token.queryFields()} }
            minor { ${token_1.Token.queryFields()} }
            minAmount
            minMove
            priceScale
            priceCodeHash
            notifyAddress
        `;
    }
}
exports.Market = Market;
//# sourceMappingURL=market.js.map