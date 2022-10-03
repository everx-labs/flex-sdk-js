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
exports.FlexClientStubAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class FlexClientStubAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(FlexClientStubAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", input, options);
        });
    }
    onDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", input);
        });
    }
    runUnused(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "unused", {}, options);
        });
    }
    unused() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "unused", {});
        });
    }
}
exports.FlexClientStubAccount = FlexClientStubAccount;
FlexClientStubAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }], "outputs": [], "id": "0xa" }, { "name": "unused", "inputs": [], "outputs": [], "id": "0xb" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "__replay", "type": "uint64" }, { "name": "__await_next_id", "type": "uint32" }, { "name": "__await_dict", "type": "optional(cell)" }, { "name": "owner_", "type": "uint256" }, { "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet_", "type": "tuple" }, { "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "ex_triplet_", "type": "tuple" }, { "name": "auth_index_code_", "type": "optional(cell)" }, { "name": "user_id_index_code_", "type": "optional(cell)" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding_", "type": "optional(tuple)" }], "events": [] },
    tvc: "te6ccgECEAEAAxwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAEKAAAAAB8sBnAgEgCAcABv/yKQFk3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOgCBZAVUB4STHAiHhcCJwXzBVE9kJBPwwI9cNH2+jcCElcHBVCFUGVRIBVQNVGQFVCVUnVQrhcBPjBCLXSfKwk3Am2SEB4YIQgAAAALAC0x+OgCQB4JVwATAm2SLBC46A4QLACiLh0x/TH9Mf+kDT//gq0NdK2zxw+GRfBAvAAwzU1NQwDvLgZQxu8uBmyHAhAc8LABwNCw8KAIrLPxrLHxj0AHEazwsAHc4n+wQby/9QR8v/BdDU1DDQ7R5Q5ssfBe1TXwMCyQjPCx8Wyx8Tyx8Tyx8Tyx8S9AD0AMzJ8AEClgLACyLh2zyAIFPtVQH0D2+hL6SCEH////+wVQ/jBCD4ZHETsARVDlUCVQ5VDlUOVQ5VDlUOVQ5VDlUOVQ5VC1UNVQ7bPIALWVsm2Q8MAM7tQMhwIQHPCwBxFLCAEWEkyz+AEWEByx9VDwH0AAGjD88L/x3LHxvLHxnLHxfLHxXLHxPLH/QA9ACdMAPJUAPMye1UW+1QWych4XEXzwsAAlACzhLL/yRwcFUUAVUEVRJVBVUGVQbZAo6CEIAAAAASsts8gCBWEC5VAfQPb6Hyu9DTH4AVYdMA0wDTAPpAMNMBBdIH0//V+kDRWyLBA5hbwAPy0GPyNOECwALytAXTAA8OAKiOQzDSBwe6BtP/MFACuhWw8ruAIIAVYYATYVUB9FswBcAL8rpfBA/4Y4AgLVUPVQH0D2+hLqSCEH////+wQQ/jBPhk+AAiIeEB0wQB1xgBMCFVAdkAwO1A7UTQ0wAB8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATVltED7VBVAQHTAI4WcHBwVQNVBVtVtIARYVUdAVUOVR8B2SIB4fpA0/9xVQNVBVtVtIARYVUeVR4BgBFh2Q==",
    code: "te6ccgECDQEAAu8AAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAEKAAAAAB8sBnAgEgBQQABv/yKQFk3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOgCBZAVUB4STHAiHhcCJwXzBVE9kGBPwwI9cNH2+jcCElcHBVCFUGVRIBVQNVGQFVCVUnVQrhcBPjBCLXSfKwk3Am2SEB4YIQgAAAALAC0x+OgCQB4JVwATAm2SLBC46A4QLACiLh0x/TH9Mf+kDT//gq0NdK2zxw+GRfBAvAAwzU1NQwDvLgZQxu8uBmyHAhAc8LABwKCAwHAIrLPxrLHxj0AHEazwsAHc4n+wQby/9QR8v/BdDU1DDQ7R5Q5ssfBe1TXwMCyQjPCx8Wyx8Tyx8Tyx8Tyx8S9AD0AMzJ8AEClgLACyLh2zyAIFPtVQH0D2+hL6SCEH////+wVQ/jBCD4ZHETsARVDlUCVQ5VDlUOVQ5VDlUOVQ5VDlUOVQ5VC1UNVQ7bPIALWVsm2QwJAM7tQMhwIQHPCwBxFLCAEWEkyz+AEWEByx9VDwH0AAGjD88L/x3LHxvLHxnLHxfLHxXLHxPLH/QA9ACdMAPJUAPMye1UW+1QWych4XEXzwsAAlACzhLL/yRwcFUUAVUEVRJVBVUGVQbZAo6CEIAAAAASsts8gCBWEC5VAfQPb6Hyu9DTH4AVYdMA0wDTAPpAMNMBBdIH0//V+kDRWyLBA5hbwAPy0GPyNOECwALytAXTAAwLAKiOQzDSBwe6BtP/MFACuhWw8ruAIIAVYYATYVUB9FswBcAL8rpfBA/4Y4AgLVUPVQH0D2+hLqSCEH////+wQQ/jBPhk+AAiIeEB0wQB1xgBMCFVAdkAwO1A7UTQ0wAB8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATVltED7VBVAQHTAI4WcHBwVQNVBVtVtIARYVUdAVUOVR8B2SIB4fpA0/9xVQNVBVtVtIARYVUeVR4BgBFh2Q==",
    codeHash: "1f2f66a499b22fbbf413750f3fce7d3cb3efbbdcde13637735eb73da41835118",
};
//# sourceMappingURL=FlexClientStubAccount.js.map