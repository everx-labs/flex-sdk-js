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
const flex_1 = require("../../flex");
const fixtures_1 = require("../fixtures");
const contracts_1 = require("../../contracts");
function getAddresses({ flex, config }) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            everWallet: yield new flex_1.EverWallet(flex.evr, config.everWallet).getAddress(),
            flexClient: yield (yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client)).getAddress(),
        };
    });
}
function checkBalances({ flex, config }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { everWallet, flexClient } = yield getAddresses({ flex, config });
        const balances = yield flex.evr.accounts.getBalancesUnits([flexClient, everWallet]);
        (0, fixtures_1.expect)(balances.get(flexClient)).toBeGreaterThan(flex_1.Evr.toUnits(40));
        (0, fixtures_1.expect)(balances.get(everWallet)).toBeGreaterThan(flex_1.Evr.toUnits(100));
    });
}
(0, fixtures_1.test)("integration test", ({ flex, config }) => __awaiter(void 0, void 0, void 0, function* () {
    yield checkBalances({ flex, config });
}));
//# sourceMappingURL=index.js.map