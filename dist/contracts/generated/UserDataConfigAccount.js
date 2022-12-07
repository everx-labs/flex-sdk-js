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
exports.UserDataConfigAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class UserDataConfigAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(UserDataConfigAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", input, options);
        });
    }
    onDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", input);
        });
    }
    runDeployFlexClient(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployFlexClient", input, options);
        });
    }
    deployFlexClient(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployFlexClient", input);
        });
    }
    runRequestDetails(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestDetails", input, options);
        });
    }
    requestDetails(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestDetails", input);
        });
    }
    runGetFlexClientAddr(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getFlexClientAddr", input, options);
        });
    }
    getFlexClientAddr(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getFlexClientAddr", input);
        });
    }
    runGetDetails(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {}, options);
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetConfig(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getConfig", {}, options);
        });
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getConfig", {});
        });
    }
}
exports.UserDataConfigAccount = UserDataConfigAccount;
UserDataConfigAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }], "outputs": [] }, { "name": "deployFlexClient", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "deploy_evers", "type": "uint128" }, { "name": "signature", "type": "bytes" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "requestDetails", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }] }, { "name": "getFlexClientAddr", "inputs": [{ "name": "pubkey", "type": "uint256" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "getDetails", "inputs": [], "outputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }] }, { "name": "getConfig", "inputs": [], "outputs": [{ "name": "super_root", "type": "address" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet_", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding_", "type": "optional(tuple)" }, { "name": "flex_client_stub_", "type": "optional(cell)" }, { "name": "flex_client_code_", "type": "optional(cell)" }, { "name": "auth_index_code_", "type": "optional(cell)" }, { "name": "user_id_index_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "17bc95b29a60ea52fa42c14656ce11deb283eab40589944c07225e6b24d87d57",
};
//# sourceMappingURL=UserDataConfigAccount.js.map