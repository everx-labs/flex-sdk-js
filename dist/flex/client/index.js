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
exports.Client = exports.walletInfoFromApi = void 0;
const deploy_client_1 = require("./deploy-client");
const client_info_1 = require("./client-info");
function walletInfoFromApi(result) {
    return {
        address: result.address,
        clientAddress: result.clientAddress,
        traderId: result.userId,
        traderPublicKey: result.dappPubkey,
        token: result.token,
        nativeCurrencyBalance: result.nativeCurrencyBalance,
        nativeCurrencyBalanceUnits: result.nativeCurrencyBalanceUnits,
        totalBalance: result.totalBalance,
        totalBalanceUnits: result.totalBalanceUnits,
        availableBalance: result.availableBalance,
        availableBalanceUnits: result.availableBalanceUnits,
        balanceInOrders: result.balanceInOrders,
        balanceInOrdersUnits: result.balanceInOrdersUnits,
        cursor: result.cursor,
    };
}
exports.walletInfoFromApi = walletInfoFromApi;
class Client {
    static deploy(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_client_1.deployClient)(flex, options);
        });
    }
    static getClientInfo(flex, clientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, client_info_1.getClientInfo)(flex.evr.accounts, clientAddress);
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map