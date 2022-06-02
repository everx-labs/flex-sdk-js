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
const examples_1 = require("./examples");
const flex_2 = require("../flex");
const flex_3 = require("../flex");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flex = flex_1.Flex.default;
        (0, examples_1.log)("Tokens", yield flex_2.Token.queryTokens(flex));
        (0, examples_1.log)("Markets", yield flex_3.Market.queryMarkets(flex));
        (0, examples_1.log)("Market Order Book", yield flex_3.Market.queryOrderBook(flex, examples_1.CONFIG.market));
        (0, examples_1.log)("Market Price", yield flex_3.Market.queryPrice(flex, examples_1.CONFIG.market));
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=flex-info.js.map