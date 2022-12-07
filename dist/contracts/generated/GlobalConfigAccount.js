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
exports.GlobalConfigAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class GlobalConfigAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(GlobalConfigAccount.package, options);
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
    runGetDetails(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {}, options);
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetConfig(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getConfig", {}, options);
        });
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getConfig", {});
        });
    }
}
exports.GlobalConfigAccount = GlobalConfigAccount;
GlobalConfigAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "name": "keep_evers", "type": "uint128" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "flex", "type": "address" }, { "name": "user_cfg", "type": "address" }, { "name": "description", "type": "string" }], "outputs": [] }, { "name": "getDetails", "inputs": [], "outputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "version", "type": "tuple" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "flex", "type": "address" }, { "name": "user_cfg", "type": "address" }, { "name": "description", "type": "string" }] }, { "name": "getConfig", "inputs": [], "outputs": [{ "name": "super_root", "type": "address" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "version_", "type": "tuple" }, { "name": "wrappers_cfg_", "type": "optional(address)" }, { "name": "flex_", "type": "optional(address)" }, { "name": "user_cfg_", "type": "optional(address)" }, { "name": "description_", "type": "optional(string)" }], "events": [] },
    tvc: "te6ccgECFwEABLoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HAmD/0wAC0CDbPI6SMAPTAI6AIiHhAdP/ATAhVQHZIyHhgQIAFdcYATAkAVUhVQRVBNkMCAP87UAC0z/TH9MfkwHtUIIQeSE8OCMBuY6A4YIQRzOJloIQRzOJlhS68qkKo/J52zxw+GT4KtAg10rAA/LgRYATYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOcc8LYYIQxzOJlhLPCx8C1NTV+kAwUAXOyVADzMlwChMJABz7AFUvcoAUY4AUZVUB2QL+ghB5ITw4E7ryqTAIo/J52zwEwAAGwABQBrEBwACxAsAAcPhkBFBCsQMCBAPy0GYM0wEBwALIAfKwcCEBzwsByXMiAc8LAQHQUWLOUULOH8zJUAPMUE3OA/pAMFADzoIQ+SE8OBPPCx9xE88LYQvJUFLLHxPLH8sfEs7MyVAGzBMLACTJcPsAghB5ITw4WVUjXwVVAdkAONMBAcAC7UAB8rDtUPpA+kD6ANMAMMMAcbADXwMCaN8B0CDTAO1AAvJwINYB0wAw8neTAe1QJccBBds8joAmIeEnxwIh4TCj8nlwVRFVFF8EAdkWDgL+MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4QbTH4IQT34GpBK6njAFo/J5cFlVA18DVQHZ4W0B03/6QNX6QNs8cPhkC9X6QNTRAtEF8tBlgBNh0wDTAPgq0CDXSsADAtMA+kAwA/LgRTDU1NX6QDAkARMPAfzHBfLgZ3KAFmEB+wLIcCEBzwsBgAwiAc8LHwHJcVYVsHYUzwsDAdBWFFUCyx9xVhGwcS6wgBJhwAAPwACAF2HAAFBWzlBWsVA0sVDSsVYSVQzLHwsOgBRhgBZhUKbOcPoCgBZhAfQAcPoCcPoCcc8LYVYSVQzLH8kBzMmBAIAQAVb7AIASYYASYYASYVUGVQRVClUFVQZVD1UI2zyCEE9+BqRVkFULVR1fDQHZEQH8yHAhAc8LAFG7yx8ayx9xF7COaXEUsKNxGs8LAAUlzo5F7UBxFLCdyVADzMlQAszJ7VTtUAGjjhVwHc8LAAFVA1VVXwhVIF4QVQJVA9nhcR3PCwAEUATMVQJVVF8HVSBeEFUCVQPZKiHhBVAGziRwVQFVR1UFVSdVGlUL2QGjEgBEUJfLH5ZwzwsAKNknAeFxzwsAB1AHzidwVQYBVTNVB1UW2QFC7UTQ0wAB8n/TH9Mf0x+OgAHTAJRwcCTZIgHh+kABcSTZFAH8AtWObwLVjlrtQJoB0QnRB+1QVRUBBNMAjiJwcFUCVRdVLHKAEmNfCFUGVQNVGQFVGQFVGFUYAVUJVQrZIgHh1AFxVQJVF1UscoASY18IVQZVA1UZAVUZAVUYVRgBVQlVCtkB0wCUcHAk2SIB4fpAAXEk2QHTAJRwcCTZIgHhFQAM+kABcSTZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
    code: "te6ccgECFAEABI0AAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAoEAmD/0wAC0CDbPI6SMAPTAI6AIiHhAdP/ATAhVQHZIyHhgQIAFdcYATAkAVUhVQRVBNkJBQP87UAC0z/TH9MfkwHtUIIQeSE8OCMBuY6A4YIQRzOJloIQRzOJlhS68qkKo/J52zxw+GT4KtAg10rAA/LgRYATYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOcc8LYYIQxzOJlhLPCx8C1NTV+kAwUAXOyVADzMlwBxAGABz7AFUvcoAUY4AUZVUB2QL+ghB5ITw4E7ryqTAIo/J52zwEwAAGwABQBrEBwACxAsAAcPhkBFBCsQMCBAPy0GYM0wEBwALIAfKwcCEBzwsByXMiAc8LAQHQUWLOUULOH8zJUAPMUE3OA/pAMFADzoIQ+SE8OBPPCx9xE88LYQvJUFLLHxPLH8sfEs7MyVAGzBAIACTJcPsAghB5ITw4WVUjXwVVAdkAONMBAcAC7UAB8rDtUPpA+kD6ANMAMMMAcbADXwMCaN8B0CDTAO1AAvJwINYB0wAw8neTAe1QJccBBds8joAmIeEnxwIh4TCj8nlwVRFVFF8EAdkTCwL+MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4QbTH4IQT34GpBK6njAFo/J5cFlVA18DVQHZ4W0B03/6QNX6QNs8cPhkC9X6QNTRAtEF8tBlgBNh0wDTAPgq0CDXSsADAtMA+kAwA/LgRTDU1NX6QDAkARAMAfzHBfLgZ3KAFmEB+wLIcCEBzwsBgAwiAc8LHwHJcVYVsHYUzwsDAdBWFFUCyx9xVhGwcS6wgBJhwAAPwACAF2HAAFBWzlBWsVA0sVDSsVYSVQzLHwsOgBRhgBZhUKbOcPoCgBZhAfQAcPoCcPoCcc8LYVYSVQzLH8kBzMmBAIANAVb7AIASYYASYYASYVUGVQRVClUFVQZVD1UI2zyCEE9+BqRVkFULVR1fDQHZDgH8yHAhAc8LAFG7yx8ayx9xF7COaXEUsKNxGs8LAAUlzo5F7UBxFLCdyVADzMlQAszJ7VTtUAGjjhVwHc8LAAFVA1VVXwhVIF4QVQJVA9nhcR3PCwAEUATMVQJVVF8HVSBeEFUCVQPZKiHhBVAGziRwVQFVR1UFVSdVGlUL2QGjDwBEUJfLH5ZwzwsAKNknAeFxzwsAB1AHzidwVQYBVTNVB1UW2QFC7UTQ0wAB8n/TH9Mf0x+OgAHTAJRwcCTZIgHh+kABcSTZEQH8AtWObwLVjlrtQJoB0QnRB+1QVRUBBNMAjiJwcFUCVRdVLHKAEmNfCFUGVQNVGQFVGQFVGFUYAVUJVQrZIgHh1AFxVQJVF1UscoASY18IVQZVA1UZAVUZAVUYVRgBVQlVCtkB0wCUcHAk2SIB4fpAAXEk2QHTAJRwcCTZIgHhEgAM+kABcSTZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
    codeHash: "516d645e4fbbb7fc9fcf1dd68b2b2fd9de7e17b6b5dc15d618ab242727a34123",
};
//# sourceMappingURL=GlobalConfigAccount.js.map