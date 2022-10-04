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
exports.Tip31WrapperDeployerAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class Tip31WrapperDeployerAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(Tip31WrapperDeployerAccount.package, options);
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
exports.Tip31WrapperDeployerAccount = Tip31WrapperDeployerAccount;
Tip31WrapperDeployerAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "wrapper_pubkey", "type": "uint256" }, { "name": "super_root", "type": "address" }, { "name": "ext_wallet_value", "type": "uint128" }, { "name": "wrapper_deploy_value", "type": "uint128" }, { "name": "wrapper_keep_balance", "type": "uint128" }, { "name": "reserve_wallet_value", "type": "uint128" }, { "name": "out_deploy_value", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWrapperCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xb" }, { "name": "setFlexWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xd" }, { "name": "deploy", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "init_args", "type": "cell" }, { "name": "wic_unsalted_code", "type": "cell" }], "outputs": [{ "name": "first", "type": "address" }, { "name": "second", "type": "uint256" }], "id": "0x1111" }, { "name": "getArgs", "inputs": [{ "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "tip3cfg", "type": "tuple" }], "outputs": [{ "name": "value0", "type": "cell" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "__await_next_id", "type": "uint32" }, { "name": "__await_dict", "type": "optional(cell)" }, { "name": "pubkey_", "type": "uint256" }, { "name": "wrapper_pubkey_", "type": "uint256" }, { "name": "ext_wallet_value_", "type": "uint128" }, { "name": "wrapper_deploy_value_", "type": "uint128" }, { "name": "wrapper_keep_balance_", "type": "uint128" }, { "name": "reserve_wallet_value_", "type": "uint128" }, { "name": "out_deploy_value_", "type": "uint128" }, { "name": "super_root_", "type": "address" }, { "name": "wrapper_code_", "type": "optional(cell)" }, { "name": "flex_wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "ad9864c8dc34c0e7f4120b6e7c1b47e82c0b1495f48a689a28e0c32ef8e8d9c7",
};
//# sourceMappingURL=Tip31WrapperDeployerAccount.js.map