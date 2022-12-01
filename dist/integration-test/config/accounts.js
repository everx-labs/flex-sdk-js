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
exports.createAccounts = void 0;
const flex_1 = require("../../flex");
const contracts_1 = require("../../contracts");
function createAccounts(flex, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const traderId = yield flex.evr.signers.resolvePublicKey(config.trader.signer);
        const everWallet = new flex_1.EverWallet(flex.evr, config.everWallet);
        const flexClient = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        const everTokenWallet = yield flex.evr.accounts.get(contracts_1.MultisigWalletAccount, config.EVER.wallet);
        const pubkey = (0, flex_1.uint256)(traderId);
        const everWrapper = yield flex.evr.accounts.get(contracts_1.WrapperEverAccount, config.EVER.wrapper);
        const everInternalAddress = (yield everWrapper.getWalletAddress({
            owner: yield flexClient.getAddress(),
            pubkey,
        })).output.value0;
        const tsdtTokenWallet = yield flex.evr.accounts.get(contracts_1.Tip31WalletAccount, config.TSDT.wallet);
        const wrapper = yield flex.evr.accounts.get(contracts_1.WrapperAccount, config.TSDT.wrapper);
        const tsdtInternalAddress = (yield wrapper.getWalletAddress({
            pubkey,
            owner: yield flexClient.getAddress(),
        })).output.value0;
        return {
            traderId,
            everWallet,
            everWalletAddress: yield everWallet.getAddress(),
            flexClient,
            flexClientAddress: yield flexClient.getAddress(),
            EVER: {
                external: everTokenWallet,
                externalAddress: yield everTokenWallet.getAddress(),
                internal: yield flex.evr.accounts.get(contracts_1.FlexWalletAccount, everInternalAddress),
                internalAddress: everInternalAddress,
            },
            TSDT: {
                external: tsdtTokenWallet,
                externalAddress: yield tsdtTokenWallet.getAddress(),
                internal: yield flex.evr.accounts.get(contracts_1.FlexWalletAccount, tsdtInternalAddress),
                internalAddress: tsdtInternalAddress,
            },
        };
    });
}
exports.createAccounts = createAccounts;
//# sourceMappingURL=accounts.js.map