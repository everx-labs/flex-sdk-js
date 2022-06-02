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
const account_ex_1 = require("../../contracts/account-ex");
const contracts_1 = require("../../contracts");
const ever_wallet_1 = require("../ever-wallet");
const helpers_1 = require("../../contracts/helpers");
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
var FlexCode;
(function (FlexCode) {
    FlexCode[FlexCode["SUPER_ROOT"] = 1] = "SUPER_ROOT";
    FlexCode[FlexCode["GLOBAL_CFG"] = 2] = "GLOBAL_CFG";
    FlexCode[FlexCode["FLEX_CLIENT_STUB"] = 3] = "FLEX_CLIENT_STUB";
    FlexCode[FlexCode["WRAPPERS_CFG"] = 4] = "WRAPPERS_CFG";
    FlexCode[FlexCode["WIC"] = 5] = "WIC";
    FlexCode[FlexCode["FLEX"] = 6] = "FLEX";
    FlexCode[FlexCode["PAIR"] = 7] = "PAIR";
    FlexCode[FlexCode["PRICE"] = 8] = "PRICE";
    FlexCode[FlexCode["USER_DATA_CFG"] = 9] = "USER_DATA_CFG";
    FlexCode[FlexCode["FLEX_CLIENT"] = 10] = "FLEX_CLIENT";
    FlexCode[FlexCode["AUTH_INDEX"] = 11] = "AUTH_INDEX";
    FlexCode[FlexCode["USER_ID_INDEX"] = 12] = "USER_ID_INDEX";
})(FlexCode || (FlexCode = {}));
function deployExchange(flex, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const superRootOwner = yield deploySuperRootOwner(flex, options);
        const superRootAddress = (yield superRootOwner.runDeploySuperRoot({
            evers: (0, helpers_1.amountToUnits)((_a = options.superRootEvers) !== null && _a !== void 0 ? _a : DEFAULTS.superRootEvers),
            prev_super_root: options.prevSuperRoot,
        })).output.value0;
        (yield superRootOwner.runDeployWrappersConfig(wrappersConfig(options))).output.value0;
        (yield superRootOwner.runDeployFlex(flexConfig(options))).output.value0;
        return yield flex.getAccount(contracts_1.SuperRootAccount, superRootAddress);
    });
}
exports.deployExchange = deployExchange;
function wrappersConfig(exchangeOptions) {
    var _a, _b, _c, _d;
    const options = exchangeOptions.wrappers;
    const defaults = DEFAULTS.wrappers;
    return {
        main_evers: (0, helpers_1.amountToUnits)((_a = options === null || options === void 0 ? void 0 : options.mainEvers) !== null && _a !== void 0 ? _a : defaults.mainEvers),
        deploy_evers: (0, helpers_1.amountToUnits)((_b = options === null || options === void 0 ? void 0 : options.deployEvers) !== null && _b !== void 0 ? _b : defaults.deployEvers),
        wrappers_cfg_keep_evers: (0, helpers_1.amountToUnits)((_c = options === null || options === void 0 ? void 0 : options.keepEvers) !== null && _c !== void 0 ? _c : defaults.keepEvers),
        token_version: (_d = options === null || options === void 0 ? void 0 : options.version) !== null && _d !== void 0 ? _d : exchangeOptions.version.wallet,
    };
}
function flexConfig(exchangeOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    const options = exchangeOptions.flex;
    const defaults = DEFAULTS.flex;
    return {
        main_evers: (0, helpers_1.amountToUnits)((_a = options === null || options === void 0 ? void 0 : options.mainEvers) !== null && _a !== void 0 ? _a : defaults.mainEvers),
        deploy_evers: (0, helpers_1.amountToUnits)((_b = options === null || options === void 0 ? void 0 : options.deployEvers) !== null && _b !== void 0 ? _b : defaults.deployEvers),
        keep_evers: (0, helpers_1.amountToUnits)((_c = options === null || options === void 0 ? void 0 : options.keepEvers) !== null && _c !== void 0 ? _c : defaults.keepEvers),
        evers: {
            deploy: (0, helpers_1.amountToUnits)((_e = (_d = options === null || options === void 0 ? void 0 : options.evers) === null || _d === void 0 ? void 0 : _d.deploy) !== null && _e !== void 0 ? _e : defaults.evers.deploy),
            setnext: (0, helpers_1.amountToUnits)((_g = (_f = options === null || options === void 0 ? void 0 : options.evers) === null || _f === void 0 ? void 0 : _f.setNext) !== null && _g !== void 0 ? _g : defaults.evers.setNext),
            pair_keep: (0, helpers_1.amountToUnits)((_j = (_h = options === null || options === void 0 ? void 0 : options.evers) === null || _h === void 0 ? void 0 : _h.pairKeep) !== null && _j !== void 0 ? _j : defaults.evers.pairKeep),
        },
        old_flex: options === null || options === void 0 ? void 0 : options.oldFlex,
        exchange_version: (_k = options === null || options === void 0 ? void 0 : options.version) !== null && _k !== void 0 ? _k : exchangeOptions.version.exchange,
        ev_cfg: {
            transfer_tip3: (0, helpers_1.amountToUnits)((_m = (_l = options === null || options === void 0 ? void 0 : options.fees) === null || _l === void 0 ? void 0 : _l.transferTip3) !== null && _m !== void 0 ? _m : defaults.fees.transferTip3),
            return_ownership: (0, helpers_1.amountToUnits)((_p = (_o = options === null || options === void 0 ? void 0 : options.fees) === null || _o === void 0 ? void 0 : _o.returnOwnership) !== null && _p !== void 0 ? _p : defaults.fees.returnOwnership),
            order_answer: (0, helpers_1.amountToUnits)((_r = (_q = options === null || options === void 0 ? void 0 : options.fees) === null || _q === void 0 ? void 0 : _q.orderAnswer) !== null && _r !== void 0 ? _r : defaults.fees.orderAnswer),
            process_queue: (0, helpers_1.amountToUnits)((_t = (_s = options === null || options === void 0 ? void 0 : options.fees) === null || _s === void 0 ? void 0 : _s.processQueue) !== null && _t !== void 0 ? _t : defaults.fees.processQueue),
            send_notify: (0, helpers_1.amountToUnits)((_v = (_u = options === null || options === void 0 ? void 0 : options.fees) === null || _u === void 0 ? void 0 : _u.sendNotify) !== null && _v !== void 0 ? _v : defaults.fees.sendNotify),
            dest_wallet_keep_evers: (0, helpers_1.amountToUnits)((_x = (_w = options === null || options === void 0 ? void 0 : options.fees) === null || _w === void 0 ? void 0 : _w.destWalletKeepEvers) !== null && _x !== void 0 ? _x : defaults.fees.destWalletKeepEvers),
        },
        deals_limit: (_y = options === null || options === void 0 ? void 0 : options.dealsLimit) !== null && _y !== void 0 ? _y : defaults.dealsLimit,
    };
}
function deploySuperRootOwner(flex, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = yield flex.signers.resolvePublicKey(options.signer);
        const superRootOwner = new contracts_1.SuperRootOwnerAccount({
            signer: yield flex.signers.resolve(options.signer),
            client: flex.web3,
            log: flex.log,
        });
        const superRootOwnerAddress = yield superRootOwner.getAddress();
        if (yield account_ex_1.AccountEx.isActive(superRootOwnerAddress, flex.web3)) {
            return superRootOwner;
        }
        const everWallet = new ever_wallet_1.EverWallet(options.everWallet, flex);
        yield everWallet.topUp(superRootOwnerAddress, (_a = options.superRootOwnerEvers) !== null && _a !== void 0 ? _a : DEFAULTS.superRootOwnerEvers);
        yield superRootOwner.deployContract({
            pubkey: `0x${pubkey}`,
        });
        const setCode = (type, contract) => __awaiter(this, void 0, void 0, function* () {
            yield superRootOwner.runSetCode({
                type,
                code: contract.package.code,
            });
        });
        yield setCode(FlexCode.SUPER_ROOT, contracts_1.SuperRootAccount);
        yield setCode(FlexCode.GLOBAL_CFG, contracts_1.GlobalConfigAccount);
        yield setCode(FlexCode.FLEX_CLIENT_STUB, contracts_1.FlexClientStubAccount);
        yield setCode(FlexCode.WRAPPERS_CFG, contracts_1.WrappersConfigAccount);
        yield setCode(FlexCode.WIC, contracts_1.WICAccount);
        yield setCode(FlexCode.FLEX, contracts_1.FlexAccount);
        yield setCode(FlexCode.PAIR, contracts_1.XchgPairAccount);
        yield setCode(FlexCode.PRICE, contracts_1.PriceXchgAccount);
        yield setCode(FlexCode.USER_DATA_CFG, contracts_1.UserDataConfigAccount);
        yield setCode(FlexCode.FLEX_CLIENT, contracts_1.FlexClientAccount);
        yield setCode(FlexCode.AUTH_INDEX, contracts_1.AuthIndexAccount);
        yield setCode(FlexCode.USER_ID_INDEX, contracts_1.UserIdIndexAccount);
        return superRootOwner;
    });
}
//# sourceMappingURL=deploy-exchange.js.map