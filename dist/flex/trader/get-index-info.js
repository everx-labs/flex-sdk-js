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
exports.getIndexInfo = void 0;
const contracts_1 = require("../../contracts");
const web3_1 = require("../web3");
function getIndexInfo(accounts, clientAddress, traderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield accounts.get(contracts_1.FlexClientAccount, clientAddress);
        const address = (yield client.getUserIdIndex({
            user_id: (0, web3_1.uint256)(traderId),
        })).output.value0;
        return {
            address,
            nativeCurrencyBalance: yield accounts.getDecimalBalance(address),
        };
    });
}
exports.getIndexInfo = getIndexInfo;
//# sourceMappingURL=get-index-info.js.map