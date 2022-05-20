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
exports.Client = void 0;
const flex_1 = require("./flex");
const contracts_1 = require("../contracts");
const account_ex_1 = require("../contracts/account-ex");
class Client extends flex_1.FlexBoundLazy {
    static deploy(options, bindFlex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { everWallet } = options;
            const flex = bindFlex !== null && bindFlex !== void 0 ? bindFlex : flex_1.Flex.default;
            const signer = yield flex.resolveSigner(options.signer);
            const publicKey = yield flex.signerPublicKey(signer);
            const { userConfig } = yield flex.getState();
            const pubkey = `0x${publicKey}`;
            const address = (yield userConfig.runLocalGetFlexClientAddr({
                pubkey,
            })).output.value0;
            const isActive = yield account_ex_1.AccountEx.isActive(address, flex.client);
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
            return new Client({
                address,
                signer,
            }, flex);
        });
    }
    deployUser(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.flex.resolveSigner(options.signer);
            const publicKey = `0x${yield this.flex.signerPublicKey(signer)}`;
            const { account: clientAccount } = yield this.getState();
            yield clientAccount.runDeployIndex({
                user_id: options.id,
                lend_pubkey: publicKey,
                name: options.name,
                evers_all: options.eversAll,
                evers_to_auth_idx: options.eversAuth,
                min_refill: options.minRefill,
                refill_wallet: options.refillWallet,
            });
            const address = (yield clientAccount.runLocalGetUserIdIndex({
                user_id: options.id,
            })).output.value0;
            return new contracts_1.UserIdIndexAccount({
                address,
                signer,
                log: this.log,
            });
        });
    }
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                account: new contracts_1.FlexClientAccount({
                    client: this.flex.client,
                    address: options.address,
                }),
            };
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map