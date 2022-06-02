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
const helpers_1 = require("../../contracts/helpers");
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
function cancelOrder(flex, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const pair = yield flex.getAccount(contracts_1.XchgPairAccount, options.market);
        const pairDetails = (yield pair.getDetails()).output;
        const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
        const priceDetails = yield getPriceDetails(flex, options.client, pair, price.num);
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
        const wallet = yield (0, internals_1.getWallet)(flex, {
            market: options.market,
            sell,
            client: options.client,
            trader: options.trader,
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
function findOrder(id, orders) {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}
function getPriceDetails(flex, client, pair, priceNum) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
        const clientAccount = yield flex.getAccount(contracts_1.FlexClientAccount, client);
        const address = (yield clientAccount.getPriceXchgAddress({
            price_num: priceNum,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        const priceAccount = yield flex.getAccount(contracts_1.PriceXchgAccount, address);
        const details = (yield priceAccount.getDetails()).output;
        return Object.assign({ address }, details);
    });
}
//# sourceMappingURL=cancel-order.js.map