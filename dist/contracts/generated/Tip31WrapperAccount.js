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
exports.Tip31WrapperAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class Tip31WrapperAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(Tip31WrapperAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runInit(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "init", input);
        });
    }
    init(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "init", input);
        });
    }
    runDeployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runOnAcceptTokensTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onAcceptTokensTransfer", input);
        });
    }
    onAcceptTokensTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onAcceptTokensTransfer", input);
        });
    }
    runBurn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burn", input);
        });
    }
    burn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burn", input);
        });
    }
    runTransferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferFromReserveWallet", input);
        });
    }
    transferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferFromReserveWallet", input);
        });
    }
    runRequestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloned", input);
        });
    }
    cloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloned", input);
        });
    }
    runSetCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setCloned", input);
        });
    }
    setCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setCloned", input);
        });
    }
    runUpgradeExternalWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "upgradeExternalWallet", {});
        });
    }
    upgradeExternalWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "upgradeExternalWallet", {});
        });
    }
    runGetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {});
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTip3Config", {});
        });
    }
    getTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTip3Config", {});
        });
    }
    runHasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasInternalWalletCode", {});
        });
    }
    hasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasInternalWalletCode", {});
        });
    }
    runGetWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getReserveWallet", {});
        });
    }
    getReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getReserveWallet", {});
        });
    }
}
exports.Tip31WrapperAccount = Tip31WrapperAccount;
Tip31WrapperAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "init", "inputs": [{ "name": "external_wallet", "type": "address" }, { "name": "reserve_wallet_evers", "type": "uint128" }, { "name": "internal_wallet_code", "type": "cell" }], "outputs": [], "id": "0xa" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xb" }, { "name": "onAcceptTokensTransfer", "inputs": [{ "name": "tokenRoot", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "sender", "type": "address" }, { "name": "senderWallet", "type": "address" }, { "name": "remainingGasTo", "type": "address" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "burn", "inputs": [{ "name": "tokens", "type": "uint128" }, { "name": "answer_addr", "type": "address" }, { "name": "sender_pubkey", "type": "uint256" }, { "name": "sender_owner", "type": "optional(address)" }, { "name": "out_pubkey", "type": "uint256" }, { "name": "out_owner", "type": "optional(address)" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xc" }, { "name": "transferFromReserveWallet", "inputs": [{ "name": "answer_addr", "type": "optional(address)" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint128" }], "outputs": [], "id": "0xd" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0xe" }, { "name": "cloned", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "first", "type": "optional(address)" }, { "name": "second", "type": "uint256" }], "id": "0x400" }, { "name": "setCloned", "inputs": [{ "name": "cloned", "type": "optional(address)" }, { "name": "cloned_pubkey", "type": "uint256" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "wrappers_cfg_code_hash", "type": "uint256" }, { "name": "wrappers_cfg_code_depth", "type": "uint16" }], "outputs": [], "id": "0x500" }, { "name": "upgradeExternalWallet", "inputs": [], "outputs": [] }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "total_granted", "type": "uint128" }, { "name": "wallet_code", "type": "cell" }, { "name": "external_wallet", "type": "optional(address)" }, { "name": "reserve_wallet", "type": "address" }, { "name": "super_root", "type": "address" }, { "name": "cloned", "type": "optional(address)" }, { "name": "type_id", "type": "uint8" }], "id": "0x100" }, { "name": "getTip3Config", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "id": "0x200" }, { "name": "hasInternalWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x10" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x300" }, { "name": "getReserveWallet", "inputs": [], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x12" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "wic_unsalted_code_", "type": "cell" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "workchain_id_", "type": "int8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "total_granted_", "type": "uint128" }, { "name": "internal_wallet_code_", "type": "optional(cell)" }, { "name": "start_balance_", "type": "varuint16" }, { "name": "super_root_", "type": "optional(address)" }, { "name": "wallet_", "type": "optional(address)" }, { "name": "cloned_", "type": "optional(address)" }, { "name": "cloned_pubkey_", "type": "uint256" }, { "name": "out_deploy_value_", "type": "uint128" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "89f61621ed4ec1ed0cb860f9583b86b9464d0559711d915c87224a25cc813fb6",
};
//# sourceMappingURL=Tip31WrapperAccount.js.map