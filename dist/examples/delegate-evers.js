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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = examples_1.CONFIG.trader.client;
        const traderId = examples_1.CONFIG.trader.id;
        let trader_ever_wallet = yield flex_1.Trader.deployEverWallet(flex, Object.assign({ clientAddress: clientAddress, everWallet: examples_1.CONFIG.everWallet, tokens: 100, evers: 20, keepEvers: 15, traderId: traderId }, examples_1.CONFIG.tip3.EVER));
        flex.evr.log.info("Trader EVER wallet address:", trader_ever_wallet, "has been topped-up.");
        flex.evr.log.info("Trader balances:", yield flex_1.Trader.queryWallets(flex, {
            clientAddress: clientAddress,
            traderId: traderId,
        }));
        yield flex.close();
    }
    catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=delegate-evers.js.map