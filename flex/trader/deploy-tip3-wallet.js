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
exports.deployTraderTip3Wallet = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
const DEFAULTS = {
    externalEvers: 15,
    internalTransferEvers: 7,
    internalEvers: 15,
    internalKeepEvers: 12,
};
function deployTraderTip3Wallet(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const externalAddress = yield deployExternalWallet(flex, options);
        const internalAddress = yield deployInternalWallet(flex, options, externalAddress);
        return {
            externalAddress,
            address: internalAddress,
        };
    });
}
exports.deployTraderTip3Wallet = deployTraderTip3Wallet;
function deployExternalWallet(flex, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const root = yield flex.evr.accounts.get(contracts_1.RootTokenContractAccount, options.tokenRoot);
        return (yield root.runDeployWallet({
            _answer_id: 0,
            tokens: (0, web3_1.toUnits)(options.tokens),
            evers: (0, web3_1.toUnits)((_a = options.externalEvers) !== null && _a !== void 0 ? _a : DEFAULTS.externalEvers),
            pubkey: (0, web3_1.uint256)(yield flex.evr.signers.resolvePublicKey(options.externalWalletSigner)),
        })).output.value0;
    });
}
function deployInternalWallet(flex, options, externalAddress) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = (0, web3_1.uint256)(options.trader);
        const externalWallet = yield flex.evr.accounts.get(contracts_1.TONTokenWalletAccount, {
            address: externalAddress,
            signer: options.externalWalletSigner,
        });
        const wrapper = yield flex.evr.accounts.get(contracts_1.WrapperAccount, options.tokenWrapper);
        const wrapperWalletAddress = (_a = (yield wrapper.getDetails()).output.external_wallet) !== null && _a !== void 0 ? _a : "";
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, options.client);
        const transferEvers = (_b = options.internalTransferEvers) !== null && _b !== void 0 ? _b : DEFAULTS.internalTransferEvers;
        const evers = (_c = options.internalEvers) !== null && _c !== void 0 ? _c : DEFAULTS.internalEvers;
        const keepEvers = (_d = options.internalKeepEvers) !== null && _d !== void 0 ? _d : DEFAULTS.internalKeepEvers;
        const payload = (yield client.getPayloadForDeployInternalWallet({
            owner_addr: options.client,
            owner_pubkey: pubkey,
            evers: (0, web3_1.toUnits)(evers),
            keep_evers: (0, web3_1.toUnits)(keepEvers),
        })).output.value0;
        yield externalWallet.runTransfer({
            _answer_id: 0,
            answer_addr: externalAddress,
            to: wrapperWalletAddress,
            tokens: (0, web3_1.toUnits)(options.tokens),
            evers: (0, web3_1.toUnits)(evers + transferEvers),
            return_ownership: 0,
            notify_payload: payload,
        });
        return (yield wrapper.getWalletAddress({
            pubkey,
            owner: options.client,
        })).output.value0;
    });
}
//# sourceMappingURL=deploy-tip3-wallet.js.map