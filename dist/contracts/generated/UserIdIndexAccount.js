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
exports.UserIdIndexAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class UserIdIndexAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(UserIdIndexAccount.package, options);
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
    runReLendPubkey(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "reLendPubkey", input, options);
        });
    }
    reLendPubkey(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "reLendPubkey", input);
        });
    }
    runRemove(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "remove", {}, options);
        });
    }
    remove() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "remove", {});
        });
    }
    runRequestLendPubkey(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestLendPubkey", input, options);
        });
    }
    requestLendPubkey(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestLendPubkey", input);
        });
    }
    runTransfer(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transfer", input, options);
        });
    }
    transfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transfer", input);
        });
    }
    runSetRefillWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setRefillWallet", input, options);
        });
    }
    setRefillWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setRefillWallet", input);
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
exports.UserIdIndexAccount = UserIdIndexAccount;
UserIdIndexAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "name": "lend_pubkey", "type": "uint256" }, { "name": "name", "type": "string" }, { "name": "evers_to_auth_idx", "type": "uint128" }, { "name": "refill_wallet", "type": "uint128" }, { "name": "min_refill", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "reLendPubkey", "inputs": [{ "name": "new_lend_pubkey", "type": "uint256" }, { "name": "evers_to_remove", "type": "uint128" }, { "name": "evers_to_auth_idx", "type": "uint128" }], "outputs": [], "id": "0xb" }, { "name": "remove", "inputs": [], "outputs": [], "id": "0xc" }, { "name": "requestLendPubkey", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "evers_balance", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "uint256" }], "id": "0xd" }, { "name": "transfer", "inputs": [{ "name": "dest", "type": "address" }, { "name": "value", "type": "uint128" }, { "name": "bounce", "type": "bool" }], "outputs": [], "id": "0xe" }, { "name": "setRefillWallet", "inputs": [{ "name": "refill_wallet", "type": "uint128" }, { "name": "min_refill", "type": "uint128" }], "outputs": [], "id": "0xf" }, { "name": "getConfig", "inputs": [], "outputs": [{ "name": "owner", "type": "address" }, { "name": "auth_index_code", "type": "cell" }], "id": "0x10" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "__replay", "type": "uint64" }, { "name": "workchain_id_", "type": "int8" }, { "name": "user_id_", "type": "uint256" }, { "name": "lend_pubkey_", "type": "uint256" }, { "name": "name_", "type": "optional(string)" }, { "name": "refill_wallet_", "type": "uint128" }, { "name": "min_refill_", "type": "uint128" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "e448d9263cda7171f5da2e4164e6dc2259d289a7a68ba01c586560c36295620c",
};
//# sourceMappingURL=UserIdIndexAccount.js.map