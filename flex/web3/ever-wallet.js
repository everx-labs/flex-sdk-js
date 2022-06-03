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
exports.EverWallet = void 0;
const contracts_1 = require("../../contracts");
const core_1 = require("@eversdk/core");
const utils_1 = require("./utils");
class EverWallet {
    constructor(web3, options) {
        this.evr = web3;
        this.options = options;
    }
    transfer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.getAccount();
            const payload = (yield this.evr.sdk.abi.encode_message_body({
                abi: (0, core_1.abiContract)(options.messageBody.abi),
                call_set: {
                    function_name: options.messageBody.fn,
                    input: Object.assign({ _answer_id: 0 }, options.messageBody.params),
                },
                is_internal: true,
                signer: (0, core_1.signerNone)(),
            })).body;
            yield account.runSubmitTransaction({
                dest: options.dest,
                allBalance: false,
                bounce: true,
                value: options.value,
                payload,
            });
        });
    }
    topUp(address, evers) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.getAccount();
            yield account.runSubmitTransaction({
                dest: address,
                value: (0, utils_1.toUnits)(evers),
                allBalance: false,
                bounce: false,
                payload: "",
            });
        });
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.getAccount()).getAddress();
        });
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.evr.accounts.get(contracts_1.MultisigWalletAccount, this.options);
        });
    }
}
exports.EverWallet = EverWallet;
//# sourceMappingURL=ever-wallet.js.map