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
exports.Trader = exports.TradeLiquidity = exports.TradeSide = void 0;
const market_1 = require("./market");
const client_1 = require("./client");
const flex_1 = require("./flex");
const helpers_1 = require("../contracts/helpers");
const contracts_1 = require("../contracts");
const token_1 = require("./token");
var TradeSide;
(function (TradeSide) {
    TradeSide["SELL"] = "SELL";
    TradeSide["BUY"] = "BUY";
})(TradeSide = exports.TradeSide || (exports.TradeSide = {}));
var TradeLiquidity;
(function (TradeLiquidity) {
    TradeLiquidity["TAKER"] = "TAKER";
    TradeLiquidity["MAKER"] = "MAKER";
})(TradeLiquidity = exports.TradeLiquidity || (exports.TradeLiquidity = {}));
class Trader {
    constructor(options, flex) {
        this.flex = flex !== null && flex !== void 0 ? flex : flex_1.Flex.default;
        this.client = client_1.Client.resolve(options.client);
        this.id = options.id;
        this.signer = options.signer;
    }
    makeOrder(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const market = market_1.Market.resolve(options.market);
            const pair = yield market.getPair();
            const flex = (yield this.flex.getState()).flex;
            const client = (yield this.client.getState()).account;
            const pairDetails = (yield pair.getDetails()).output;
            const wallet = yield this.getWallet(options);
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
            const finishTime = (_a = options.finishTime) !== null && _a !== void 0 ? _a : Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
            yield wallet.runMakeOrder({
                _answer_id: 0,
                evers: (_b = options.evers) !== null && _b !== void 0 ? _b : 3e9,
                lend_balance,
                lend_finish_time: finishTime,
                price_num: price.num,
                unsalted_price_code: priceCode,
                salt: priceSalt,
                args: {
                    sell: options.sell,
                    immediate_client: true,
                    post_order: true,
                    amount,
                    client_addr: yield client.getAddress(),
                    user_id: "0x" + this.id,
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
                log: this.flex.log,
                address: priceAddress,
            });
            const priceDetails = (yield priceAccount.getDetails()).output;
            const order = (options.sell
                ? priceDetails.sells
                : priceDetails.buys).find(x => Number(x.order_id) === orderId);
            if (!order) {
                throw Error("Make order failed: order isn't presented in price.");
            }
            return {
                side: options.sell ? TradeSide.SELL : TradeSide.BUY,
                pair: {
                    address: yield pair.getAddress(),
                },
                orderId: orderId.toString(),
                traderId: this.id,
                finishTime: finishTime,
                price: options.price,
                amountProcessed: options.amount,
                amountLeft: 0,
            };
        });
    }
    cancelOrder(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const market = market_1.Market.resolve(options.market);
            const wallet = yield this.getWallet(options);
            const pairDetails = yield market.getPairDetails();
            const pair = yield market.getPair();
            const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
            const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
            const priceAddress = (yield (yield this.client.getState()).account.getPriceXchgAddress({
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
    queryOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.flex.query(`
            userOrders(userId:"0x${this.id}") {
                pair { ${market_1.Market.queryFields()} }
                side
                price
                orderId
                userId
                amountProcessed
                amountLeft
            }
        `);
            return result.userOrders;
        });
    }
    queryTrades() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.flex.query(`
            userTrades(userId:"0x${this.id}") {
                pair { ${market_1.Market.queryFields()} }
                price
                amount
                time
                side
                liquidity
                fees
                feesToken { ${token_1.Token.queryFields()} } 
                cursor
            }
        `);
            return result.userTrades;
        });
    }
    queryWallets(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenParam = token === undefined
                ? ""
                : `token: "${typeof token === "string" ? token : yield token.getAddress()}",`;
            const result = yield this.flex.query(`
            wallets(
                clientAddress: "${this.client.options.address}",
                userId:"0x${this.id}",
                ${tokenParam}
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
            return result.wallets.map(client_1.Client.mapWalletInfo);
        });
    }
    getWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const market = market_1.Market.resolve(options.market);
            const clientAddress = yield this.client.getAddress();
            const pairDetails = yield market.getPairDetails();
            const token = new contracts_1.WrapperAccount({
                client: this.flex.client,
                address: options.sell
                    ? pairDetails.major_tip3cfg.root_address
                    : pairDetails.minor_tip3cfg.root_address,
                log: this.flex.log,
            });
            const signer = yield this.flex.resolveSigner(this.signer);
            const address = (yield token.getWalletAddress({
                pubkey: `0x${this.id}`,
                owner: clientAddress,
            })).output.value0;
            return new contracts_1.FlexWalletAccount({
                client: this.flex.client,
                address,
                signer,
                log: this.flex.log,
            });
        });
    }
}
exports.Trader = Trader;
//# sourceMappingURL=trader.js.map