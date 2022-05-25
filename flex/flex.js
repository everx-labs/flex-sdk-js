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
exports.FlexBoundLazy = exports.Flex = exports.MakeOrderMode = void 0;
const core_1 = require("@eversdk/core");
const contracts_1 = require("../contracts");
const helpers_1 = require("../contracts/helpers");
const account_ex_1 = require("../contracts/account-ex");
var MakeOrderMode;
(function (MakeOrderMode) {
    MakeOrderMode["IOP"] = "IOP";
    MakeOrderMode["IOC"] = "IOC";
    MakeOrderMode["POST"] = "POST";
})(MakeOrderMode = exports.MakeOrderMode || (exports.MakeOrderMode = {}));
class Flex {
    constructor(config) {
        this.log = helpers_1.Log.default;
        this._state = undefined;
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
        this._config = Object.assign(Object.assign({}, Flex.defaultConfig()), config);
    }
    static get config() {
        if (!this._config) {
            this._config = Flex.defaultConfig();
        }
        return this._config;
    }
    getState() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._state) {
                const superRoot = new contracts_1.SuperRootAccount({
                    client: this.web3,
                    address: this.config.superRoot,
                });
                const globalConfigAddress = (_a = this.config.globalConfig) !== null && _a !== void 0 ? _a : (yield superRoot.getCurrentGlobalConfig()).output.value0;
                const globalConfig = new contracts_1.GlobalConfigAccount({
                    client: this.web3,
                    address: globalConfigAddress,
                });
                const globalConfigDetails = (yield globalConfig.getDetails()).output;
                const flex = new contracts_1.FlexAccount({
                    client: this.web3,
                    address: globalConfigDetails.flex,
                });
                const userConfig = new contracts_1.UserDataConfigAccount({
                    client: this.web3,
                    address: globalConfigDetails.user_cfg,
                });
                this._state = {
                    superRoot,
                    globalConfig,
                    flex,
                    userConfig,
                };
            }
            return this._state;
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
    static defaultConfig() {
        return {
            web3: core_1.TonClient.defaultConfig,
            trader: {
                deploy: {
                    eversAll: 40e9,
                    eversAuth: 1e9,
                    refillWallet: 10e9,
                    minRefill: 0.1e9,
                },
                order: {
                    evers: 3e9,
                    mode: MakeOrderMode.IOP,
                },
            },
        };
    }
}
exports.Flex = Flex;
Flex._config = undefined;
Flex._default = undefined;
class FlexBoundLazy {
    constructor(options, flex) {
        this._state = undefined;
        this.flex = flex !== null && flex !== void 0 ? flex : Flex.default;
        this.log = this.flex.log;
        this.options = options;
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._state) {
                this._state = yield this.createState(this.options);
            }
            return this._state;
        });
    }
}
exports.FlexBoundLazy = FlexBoundLazy;
//# sourceMappingURL=flex.js.map