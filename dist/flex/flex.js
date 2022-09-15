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
exports.priceToUnits = exports.Flex = void 0;
const config_1 = require("./config");
const contracts_1 = require("../contracts");
const web3_1 = require("./web3");
class Flex {
    constructor(config) {
        this.config = Object.assign(Object.assign({}, (0, config_1.defaultConfig)()), config);
        this.evr = new web3_1.Evr(config.evr);
    }
    getSuperRootAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.evr.accounts.get(contracts_1.SuperRootAccount, this.config.superRoot);
        });
    }
    getGlobalConfigAccount() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfigAddress = (_a = this.config.globalConfig) !== null && _a !== void 0 ? _a : (yield (yield this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
            return yield this.evr.accounts.get(contracts_1.GlobalConfigAccount, globalConfigAddress);
        });
    }
    getFlexAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.evr.accounts.get(contracts_1.FlexAccount, globalConfigDetails.flex);
        });
    }
    getUserConfigAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.evr.accounts.get(contracts_1.UserDataConfigAccount, globalConfigDetails.user_cfg);
        });
    }
    query(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.evr.sdk.net.query({
                query: `query {
                flex {
                    ${text}
                }
            }`,
            });
            return result.result.data.flex;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.evr.close();
        });
    }
}
exports.Flex = Flex;
function priceToUnits(price, denominator) {
    const denom = Math.floor(Number(denominator));
    console.log("price = " + price);
    console.log("denominator = " + denom);
    console.log("denom = " + denom);
    const price_num = Math.floor(price * denom);
    console.log("price_num = " + price_num);
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
exports.priceToUnits = priceToUnits;
//# sourceMappingURL=flex.js.map