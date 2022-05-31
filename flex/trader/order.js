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
exports.cancelOrder = exports.makeOrder = void 0;
const flex_1 = require("../flex");
const helpers_1 = require("../../contracts/helpers");
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
function makeOrder(options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const flex = options.flex;
        const defaults = flex.config.trader.order;
        const pair = yield flex.getAccount(contracts_1.XchgPairAccount, options.market);
        const flexAccount = yield flex.getFlexAccount();
        const pairDetails = (yield pair.getDetails()).output;
        const wallet = yield (0, internals_1.getWallet)({
            flex: options.flex,
            market: options.market,
            sell: options.sell,
            client: options.client,
            trader: options.trader,
            traderSigner: options.traderSigner,
        });
        const priceCode = (yield pair.getPriceXchgCode({ salted: false })).output.value0;
        const priceSalt = (yield pair.getPriceXchgSalt()).output.value0;
        const amount = (0, helpers_1.amountToUnits)(options.amount, pairDetails.major_tip3cfg.decimals);
        const orderId = options.orderId !== undefined
            ? options.orderId
            : yield (0, internals_1.generateRandomOrderId)(flex.web3);
        const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
        const lend_balance = (yield flexAccount.calcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount,
            price,
        })).output.value0;
        const finishTime = (_a = options.finishTime) !== null && _a !== void 0 ? _a : Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
        const minAmount = Number(pairDetails.min_amount) / Math.pow(10, Number(pairDetails.major_tip3cfg.decimals));
        if (options.amount < minAmount) {
            throw new Error(`Specified amount ${options.amount} is less that market min amount ${minAmount}`);
        }
        const mode = (_b = options.mode) !== null && _b !== void 0 ? _b : defaults.mode;
        try {
            const result = yield wallet.runMakeOrder({
                _answer_id: 0,
                evers: (_c = options.evers) !== null && _c !== void 0 ? _c : defaults.evers,
                lend_balance,
                lend_finish_time: finishTime,
                price_num: price.num,
                unsalted_price_code: priceCode,
                salt: priceSalt,
                args: {
                    sell: options.sell,
                    immediate_client: mode === flex_1.MakeOrderMode.IOP || mode === flex_1.MakeOrderMode.IOC,
                    post_order: mode === flex_1.MakeOrderMode.IOP || mode === flex_1.MakeOrderMode.POST,
                    amount,
                    client_addr: options.client,
                    user_id: "0x" + options.trader,
                    order_id: orderId,
                },
            });
            flex.log.debug(`${JSON.stringify(result.transactionTree, undefined, "   ")}\n`);
            return {
                orderId: orderId.toString(),
                transactionId: result.transaction.id,
            };
        }
        catch (err) {
            throw (0, internals_1.resolveError)(err, {
                O: options.sell ? "sell" : "buy",
                M: `${pairDetails.major_tip3cfg.symbol}/${pairDetails.minor_tip3cfg.symbol}`,
                T: options.sell
                    ? pairDetails.major_tip3cfg.symbol
                    : pairDetails.minor_tip3cfg.symbol,
                W: yield wallet.getAddress(),
            });
        }
    });
}
exports.makeOrder = makeOrder;
function cancelOrder(options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const pair = yield options.flex.getAccount(contracts_1.XchgPairAccount, options.market);
        const pairDetails = (yield pair.getDetails()).output;
        const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
        const priceDetails = yield (0, internals_1.getPriceDetails)(options.flex, options.client, pair, price.num);
        let sell;
        if ((0, internals_1.findOrder)(options.orderId, priceDetails.sells)) {
            sell = true;
        }
        else if ((0, internals_1.findOrder)(options.orderId, priceDetails.buys)) {
            sell = false;
        }
        else {
            throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
        }
        const wallet = yield (0, internals_1.getWallet)({
            flex: options.flex,
            market: options.market,
            sell,
            client: options.client,
            trader: options.traderId,
            traderSigner: options.traderSigner,
        });
        yield wallet.runCancelOrder({
            order_id: options.orderId,
            sell,
            price: priceDetails.address,
            evers: (_a = options.evers) !== null && _a !== void 0 ? _a : 3e9,
        });
    });
}
exports.cancelOrder = cancelOrder;
//# sourceMappingURL=order.js.map