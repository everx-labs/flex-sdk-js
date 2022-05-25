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
exports.Wallet = void 0;
const flex_1 = require("./flex");
const contracts_1 = require("../contracts");
class Wallet extends flex_1.FlexBoundLazy {
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                account: new contracts_1.FlexWalletAccount({
                    client: this.flex.web3,
                    address: options.address,
                    signer: yield this.flex.signers.resolve(options.signer),
                }),
            };
        });
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map