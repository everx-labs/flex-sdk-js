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
exports.finalizeCancelOrder = exports.waitForCancelOrder = exports.cancelOrder = exports.CancelOrderStatus = void 0;
const contracts_1 = require("../../contracts");
const internals_1 = require("./internals");
const flex_1 = require("../flex");
const core_1 = require("@eversdk/core");
const processing_1 = require("./processing");
var CancelOrderStatus;
(function (CancelOrderStatus) {
    CancelOrderStatus[CancelOrderStatus["STARTING"] = 0] = "STARTING";
    CancelOrderStatus[CancelOrderStatus["FINALIZING"] = 1] = "FINALIZING";
    CancelOrderStatus[CancelOrderStatus["SUCCESS"] = 2] = "SUCCESS";
    CancelOrderStatus[CancelOrderStatus["ERROR"] = 3] = "ERROR";
})(CancelOrderStatus = exports.CancelOrderStatus || (exports.CancelOrderStatus = {}));
function cancelOrderError(error) {
    return {
        status: CancelOrderStatus.ERROR,
        error: Object.assign(Object.assign({}, error), { message: error.message }),
    };
}
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
        const walletAddress = yield wallet.getAddress();
        const priceAddress = priceDetails.address;
        let result = undefined;
        let walletTransactionId = undefined;
        try {
            walletTransactionId = (yield wallet.runCancelOrder({
                order_id: options.orderId,
                sell,
                price: priceDetails.address,
                evers: (_a = options.evers) !== null && _a !== void 0 ? _a : 3e9,
            }, {
                skipTransactionTree: true,
                onProcessing: evt => {
                    if (evt.type === "WillSend") {
                        result = {
                            status: CancelOrderStatus.STARTING,
                            params: {
                                tokenSymbol: sell
                                    ? pairDetails.major_tip3cfg.symbol
                                    : pairDetails.minor_tip3cfg.symbol,
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
        return yield finalizeCancelOrder(evr, result, walletTransactionId, (_b = options.waitForOrderbookUpdate) !== null && _b !== void 0 ? _b : false);
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
function waitForCancelOrder(evr, result) {
    return __awaiter(this, void 0, void 0, function* () {
        let walletTransactionId = undefined;
        switch (result.status) {
            case CancelOrderStatus.SUCCESS:
            case CancelOrderStatus.ERROR:
                return result;
            case CancelOrderStatus.STARTING:
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
            case CancelOrderStatus.FINALIZING:
                walletTransactionId = result.walletTransactionId;
        }
        return finalizeCancelOrder(evr, result, walletTransactionId, true);
    });
}
exports.waitForCancelOrder = waitForCancelOrder;
function finalizeCancelOrder(evr, result, startingTransactionId, priceTransactionRequired) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (result.status === CancelOrderStatus.SUCCESS || result.status === CancelOrderStatus.ERROR) {
            return result;
        }
        const params = result.params;
        const { walletAddress, priceAddress } = params;
        const accounts = {};
        if (result.status === CancelOrderStatus.STARTING) {
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
                    status: CancelOrderStatus.FINALIZING,
                    params,
                    walletTransactionId: transaction.id,
                };
            }, cancelOrderError).result;
            if (newResult.status === CancelOrderStatus.FINALIZING) {
                const { walletTransactionId } = newResult;
                const resolved = (0, processing_1.resolveDerivativeTransaction)(transactions, priceAddress, contracts_1.PriceXchgAccount, newResult, transaction => {
                    return {
                        status: CancelOrderStatus.SUCCESS,
                        walletTransactionId: walletTransactionId,
                        priceTransactionId: transaction.id,
                    };
                }, cancelOrderError);
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
                                return cancelOrderError(error);
                            }
                        }
                    }
                }
            }
        }
        return newResult;
    });
}
exports.finalizeCancelOrder = finalizeCancelOrder;
function resolveStartingError(original, result) {
    var _a, _b;
    if (result.status === CancelOrderStatus.SUCCESS || result.status === CancelOrderStatus.ERROR) {
        return result;
    }
    const messageRejected = original.code === core_1.ProcessingErrorCode.MessageExpired ||
        original.code === core_1.ProcessingErrorCode.MessageRejected;
    if (!messageRejected) {
        throw original;
    }
    let originalError = original;
    const localCode = (_b = (_a = originalError.data) === null || _a === void 0 ? void 0 : _a.local_error) === null || _b === void 0 ? void 0 : _b.code;
    const { tokenSymbol, walletAddress } = result.params;
    const T = tokenSymbol;
    const W = walletAddress;
    let message = `Error occurred while cancelling order.`;
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
        status: CancelOrderStatus.ERROR,
        error: error,
    };
}
//# sourceMappingURL=cancel-order.js.map