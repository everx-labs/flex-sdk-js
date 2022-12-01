"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.cancelOrderFinalized = exports.makeOrderFinalized = exports.Trader = exports.CancelOrderStatus = exports.MakeOrderStatus = void 0;
const make_order_1 = require("./make-order");
Object.defineProperty(exports, "MakeOrderStatus", { enumerable: true, get: function () { return make_order_1.MakeOrderStatus; } });
const cancel_order_1 = require("./cancel-order");
Object.defineProperty(exports, "CancelOrderStatus", { enumerable: true, get: function () { return cancel_order_1.CancelOrderStatus; } });
const query_1 = require("./query");
const deploy_trader_1 = require("./deploy-trader");
const deploy_ever_wallet_1 = require("./deploy-ever-wallet");
const deploy_tip31_wallet_1 = require("./deploy-tip31-wallet");
const get_index_info_1 = require("./get-index-info");
const top_up_1 = require("./top-up");
__exportStar(require("./types"), exports);
class Trader {
    static deploy(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_trader_1.deployTrader)(flex, options);
        });
    }
    static deployEverWallet(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_ever_wallet_1.deployTraderEverWallet)(flex, options);
        });
    }
    static deployTip31Wallet(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_tip31_wallet_1.deployTraderTip31Wallet)(flex, options);
        });
    }
    static makeOrder(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, make_order_1.makeOrder)(flex, options);
        });
    }
    static waitForMakeOrder(flex, result) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, make_order_1.waitForMakeOrder)(flex.evr, result);
        });
    }
    static cancelOrder(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, cancel_order_1.cancelOrder)(flex.evr, options);
        });
    }
    static cancelAllOrders(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, cancel_order_1.cancelAllOrders)(flex, options);
        });
    }
    static waitForCancelOrder(flex, result) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, cancel_order_1.waitForCancelOrder)(flex.evr, result);
        });
    }
    static queryOrders(flex, trader) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, query_1.queryOrders)(flex, trader);
        });
    }
    static queryTrades(flex, trader) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, query_1.queryTrades)(flex, trader);
        });
    }
    static queryWallets(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, query_1.queryWallets)(flex, options);
        });
    }
    static getIndexInfo(flex, clientAddress, traderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, get_index_info_1.getIndexInfo)(flex.evr.accounts, clientAddress, traderId);
        });
    }
    static topUp(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, top_up_1.topUp)(flex, options);
        });
    }
    static getTopUpInfo(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, top_up_1.getTopUpInfo)(flex, options);
        });
    }
}
exports.Trader = Trader;
function makeOrderFinalized(result) {
    return result.status === make_order_1.MakeOrderStatus.SUCCESS || result.status === make_order_1.MakeOrderStatus.ERROR;
}
exports.makeOrderFinalized = makeOrderFinalized;
function cancelOrderFinalized(result) {
    return result.status === cancel_order_1.CancelOrderStatus.SUCCESS || result.status === cancel_order_1.CancelOrderStatus.ERROR;
}
exports.cancelOrderFinalized = cancelOrderFinalized;
//# sourceMappingURL=index.js.map