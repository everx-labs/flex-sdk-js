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
exports.deployClient = void 0;
const account_ex_1 = require("../../contracts/account-ex");
const contracts_1 = require("../../contracts");
const ever_wallet_1 = require("../ever-wallet");
function deployClient(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const everWallet = new ever_wallet_1.EverWallet(options.everWallet, flex);
        const signer = yield flex.signers.resolve(options.signer);
        const publicKey = yield flex.signers.publicKey(signer);
        const userConfig = yield flex.getUserConfigAccount();
        const pubkey = `0x${publicKey}`;
        const address = (yield userConfig.getFlexClientAddr({
            pubkey,
        })).output.value0;
        const isActive = yield account_ex_1.AccountEx.isActive(address, flex.web3);
        if (!isActive) {
            yield everWallet.transfer({
                dest: yield userConfig.getAddress(),
                value: 55e9,
                messageBody: {
                    abi: contracts_1.UserDataConfigAccount.package.abi,
                    fn: "deployFlexClient",
                    params: {
                        pubkey,
                        deploy_evers: 50e9,
                    },
                },
            });
        }
        return {
            address,
            signer,
        };
    });
}
exports.deployClient = deployClient;
//# sourceMappingURL=deploy-client.js.map