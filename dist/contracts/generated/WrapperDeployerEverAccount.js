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
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "wrapper_pubkey", "type": "uint256" }, { "name": "super_root", "type": "address" }, { "name": "wrapper_deploy_value", "type": "uint128" }, { "name": "wrapper_keep_balance", "type": "uint128" }, { "name": "reserve_wallet_value", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWrapperEverCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xb" }, { "name": "setFlexWalletCode", "inputs": [{ "name": "code", "type": "cell" }], "outputs": [], "id": "0xc" }, { "name": "deploy", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "init_args", "type": "cell" }, { "name": "wic_unsalted_code", "type": "cell" }], "outputs": [{ "name": "first", "type": "address" }, { "name": "second", "type": "uint256" }], "id": "0x1111" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "wrapper_pubkey_", "type": "uint256" }, { "name": "ext_wallet_value_", "type": "uint128" }, { "name": "wrapper_deploy_value_", "type": "uint128" }, { "name": "wrapper_keep_balance_", "type": "uint128" }, { "name": "reserve_wallet_value_", "type": "uint128" }, { "name": "super_root_", "type": "address" }, { "name": "wrapper_code_", "type": "optional(cell)" }, { "name": "flex_wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "te6ccgECFQEABMYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkIAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QkC3G3tQAfDAAPTP9Mf0x+TAe1QIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AHBwAVUGVQZVAlUEVQRVBlUGVQsg2zx6VSBVJV8GVQHZChMD/CLBDI6A4QfyqAWj8uBEWwj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboK1DAK8uBkbvLgZgjQINdKwAL4AMgB8uBFURHOUpLOyQHMyVUFVQlVBlUGVQZVBlUGVQhVBwwUCwEcVQjbPIALVRFVNF8GAdkTAuwCwAzyqQbyqASj8uBEMAj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboL1DAL8uBkCG7y4Gb4AFUFVQlVBlUGVQZVBlUGVQZVB1UJ2zyADFURVTRfBgHZFBMC9N8B0NMAAfJwINYB0wAw8neW7UDtUNswI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4QPTH4ERERK6l3BVIF8DAdnhbQHTH9TbPCFw+GRuC9QwC/LQZyBu8tBnD9MA0wDTAPpA+kD6ADBTCrzy4GX4KNMBIcEDFA4BRJgwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkPAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2RAB/l8DVhkk9ABWEfoCcCUBzwsAcCEBzwv/cM8LB8khzHETzwsA7Ud0GM8LAnEjAc8LAQgEyVYTVQLOBG8QVhJVCMxSZMoHUCXMAW8XbxAbonL7AgnJgBhhVQHMJQHMFcx5zwsHEsoHVhMBy/9wzwt/E8zJyHAhAc8LAHEZzwsAIgERAfzMdikBzwsCcCMBzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABbPC//JehPPCx8C0FICzlBSyx8BVhL6AgFWEM8Lf1YbAcxxGc8LAS4BzHHPCwBWGVUB9ABw+gIkCclQMsxwzwsAcBP6AgLJcxPPC2ESzHESAdLPCwDMyXD7ADAE+GLIgBRhIcsfFc52JQHPCwNwFs8LAcnQAVYRzwv/Bc4WznD6AoATYQH0AHD6AnD6AnHPC2EDyVADzMmBAID7AF8HVQdVB1UHVQdVB1UHVQdVB1UHVQrbPIEREVlbAdkTAEzIcCEBzwsAG8s/Gcv/F8v/Fct/E8t/y38Fy3/O9AD0AMkBzMntVABQ7UDtRNDTAAHyf9M/0//T/9N/03/Tf9XTf/pA9AT0BNEL7VBVAjBVCA==",
    code: "te6ccgECEgEABJkAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAoEATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYC3G3tQAfDAAPTP9Mf0x+TAe1QIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AHBwAVUGVQZVAlUEVQRVBlUGVQsg2zx6VSBVJV8GVQHZBxAD/CLBDI6A4QfyqAWj8uBEWwj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboK1DAK8uBkbvLgZgjQINdKwAL4AMgB8uBFURHOUpLOyQHMyVUFVQlVBlUGVQZVBlUGVQhVBwkRCAEcVQjbPIALVRFVNF8GAdkQAuwCwAzyqQbyqASj8uBEMAj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboL1DAL8uBkCG7y4Gb4AFUFVQlVBlUGVQZVBlUGVQZVB1UJ2zyADFURVTRfBgHZERAC9N8B0NMAAfJwINYB0wAw8neW7UDtUNswI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4QPTH4ERERK6l3BVIF8DAdnhbQHTH9TbPCFw+GRuC9QwC/LQZyBu8tBnD9MA0wDTAPpA+kD6ADBTCrzy4GX4KNMBIcEDEQsBRJgwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkMAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2Q0B/l8DVhkk9ABWEfoCcCUBzwsAcCEBzwv/cM8LB8khzHETzwsA7Ud0GM8LAnEjAc8LAQgEyVYTVQLOBG8QVhJVCMxSZMoHUCXMAW8XbxAbonL7AgnJgBhhVQHMJQHMFcx5zwsHEsoHVhMBy/9wzwt/E8zJyHAhAc8LAHEZzwsAIgEOAfzMdikBzwsCcCMBzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABbPC//JehPPCx8C0FICzlBSyx8BVhL6AgFWEM8Lf1YbAcxxGc8LAS4BzHHPCwBWGVUB9ABw+gIkCclQMsxwzwsAcBP6AgLJcxPPC2ESzHEPAdLPCwDMyXD7ADAE+GLIgBRhIcsfFc52JQHPCwNwFs8LAcnQAVYRzwv/Bc4WznD6AoATYQH0AHD6AnD6AnHPC2EDyVADzMmBAID7AF8HVQdVB1UHVQdVB1UHVQdVB1UHVQrbPIEREVlbAdkQAEzIcCEBzwsAG8s/Gcv/F8v/Fct/E8t/y38Fy3/O9AD0AMkBzMntVABQ7UDtRNDTAAHyf9M/0//T/9N/03/Tf9XTf/pA9AT0BNEL7VBVAjBVCA==",
    codeHash: "3aa91f9328d56fa543d042e9fa6ca97706dbd320603eca690bd1708dabd90455",
};
//# sourceMappingURL=WrapperDeployerEverAccount.js.map