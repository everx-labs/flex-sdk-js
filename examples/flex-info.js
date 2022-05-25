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
const flex_1 = require("../flex");
const market_1 = require("../flex/market");
const token_1 = require("../flex/token");
const examples_1 = require("./examples");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, examples_1.log)("Tokens", yield token_1.Token.queryTokens());
        (0, examples_1.log)("Markets:", yield market_1.Market.queryMarkets());
        const market = new market_1.Market({
            address: examples_1.CONFIG.market1,
        });
        (0, examples_1.log)("Market Order Book", yield market.queryOrderBook());
        (0, examples_1.log)("Market Price", yield market.queryPrice());
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=flex-info.js.map