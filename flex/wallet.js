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
const helpers_1 = require("../contracts/helpers");
class Wallet extends flex_1.FlexBoundLazy {
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                account: new contracts_1.FlexWalletAccount({
                    client: this.flex.client,
                    address: options.address,
                    signer: yield this.flex.resolveSigner(options.signer),
                }),
            };
        });
    }
    makeOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pair } = yield options.market.getState();
            const { flex } = yield this.flex.getState();
            const { account } = yield this.getState();
            const { account: client } = yield options.client.getState();
            const pairDetails = (yield pair.runLocalGetDetails()).output;
            const walletDetails = (yield account.runLocalGetDetails()).output;
            const sell = walletDetails.root_address === pairDetails.major_tip3cfg.root_address;
            const priceCode = (yield pair.runLocalGetPriceXchgCode({ salted: false })).output.value0;
            const priceSalt = (yield pair.runLocalGetPriceXchgSalt()).output.value0;
            const amount = (0, helpers_1.amountToUnits)(options.amount, pairDetails.major_tip3cfg.decimals);
            const evers = 3e9;
            const orderId = Math.floor(Date.now() / 1000);
            const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
            const lend_balance = (yield flex.runLocalCalcLendTokensForOrder({
                sell,
                major_tokens: amount,
                price,
            })).output.value0;
            const lend_finish_time = Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
            yield account.runMakeOrder({
                _answer_id: 0,
                evers: evers.toString(),
                lend_balance,
                lend_finish_time,
                price_num: price.num,
                unsalted_price_code: priceCode,
                salt: priceSalt,
                args: {
                    sell,
                    immediate_client: true,
                    post_order: true,
                    amount,
                    client_addr: yield client.getAddress(),
                    user_id: "0x" + options.userId,
                    order_id: orderId,
                },
            });
            const saltedPriceCode = (yield pair.runLocalGetPriceXchgCode({ salted: true })).output.value0;
            const priceAddress = (yield client.runLocalGetPriceXchgAddress({
                price_num: price.num,
                salted_price_code: saltedPriceCode,
            })).output.value0;
            const priceAccount = new contracts_1.PriceXchgAccount({
                client: this.flex.client,
                log: this.log,
                address: priceAddress,
            });
            const priceDetails = (yield priceAccount.runLocalGetDetails()).output;
            const order = (sell
                ? priceDetails.sells
                : priceDetails.buys).find(x => Number(x.order_id) === orderId);
            if (!order) {
                throw Error("Make order failed: order isn't presented in price.");
            }
            return order;
        });
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map