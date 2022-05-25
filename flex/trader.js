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
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const defaults = this.flex.config.trader.order;
            const market = market_1.Market.resolve(options.market);
            const pair = (yield market.getState()).pair;
            const flex = (yield this.flex.getState()).flex;
            const client = (yield this.client.getState()).account;
            const pairDetails = (yield pair.getDetails()).output;
            const wallet = yield this.getWallet(market, options.sell);
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
            const mode = (_b = options.mode) !== null && _b !== void 0 ? _b : defaults.mode;
            yield wallet.runMakeOrder({
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
                    client_addr: yield client.getAddress(),
                    user_id: "0x" + this.id,
                    order_id: orderId,
                },
            });
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
            const pair = (yield market.getState()).pair;
            const pairDetails = (yield pair.getDetails()).output;
            const price = (0, helpers_1.priceToUnits)(options.price, pairDetails.price_denum);
            const priceDetails = yield this.getPriceDetails(pair, price.num);
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
            const wallet = yield this.getWallet(market, sell);
            yield wallet.runCancelOrder({
                order_id: options.orderId,
                sell,
                price: priceDetails.address,
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
                : `token: "${typeof token === "string"
                    ? token
                    : yield (yield token.getState()).wrapper.getAddress()}",`;
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
            return result.wallets.map(client_1.walletInfoFromApi);
        });
    }
    getPriceDetails(pair, priceNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
            const address = (yield (yield this.client.getState()).account.getPriceXchgAddress({
                price_num: priceNum,
                salted_price_code: saltedPriceCode,
            })).output.value0;
            const priceAccount = new contracts_1.PriceXchgAccount({
                client: this.flex.web3,
                log: this.flex.log,
                address,
            });
            const details = (yield priceAccount.getDetails()).output;
            return Object.assign({ address }, details);
        });
    }
    getWallet(market, sell) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientAddress = yield (yield this.client.getState()).account.getAddress();
            const pair = (yield market.getState()).pair;
            const pairDetails = (yield pair.getDetails()).output;
            const token = new contracts_1.WrapperAccount({
                client: this.flex.web3,
                address: sell
                    ? pairDetails.major_tip3cfg.root_address
                    : pairDetails.minor_tip3cfg.root_address,
                log: this.flex.log,
            });
            const signer = yield this.flex.signers.resolve(this.signer);
            const address = (yield token.getWalletAddress({
                pubkey: `0x${this.id}`,
                owner: clientAddress,
            })).output.value0;
            return new contracts_1.FlexWalletAccount({
                client: this.flex.web3,
                address,
                signer,
                log: this.flex.log,
            });
        });
    }
}
exports.Trader = Trader;
function findOrder(id, orders) {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}
//# sourceMappingURL=trader.js.map