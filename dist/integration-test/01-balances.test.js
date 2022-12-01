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
const config_1 = require("./config");
const flex_1 = require("../flex");
(0, config_1.test)("Check balances", ({ flex, accounts }) => __awaiter(void 0, void 0, void 0, function* () {
    const nativeBalances = yield flex.evr.accounts.getBalancesUnits([
        accounts.flexClientAddress,
        accounts.everWalletAddress,
        accounts.TSDT.internalAddress,
        accounts.EVER.internalAddress,
    ]);
    (0, config_1.expect)(nativeBalances.get(accounts.flexClientAddress), `Natives on FlexClient ${accounts.flexClientAddress}`).toBeGreaterThan(flex_1.Evr.toUnits(40));
    (0, config_1.expect)(nativeBalances.get(accounts.everWalletAddress), `Natives on EverWallet ${accounts.everWalletAddress}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(nativeBalances.get(accounts.EVER.internalAddress), `Natives on internal EVER ${accounts.EVER.internalAddress}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(nativeBalances.get(accounts.TSDT.internalAddress), `Natives on internal TSDT ${accounts.TSDT.internalAddress}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(yield flex.getFlexTokenBalance(accounts.EVER.internal), `Tokens on internal EVER ${accounts.EVER.internalAddress}`).toBeGreaterThan(50);
    (0, config_1.expect)(yield flex.getTip3TokenBalance(accounts.TSDT.external), `Tokens on external TSDT ${accounts.TSDT.externalAddress}`).toBeGreaterThan(100);
    (0, config_1.expect)(yield flex.getFlexTokenBalance(accounts.TSDT.internal), `Tokens on internal TSDT ${accounts.TSDT.internalAddress}`).toBeGreaterThan(50);
}));
//# sourceMappingURL=01-balances.test.js.map