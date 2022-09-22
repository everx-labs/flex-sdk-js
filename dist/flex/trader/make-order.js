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
exports.generateRandomOrderId = exports.makeOrder = void 0;
const exchange_1 = require("../exchange");
const core_1 = require("@eversdk/core");
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
const web3_1 = require("../web3");
const flex_1 = require("../flex");
function makeOrder(flex, options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const defaults = flex.config.trader.order;
        const pair = yield flex.evr.accounts.get(contracts_1.XchgPairAccount, options.marketAddress);
        const flexAccount = yield flex.getFlexAccount();
        const pairDetails = (yield pair.getDetails()).output;
        const wallet = yield (0, internals_1.getWallet)(flex.evr, {
            marketAddress: options.marketAddress,
            sell: options.sell,
            clientAddress: options.clientAddress,
            trader: options.trader,
        });
        const priceCode = (yield pair.getPriceXchgCode({ salted: false })).output.value0;
        const priceSalt = (yield pair.getPriceXchgSalt()).output.value0;
        const amount = (0, web3_1.toUnits)(options.amount, pairDetails.major_tip3cfg.decimals);
        const orderId = options.orderId !== undefined
            ? options.orderId
            : yield generateRandomOrderId(flex.evr);
        const price = (0, flex_1.priceToUnits)(options.price, pairDetails.price_denum, pairDetails.major_tip3cfg.decimals, pairDetails.minor_tip3cfg.decimals);
        const lend_balance = (yield flexAccount.calcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount,
            price,
        })).output.value0;
        const finishTime = (_a = options.finishTime) !== null && _a !== void 0 ? _a : Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
        if (BigInt(amount) < BigInt(pairDetails.min_amount)) {
            throw new Error(`Specified amount ${amount} is less that market min amount ${pairDetails.min_amount}`);
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
                    immediate_client: mode === exchange_1.MakeOrderMode.IOP || mode === exchange_1.MakeOrderMode.IOC,
                    post_order: mode === exchange_1.MakeOrderMode.IOP || mode === exchange_1.MakeOrderMode.POST,
                    amount,
                    client_addr: options.clientAddress,
                    user_id: "0x" + options.trader.id,
                    order_id: orderId,
                },
            });
            flex.evr.log.debug(`${JSON.stringify(result.transactionTree, undefined, "   ")}\n`);
            return {
                orderId: orderId.toString(),
                transactionId: result.transaction.id,
            };
        }
        catch (err) {
            throw resolveError(err, {
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
function resolveError(original, context) {
    var _a, _b;
    if (original.code !== core_1.ProcessingErrorCode.MessageExpired) {
        return original;
    }
    const localCode = (_b = (_a = original.data) === null || _a === void 0 ? void 0 : _a.local_error) === null || _b === void 0 ? void 0 : _b.code;
    const { O, M, T, W, } = context;
    let message;
    switch (localCode) {
        case core_1.TvmErrorCode.AccountCodeMissing:
            message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.AccountMissing:
            message = `Error occurred while performing operation ${O} on ${M} market. You need to activate ${T} wallet ${W} to trade on this Market.`;
            break;
        case core_1.TvmErrorCode.AccountFrozenOrDeleted:
            message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.LowBalance:
            message = `Error occurred while performing ${O} on ${M} Market. You need to top-up ${T} wallet ${W} to pay fees.`;
            break;
        default:
            message = `Error occurred while performing ${O} on ${M}. Ask DEX Support team for help.`;
            break;
    }
    const flexErr = new Error(message);
    flexErr.originalError = original;
    return flexErr;
}
function generateRandomOrderId(evr) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield evr.sdk.crypto.generate_random_bytes({
            length: 8,
        });
        return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
    });
}
exports.generateRandomOrderId = generateRandomOrderId;
//# sourceMappingURL=make-order.js.map