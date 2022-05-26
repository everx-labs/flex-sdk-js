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
exports.WrapperDeployerTip3Account = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WrapperDeployerTip3Account extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(WrapperDeployerTip3Account.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", input);
        });
    }
    runSetWrapperCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWrapperCode", input);
        });
    }
    setWrapperCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWrapperCode", input);
        });
    }
    runSetExtWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setExtWalletCode", input);
        });
    }
    setExtWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setExtWalletCode", input);
        });
    }
    runSetFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setFlexWalletCode", input);
        });
    }
    setFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setFlexWalletCode", input);
        });
    }
    runDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deploy", input);
        });
    }
    deploy_(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deploy", input);
        });
    }
    runGetArgs(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getArgs", input);
        });
    }
    getArgs(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getArgs", input);
        });
    }
}
exports.WrapperDeployerTip3Account = WrapperDeployerTip3Account;
WrapperDeployerTip3Account.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "wrapper_pubkey", "type": "uint256" }, { "name": "super_root", "type": "address" }, { "name": "ext_wallet_value", "type": "uint128" }, { "name": "wrapper_deploy_value", "type": "uint128" }, { "name": "wrapper_keep_balance", "type": "uint128" }, { "name": "reserve_wallet_value", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWrapperCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xb" }, { "name": "setExtWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xc" }, { "name": "setFlexWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xd" }, { "name": "deploy", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "init_args", "type": "cell" }, { "name": "wic_unsalted_code", "type": "cell" }], "outputs": [{ "name": "first", "type": "address" }, { "name": "second", "type": "uint256" }], "id": "0x1111" }, { "name": "getArgs", "inputs": [{ "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "tip3cfg", "type": "tuple" }], "outputs": [{ "name": "value0", "type": "cell" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "wrapper_pubkey_", "type": "uint256" }, { "name": "ext_wallet_value_", "type": "uint128" }, { "name": "wrapper_deploy_value_", "type": "uint128" }, { "name": "wrapper_keep_balance_", "type": "uint128" }, { "name": "reserve_wallet_value_", "type": "uint128" }, { "name": "super_root_", "type": "address" }, { "name": "wrapper_code_", "type": "optional(cell)" }, { "name": "ext_wallet_code_", "type": "optional(cell)" }, { "name": "flex_wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "2903fdcf03bba4ae15fd266647cbd3863cdf2486093a181f284883edecec11a0",
};
//# sourceMappingURL=WrapperDeployerTip3Account.js.map