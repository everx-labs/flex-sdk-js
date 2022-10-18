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
exports.WrapperDeployerEverAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WrapperDeployerEverAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(WrapperDeployerEverAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", input);
        });
    }
    runSetWrapperEverCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWrapperEverCode", input, options);
        });
    }
    setWrapperEverCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWrapperEverCode", input);
        });
    }
    runSetFlexWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setFlexWalletCode", input, options);
        });
    }
    setFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setFlexWalletCode", input);
        });
    }
    runDeploy(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deploy", input, options);
        });
    }
    deploy_(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deploy", input);
        });
    }
}
exports.WrapperDeployerEverAccount = WrapperDeployerEverAccount;
WrapperDeployerEverAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "wrapper_pubkey", "type": "uint256" }, { "name": "super_root", "type": "address" }, { "name": "wrapper_deploy_value", "type": "uint128" }, { "name": "wrapper_keep_balance", "type": "uint128" }, { "name": "reserve_wallet_value", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWrapperEverCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xb" }, { "name": "setFlexWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xc" }, { "name": "deploy", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "init_args", "type": "cell" }, { "name": "wic_unsalted_code", "type": "cell" }], "outputs": [{ "name": "first", "type": "address" }, { "name": "second", "type": "uint256" }], "id": "0x1111" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "wrapper_pubkey_", "type": "uint256" }, { "name": "ext_wallet_value_", "type": "uint128" }, { "name": "wrapper_deploy_value_", "type": "uint128" }, { "name": "wrapper_keep_balance_", "type": "uint128" }, { "name": "reserve_wallet_value_", "type": "uint128" }, { "name": "super_root_", "type": "address" }, { "name": "wrapper_code_", "type": "optional(cell)" }, { "name": "flex_wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "te6ccgECFQEABNcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA4HAQL/CAT+j/2PeG3tQAfDAAPTP9Mf0x+TAe1QIsELjoMiwQzhAsAK8qkG8qgEo/LgRPgoyM4azsnQ+QFApfkQ8qjtRNDTADDyvvgAAdXT/9P/cPhk1fpA03/Tf9N/0QTR+ABwcAFVBlUGVQJVBFUEVQZVBlUJINs8egFVElVFXwgB2SLTAAsTCgkAMAHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QAkmXBwJFURAVUR2SIB4dP/cSTZA/6PfQLADPKpBvKoBKPy4ET4KMjOGs7J0PkBVBCl+RDyqNs8KVYTvgrDAFAKsPJ8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLZugzUMAzy4GQIbvLgZvgAVQVVClUGVQZVBlUGVQZVBlUHVQrbPIAMAVUSVTVfBwHZFBMMA/7hB/KoBaPy4ET4KMjOG87J0PkBVBC2+RDyqNs8U5q+CsMAUAqw8nz4I4ED6KiCCBt3QKAqAblwVEHM4wQK8rxw+GRS2LoL1DAL8uBkBm7y4GYJ0CDXSsAC+ADIAfLgRVERzlJizskBzMlVBlUKVQVVBVUFVQVVCVUHVQdVCNs8FBMNABaACwFVElVFXwgB2QL03wHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFtAdMf1Ns8IXD4ZG4L1DAL8tBnIG7y0GcP0wDTANMA+kD6QPoAMFMKvPLgZfgo0wEhwQMUDwHqmDDAA/LQY/I04QHAAvK00wCO08iCEEVWRVIhAc8LH8lvACBviAXSB46AJyFwXiDhBG+NFszJJW+IJVURAVUTVRVVFeGOFgFvjRbMySVviCMjVQJVJFUHVQdVJeJVAjAgAVURVQLZIiHhAdMEAdcYATAhVQHZEAH+XwNWGST0AFYR+gJwJQHPCwBwIQHPC/9wzwsHySHMcRPPCwDtR3QYzwsCcSMBzwsBCATJVhNVAs4EbxBWElUIzFJkygdQJcwBbxdvEBuicvsCCcmAGGFVAcwlAcwVzHnPCwcSygdWEwHL/3DPC38TzMnIcCEBzwsAcRnPCwAiAREB/Mx2KQHPCwJwIwHPCwHJ0PhEghCAAAAAIbGCEP////8SvHBY4wQCznATzwsAyfkAFs8L/8l6E88LHwLQUgLOUFLLHwFWEvoCAVYQzwt/VhsBzHEZzwsBLgHMcc8LAFYZVQH0AHD6AiQJyVAyzHDPCwBwE/oCAslzE88LYRLMcRIB0s8LAMzJcPsAMAT4YsiAFGEhyx8VznYlAc8LA3AWzwsBydABVhHPC/8FzhbOcPoCgBNhAfQAcPoCcPoCcc8LYQPJUAPMyYEAgPsAXwdVB1UHVQdVB1UHVQdVB1UHVQdVCts8gRERWVsB2RMATMhwIQHPCwAbyz8Zy/8Xy/8Vy38Ty3/LfwXLf870APQAyQHMye1UAFDtQO1E0NMAAfJ/0z/T/9P/03/Tf9N/1dN/+kD0BPQE0QvtUFUCMFUI",
    code: "te6ccgECEgEABKoAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAsEAQL/BQT+j/2PeG3tQAfDAAPTP9Mf0x+TAe1QIsELjoMiwQzhAsAK8qkG8qgEo/LgRPgoyM4azsnQ+QFApfkQ8qjtRNDTADDyvvgAAdXT/9P/cPhk1fpA03/Tf9N/0QTR+ABwcAFVBlUGVQJVBFUEVQZVBlUJINs8egFVElVFXwgB2SLTAAgQBwYAMAHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QAkmXBwJFURAVUR2SIB4dP/cSTZA/6PfQLADPKpBvKoBKPy4ET4KMjOGs7J0PkBVBCl+RDyqNs8KVYTvgrDAFAKsPJ8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLZugzUMAzy4GQIbvLgZvgAVQVVClUGVQZVBlUGVQZVBlUHVQrbPIAMAVUSVTVfBwHZERAJA/7hB/KoBaPy4ET4KMjOG87J0PkBVBC2+RDyqNs8U5q+CsMAUAqw8nz4I4ED6KiCCBt3QKAqAblwVEHM4wQK8rxw+GRS2LoL1DAL8uBkBm7y4GYJ0CDXSsAC+ADIAfLgRVERzlJizskBzMlVBlUKVQVVBVUFVQVVCVUHVQdVCNs8ERAKABaACwFVElVFXwgB2QL03wHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFtAdMf1Ns8IXD4ZG4L1DAL8tBnIG7y0GcP0wDTANMA+kD6QPoAMFMKvPLgZfgo0wEhwQMRDAHqmDDAA/LQY/I04QHAAvK00wCO08iCEEVWRVIhAc8LH8lvACBviAXSB46AJyFwXiDhBG+NFszJJW+IJVURAVUTVRVVFeGOFgFvjRbMySVviCMjVQJVJFUHVQdVJeJVAjAgAVURVQLZIiHhAdMEAdcYATAhVQHZDQH+XwNWGST0AFYR+gJwJQHPCwBwIQHPC/9wzwsHySHMcRPPCwDtR3QYzwsCcSMBzwsBCATJVhNVAs4EbxBWElUIzFJkygdQJcwBbxdvEBuicvsCCcmAGGFVAcwlAcwVzHnPCwcSygdWEwHL/3DPC38TzMnIcCEBzwsAcRnPCwAiAQ4B/Mx2KQHPCwJwIwHPCwHJ0PhEghCAAAAAIbGCEP////8SvHBY4wQCznATzwsAyfkAFs8L/8l6E88LHwLQUgLOUFLLHwFWEvoCAVYQzwt/VhsBzHEZzwsBLgHMcc8LAFYZVQH0AHD6AiQJyVAyzHDPCwBwE/oCAslzE88LYRLMcQ8B0s8LAMzJcPsAMAT4YsiAFGEhyx8VznYlAc8LA3AWzwsBydABVhHPC/8FzhbOcPoCgBNhAfQAcPoCcPoCcc8LYQPJUAPMyYEAgPsAXwdVB1UHVQdVB1UHVQdVB1UHVQdVCts8gRERWVsB2RAATMhwIQHPCwAbyz8Zy/8Xy/8Vy38Ty3/LfwXLf870APQAyQHMye1UAFDtQO1E0NMAAfJ/0z/T/9P/03/Tf9N/1dN/+kD0BPQE0QvtUFUCMFUI",
    codeHash: "c0e19e7a71b75fccfbfe70c338d715749806bf5715e2e9a620108c060092e0e4",
};
//# sourceMappingURL=WrapperDeployerEverAccount.js.map