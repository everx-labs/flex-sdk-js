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
const token_1 = require("./token");
const wallet_1 = require("./wallet");
class Client extends flex_1.FlexBoundLazy {
    static resolve(from, flex) {
        return from instanceof Client
            ? from
            : new Client(typeof from === "string" ? { address: from } : from, flex);
    }
    static deploy(options, bindFlex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { everWallet } = options;
            const flex = bindFlex !== null && bindFlex !== void 0 ? bindFlex : flex_1.Flex.default;
            const signer = yield flex.resolveSigner(options.signer);
            const publicKey = yield flex.signerPublicKey(signer);
            const { userConfig } = yield flex.getState();
            const pubkey = `0x${publicKey}`;
            const address = (yield userConfig.getFlexClientAddr({
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
    deployTrader(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { account: clientAccount } = yield this.getState();
            const address = (yield clientAccount.getUserIdIndex({
                user_id: options.id,
            })).output.value0;
            if (!(yield account_ex_1.AccountEx.isActive(address, this.flex.client))) {
                yield clientAccount.runDeployIndex({
                    user_id: options.id,
                    lend_pubkey: options.pubkey,
                    name: options.name,
                    evers_all: options.eversAll,
                    evers_to_auth_idx: options.eversAuth,
                    min_refill: options.minRefill,
                    refill_wallet: options.refillWallet,
                });
            }
        });
    }
    deployWallet(options, useFlex) {
        return __awaiter(this, void 0, void 0, function* () {
            const flex = useFlex !== null && useFlex !== void 0 ? useFlex : flex_1.Flex.default;
            const signer = yield flex.resolveSigner(options.signer);
            const publicKey = yield flex.signerPublicKey(signer);
            const { account: clientAccount } = yield this.getState();
            const clientAddress = yield clientAccount.getAddress();
            const { wrapper } = yield options.token.getState();
            const address = (yield wrapper.getWalletAddress({
                pubkey: `0x${publicKey}`,
                owner: clientAddress,
            })).output.value0;
            return new wallet_1.Wallet({
                address,
                signer,
            }, flex);
        });
    }
    static mapWalletInfo(x) {
        return {
            address: x.address,
            clientAddress: x.clientAddress,
            traderId: x.userId,
            traderPublicKey: x.dappPubkey,
            token: x.token,
            nativeCurrencyBalance: x.nativeCurrencyBalance,
            totalBalance: x.totalBalance,
            availableBalance: x.availableBalance,
            balanceInOrders: x.balanceInOrders,
            unsaltedPriceCodeHash: x.unsaltedPriceCodeHash,
            cursor: x.cursor,
        };
    }
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                account: new contracts_1.FlexClientAccount({
                    client: this.flex.client,
                    address: options.address,
                    signer: yield this.flex.resolveSigner(options.signer),
                }),
            };
        });
    }
    queryWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.flex.query(`
            wallets(
                clientAddress: "${this.options.address}"
            ) {
                address
                clientAddress
                userId
                dappPubkey
                token { ${token_1.Token.queryFields()} }
                nativeCurrencyBalance
                totalBalance
                availableBalance
                balanceInOrders
                unsaltedPriceCodeHash
                cursor
            }
        `);
            return result.wallets.map(Client.mapWalletInfo);
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (yield this.getState()).account.getDetails()).output;
        });
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.getState()).account.getAddress();
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map