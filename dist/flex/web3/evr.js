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
exports.Evr = void 0;
const core_1 = require("@eversdk/core");
const signers_1 = require("./signers");
const accounts_1 = require("./accounts");
const helpers_1 = require("../../contracts/helpers");
class Evr {
    constructor(config) {
        this.log = helpers_1.Log.default;
        this.sdk = new core_1.TonClient(config === null || config === void 0 ? void 0 : config.sdk);
        this.signers = new signers_1.EvrSigners(this.sdk.crypto);
        this.accounts = new accounts_1.EvrAccounts(this.sdk, this.signers, this.log);
    }
    static unitsFromTokens(tokens) {
        return tokens * 1e9;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sdk.close();
        });
    }
}
exports.Evr = Evr;
Evr.NATIVE_DECIMALS = 9;
//# sourceMappingURL=evr.js.map