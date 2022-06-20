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
exports.addEverTokenType = exports.EVER_TOKEN_TYPE = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
exports.EVER_TOKEN_TYPE = 1;
const DEFAULTS = {
    wrapperDeployerBalance: 100,
    wrapperDeployEvers: 2,
    wrapperKeepEvers: 1,
    reserveWalletEvers: 0.5,
    extWalletEvers: 1,
    outDeployEvers: 1,
    mainEvers: 3,
    callEvers: 2,
    keepEvers: 1,
};
/** @internal */
function addEverTokenType(web3, options) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const deployer = yield web3.accounts.get(contracts_1.WrapperDeployerEverAccount, {
            signer: options.wrapperDeployerSigner,
        });
        yield new web3_1.EverWallet(web3, options.everWallet).topUp(yield deployer.getAddress(), (_a = options.wrapperDeployerBalance) !== null && _a !== void 0 ? _a : DEFAULTS.wrapperDeployerBalance);
        const deployerPublicKey = yield web3.signers.resolvePublicKey(options.wrapperDeployerSigner);
        const wrapperPublicKey = yield web3.signers.resolvePublicKey(options.wrapperSigner);
        yield deployer.deployContract({
            pubkey: `0x${deployerPublicKey}`,
            wrapper_pubkey: `0x${wrapperPublicKey}`,
            super_root: options.superRoot,
            wrapper_deploy_value: (0, web3_1.toUnits)((_b = options.wrapperDeployEvers) !== null && _b !== void 0 ? _b : DEFAULTS.wrapperDeployEvers),
            wrapper_keep_balance: (0, web3_1.toUnits)((_c = options.wrapperKeepEvers) !== null && _c !== void 0 ? _c : DEFAULTS.wrapperKeepEvers),
            reserve_wallet_value: (0, web3_1.toUnits)((_d = options.reserveWalletEvers) !== null && _d !== void 0 ? _d : DEFAULTS.reserveWalletEvers),
        });
        yield deployer.runSetWrapperEverCode({ code: contracts_1.WrapperEverAccount.package.code });
        yield deployer.runSetExtWalletCode({ code: contracts_1.TONTokenWalletAccount.package.code });
        yield deployer.runSetFlexWalletCode({ code: contracts_1.FlexWalletAccount.package.code });
        const superRootOwner = yield web3.accounts.get(contracts_1.SuperRootOwnerAccount, options.superRootOwner);
        yield superRootOwner.runAddWrapperType({
            type: exports.EVER_TOKEN_TYPE,
            main_evers: (0, web3_1.toUnits)((_e = options.mainEvers) !== null && _e !== void 0 ? _e : DEFAULTS.mainEvers),
            wrappers_cfg_keep_evers: (0, web3_1.toUnits)((_f = options.keepEvers) !== null && _f !== void 0 ? _f : DEFAULTS.keepEvers),
            wrappers_cfg: options.wrappersConfigAddress,
            wrapper_deployer: yield deployer.getAddress(),
        });
        return {
            deployer: yield deployer.getAddress(),
        };
    });
}
exports.addEverTokenType = addEverTokenType;
//# sourceMappingURL=ever-token-type.js.map