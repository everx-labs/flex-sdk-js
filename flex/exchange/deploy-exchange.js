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
exports.deployExchange = void 0;
const contracts_1 = require("../../contracts");
const ever_token_type_1 = require("./ever-token-type");
const tip3_token_type_1 = require("./tip3-token-type");
const web3_1 = require("../web3");
const DEFAULTS = {
    superRootOwnerEvers: 200,
    superRootEvers: 5,
    wrappers: {
        mainEvers: 4,
        deployEvers: 2,
        keepEvers: 1,
    },
    flex: {
        mainEvers: 2,
        deployEvers: 1.5,
        keepEvers: 1,
        evers: {
            deploy: 1.3,
            setNext: 0.2,
            pairKeep: 1,
        },
        fees: {
            transferTip3: 0.3,
            returnOwnership: 0.2,
            orderAnswer: 0.1,
            processQueue: 0.4,
            sendNotify: 0.1,
            destWalletKeepEvers: 0.01,
        },
        dealsLimit: 20,
    },
};
var FlexSetCodeType;
(function (FlexSetCodeType) {
    FlexSetCodeType[FlexSetCodeType["SUPER_ROOT"] = 1] = "SUPER_ROOT";
    FlexSetCodeType[FlexSetCodeType["GLOBAL_CFG"] = 2] = "GLOBAL_CFG";
    FlexSetCodeType[FlexSetCodeType["FLEX_CLIENT_STUB"] = 3] = "FLEX_CLIENT_STUB";
    FlexSetCodeType[FlexSetCodeType["WRAPPERS_CFG"] = 4] = "WRAPPERS_CFG";
    FlexSetCodeType[FlexSetCodeType["WIC"] = 5] = "WIC";
    FlexSetCodeType[FlexSetCodeType["FLEX"] = 6] = "FLEX";
    FlexSetCodeType[FlexSetCodeType["PAIR"] = 7] = "PAIR";
    FlexSetCodeType[FlexSetCodeType["PRICE"] = 8] = "PRICE";
    FlexSetCodeType[FlexSetCodeType["USER_DATA_CFG"] = 9] = "USER_DATA_CFG";
    FlexSetCodeType[FlexSetCodeType["FLEX_CLIENT"] = 10] = "FLEX_CLIENT";
    FlexSetCodeType[FlexSetCodeType["AUTH_INDEX"] = 11] = "AUTH_INDEX";
    FlexSetCodeType[FlexSetCodeType["USER_ID_INDEX"] = 12] = "USER_ID_INDEX";
})(FlexSetCodeType || (FlexSetCodeType = {}));
function deployExchange(web3, options) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const superRootOwnerAddress = yield deploySuperRootOwner(web3, options);
        const superRootOwner = yield web3.accounts.get(contracts_1.SuperRootOwnerAccount, {
            address: superRootOwnerAddress,
            signer: options.signer,
        });
        const details = (yield superRootOwner.getDetails()).output;
        let superRootAddress = (_a = details.super_root) !== null && _a !== void 0 ? _a : "";
        if (!superRootAddress || !(yield web3.accounts.isActive(superRootAddress))) {
            superRootAddress = (yield superRootOwner.runDeploySuperRoot({
                evers: (0, web3_1.toUnits)((_b = options.superRootEvers) !== null && _b !== void 0 ? _b : DEFAULTS.superRootEvers),
                prev_super_root: options.prevSuperRoot,
            })).output.value0;
        }
        let wrappersConfigAddress = "0:3cacf420de239c6f17e3be4224c278411f18c47cc5f49ae716dde072300037a1";
        if (!(yield web3.accounts.isActive(wrappersConfigAddress))) {
            wrappersConfigAddress = (yield web3.accounts.waitForFinalExternalAnswer((yield superRootOwner.runDeployWrappersConfig(wrappersConfig(options))).transaction, contracts_1.SuperRootOwnerAccount.package.abi)).value0;
        }
        let flexAddress = "0:fd794c5fe241aacafa88d1e5bac6620b45400bfd58f2c762ae9f50289cf7e549";
        if (!(yield web3.accounts.isActive(flexAddress))) {
            flexAddress = (yield web3.accounts.waitForFinalExternalAnswer((yield superRootOwner.runDeployFlex(flexConfig(options))).transaction, contracts_1.SuperRootOwnerAccount.package.abi)).value0;
        }
        const tokenTypeOptions = {
            everWallet: options.everWallet,
            superRootOwner: {
                address: yield superRootOwner.getAddress(),
                signer: superRootOwner.signer,
            },
            superRoot: superRootAddress,
            wrappersConfigAddress,
        };
        const info = {
            superRootOwner: superRootOwnerAddress,
            superRoot: superRootAddress,
            wrappersConfig: wrappersConfigAddress,
            flex: flexAddress,
            tokenTypes: {},
        };
        if ((_c = options.tokenTypes) === null || _c === void 0 ? void 0 : _c.ever) {
            info.tokenTypes.ever = yield (0, ever_token_type_1.addEverTokenType)(web3, Object.assign(Object.assign({}, options.tokenTypes.ever), tokenTypeOptions));
        }
        if ((_d = options.tokenTypes) === null || _d === void 0 ? void 0 : _d.tip3) {
            info.tokenTypes.tip3 = yield (0, tip3_token_type_1.addTip3TokenType)(web3, Object.assign(Object.assign({}, options.tokenTypes.tip3), tokenTypeOptions));
        }
        return info;
    });
}
exports.deployExchange = deployExchange;
function wrappersConfig(exchangeOptions) {
    var _a, _b, _c, _d, _e, _f;
    const options = exchangeOptions.wrappers;
    const defaults = DEFAULTS.wrappers;
    return {
        main_evers: (0, web3_1.toUnits)((_a = options === null || options === void 0 ? void 0 : options.mainEvers) !== null && _a !== void 0 ? _a : defaults.mainEvers),
        deploy_evers: (0, web3_1.toUnits)((_b = options === null || options === void 0 ? void 0 : options.deployEvers) !== null && _b !== void 0 ? _b : defaults.deployEvers),
        wrappers_cfg_keep_evers: (0, web3_1.toUnits)((_c = options === null || options === void 0 ? void 0 : options.keepEvers) !== null && _c !== void 0 ? _c : defaults.keepEvers),
        token_version: (_f = (_d = options === null || options === void 0 ? void 0 : options.version) !== null && _d !== void 0 ? _d : (_e = exchangeOptions.version) === null || _e === void 0 ? void 0 : _e.wallet) !== null && _f !== void 0 ? _f : 1,
    };
}
function flexConfig(exchangeOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    const options = exchangeOptions.flex;
    const defaults = DEFAULTS.flex;
    return {
        main_evers: (0, web3_1.toUnits)((_a = options === null || options === void 0 ? void 0 : options.mainEvers) !== null && _a !== void 0 ? _a : defaults.mainEvers),
        deploy_evers: (0, web3_1.toUnits)((_b = options === null || options === void 0 ? void 0 : options.deployEvers) !== null && _b !== void 0 ? _b : defaults.deployEvers),
        keep_evers: (0, web3_1.toUnits)((_c = options === null || options === void 0 ? void 0 : options.keepEvers) !== null && _c !== void 0 ? _c : defaults.keepEvers),
        evers: {
            deploy: (0, web3_1.toUnits)((_e = (_d = options === null || options === void 0 ? void 0 : options.evers) === null || _d === void 0 ? void 0 : _d.deploy) !== null && _e !== void 0 ? _e : defaults.evers.deploy),
            setnext: (0, web3_1.toUnits)((_g = (_f = options === null || options === void 0 ? void 0 : options.evers) === null || _f === void 0 ? void 0 : _f.setNext) !== null && _g !== void 0 ? _g : defaults.evers.setNext),
            pair_keep: (0, web3_1.toUnits)((_j = (_h = options === null || options === void 0 ? void 0 : options.evers) === null || _h === void 0 ? void 0 : _h.pairKeep) !== null && _j !== void 0 ? _j : defaults.evers.pairKeep),
        },
        old_flex: options === null || options === void 0 ? void 0 : options.oldFlex,
        exchange_version: (_m = (_k = options === null || options === void 0 ? void 0 : options.version) !== null && _k !== void 0 ? _k : (_l = exchangeOptions.version) === null || _l === void 0 ? void 0 : _l.exchange) !== null && _m !== void 0 ? _m : 1,
        ev_cfg: {
            transfer_tip3: (0, web3_1.toUnits)((_p = (_o = options === null || options === void 0 ? void 0 : options.fees) === null || _o === void 0 ? void 0 : _o.transferTip3) !== null && _p !== void 0 ? _p : defaults.fees.transferTip3),
            return_ownership: (0, web3_1.toUnits)((_r = (_q = options === null || options === void 0 ? void 0 : options.fees) === null || _q === void 0 ? void 0 : _q.returnOwnership) !== null && _r !== void 0 ? _r : defaults.fees.returnOwnership),
            order_answer: (0, web3_1.toUnits)((_t = (_s = options === null || options === void 0 ? void 0 : options.fees) === null || _s === void 0 ? void 0 : _s.orderAnswer) !== null && _t !== void 0 ? _t : defaults.fees.orderAnswer),
            process_queue: (0, web3_1.toUnits)((_v = (_u = options === null || options === void 0 ? void 0 : options.fees) === null || _u === void 0 ? void 0 : _u.processQueue) !== null && _v !== void 0 ? _v : defaults.fees.processQueue),
            send_notify: (0, web3_1.toUnits)((_x = (_w = options === null || options === void 0 ? void 0 : options.fees) === null || _w === void 0 ? void 0 : _w.sendNotify) !== null && _x !== void 0 ? _x : defaults.fees.sendNotify),
            dest_wallet_keep_evers: (0, web3_1.toUnits)((_z = (_y = options === null || options === void 0 ? void 0 : options.fees) === null || _y === void 0 ? void 0 : _y.destWalletKeepEvers) !== null && _z !== void 0 ? _z : defaults.fees.destWalletKeepEvers),
        },
        deals_limit: (_0 = options === null || options === void 0 ? void 0 : options.dealsLimit) !== null && _0 !== void 0 ? _0 : defaults.dealsLimit,
    };
}
function deploySuperRootOwner(web3, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = yield web3.signers.resolvePublicKey(options.signer);
        const superRootOwner = yield web3.accounts.get(contracts_1.SuperRootOwnerAccount, {
            signer: options.signer,
        });
        const superRootOwnerAddress = yield superRootOwner.getAddress();
        if (!(yield web3.accounts.isActive(superRootOwnerAddress))) {
            yield new web3_1.EverWallet(web3, options.everWallet).topUp(superRootOwnerAddress, (_a = options.superRootOwnerEvers) !== null && _a !== void 0 ? _a : DEFAULTS.superRootOwnerEvers);
            yield superRootOwner.deployContract({
                pubkey: `0x${pubkey}`,
            });
        }
        const details = (yield superRootOwner.getDetails()).output;
        const setCode = (type, contract, existing) => __awaiter(this, void 0, void 0, function* () {
            if (existing === contract.package.code) {
                return;
            }
            yield superRootOwner.runSetCode({
                type,
                code: contract.package.code,
            });
        });
        yield setCode(FlexSetCodeType.SUPER_ROOT, contracts_1.SuperRootAccount, details.super_root_code);
        yield setCode(FlexSetCodeType.GLOBAL_CFG, contracts_1.GlobalConfigAccount, details.global_cfg_code);
        yield setCode(FlexSetCodeType.FLEX_CLIENT_STUB, contracts_1.FlexClientStubAccount, details.flex_client_stub);
        yield setCode(FlexSetCodeType.WRAPPERS_CFG, contracts_1.WrappersConfigAccount, details.wrappers_cfg_code);
        yield setCode(FlexSetCodeType.WIC, contracts_1.WICAccount, details.wic_code);
        yield setCode(FlexSetCodeType.FLEX, contracts_1.FlexAccount, details.flex_code);
        yield setCode(FlexSetCodeType.PAIR, contracts_1.XchgPairAccount, details.pair_code);
        yield setCode(FlexSetCodeType.PRICE, contracts_1.PriceXchgAccount, details.price_code);
        yield setCode(FlexSetCodeType.USER_DATA_CFG, contracts_1.UserDataConfigAccount, details.user_data_cfg_code);
        yield setCode(FlexSetCodeType.FLEX_CLIENT, contracts_1.FlexClientAccount, details.flex_client_code);
        yield setCode(FlexSetCodeType.AUTH_INDEX, contracts_1.AuthIndexAccount, details.auth_index_code);
        yield setCode(FlexSetCodeType.USER_ID_INDEX, contracts_1.UserIdIndexAccount, details.user_id_index_code);
        return superRootOwnerAddress;
    });
}
//# sourceMappingURL=deploy-exchange.js.map