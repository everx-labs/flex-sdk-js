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
exports.generateRandomOrderId = exports.finalizeMakeOrder = exports.waitForMakeOrder = exports.makeOrder = exports.MakeOrderStatus = void 0;
const exchange_1 = require("../exchange");
const core_1 = require("@eversdk/core");
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
const web3_1 = require("../web3");
const processing_1 = require("./processing");
const utils_1 = require("../web3/utils");
var MakeOrderStatus;
(function (MakeOrderStatus) {
    MakeOrderStatus[MakeOrderStatus["STARTING"] = 0] = "STARTING";
    MakeOrderStatus[MakeOrderStatus["FINALIZING"] = 1] = "FINALIZING";
    MakeOrderStatus[MakeOrderStatus["SUCCESS"] = 2] = "SUCCESS";
    MakeOrderStatus[MakeOrderStatus["ERROR"] = 3] = "ERROR";
})(MakeOrderStatus = exports.MakeOrderStatus || (exports.MakeOrderStatus = {}));
function makeOrderError(orderId, error) {
    return {
        orderId,
        status: MakeOrderStatus.ERROR,
        error: Object.assign(Object.assign({}, error), { message: error.message }),
    };
}
function makeOrder(flex, options) {
    var _a, _b, _c, _d;
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
        const saltedPriceCode = (yield pair.getPriceXchgCode({ salted: true })).output.value0;
        const priceSalt = (yield pair.getPriceXchgSalt()).output.value0;
        const amount = (0, web3_1.toUnits)(options.amount, pairDetails.major_tip3cfg.decimals);
        const orderId = options.orderId !== undefined ? options.orderId : yield generateRandomOrderId(flex.evr);
        const price = (0, utils_1.priceToUnits)(options.price, pairDetails.price_denum, pairDetails.major_tip3cfg.decimals, pairDetails.minor_tip3cfg.decimals);
        const lend_balance = (yield flexAccount.calcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount,
            price,
        })).output.value0;
        const finishTime = (_a = options.finishTime) !== null && _a !== void 0 ? _a : Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);
        if (BigInt(amount) < BigInt(pairDetails.min_amount)) {
            throw new Error(`Specified amount ${amount} is less that market min amount ${pairDetails.min_amount}`);
        }
        const clientAccount = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, options.clientAddress);
        const priceAddress = (yield clientAccount.getPriceXchgAddress({
            price_num: price.num,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        const walletAddress = yield wallet.getAddress();
        const mode = (_b = options.mode) !== null && _b !== void 0 ? _b : defaults.mode;
        let result = undefined;
        let walletTransactionId = undefined;
        try {
            walletTransactionId = (yield wallet.runMakeOrder({
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
            }, {
                skipTransactionTree: true,
                onProcessing: evt => {
                    if (evt.type === "WillSend") {
                        result = {
                            orderId: orderId.toString(),
                            status: MakeOrderStatus.STARTING,
                            params: {
                                isSell: options.sell,
                                majorSymbol: pairDetails.major_tip3cfg.symbol,
                                minorSymbol: pairDetails.minor_tip3cfg.symbol,
                                walletAddress,
                                priceAddress,
                            },
                            message: evt.message,
                            shard_block_id: evt.shard_block_id,
                        };
                    }
                },
            })).transaction.id;
        }
        catch (err) {
            if (!result) {
                throw err;
            }
            return resolveStartingError(err, result);
        }
        if (!result) {
            throw new Error("Message did not sent.");
        }
        return yield finalizeMakeOrder(flex.evr, result, walletTransactionId, (_d = options.waitForOrderbookUpdate) !== null && _d !== void 0 ? _d : false);
    });
}
exports.makeOrder = makeOrder;
function waitForMakeOrder(evr, result) {
    return __awaiter(this, void 0, void 0, function* () {
        let walletTransactionId = undefined;
        switch (result.status) {
            case MakeOrderStatus.SUCCESS:
            case MakeOrderStatus.ERROR:
                return result;
            case MakeOrderStatus.STARTING:
                try {
                    walletTransactionId = (yield evr.sdk.processing.wait_for_transaction({
                        message: result.message,
                        shard_block_id: result.shard_block_id,
                        abi: (0, core_1.abiContract)(contracts_1.FlexWalletAccount.package.abi),
                        send_events: false,
                        sending_endpoints: [],
                    })).transaction.id;
                }
                catch (err) {
                    return resolveStartingError(err, result);
                }
                break;
            case MakeOrderStatus.FINALIZING:
                walletTransactionId = result.walletTransactionId;
        }
        return finalizeMakeOrder(evr, result, walletTransactionId, true);
    });
}
exports.waitForMakeOrder = waitForMakeOrder;
function finalizeMakeOrder(evr, result, startingTransactionId, priceTransactionRequired) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (result.status === MakeOrderStatus.SUCCESS || result.status === MakeOrderStatus.ERROR) {
            return result;
        }
        const orderId = result.orderId;
        const params = result.params;
        const { walletAddress, priceAddress } = params;
        const accounts = {};
        if (result.status === MakeOrderStatus.STARTING) {
            accounts[walletAddress] = contracts_1.FlexWalletAccount;
        }
        if (priceTransactionRequired) {
            accounts[priceAddress] = contracts_1.PriceXchgAccount;
        }
        let newResult = result;
        if (Object.keys(accounts).length > 0) {
            const transactions = yield evr.accounts.waitForDerivativeTransactions(startingTransactionId, accounts);
            newResult = (0, processing_1.resolveDerivativeTransaction)(transactions, walletAddress, contracts_1.FlexWalletAccount, newResult, transaction => {
                return {
                    orderId,
                    status: MakeOrderStatus.FINALIZING,
                    params,
                    walletTransactionId: transaction.id,
                };
            }, error => makeOrderError(orderId, error)).result;
            if (newResult.status === MakeOrderStatus.FINALIZING) {
                const { walletTransactionId } = newResult;
                const resolved = (0, processing_1.resolveDerivativeTransaction)(transactions, priceAddress, contracts_1.PriceXchgAccount, newResult, transaction => {
                    return {
                        orderId,
                        status: MakeOrderStatus.SUCCESS,
                        walletTransactionId: walletTransactionId,
                        priceTransactionId: transaction.id,
                    };
                }, error => makeOrderError(orderId, error));
                newResult = resolved.result;
                if (resolved.transaction) {
                    let answer = undefined;
                    for (const msg of resolved.transaction.out_messages) {
                        if (msg.dst === walletAddress && Number(msg.created_lt) > ((_a = answer === null || answer === void 0 ? void 0 : answer.created_lt) !== null && _a !== void 0 ? _a : 0)) {
                            answer = msg;
                        }
                    }
                    if (answer) {
                        const body = yield evr.accounts.waitForMessageBody(answer.id);
                        const decoded = (yield evr.sdk.abi.decode_boc({
                            params: [
                                { name: "_answer_id", type: "uint32" },
                                { name: "err_code", type: "uint32" },
                            ],
                            boc: body,
                            allow_partial: true,
                        })).data;
                        const errCode = Number(decoded.err_code);
                        if (errCode !== 0) {
                            const error = (0, contracts_1.findTransactionError)(resolved.transaction, contracts_1.PriceXchgAccount, errCode);
                            if (error) {
                                return makeOrderError(newResult.orderId, error);
                            }
                        }
                    }
                }
            }
        }
        return newResult;
    });
}
exports.finalizeMakeOrder = finalizeMakeOrder;
function resolveStartingError(original, state) {
    var _a, _b;
    if (state.status === MakeOrderStatus.SUCCESS || state.status === MakeOrderStatus.ERROR) {
        return state;
    }
    const messageRejected = original.code === core_1.ProcessingErrorCode.MessageExpired ||
        original.code === core_1.ProcessingErrorCode.MessageRejected;
    if (!messageRejected) {
        throw original;
    }
    let originalError = original;
    const localCode = (_b = (_a = originalError.data) === null || _a === void 0 ? void 0 : _a.local_error) === null || _b === void 0 ? void 0 : _b.code;
    const { isSell, majorSymbol, minorSymbol, walletAddress } = state.params;
    const O = isSell ? "sell" : "buy";
    const M = `${majorSymbol}/${minorSymbol}`;
    const T = isSell ? majorSymbol : minorSymbol;
    const W = walletAddress;
    let message = `Error occurred while performing ${O} on ${M}.`;
    switch (localCode) {
        case core_1.TvmErrorCode.AccountCodeMissing:
            message += ` ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.AccountMissing:
            message += ` You need to activate ${T} wallet ${W} to trade on this Market.`;
            break;
        case core_1.TvmErrorCode.AccountFrozenOrDeleted:
            message += ` ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.LowBalance:
            message += ` You need to top-up ${T} wallet ${W} to pay fees.`;
            break;
        default:
            originalError = (0, contracts_1.resolveContractError)(originalError, contracts_1.FlexWalletAccount);
            message += ` ${originalError.message}. Ask DEX Support team for help.`;
            break;
    }
    const error = new Error(message);
    error.originalError = Object.assign(Object.assign({}, originalError), { message: originalError.message });
    return {
        orderId: state.orderId,
        status: MakeOrderStatus.ERROR,
        error: error,
    };
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