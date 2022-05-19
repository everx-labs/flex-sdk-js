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
const flex_1 = require("./flex");
const contracts_1 = require("../contracts");
const core_1 = require("@eversdk/core");
class EverWallet extends flex_1.FlexBoundLazy {
    constructor(options) {
        super(options);
    }
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                account: new contracts_1.MultisigWalletAccount({
                    log: this.log,
                    client: this.flex.client,
                    address: options.address,
                    signer: yield this.flex.resolveSigner(options.signer),
                }),
            };
        });
    }
    transfer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { account } = yield this.getState();
            const payload = (yield this.flex.client.abi.encode_message_body({
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
}
exports.EverWallet = EverWallet;
//# sourceMappingURL=ever-wallet.js.map