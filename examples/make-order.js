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
const helpers_1 = require("../contracts/helpers");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trader = new flex_1.Trader({
            client: examples_1.CONFIG.trader.client,
            id: examples_1.CONFIG.trader.id,
            signer: examples_1.CONFIG.trader.signer,
        });
        trader.flex.log.level = helpers_1.LogLevel.DEBUG;
        yield trader.makeOrder({
            sell: false,
            market: examples_1.CONFIG.market,
            price: 2.6,
            amount: 18,
        });
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=make-order.js.map