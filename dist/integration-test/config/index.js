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
exports.test = exports.expect = void 0;
const flex_1 = require("../../flex");
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const test_1 = require("@playwright/test");
const trading_1 = require("./trading");
const config_1 = require("./config");
const accounts_1 = require("./accounts");
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
exports.test = test_1.test.extend({
    config: [({}, use) => __awaiter(void 0, void 0, void 0, function* () { return yield use((0, config_1.createConfig)()); }), { scope: "worker" }],
    flex: [
        ({ config }, use) => __awaiter(void 0, void 0, void 0, function* () {
            core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
            const flex = new flex_1.Flex(config.flex);
            try {
                yield use(flex);
            }
            finally {
                yield flex.close();
            }
        }),
        { scope: "worker" },
    ],
    accounts: [
        ({ flex, config }, use) => __awaiter(void 0, void 0, void 0, function* () { return yield use(yield (0, accounts_1.createAccounts)(flex, config)); }),
        { scope: "worker" },
    ],
    trading: [
        ({ flex, config, accounts }, use) => __awaiter(void 0, void 0, void 0, function* () { return yield use(yield createTrading(flex, config, accounts)); }),
        { scope: "worker" },
    ],
    orders: [({}, use) => __awaiter(void 0, void 0, void 0, function* () { return yield use([]); }), { scope: "worker" }],
});
function createTrading(flex, config, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield trading_1.Trading.create(flex, {
            market: config.market,
            client: config.client,
            trader: {
                id: accounts.traderId,
                signer: config.trader.signer,
            },
        });
    });
}
//# sourceMappingURL=index.js.map