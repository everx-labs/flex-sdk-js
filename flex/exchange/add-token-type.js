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
exports.addBroxusTokenType = exports.addTip3TokenType = exports.addEverTokenType = exports.TokenType = void 0;
const contracts_1 = require("../../contracts");
const helpers_1 = require("../../contracts/helpers");
const ever_wallet_1 = require("../ever-wallet");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["TIP3"] = 0] = "TIP3";
    TokenType[TokenType["EVER"] = 1] = "EVER";
    TokenType[TokenType["BROXUS"] = 2] = "BROXUS";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
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
function addEverTokenType(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const deployer = new contracts_1.WrapperDeployerEverAccount({
            signer: yield flex.signers.resolve(options.wrapperDeployerSigner),
        });
        yield topUpDeployer(flex, deployer, options);
        yield deployer.deployContract(yield baseDeployerCtorInput(flex, options));
        yield deployer.runSetWrapperEverCode({ code: contracts_1.WrapperEverAccount.package.code });
        yield deployer.runSetExtWalletCode({ code: contracts_1.TONTokenWalletAccount.package.code });
        yield deployer.runSetFlexWalletCode({ code: contracts_1.FlexWalletAccount.package.code });
        yield addTokenType(flex, deployer, options);
    });
}
exports.addEverTokenType = addEverTokenType;
function addTip3TokenType(flex, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const deployer = new contracts_1.WrapperDeployerTip3Account({
            signer: yield flex.signers.resolve(options.wrapperDeployerSigner),
        });
        yield topUpDeployer(flex, deployer, options);
        yield deployer.deployContract(Object.assign(Object.assign({}, yield baseDeployerCtorInput(flex, options)), { ext_wallet_value: (0, helpers_1.amountToUnits)((_a = options.extWalletEvers) !== null && _a !== void 0 ? _a : DEFAULTS.extWalletEvers) }));
        yield deployer.runSetWrapperCode({ code: contracts_1.WrapperAccount.package.code });
        yield deployer.runSetExtWalletCode({ code: contracts_1.TONTokenWalletAccount.package.code });
        yield deployer.runSetFlexWalletCode({ code: contracts_1.FlexWalletAccount.package.code });
        yield addTokenType(flex, deployer, options);
    });
}
exports.addTip3TokenType = addTip3TokenType;
function addBroxusTokenType(flex, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const deployer = new contracts_1.WrapperDeployerBroxusAccount({
            signer: yield flex.signers.resolve(options.wrapperDeployerSigner),
        });
        yield topUpDeployer(flex, deployer, options);
        yield deployer.deployContract(Object.assign(Object.assign({}, yield baseDeployerCtorInput(flex, options)), { ext_wallet_value: (0, helpers_1.amountToUnits)((_a = options.extWalletEvers) !== null && _a !== void 0 ? _a : DEFAULTS.extWalletEvers), out_deploy_value: (0, helpers_1.amountToUnits)((_b = options.outDeployEvers) !== null && _b !== void 0 ? _b : DEFAULTS.outDeployEvers) }));
        yield deployer.runSetWrapperCode({ code: contracts_1.WrapperAccount.package.code });
        yield deployer.runSetFlexWalletCode({ code: contracts_1.FlexWalletAccount.package.code });
        yield addTokenType(flex, deployer, options);
    });
}
exports.addBroxusTokenType = addBroxusTokenType;
function topUpDeployer(flex, deployer, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        yield new ever_wallet_1.EverWallet(options.everWallet, flex).topUp(yield deployer.getAddress(), (_a = options.wrapperDeployerBalance) !== null && _a !== void 0 ? _a : DEFAULTS.wrapperDeployerBalance);
    });
}
function baseDeployerCtorInput(flex, options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const deployerPublicKey = yield flex.signers.resolvePublicKey(options.wrapperDeployerSigner);
        const wrapperPublicKey = yield flex.signers.resolvePublicKey(options.wrapperSigner);
        return {
            pubkey: `0x${deployerPublicKey}`,
            wrapper_pubkey: `0x${wrapperPublicKey}`,
            super_root: options.superRoot,
            wrapper_deploy_value: (0, helpers_1.amountToUnits)((_a = options.wrapperDeployEvers) !== null && _a !== void 0 ? _a : DEFAULTS.wrapperDeployEvers),
            wrapper_keep_balance: (0, helpers_1.amountToUnits)((_b = options.wrapperKeepEvers) !== null && _b !== void 0 ? _b : DEFAULTS.wrapperKeepEvers),
            reserve_wallet_value: (0, helpers_1.amountToUnits)((_c = options.reserveWalletEvers) !== null && _c !== void 0 ? _c : DEFAULTS.reserveWalletEvers),
        };
    });
}
function addTokenType(flex, deployer, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const superRootOwner = yield flex.getAccount(contracts_1.SuperRootOwnerAccount, options.superRootOwner);
        yield superRootOwner.runAddWrapperType({
            type: options.type,
            main_evers: (0, helpers_1.amountToUnits)((_a = options.mainEvers) !== null && _a !== void 0 ? _a : DEFAULTS.mainEvers),
            wrappers_cfg_keep_evers: (0, helpers_1.amountToUnits)((_b = options.keepEvers) !== null && _b !== void 0 ? _b : DEFAULTS.keepEvers),
            wrappers_cfg: options.wrappersConfigAddress,
            wrapper_deployer: yield deployer.getAddress(),
        });
    });
}
//# sourceMappingURL=add-token-type.js.map