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
exports.EvrAccounts = void 0;
const core_1 = require("@eversdk/core");
const appkit_1 = require("@eversdk/appkit");
class EvrAccounts {
    constructor(everos, signers, log) {
        this.everos = everos;
        this.signers = signers;
        this.log = log;
    }
    get(accountClass, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let address = undefined;
            let signer = undefined;
            if (typeof options === "string") {
                address = options;
            }
            else {
                if ("address" in options) {
                    address = options.address;
                }
                signer = options.signer;
            }
            return new accountClass({
                address,
                client: this.everos,
                log: this.log,
                signer: yield this.signers.resolve(signer),
            });
        });
    }
    isActive(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = (yield this.everos.net.query_collection({
                collection: "accounts",
                filter: { id: { eq: address } },
                result: "acc_type",
                limit: 1,
            })).result;
            return accounts.length > 0 && accounts[0].acc_type === appkit_1.AccountType.active;
        });
    }
    waitForFinalExternalAnswer(transaction, abi) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let orig_addr = transaction.account_addr;
            let externalMessages = [];
            const tree = yield this.everos.net.query_transaction_tree({
                in_msg: transaction.in_msg,
                abi_registry: [(0, core_1.abiContract)(abi)],
                timeout: 60000 * 5,
            });
            for (const msg of tree.messages) {
                if ((msg.src == orig_addr) && ((_a = msg.dst) !== null && _a !== void 0 ? _a : "") === "") {
                    externalMessages.push(msg);
                }
            }
            return (_b = externalMessages[0].decoded_body) === null || _b === void 0 ? void 0 : _b.value;
        });
    }
    waitForInternalAnswer(transaction, abi) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let orig_addr = transaction.account_addr;
            let answerMessages = [];
            const tree = yield this.everos.net.query_transaction_tree({
                in_msg: transaction.in_msg,
                abi_registry: abi.map(x => (0, core_1.abiContract)(x)),
                timeout: 60000 * 5,
            });
            for (const msg of tree.messages) {
                if (msg.dst == orig_addr && ((_a = msg.src) !== null && _a !== void 0 ? _a : "") !== "") {
                    answerMessages.push(msg);
                }
            }
            return answerMessages[0];
        });
    }
}
exports.EvrAccounts = EvrAccounts;
//# sourceMappingURL=accounts.js.map