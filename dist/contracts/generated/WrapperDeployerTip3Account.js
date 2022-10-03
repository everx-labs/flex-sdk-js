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
    runSetWrapperCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWrapperCode", input, options);
        });
    }
    setWrapperCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWrapperCode", input);
        });
    }
    runSetExtWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setExtWalletCode", input, options);
        });
    }
    setExtWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setExtWalletCode", input);
        });
    }
    runSetFlexWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setFlexWalletCode", input, options);
        });
    }
    setFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setFlexWalletCode", input);
        });
    }
    runDeploy(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deploy", input, options);
        });
    }
    deploy_(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deploy", input);
        });
    }
    runGetArgs(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getArgs", input, options);
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
    codeHash: "a86249807064a2cd7aec9e080b6434c8b3e31cbed4419bbaea439cf7c63ac028",
};
//# sourceMappingURL=WrapperDeployerTip3Account.js.map