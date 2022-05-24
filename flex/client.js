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
const wallet_1 = require("./wallet");
const helpers_1 = require("../contracts/helpers");
class Client extends flex_1.FlexBoundLazy {
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
    deployUser(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.flex.resolveSigner(options.signer);
            const publicKey = `0x${yield this.flex.signerPublicKey(signer)}`;
            const { account: clientAccount } = yield this.getState();
            const address = (yield clientAccount.getUserIdIndex({
                user_id: options.id,
            })).output.value0;
            if (!(yield account_ex_1.AccountEx.isActive(address, this.flex.client))) {
                yield clientAccount.runDeployIndex({
                    user_id: options.id,
                    lend_pubkey: publicKey,
                    name: options.name,
                    evers_all: options.eversAll,
                    evers_to_auth_idx: options.eversAuth,
                    min_refill: options.minRefill,
                    refill_wallet: options.refillWallet,
                });
            }
            return new contracts_1.UserIdIndexAccount({
                address,
                signer,
                log: this.log,
            });
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
    getTradingWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientAddress = yield this.getAddress();
            const pairDetails = yield options.market.getPairDetails();
            const token = new contracts_1.WrapperAccount({
                client: this.flex.client,
                address: options.sell
                    ? pairDetails.major_tip3cfg.root_address
                    : pairDetails.minor_tip3cfg.root_address,
                log: this.log,
            });
            const walletSigner = yield this.flex.resolveSigner(options.walletSigner);
            const walletAddress = (yield token.getWalletAddress({
                pubkey: `0x${options.userId}`,
                owner: clientAddress,
            })).output.value0;
            return new contracts_1.FlexWalletAccount({
                client: this.flex.client,
                address: walletAddress,
                signer: walletSigner,
                log: this.log,
            });
        });
    }
    makeOrder(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const pair = yield options.market.getPair();
            const flex = (yield this.flex.getState()).flex;
            const client = (yield this.getState()).account;
            const pairDetails = (yield pair.getDetails()).output;
            const wallet = yield this.getTradingWallet(options);
            const priceCode = (yield pair.getPriceXchgCode({ salted: false })).output.value0;
            const priceSalt = (yield pair.getPriceXchgSalt()).output.value0;
            const amount = (0, helpers_1.amountToUnits)(options.amount, pairDetails.major_tip3cfg.decimals);
            const orderId = options.orderId !== undefined
                ? options.orderId
                : Math.floor(Date.now() / 1000);
            const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
            const lend_balance = (yield flex.calcLendTokensForOrder({
                sell: options.sell,
                major_tokens: amount,
                price,
            })).output.value0;
            const lend_finish_time = (_a = options.finishTime) !== null && _a !== void 0 ? _a : Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
            yield wallet.runMakeOrder({
                _answer_id: 0,
                evers: (_b = options.evers) !== null && _b !== void 0 ? _b : 3e9,
                lend_balance,
                lend_finish_time,
                price_num: price.num,
                unsalted_price_code: priceCode,
                salt: priceSalt,
                args: {
                    sell: options.sell,
                    immediate_client: true,
                    post_order: true,
                    amount,
                    client_addr: yield client.getAddress(),
                    user_id: "0x" + options.userId,
                    order_id: orderId,
                },
            });
            const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
            const priceAddress = (yield client.getPriceXchgAddress({
                price_num: price.num,
                salted_price_code: saltedPriceCode,
            })).output.value0;
            const priceAccount = new contracts_1.PriceXchgAccount({
                client: this.flex.client,
                log: this.log,
                address: priceAddress,
            });
            const priceDetails = (yield priceAccount.getDetails()).output;
            const order = (options.sell
                ? priceDetails.sells
                : priceDetails.buys).find(x => Number(x.order_id) === orderId);
            if (!order) {
                throw Error("Make order failed: order isn't presented in price.");
            }
            return order;
        });
    }
    cancelOrder(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = yield this.getTradingWallet(options);
            const pairDetails = yield options.market.getPairDetails();
            const pair = yield options.market.getPair();
            const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
            const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
            const priceAddress = (yield (yield this.getState()).account.getPriceXchgAddress({
                price_num: price.num,
                salted_price_code: saltedPriceCode,
            })).output.value0;
            yield wallet.runCancelOrder({
                order_id: options.orderId,
                sell: options.sell,
                price: priceAddress,
                evers: (_a = options.evers) !== null && _a !== void 0 ? _a : 3e9,
            });
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map