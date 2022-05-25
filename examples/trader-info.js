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
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new flex_1.Client({ address: examples_1.CONFIG.trader1.client });
        const trader = new flex_1.Trader({
            client,
            id: examples_1.CONFIG.trader1.id,
            signer: examples_1.CONFIG.trader1.signer,
        });
        (0, examples_1.log)("Trader Orders", yield trader.queryOrders());
        (0, examples_1.log)("Trader Trades", yield trader.queryTrades());
        (0, examples_1.log)("Trader Wallets", yield trader.queryWallets());
        (0, examples_1.log)("Client Wallets", yield client.queryWallets());
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=trader-info.js.map