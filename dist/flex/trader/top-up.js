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
exports.getTopUpInfo = exports.topUp = void 0;
const web3_1 = require("../web3");
const core_1 = require("@eversdk/core");
const utils_1 = require("../web3/utils");
function toNativeUnits(value) {
    return BigInt((0, web3_1.toUnits)(value, web3_1.Evr.NATIVE_DECIMALS));
}
function getTopupPlan(flex, everWallet, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const everWalletAddress = yield everWallet.getAddress();
        const clientAccount = yield flex.getCachedFlexClient(options.client);
        const userId = (0, web3_1.uint256)(options.id);
        const indexAddress = (yield clientAccount.getUserIdIndex({
            user_id: userId,
        })).output.value0;
        const addresses = [everWalletAddress, indexAddress];
        const wallets = yield flex.getCachedTraderWallets(options.client, options.id);
        for (const wallet of wallets) {
            addresses.push(wallet.address);
        }
        const balances = yield flex.evr.accounts.getBalancesUnits(addresses);
        const plan = {
            everWalletBalance: BigInt(0),
            value: BigInt(0),
            accounts: [],
        };
        const minBalance = toNativeUnits(options.minBalance);
        const topupValue = toNativeUnits(options.value);
        for (const [address, balanceBefore] of balances.entries()) {
            if (address === everWalletAddress) {
                plan.everWalletBalance = balanceBefore;
            }
            else if (balanceBefore < minBalance) {
                const value = minBalance + topupValue - balanceBefore;
                plan.value += value;
                plan.accounts.push({
                    address,
                    balanceBefore,
                    value,
                });
            }
        }
        return plan;
    });
}
function toDecimalEvers(units) {
    return (0, utils_1.decimalFromNumAndDenomAsPowerOf10)(units.toString(), web3_1.Evr.NATIVE_DECIMALS);
}
function topUpResultFromPlan(plan) {
    return {
        everWalletBalanceBefore: toDecimalEvers(plan.everWalletBalance),
        totalTopUpValue: toDecimalEvers(plan.value),
        accounts: plan.accounts.map(acc => ({
            address: acc.address,
            balanceBefore: toDecimalEvers(acc.balanceBefore),
            topUpValue: toDecimalEvers(acc.value),
        })),
    };
}
function topUp(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const everWallet = new web3_1.EverWallet(flex.evr, options.everWallet);
        const plan = yield getTopupPlan(flex, everWallet, options);
        if (plan.value > plan.everWalletBalance + toNativeUnits(1)) {
            const error = new Error(`Ever wallet balance is too low to topup trader balances.`);
            error.code = core_1.TvmErrorCode.LowBalance;
            throw error;
        }
        for (const account of plan.accounts) {
            yield everWallet.topUpUnits(account.address, account.value);
        }
        return topUpResultFromPlan(plan);
    });
}
exports.topUp = topUp;
function getTopUpInfo(flex, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const everWallet = new web3_1.EverWallet(flex.evr, options.everWallet);
        return topUpResultFromPlan(yield getTopupPlan(flex, everWallet, options));
    });
}
exports.getTopUpInfo = getTopUpInfo;
//# sourceMappingURL=top-up.js.map