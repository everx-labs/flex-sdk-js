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
exports.FlexBoundLazy = exports.Flex = void 0;
const core_1 = require("@eversdk/core");
const contracts_1 = require("../contracts");
class Flex {
    constructor(config) {
        this._state = undefined;
        this.config = config;
        this.client = new core_1.TonClient(config.client);
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
        this._config = config;
    }
    static get config() {
        if (!this._config) {
            this._config = {
                client: core_1.TonClient.defaultConfig,
            };
        }
        return this._config;
    }
    static resolve(options) {
        var _a;
        const source = options.flex;
        if (source) {
            return source instanceof Flex ? source : ((_a = source.flex) !== null && _a !== void 0 ? _a : Flex.default);
        }
        return Flex.default;
    }
    resolveSigner(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof signer === "string") {
                const keys = yield this.client.crypto.nacl_sign_keypair_from_secret_key({
                    secret: signer,
                });
                keys.secret = keys.secret.substring(0, 64);
                return (0, core_1.signerKeys)(keys);
            }
            else {
                return signer;
            }
        });
    }
    signerPublicKey(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (signer.type) {
                case "External":
                    return signer.public_key;
                case "Keys":
                    return signer.keys.public;
                case "SigningBox":
                    return (yield this.client.crypto.signing_box_get_public_key({ handle: signer.handle })).pubkey;
                default:
                    return "";
            }
        });
    }
    getState() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._state) {
                const superRoot = new contracts_1.SuperRootAccount({
                    client: this.client,
                    address: this.config.superRoot,
                });
                const globalConfigAddress = (_a = this.config.globalConfig) !== null && _a !== void 0 ? _a : (yield superRoot.runLocalGetCurrentGlobalConfig()).output.value0;
                const globalConfig = new contracts_1.GlobalConfigAccount({
                    client: this.client,
                    address: globalConfigAddress,
                });
                const globalConfigDetails = (yield globalConfig.runLocalGetDetails()).output;
                const flex = new contracts_1.FlexAccount({
                    client: this.client,
                    address: globalConfigDetails.flex,
                });
                const userConfig = new contracts_1.UserDataConfigAccount({
                    client: this.client,
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
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
        });
    }
}
exports.Flex = Flex;
Flex._config = undefined;
Flex._default = undefined;
class FlexBoundLazy {
    constructor(options) {
        this._state = undefined;
        this.flex = Flex.resolve(options);
        this._options = options;
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._state) {
                this._state = yield this.createState(this._options);
            }
            return this._state;
        });
    }
}
exports.FlexBoundLazy = FlexBoundLazy;
//# sourceMappingURL=flex.js.map