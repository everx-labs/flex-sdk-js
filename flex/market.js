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
const flex_1 = require("./flex");
const contracts_1 = require("../contracts");
const token_1 = require("./token");
class Market extends flex_1.FlexBoundLazy {
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                pair: new contracts_1.XchgPairAccount({
                    client: this.flex.web3,
                    address: options.address,
                }),
            };
        });
    }
    static resolve(from, flex) {
        return from instanceof Market
            ? from
            : new Market(typeof from === "string" ? { address: from } : from, flex);
    }
    queryOrderBook() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.flex.query(`
            market(pairAddress: "${this.options.address}") {
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
    queryPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.flex.query(`
            market(pairAddress: "${this.options.address}") {
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
            return (yield (flex !== null && flex !== void 0 ? flex : flex_1.Flex.default).query(`pairs { ${Market.queryFields()} }`)).pairs;
        });
    }
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