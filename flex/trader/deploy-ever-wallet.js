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
exports.deployTraderEverWallet = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
const DEFAULTS = {
    evers: 15,
    keepEvers: 12,
};
function deployTraderEverWallet(flex, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = (0, web3_1.uint256)(options.traderId);
        const wrapper = yield flex.evr.accounts.get(contracts_1.WrapperEverAccount, options.wrapperAddress);
        const walletAddress = (yield wrapper.getWalletAddress({
            owner: options.clientAddress,
            pubkey,
        })).output.value0;
        const everWallet = new web3_1.EverWallet(flex.evr, options.everWallet);
        const evers = (_a = options.evers) !== null && _a !== void 0 ? _a : DEFAULTS.evers;
        const keepEvers = (_b = options.keepEvers) !== null && _b !== void 0 ? _b : DEFAULTS.keepEvers;
        yield everWallet.transfer({
            dest: options.wrapperAddress,
            value: (0, web3_1.toUnits)(options.tokens + evers),
            payload: {
                abi: contracts_1.WrapperEverAccount.package.abi,
                fn: "onEverTransfer",
                params: {
                    tokens: (0, web3_1.toUnits)(options.tokens),
                    args: {
                        pubkey,
                        owner: options.clientAddress,
                        evers: (0, web3_1.toUnits)(evers),
                        keep_evers: (0, web3_1.toUnits)(keepEvers),
                    },
                    answer_addr: yield everWallet.getAddress(),
                },
            },
        });
        yield everWallet.topUp(walletAddress, evers);
        return {
            address: walletAddress,
        };
    });
}
exports.deployTraderEverWallet = deployTraderEverWallet;
//# sourceMappingURL=deploy-ever-wallet.js.map