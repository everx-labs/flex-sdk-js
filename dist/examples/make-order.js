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
const make_order_1 = require("../flex/trader/make-order");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = examples_1.CONFIG.trader.client;
        const traderId = examples_1.CONFIG.trader.id;
        const marketAddress = examples_1.CONFIG.market;
        let result = yield flex_1.Trader.makeOrder(flex, {
            clientAddress: clientAddress,
            trader: {
                id: traderId,
                signer: "traderSigner",
            },
            sell: false,
            marketAddress: marketAddress,
            price: { tokens: 20 },
            amount: { tokens: 10 },
            waitForOrderbookUpdate: true,
        });
        flex.evr.log.info("MakeOrder Initialization result on wallet", result);
        if (!(0, flex_1.makeOrderFinalized)(result)) {
            result = yield (0, make_order_1.waitForMakeOrder)(flex, result);
            flex.evr.log.info("Finalized Make order result in orderbook", result);
        }
        yield flex.close();
    }
    catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=make-order.js.map