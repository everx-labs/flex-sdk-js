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
exports.Tip31WalletAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class Tip31WalletAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(Tip31WalletAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", {});
        });
    }
    runSupportsInterface(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "supportsInterface", input, options);
        });
    }
    supportsInterface(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "supportsInterface", input);
        });
    }
    runDestroy(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "destroy", input, options);
        });
    }
    destroy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "destroy", input);
        });
    }
    runBurnByRoot(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burnByRoot", input, options);
        });
    }
    burnByRoot(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burnByRoot", input);
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
    runBalance(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "balance", input, options);
        });
    }
    balance(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "balance", input);
        });
    }
    runOwner(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "owner", input, options);
        });
    }
    owner(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "owner", input);
        });
    }
    runRoot(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "root", input, options);
        });
    }
    root(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "root", input);
        });
    }
    runWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "walletCode", input, options);
        });
    }
    walletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "walletCode", input);
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
    runTransferToWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferToWallet", input, options);
        });
    }
    transferToWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferToWallet", input);
        });
    }
    runAcceptTransfer(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "acceptTransfer", input, options);
        });
    }
    acceptTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "acceptTransfer", input);
        });
    }
    runAcceptMint(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "acceptMint", input, options);
        });
    }
    acceptMint(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "acceptMint", input);
        });
    }
    runSendSurplusGas(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "sendSurplusGas", input, options);
        });
    }
    sendSurplusGas(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "sendSurplusGas", input);
        });
    }
}
exports.Tip31WalletAccount = Tip31WalletAccount;
Tip31WalletAccount.package = {
    abi: { "ABI version": 2, "version": "2.2", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [], "outputs": [] }, { "name": "supportsInterface", "inputs": [{ "name": "answerId", "type": "uint32" }, { "name": "interfaceID", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "bool" }] }, { "name": "destroy", "inputs": [{ "name": "remainingGasTo", "type": "address" }], "outputs": [] }, { "name": "burnByRoot", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "remainingGasTo", "type": "address" }, { "name": "callbackTo", "type": "address" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "burn", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "remainingGasTo", "type": "address" }, { "name": "callbackTo", "type": "address" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "balance", "inputs": [{ "name": "answerId", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }] }, { "name": "owner", "inputs": [{ "name": "answerId", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "root", "inputs": [{ "name": "answerId", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "walletCode", "inputs": [{ "name": "answerId", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "cell" }] }, { "name": "transfer", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "recipient", "type": "address" }, { "name": "deployWalletValue", "type": "uint128" }, { "name": "remainingGasTo", "type": "address" }, { "name": "notify", "type": "bool" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "transferToWallet", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "recipientTokenWallet", "type": "address" }, { "name": "remainingGasTo", "type": "address" }, { "name": "notify", "type": "bool" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "acceptTransfer", "id": "0x67A0B95F", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "sender", "type": "address" }, { "name": "remainingGasTo", "type": "address" }, { "name": "notify", "type": "bool" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "acceptMint", "id": "0x4384F298", "inputs": [{ "name": "amount", "type": "uint128" }, { "name": "remainingGasTo", "type": "address" }, { "name": "notify", "type": "bool" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "sendSurplusGas", "inputs": [{ "name": "to", "type": "address" }], "outputs": [] }], "data": [{ "key": 1, "name": "root_", "type": "address" }, { "key": 2, "name": "owner_", "type": "address" }], "events": [], "fields": [{ "name": "_pubkey", "type": "uint256" }, { "name": "_timestamp", "type": "uint64" }, { "name": "_constructorFlag", "type": "bool" }, { "name": "root_", "type": "address" }, { "name": "owner_", "type": "address" }, { "name": "balance_", "type": "uint128" }] },
    tvc: "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",
    code: "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",
    codeHash: "feac9c96c6859b7dadc72f7ac11fd6f965b0e5d6fa9de7e85ee8fd5ca50e6b48",
};
//# sourceMappingURL=Tip31WalletAccount.js.map