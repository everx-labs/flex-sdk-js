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
    try {
        const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
        const clientAddress = examples_1.CONFIG.trader.client;
        const traderId = examples_1.CONFIG.trader.id;
        const marketAddress = examples_1.CONFIG.market;
        let orderInfo = yield flex_1.Trader.cancelOrder(flex, {
            clientAddress: clientAddress,
            trader: {
                id: traderId,
                signer: 'trader_1'
            },
            marketAddress: marketAddress,
            price: 240000,
            orderId: "0x28a2d948c341473e",
        });
        console.log(`Order info`, JSON.stringify(orderInfo, undefined, "   "));
        yield flex.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=cancel-order.js.map