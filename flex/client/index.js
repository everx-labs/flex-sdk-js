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
exports.walletInfoFromApi = exports.Client = void 0;
const flex_1 = require("../flex");
const account_ex_1 = require("../../contracts/account-ex");
const token_1 = require("../token");
const deploy_client_1 = require("./deploy-client");
const contracts_1 = require("../../contracts");
class Client {
    constructor(options, flex) {
        this.flex = flex !== null && flex !== void 0 ? flex : flex_1.Flex.default;
        this.address = options.address;
        this.signer = options.signer;
    }
    static deploy(options, flex) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Client(yield (0, deploy_client_1.deployClient)(Object.assign(Object.assign({}, options), { flex })), flex);
        });
    }
    deployTrader(options) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const clientAccount = yield this.flex.getAccount(contracts_1.FlexClientAccount, this);
            const address = (yield clientAccount.getUserIdIndex({
                user_id: options.id,
            })).output.value0;
            if (!(yield account_ex_1.AccountEx.isActive(address, this.flex.web3))) {
                const defaults = this.flex.config.trader.deploy;
                yield clientAccount.runDeployIndex({
                    user_id: options.id,
                    lend_pubkey: options.pubkey,
                    name: options.name,
                    evers_all: (_a = options.eversAll) !== null && _a !== void 0 ? _a : defaults.eversAll,
                    evers_to_auth_idx: (_b = options.eversAuth) !== null && _b !== void 0 ? _b : defaults.eversAuth,
                    refill_wallet: (_c = options.refillWallet) !== null && _c !== void 0 ? _c : defaults.refillWallet,
                    min_refill: (_d = options.minRefill) !== null && _d !== void 0 ? _d : defaults.minRefill,
                });
            }
        });
    }
    queryWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.flex.query(`
            wallets(
                clientAddress: "${this.address}"
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
            return result.wallets.map(walletInfoFromApi);
        });
    }
}
exports.Client = Client;
function walletInfoFromApi(result) {
    return {
        address: result.address,
        clientAddress: result.clientAddress,
        traderId: result.userId,
        traderPublicKey: result.dappPubkey,
        token: result.token,
        nativeCurrencyBalance: result.nativeCurrencyBalance,
        totalBalance: result.totalBalance,
        availableBalance: result.availableBalance,
        balanceInOrders: result.balanceInOrders,
        unsaltedPriceCodeHash: result.unsaltedPriceCodeHash,
        cursor: result.cursor,
    };
}
exports.walletInfoFromApi = walletInfoFromApi;
//# sourceMappingURL=index.js.map