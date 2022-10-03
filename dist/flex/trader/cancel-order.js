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
exports.cancelOrder = void 0;
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
const flex_1 = require("../flex");
function cancelOrder(evr, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const pair = yield evr.accounts.get(contracts_1.XchgPairAccount, options.marketAddress);
        const pairDetails = (yield pair.getDetails()).output;
        const price = (0, flex_1.priceToUnits)(options.price, pairDetails.price_denum, pairDetails.major_tip3cfg.decimals, pairDetails.minor_tip3cfg.decimals);
        const priceDetails = yield getPriceDetails(evr, options.clientAddress, pair, price.num, options.price);
        let sell;
        if (findOrder(options.orderId, priceDetails.sells)) {
            sell = true;
        }
        else if (findOrder(options.orderId, priceDetails.buys)) {
            sell = false;
        }
        else {
            throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
        }
        const wallet = yield (0, internals_1.getWallet)(evr, {
            marketAddress: options.marketAddress,
            sell,
            clientAddress: options.clientAddress,
            trader: options.trader,
        });
        const transaction = (yield wallet.runCancelOrder({
            order_id: options.orderId,
            sell,
            price: priceDetails.address,
            evers: (_a = options.evers) !== null && _a !== void 0 ? _a : 3e9,
        }, {
            skipTransactionTree: true,
        })).transaction;
        const result = {
            transactionId: transaction.id,
        };
        if ((_b = options.waitForOrderbookUpdate) !== null && _b !== void 0 ? _b : false) {
            result.orderbookTransactionId = (yield evr.accounts.waitForDerivativeTransactionOnAccount({
                originTransactionId: transaction.id,
                accountAddress: priceDetails.address,
            })).id;
        }
        return result;
    });
}
exports.cancelOrder = cancelOrder;
function findOrder(id, orders) {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}
function getPriceDetails(evr, client, pair, priceNum, price) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
        const clientAccount = yield evr.accounts.get(contracts_1.FlexClientAccount, client);
        const address = (yield clientAccount.getPriceXchgAddress({
            price_num: priceNum,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        if (!(yield evr.accounts.isActive(address))) {
            throw new Error(`Orderbook's price account [${address}] does not exist. Please check that the price (${JSON.stringify(price)}) is correct.`);
        }
        const priceAccount = yield evr.accounts.get(contracts_1.PriceXchgAccount, address);
        const details = (yield priceAccount.getDetails()).output;
        return Object.assign({ address }, details);
    });
}
//# sourceMappingURL=cancel-order.js.map