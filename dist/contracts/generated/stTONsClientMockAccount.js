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
exports.stTONsClientMockAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class stTONsClientMockAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(stTONsClientMockAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", input);
        });
    }
    runDeployStTONs(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployStTONs", input);
        });
    }
    deployStTONs(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployStTONs", input);
        });
    }
    runReturnStake(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "returnStake", input);
        });
    }
    returnStake(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "returnStake", input);
        });
    }
    runFinalize(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "finalize", input);
        });
    }
    finalize(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "finalize", input);
        });
    }
    runGetOwnerPubkey() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getOwnerPubkey", {});
        });
    }
    getOwnerPubkey() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getOwnerPubkey", {});
        });
    }
}
exports.stTONsClientMockAccount = stTONsClientMockAccount;
stTONsClientMockAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "owner_pubkey", "type": "uint256" }], "outputs": [] }, { "name": "deployStTONs", "inputs": [{ "name": "evers", "type": "uint128" }, { "name": "code", "type": "cell" }, { "name": "owner_pubkey", "type": "uint256" }, { "name": "owner_address", "type": "optional(address)" }, { "name": "depool", "type": "address" }, { "name": "depool_pubkey", "type": "uint256" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "returnStake", "inputs": [{ "name": "stTONsAddr", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "processing_evers", "type": "uint128" }, { "name": "depool_processing_evers", "type": "uint128" }], "outputs": [] }, { "name": "finalize", "inputs": [{ "name": "stTONsAddr", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "processing_evers", "type": "uint128" }, { "name": "ignore_errors", "type": "bool" }], "outputs": [] }, { "name": "getOwnerPubkey", "inputs": [], "outputs": [{ "name": "value0", "type": "uint256" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "owner_pubkey_", "type": "uint256" }], "events": [] },
    tvc: "te6ccgECGQEABQIAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIBgHAgL9FggCASAXCQE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgCgEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkLA/5t7UAHwwAD0z/TH9MflQHtUNswghA8keHFIwG5joDhghAab2XsIwG5joDhghAU56/cghAU56/cFLryqQfyqAWj8uBECvkBVBC2+RDyqO1E0NMAAfJ/0z9TEr4CwwBQArAB0/8wAfJ8+COBA+iogggbd0CgIgG5cFRBROMEAvK8Eg0MANYD1fpA1fpAcPhk03/Tf1K6ugnRA9EH8uBk+ADIdiEBzwsDcCIBzwsBydABzoANEs8LHxLOEst/UCLOAckF+gIT9ABw+gJw+gJxzwthE8zJcPsAyHDPCwASyz8Ty//J7VRVIFU1XwdZAVUB2QHUghAab2XsE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuSDyvAPV03/U0/9w+GSOgAHTAJlwcCRVEQFVEdkiAeH6QHEk2Q4BggHV+kDT/9EC0VLbuvLgZPgAyHAhAc8LAHAhAc8LPxjL/46AjhBwEs8LAFUDMCFVAVUiVRPZJQHhcRLPCwAVziTZDwHOcFUNgBNhVQHjBFHCzhPL/3DPC59WEQH0AHDPCwhxKAHPCwEZzPgocRLPCwAJyQHTAVAkzMlQCcxwzwsAySD5ACnBA5lfCcAD8tBj8jThCcAC8rQC0wCOgCIh4QHTBAHXGAEwIVUB2RAB+nQkAc8LAgLSBzBQAsoHdhrPCwJwJAHPCwHJ0AHOUKnL/3oTzwsfAsnQgBVh0NMBUivOBMkBwAJQTPoCgBNhAfQAcPoCcPoCc88LYRTMcc8LABLMyXD7AMgJ8rBzKQHPCwFwKgHPCwHJ0AHOB/pAMFAHznHPC2GCEJpvZewZEQBUzwsfzslQB8zJcPsAyHDPCwAYyz8Zy//J7VSCEBpvZexVUFUnVRtfCwHZAaiCEERVjqYjAbmOgOGCEDyR4cWCEDyR4cUUuvKpB/KoBaPy4EQK+QFAtvkQ8qjtRNDTADDyvvgAcPhkMNXT/9HIcM8LQMv/ye1UVSFVNl8IWQFVAdkTAeaCEFXdAKQjAbmOgOGCEERVjqaCEERVjqYUuvKp7UTQ0wAB8n9w+GSAEWHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthghDEVY6mEs8LHwLTP9P/MFADy//JAczJcPsAVQFVc1U8Xw7ZFAH+ghBV3QCkE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuXBUQarjBAjyvALV+kDV+kBw+GTTf9MAUpm6CNED0Qby4GT4AMh2IQHPCwNwIgHPCwHJ0ATDAFBEzhUAhnEUsIAOEs8LHxLOywDJUCLOUAT6Ahn0AHD6AnD6AnHPC2ESzMlw+wDIcM8LABbLP8v/ye1UghBV3QCkWVU0XwZVAdkCASAXFwAFPI2gACjfMNDTAJLyMCIB4NYB0wAw8qnyNw==",
    code: "te6ccgECFgEABNUAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBUEAgL9EwUCASAUBgE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgBwEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkIA/5t7UAHwwAD0z/TH9MflQHtUNswghA8keHFIwG5joDhghAab2XsIwG5joDhghAU56/cghAU56/cFLryqQfyqAWj8uBECvkBVBC2+RDyqO1E0NMAAfJ/0z9TEr4CwwBQArAB0/8wAfJ8+COBA+iogggbd0CgIgG5cFRBROMEAvK8DwoJANYD1fpA1fpAcPhk03/Tf1K6ugnRA9EH8uBk+ADIdiEBzwsDcCIBzwsBydABzoANEs8LHxLOEst/UCLOAckF+gIT9ABw+gJw+gJxzwthE8zJcPsAyHDPCwASyz8Ty//J7VRVIFU1XwdZAVUB2QHUghAab2XsE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuSDyvAPV03/U0/9w+GSOgAHTAJlwcCRVEQFVEdkiAeH6QHEk2QsBggHV+kDT/9EC0VLbuvLgZPgAyHAhAc8LAHAhAc8LPxjL/46AjhBwEs8LAFUDMCFVAVUiVRPZJQHhcRLPCwAVziTZDAHOcFUNgBNhVQHjBFHCzhPL/3DPC59WEQH0AHDPCwhxKAHPCwEZzPgocRLPCwAJyQHTAVAkzMlQCcxwzwsAySD5ACnBA5lfCcAD8tBj8jThCcAC8rQC0wCOgCIh4QHTBAHXGAEwIVUB2Q0B+nQkAc8LAgLSBzBQAsoHdhrPCwJwJAHPCwHJ0AHOUKnL/3oTzwsfAsnQgBVh0NMBUivOBMkBwAJQTPoCgBNhAfQAcPoCcPoCc88LYRTMcc8LABLMyXD7AMgJ8rBzKQHPCwFwKgHPCwHJ0AHOB/pAMFAHznHPC2GCEJpvZewZDgBUzwsfzslQB8zJcPsAyHDPCwAYyz8Zy//J7VSCEBpvZexVUFUnVRtfCwHZAaiCEERVjqYjAbmOgOGCEDyR4cWCEDyR4cUUuvKpB/KoBaPy4EQK+QFAtvkQ8qjtRNDTADDyvvgAcPhkMNXT/9HIcM8LQMv/ye1UVSFVNl8IWQFVAdkQAeaCEFXdAKQjAbmOgOGCEERVjqaCEERVjqYUuvKp7UTQ0wAB8n9w+GSAEWHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthghDEVY6mEs8LHwLTP9P/MFADy//JAczJcPsAVQFVc1U8Xw7ZEQH+ghBV3QCkE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AsMAUAKwAdP/MAHyfPgjgQPoqIIIG3dAoCgBuXBUQarjBAjyvALV+kDV+kBw+GTTf9MAUpm6CNED0Qby4GT4AMh2IQHPCwNwIgHPCwHJ0ATDAFBEzhIAhnEUsIAOEs8LHxLOywDJUCLOUAT6Ahn0AHD6AnD6AnHPC2ESzMlw+wDIcM8LABbLP8v/ye1UghBV3QCkWVU0XwZVAdkCASAUFAAFPI2gACjfMNDTAJLyMCIB4NYB0wAw8qnyNw==",
    codeHash: "396856ad1b4705d4f3aea9e9f7a3a5068db30f9a4008c807887f51e899a6e936",
};
//# sourceMappingURL=stTONsClientMockAccount.js.map