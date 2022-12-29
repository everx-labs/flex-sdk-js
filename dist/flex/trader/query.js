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
exports.queryWallets = exports.queryTrades = exports.queryOrders = void 0;
const market_1 = require("../market");
const token_1 = require("../token");
const client_1 = require("../client");
function orderInfoInfoFromApi(result) {
    return {
        orderId: result.orderId,
        traderId: result.userId,
        price: result.price,
        priceNum: result.priceNum,
        priceScale: result.priceScale,
        amountProcessed: result.amountProcessed,
        amountLeft: result.amountLeft,
        side: result.side,
        finishTime: result.finishTime,
        pair: result.pair,
    };
}
function queryOrders(flex, trader) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield flex.query(`
            userOrders(userId:"0x${trader}") {
                pair { ${market_1.Market.queryFields()} }
                side
                price
                priceNum
                priceScale
                orderId
                userId
                amountProcessed
                amountLeft
                finishTime
            }
        `);
        return result.userOrders.map(orderInfoInfoFromApi);
    });
}
exports.queryOrders = queryOrders;
function tradeFromApi(result) {
    return {
        pair: result.pair,
        price: result.price,
        amount: result.amount,
        time: result.time,
        side: result.side,
        liquidity: result.liquidity,
        fees: result.fees,
        feesToken: result.feesToken,
        userOrderId: result.userOrderId,
        cursor: result.cursor,
    };
}
function queryTrades(flex, trader) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield flex.query(`
        userTrades(userId:"0x${trader}") {
            pair { ${market_1.Market.queryFields()} }
            price
            amount
            time
            side
            liquidity
            fees
            feesToken { ${token_1.Token.queryFields()} }
            userOrderId 
            cursor
        }
    `);
        return result.userTrades.map(tradeFromApi);
    });
}
exports.queryTrades = queryTrades;
function queryWallets(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield flex.query(`
        wallets(
            clientAddress: "${options.clientAddress}"
            ${options.traderId ? `userId: "0x${options.traderId}"` : ""}
            ${options.token ? `token: "${options.token}",` : ""}
        ) {
            address
            clientAddress
            userId
            dappPubkey
            token { ${token_1.Token.queryFields()} }
            nativeCurrencyBalance
            nativeCurrencyBalanceUnits
            totalBalance
            totalBalanceUnits
            availableBalance
            availableBalanceUnits
            balanceInOrders
            balanceInOrdersUnits
            unsaltedPriceCodeHash
            cursor
        }
    `);
        return result.wallets.map(client_1.walletInfoFromApi);
    });
}
exports.queryWallets = queryWallets;
//# sourceMappingURL=query.js.map