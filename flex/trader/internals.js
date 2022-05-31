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
exports.getPriceDetails = exports.resolveError = exports.findOrder = exports.generateRandomOrderId = exports.getWallet = void 0;
const core_1 = require("@eversdk/core");
const contracts_1 = require("../../contracts");
function getWallet(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const pair = yield options.flex.getAccount(contracts_1.XchgPairAccount, options.market);
        const pairDetails = (yield pair.getDetails()).output;
        const token = yield options.flex.getAccount(contracts_1.WrapperAccount, options.sell
            ? pairDetails.major_tip3cfg.root_address
            : pairDetails.minor_tip3cfg.root_address);
        const signer = yield options.flex.signers.resolve(options.traderSigner);
        const address = (yield token.getWalletAddress({
            pubkey: `0x${options.trader}`,
            owner: options.client,
        })).output.value0;
        return options.flex.getAccount(contracts_1.FlexWalletAccount, {
            address,
            signer,
        });
    });
}
exports.getWallet = getWallet;
function generateRandomOrderId(web3) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield web3.crypto.generate_random_bytes({
            length: 8,
        });
        return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
    });
}
exports.generateRandomOrderId = generateRandomOrderId;
function findOrder(id, orders) {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}
exports.findOrder = findOrder;
function resolveError(original, context) {
    var _a, _b;
    if (original.code !== core_1.ProcessingErrorCode.MessageExpired) {
        return original;
    }
    const localCode = (_b = (_a = original.data) === null || _a === void 0 ? void 0 : _a.local_error) === null || _b === void 0 ? void 0 : _b.code;
    const { O, M, T, W, } = context;
    let message;
    switch (localCode) {
        case core_1.TvmErrorCode.AccountCodeMissing:
            message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.AccountMissing:
            message = `Error occurred while performing operation ${O} on ${M} market. You need to activate ${T} wallet ${W} to trade on this Market.`;
            break;
        case core_1.TvmErrorCode.AccountFrozenOrDeleted:
            message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
            break;
        case core_1.TvmErrorCode.LowBalance:
            message = `Error occurred while performing ${O} on ${M} Market. You need to top-up ${T} wallet ${W} to pay fees.`;
            break;
        default:
            message = `Error occurred while performing ${O} on ${M}. Ask DEX Support team for help.`;
            break;
    }
    const flexErr = new Error(message);
    flexErr.originalError = original;
    return flexErr;
}
exports.resolveError = resolveError;
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
exports.getPriceDetails = getPriceDetails;
//# sourceMappingURL=internals.js.map