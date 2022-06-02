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
exports.deployTrader = void 0;
const contracts_1 = require("../../contracts");
const account_ex_1 = require("../../contracts/account-ex");
function deployTrader(flex, options) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const clientAccount = yield flex.getAccount(contracts_1.FlexClientAccount, options.client);
        const address = (yield clientAccount.getUserIdIndex({
            user_id: options.id,
        })).output.value0;
        if (!(yield account_ex_1.AccountEx.isActive(address, flex.web3))) {
            const defaults = flex.config.trader.deploy;
            yield clientAccount.runDeployIndex({
                user_id: options.id,
                lend_pubkey: options.pubkey,
                name: options.name,
                evers_all: (_a = options.eversAll) !== null && _a !== void 0 ? _a : defaults.eversAll,
                evers_to_auth_idx: (_b = options.eversAuth) !== null && _b !== void 0 ? _b : defaults.eversAuth,
                refill_wallet: (_c = options.refillWallet) !== null && _c !== void 0 ? _c : defaults.refillWallet,
                min_refill: (_d = options.minRefill) !== null && _d !== void 0 ? _d : defaults.minRefill,
            });
        }
    });
}
exports.deployTrader = deployTrader;
//# sourceMappingURL=deploy-trader.js.map