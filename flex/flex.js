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
exports.Flex = void 0;
const config_1 = require("./config");
const core_1 = require("@eversdk/core");
const account_ex_1 = require("../contracts/account-ex");
const helpers_1 = require("../contracts/helpers");
const contracts_1 = require("../contracts");
class Flex {
    constructor(config) {
        this.log = helpers_1.Log.default;
        this.config = config;
        this.web3 = new core_1.TonClient(config.web3);
        this.signers = new account_ex_1.SignerRegistry(this.web3);
    }
    static set default(flex) {
        this._default = flex;
    }
    static get default() {
        if (!this._default) {
            this._default = new Flex(this.config);
        }
        return this._default;
    }
    static set config(config) {
        this._config = Object.assign(Object.assign({}, (0, config_1.defaultConfig)()), config);
    }
    static get config() {
        if (!this._config) {
            this._config = (0, config_1.defaultConfig)();
        }
        return this._config;
    }
    getAccount(accountClass, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = typeof options === "string" ? options : options.address;
            const signer = typeof options === "string" ? undefined : options.signer;
            return new accountClass({
                address,
                client: this.web3,
                log: this.log,
                signer: yield this.signers.resolve(signer),
            });
        });
    }
    getSuperRootAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAccount(contracts_1.SuperRootAccount, this.config.superRoot);
        });
    }
    getGlobalConfigAccount() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfigAddress = (_a = this.config.globalConfig) !== null && _a !== void 0 ? _a : (yield (yield this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
            return yield this.getAccount(contracts_1.GlobalConfigAccount, globalConfigAddress);
        });
    }
    getFlexAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.getAccount(contracts_1.FlexAccount, globalConfigDetails.flex);
        });
    }
    getUserConfigAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.getAccount(contracts_1.UserDataConfigAccount, globalConfigDetails.user_cfg);
        });
    }
    query(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.web3.net.query({
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
            yield this.web3.close();
        });
    }
}
exports.Flex = Flex;
Flex._config = undefined;
Flex._default = undefined;
//# sourceMappingURL=flex.js.map