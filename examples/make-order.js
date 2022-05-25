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
const trader_1 = require("../flex/trader");
const examples_1 = require("./examples");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trader = new trader_1.Trader({
            client: examples_1.CONFIG.trader1.client,
            id: examples_1.CONFIG.trader1.id,
            signer: examples_1.CONFIG.trader1.signer,
        });
        const order = yield trader.makeOrder({
            sell: false,
            market: examples_1.CONFIG.market1,
            price: 1.23,
            amount: 1,
        });
        console.log(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=make-order.js.map