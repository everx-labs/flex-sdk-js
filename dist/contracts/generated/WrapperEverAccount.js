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
exports.WrapperEverAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WrapperEverAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(WrapperEverAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runInit(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "init", input, options);
        });
    }
    init(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "init", input);
        });
    }
    runDeployEmptyWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input, options);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runOnEverTransfer(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onEverTransfer", input, options);
        });
    }
    onEverTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onEverTransfer", input);
        });
    }
    runBurn(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burn", input, options);
        });
    }
    burn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burn", input);
        });
    }
    runTransferFromReserveWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferFromReserveWallet", input, options);
        });
    }
    transferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferFromReserveWallet", input);
        });
    }
    runRequestTotalGranted(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input, options);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runCloned(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloned", input, options);
        });
    }
    cloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloned", input);
        });
    }
    runSetCloned(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setCloned", input, options);
        });
    }
    setCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setCloned", input);
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
    runGetTip3Config(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTip3Config", {}, options);
        });
    }
    getTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTip3Config", {});
        });
    }
    runHasInternalWalletCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasInternalWalletCode", {}, options);
        });
    }
    hasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasInternalWalletCode", {});
        });
    }
    runGetWalletAddress(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input, options);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetReserveWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getReserveWallet", {}, options);
        });
    }
    getReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getReserveWallet", {});
        });
    }
}
exports.WrapperEverAccount = WrapperEverAccount;
WrapperEverAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "init", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "reserve_wallet_evers", "type": "uint128" }, { "name": "internal_wallet_code", "type": "cell" }], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0xa" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xb" }, { "name": "onEverTransfer", "inputs": [{ "name": "tokens", "type": "uint128" }, { "components": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }, { "name": "keep_evers", "type": "uint128" }], "name": "args", "type": "tuple" }], "outputs": [], "id": "0xca" }, { "name": "burn", "inputs": [{ "name": "tokens", "type": "uint128" }, { "name": "answer_addr", "type": "address" }, { "name": "sender_pubkey", "type": "uint256" }, { "name": "sender_owner", "type": "optional(address)" }, { "name": "out_pubkey", "type": "uint256" }, { "name": "out_owner", "type": "optional(address)" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xc" }, { "name": "transferFromReserveWallet", "inputs": [{ "name": "answer_addr", "type": "optional(address)" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint128" }], "outputs": [], "id": "0xd" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0xe" }, { "name": "cloned", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "first", "type": "optional(address)" }, { "name": "second", "type": "uint256" }], "id": "0x400" }, { "name": "setCloned", "inputs": [{ "name": "cloned", "type": "optional(address)" }, { "name": "cloned_pubkey", "type": "uint256" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "wrappers_cfg_code_hash", "type": "uint256" }, { "name": "wrappers_cfg_code_depth", "type": "uint16" }], "outputs": [], "id": "0x500" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "total_granted", "type": "uint128" }, { "name": "wallet_code", "type": "cell" }, { "name": "external_wallet", "type": "optional(address)" }, { "name": "reserve_wallet", "type": "address" }, { "name": "super_root", "type": "address" }, { "name": "cloned", "type": "optional(address)" }, { "name": "type_id", "type": "uint8" }], "id": "0x100" }, { "name": "getTip3Config", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "id": "0x200" }, { "name": "hasInternalWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x10" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x300" }, { "name": "getReserveWallet", "inputs": [], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x12" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "wic_unsalted_code_", "type": "cell" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "workchain_id_", "type": "int8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "total_granted_", "type": "uint128" }, { "name": "internal_wallet_code_", "type": "optional(cell)" }, { "name": "start_balance_", "type": "varuint16" }, { "name": "super_root_", "type": "optional(address)" }, { "name": "wallet_", "type": "optional(address)" }, { "name": "cloned_", "type": "optional(address)" }, { "name": "cloned_pubkey_", "type": "uint256" }, { "name": "type_id_", "type": "uint8" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "052704738eb84e1016c30a0f08d8006aa046de7ade788d41c75c2d6a3e31e639",
};
//# sourceMappingURL=WrapperEverAccount.js.map