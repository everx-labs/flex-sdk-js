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
exports.getWallet = void 0;
const contracts_1 = require("../../contracts");
function getWallet(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const pair = yield flex.getAccount(contracts_1.XchgPairAccount, options.market);
        const pairDetails = (yield pair.getDetails()).output;
        const token = yield flex.getAccount(contracts_1.WrapperAccount, options.sell
            ? pairDetails.major_tip3cfg.root_address
            : pairDetails.minor_tip3cfg.root_address);
        const signer = yield flex.signers.resolve(options.trader.signer);
        const address = (yield token.getWalletAddress({
            pubkey: `0x${options.trader}`,
            owner: options.client,
        })).output.value0;
        return flex.getAccount(contracts_1.FlexWalletAccount, {
            address,
            signer,
        });
    });
}
exports.getWallet = getWallet;
//# sourceMappingURL=internals.js.map