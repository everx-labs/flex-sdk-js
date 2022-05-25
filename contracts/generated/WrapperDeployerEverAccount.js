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
    runSetWrapperEverCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWrapperEverCode", input);
        });
    }
    setWrapperEverCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWrapperEverCode", input);
        });
    }
    runSetExtWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setExtWalletCode", input);
        });
    }
    setExtWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setExtWalletCode", input);
        });
    }
    runSetFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setFlexWalletCode", input);
        });
    }
    setFlexWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setFlexWalletCode", input);
        });
    }
    runDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deploy", input);
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
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "wrapper_pubkey", "type": "uint256" }, { "name": "super_root", "type": "address" }, { "name": "wrapper_deploy_value", "type": "uint128" }, { "name": "wrapper_keep_balance", "type": "uint128" }, { "name": "reserve_wallet_value", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWrapperEverCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xb" }, { "name": "setExtWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xc" }, { "name": "setFlexWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xd" }, { "name": "deploy", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "init_args", "type": "cell" }, { "name": "wic_unsalted_code", "type": "cell" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x1111" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "wrapper_pubkey_", "type": "uint256" }, { "name": "ext_wallet_value_", "type": "uint128" }, { "name": "wrapper_deploy_value_", "type": "uint128" }, { "name": "wrapper_keep_balance_", "type": "uint128" }, { "name": "reserve_wallet_value_", "type": "uint128" }, { "name": "super_root_", "type": "address" }, { "name": "wrapper_code_", "type": "optional(cell)" }, { "name": "ext_wallet_code_", "type": "optional(cell)" }, { "name": "flex_wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "te6ccgECFgEABboAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIA4EATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYD/G3tQAfDAAPTP9Mf0x+TAe1QIsEMjoDhIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AMhwIQHPC0AXy/8Vy/9wzwt/y38Ty38Dy3/OJgH0ACYB9AAW9ADJUAXMyQoIBwAa7VR6WVUDVSVfBlUB2QH+B/KoBaPy4ERbCPkBVBCU+RDyqO1E0NMAAfJ/0z9TGL4B0//T/9N/038GwwBQBbAF03/V03/6QPQE9AT0BNEL8nz4I4ED6KiCCBt3QKBWEgG5cCGAFGFVAeMEAfK8cPhkUuq6DNQwDPLgZAFu8uBmCtAg10rAAvgAyAHy4EVREQkAfM5TIc7JAczJUhTPC38SzhL0ABn0AHAZzwsAUHj0AMlQR8s/GMv/y/8Wy3/LfxTLf8zJ7VSAC1UhVTVfBwHZAvwiwQ2OgOEH8qgFo/LgRFsI+QFUEJT5EPKo7UTQ0wAB8n/TP1MYvgHT/9P/03/TfwbDAFAFsAXTf9XTf/pA9AT0BPQE0QvyfPgjgQPoqIIIG3dAoFYSAblwIYAUYVUB4wQB8rxw+GRS6roM1DAM8uBkbvLgZvgAyHAhAc8LABkMCwBayz8dy/8Wy/8Uy38Wy3/LfwPLf84W9AAT9AD0AMlQA8zJ7VSADFUhVTVfBwHZAfwCwA3yqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AdP/0//Tf9N/BsMAUAWwBdN/1dN/+kD0BPQE9ATRC/J8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLqug3UMA3y4GQKbvLgZvgAyHAhAc8LABkNAF7LPx3L/xbL/xTLfxbLf8t/A8t/zhb0ABL0ABP0AMlQA8zJ7VSADQFVElU1XwcB2QEC3w8B/gHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFt7UTQ0wAB8n8C0x/U1DAE0z/T/9P/03/Tf9N/1dN/+kD0BPQE9AQjbgHRcPhk8tBnIG7y0GeAEWEQAXjTANMA0wD6QPpA+gAwUw288uBl+CjTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkRAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2RIB/l8DVhsk9ABwJQHPCwAgySHMVQFWFvoC7UdxEs8LAAECyYAgYSTMdBnPCwJxFc8LAVYVVQLOA28QbxdQI8xSaMwCbxBWE1UBzFJEygcLoXL7AgXJUEXMec8LB8oHVhYBy/9wzwt/E8zJyHAhAc8LAHEUzwsAIgHMdiQBzwsCcCMTAf4BzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABrPC//JehPPCx8C0FICzlCSyx8BVhX6AgFWEs8Lfy4BzHEUzwsBVhABzHHPCwBWHFUB9ABw+gIoBMlQMsxwzwsAcBP6AgLJcxPPC2ESzHHPCwDMyXD7APhiFAH+yIAYYSHLHxbOdiYBzwsDcBfPCwHJ0AHJBs4XznD6AoAXYQH0AHD6AnD6AnHPC2EUzMmBAID7AMhwIQHPCwCAFWEByz+AFGEBy/+AE2EBy/+AEmEBy3+AEWEBy39VDwHLfw7PC38czhr0ABj0ABb0AMlQCczJ7VSBERFVoF8LARUAAtk=",
    codeHash: "04eccde8f75ffd6d97c4c0ee27831d2c5ce1231b43096a87bd4b9c85e329d333",
};
//# sourceMappingURL=WrapperDeployerEverAccount.js.map