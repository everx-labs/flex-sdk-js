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
    constructor(options) {
        super(options);
    }
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
            const pairDetails = (yield pair.runLocalGetDetails()).output;
            const price_denom = Number(pairDetails.price_denum);
            const price_num = Math.floor(options.price * price_denom);
            const xchgPriceCode = (yield pair.runLocalGetPriceXchgCode({ salted: false })).output.value0;
            const priceSalt = (yield pair.runLocalGetPriceXchgSalt()).output.value0;
            const amount = options.amount * Math.pow(10, pairDetails.major_tip3cfg.decimals);
            const evers = 3e9;
            const order_id = Math.floor(Date.now() / 1000);
            const price = {
                num: price_num.toString(),
                denum: price_denom.toString(),
            };
            const lend_balance = (yield flex.runLocalCalcLendTokensForOrder({
                sell: options.sell,
                major_tokens: amount.toString(),
                price,
            })).output.value0;
            const lend_finish_time = Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
            yield account.runMakeOrder({
                _answer_id: 0,
                evers: evers.toString(),
                lend_balance,
                lend_finish_time,
                price_num: price_num.toString(),
                unsalted_price_code: xchgPriceCode,
                salt: priceSalt,
                args: {
                    sell: options.sell,
                    immediate_client: true,
                    post_order: true,
                    amount: amount.toString(),
                    client_addr: options.clientAddress,
                    user_id: "0x" + options.userId,
                    order_id: order_id.toString(),
                },
            });
        });
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map