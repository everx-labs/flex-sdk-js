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
exports.Trader = void 0;
const make_order_1 = require("./make-order");
const cancel_order_1 = require("./cancel-order");
const query_1 = require("./query");
const deploy_trader_1 = require("./deploy-trader");
const deploy_ever_wallet_1 = require("./deploy-ever-wallet");
const deploy_tip3_wallet_1 = require("./deploy-tip3-wallet");
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
    static deployTip3Wallet(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_tip3_wallet_1.deployTraderTip3Wallet)(flex, options);
        });
    }
    static makeOrder(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, make_order_1.makeOrder)(flex, options);
        });
    }
    static cancelOrder(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, cancel_order_1.cancelOrder)(flex.evr, options);
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
}
exports.Trader = Trader;
//# sourceMappingURL=index.js.map