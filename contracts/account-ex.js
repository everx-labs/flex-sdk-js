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
exports.AccountEx = void 0;
const core_1 = require("@eversdk/core");
const appkit_1 = require("@eversdk/appkit");
class AccountEx {
    static isActive(address, useClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = useClient !== null && useClient !== void 0 ? useClient : core_1.TonClient.default;
            const accounts = (yield client.net.query_collection({
                collection: "accounts",
                filter: { id: { eq: address } },
                result: "acc_type",
                limit: 1,
            })).result;
            return accounts.length > 0 && accounts[0].acc_type === appkit_1.AccountType.active;
        });
    }
}
exports.AccountEx = AccountEx;
//# sourceMappingURL=account-ex.js.map