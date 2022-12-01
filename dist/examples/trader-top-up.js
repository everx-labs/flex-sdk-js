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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
    const log = flex.evr.log;
    try {
        const traderId = examples_1.CONFIG.trader.id;
        const topUpOptions = {
            client: examples_1.CONFIG.trader.client,
            id: traderId,
            everWallet: examples_1.CONFIG.everWallet,
            minBalance: 80,
            value: 10,
        };
        yield flex_2.Trader.getTopUpInfo(flex, topUpOptions);
        const start = Date.now();
        log.info(yield flex_2.Trader.getTopUpInfo(flex, topUpOptions));
        log.info("Time spent: ", (Date.now() - start) / 1000);
        yield flex_2.Trader.topUp(flex, topUpOptions);
        yield flex.close();
    }
    catch (err) {
        log.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=trader-top-up.js.map