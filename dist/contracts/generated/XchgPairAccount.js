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
exports.XchgPairAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class XchgPairAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(XchgPairAccount.package, options);
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
    runSetNext(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setNext", input, options);
        });
    }
    setNext(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setNext", input);
        });
    }
    runUnlist(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "unlist", {}, options);
        });
    }
    unlist() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "unlist", {});
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
    runGetPriceXchgCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getPriceXchgCode", input, options);
        });
    }
    getPriceXchgCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getPriceXchgCode", input);
        });
    }
    runGetPriceXchgSalt(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getPriceXchgSalt", {}, options);
        });
    }
    getPriceXchgSalt() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getPriceXchgSalt", {});
        });
    }
}
exports.XchgPairAccount = XchgPairAccount;
XchgPairAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "name": "min_amount", "type": "uint128" }, { "name": "minmove", "type": "uint128" }, { "name": "price_denum", "type": "uint128" }, { "name": "deploy_value", "type": "uint128" }, { "name": "notify_addr", "type": "address" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "major_tip3cfg", "type": "tuple" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "minor_tip3cfg", "type": "tuple" }], "outputs": [], "id": "0xa" }, { "name": "requestDetails", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "tip3_major_root", "type": "address" }, { "name": "tip3_minor_root", "type": "address" }, { "name": "min_amount", "type": "uint128" }, { "name": "minmove", "type": "uint128" }, { "name": "price_denum", "type": "uint128" }, { "name": "notify_addr", "type": "address" }, { "name": "major_reserve_wallet", "type": "address" }, { "name": "minor_reserve_wallet", "type": "address" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "major_tip3cfg", "type": "tuple" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "minor_tip3cfg", "type": "tuple" }, { "name": "next", "type": "optional(address)" }, { "name": "unlisted", "type": "bool" }], "id": "0xb" }, { "name": "setNext", "inputs": [{ "name": "next", "type": "address" }], "outputs": [], "id": "0xc" }, { "name": "unlist", "inputs": [], "outputs": [], "id": "0xd" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "tip3_major_root", "type": "address" }, { "name": "tip3_minor_root", "type": "address" }, { "name": "min_amount", "type": "uint128" }, { "name": "minmove", "type": "uint128" }, { "name": "price_denum", "type": "uint128" }, { "name": "notify_addr", "type": "address" }, { "name": "major_reserve_wallet", "type": "address" }, { "name": "minor_reserve_wallet", "type": "address" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "major_tip3cfg", "type": "tuple" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "minor_tip3cfg", "type": "tuple" }, { "name": "next", "type": "optional(address)" }, { "name": "unlisted", "type": "bool" }], "id": "0x100" }, { "name": "getConfig", "inputs": [], "outputs": [{ "name": "flex", "type": "address" }, { "components": [{ "name": "transfer_tip3", "type": "uint128" }, { "name": "return_ownership", "type": "uint128" }, { "name": "order_answer", "type": "uint128" }, { "name": "process_queue", "type": "uint128" }, { "name": "send_notify", "type": "uint128" }, { "name": "dest_wallet_keep_evers", "type": "uint128" }], "name": "ev_cfg", "type": "tuple" }, { "name": "deals_limit", "type": "uint8" }, { "name": "xchg_price_code", "type": "cell" }], "id": "0xe" }, { "name": "getPriceXchgCode", "inputs": [{ "name": "salted", "type": "bool" }], "outputs": [{ "name": "value0", "type": "cell" }], "id": "0x200" }, { "name": "getPriceXchgSalt", "inputs": [], "outputs": [{ "name": "value0", "type": "cell" }], "id": "0xf" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "tip3_major_root_", "type": "address" }, { "name": "tip3_minor_root_", "type": "address" }, { "name": "min_amount_", "type": "uint128" }, { "name": "minmove_", "type": "uint128" }, { "name": "price_denum_", "type": "uint128" }, { "name": "notify_addr_", "type": "address" }, { "name": "major_reserve_wallet_", "type": "address" }, { "name": "minor_reserve_wallet_", "type": "address" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "major_tip3cfg_", "type": "optional(tuple)" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "minor_tip3cfg_", "type": "optional(tuple)" }, { "name": "next_", "type": "optional(address)" }, { "name": "unlisted_", "type": "bool" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "016eb4e964ff5d1b478454aab778f3c96c43d796cb5b444ab095b4e16e670df0",
};
//# sourceMappingURL=XchgPairAccount.js.map