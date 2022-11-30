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
const contracts_1 = require("../contracts");
function getAccounts({ flex, config }) {
    return __awaiter(this, void 0, void 0, function* () {
        const accounts = flex.evr.accounts;
        return {
            everWallet: new flex_1.EverWallet(flex.evr, config.everWallet),
            flexClient: yield accounts.get(contracts_1.FlexClientAccount, config.client),
            EVER: {
                external: yield accounts.get(contracts_1.MultisigWalletAccount, config.trader.EVER.external),
                internal: yield accounts.get(contracts_1.FlexWalletAccount, config.trader.EVER.internal),
            },
            TSDT: {
                external: yield accounts.get(contracts_1.Tip31WalletAccount, config.trader.TSDT.external),
                internal: yield accounts.get(contracts_1.FlexWalletAccount, config.trader.TSDT.internal),
            },
        };
    });
}
function getAddresses(accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            everWallet: yield accounts.everWallet.getAddress(),
            flexClient: yield accounts.flexClient.getAddress(),
            EVER: {
                external: yield accounts.EVER.external.getAddress(),
                internal: yield accounts.EVER.internal.getAddress(),
            },
            TSDT: {
                external: yield accounts.TSDT.external.getAddress(),
                internal: yield accounts.TSDT.internal.getAddress(),
            },
        };
    });
}
(0, config_1.test)("Check balances", ({ flex, config }) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield getAccounts({
        flex,
        config,
    });
    const addresses = yield getAddresses(accounts);
    const balances = yield flex.evr.accounts.getBalancesUnits([
        addresses.flexClient,
        addresses.everWallet,
        addresses.TSDT.internal,
        addresses.EVER.internal,
    ]);
    (0, config_1.expect)(balances.get(addresses.flexClient), `Natives on FlexClient ${addresses.flexClient}`).toBeGreaterThan(flex_1.Evr.toUnits(40));
    (0, config_1.expect)(balances.get(addresses.everWallet), `Natives on EverWallet ${addresses.everWallet}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(balances.get(addresses.EVER.internal), `Natives on internal EVER ${addresses.EVER.internal}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(balances.get(addresses.TSDT.internal), `Natives on internal TSDT ${addresses.TSDT.internal}`).toBeGreaterThan(flex_1.Evr.toUnits(100));
    (0, config_1.expect)(yield flex.getFlexTokenBalance(accounts.EVER.internal), `Tokens on internal EVER ${addresses.EVER.internal}`).toBeGreaterThan(50);
    (0, config_1.expect)(yield flex.getTip3TokenBalance(accounts.TSDT.external), `Tokens on external TSDT ${addresses.TSDT.external}`).toBeGreaterThan(100);
    (0, config_1.expect)(yield flex.getFlexTokenBalance(accounts.TSDT.internal), `Tokens on internal TSDT ${addresses.TSDT.internal}`).toBeGreaterThan(50);
}));
//# sourceMappingURL=01-balances.test.js.map