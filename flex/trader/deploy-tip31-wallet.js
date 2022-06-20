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
exports.deployTraderTip31Wallet = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
const DEFAULTS = {
    transferEvers: 30,
    evers: 15,
    keepEvers: 12,
};
/** @internal */
function deployTraderTip31Wallet(flex, options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = (0, web3_1.uint256)(options.trader);
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, options.client);
        const evers = (_a = options.evers) !== null && _a !== void 0 ? _a : DEFAULTS.evers;
        const keepEvers = (_b = options.keepEvers) !== null && _b !== void 0 ? _b : DEFAULTS.keepEvers;
        const payload = (yield client.getPayloadForDeployInternalWallet({
            owner_addr: options.client,
            owner_pubkey: pubkey,
            evers: (0, web3_1.toUnits)(evers),
            keep_evers: (0, web3_1.toUnits)(keepEvers),
        })).output.value0;
        const everWallet = new web3_1.EverWallet(flex.evr, options.everWallet);
        yield everWallet.transfer({
            dest: options.tokenWallet,
            value: (0, web3_1.toUnits)((_c = options.transferEvers) !== null && _c !== void 0 ? _c : DEFAULTS.transferEvers),
            payload: {
                abi: contracts_1.Tip31WalletAccount.package.abi,
                fn: "transferToWallet",
                params: {
                    _answer_id: 0,
                    amount: options.tokenUnits,
                    recipientTokenWallet: options.tokenWrapperWallet,
                    remainingGasTo: yield everWallet.getAddress(),
                    notify: true,
                    payload,
                },
            },
        });
        const wrapper = yield flex.evr.accounts.get(contracts_1.WrapperAccount, options.tokenWrapper);
        return (yield wrapper.getWalletAddress({
            pubkey,
            owner: options.client,
        })).output.value0;
    });
}
exports.deployTraderTip31Wallet = deployTraderTip31Wallet;
//# sourceMappingURL=deploy-tip31-wallet.js.map