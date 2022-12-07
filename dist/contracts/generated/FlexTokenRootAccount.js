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
exports.FlexTokenRootAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class FlexTokenRootAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(FlexTokenRootAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", input);
        });
    }
    runSetWalletCode(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setWalletCode", input, options);
        });
    }
    setWalletCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setWalletCode", input);
        });
    }
    runDeployWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployWallet", input, options);
        });
    }
    deployWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployWallet", input);
        });
    }
    runDeployEmptyWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input, options);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runGrant(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "grant", input, options);
        });
    }
    grant(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "grant", input);
        });
    }
    runMint(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "mint", input, options);
        });
    }
    mint(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "mint", input);
        });
    }
    runRequestTotalGranted(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input, options);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runGetName(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getName", {}, options);
        });
    }
    getName() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getName", {});
        });
    }
    runGetSymbol(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getSymbol", {}, options);
        });
    }
    getSymbol() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getSymbol", {});
        });
    }
    runGetDecimals(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDecimals", {}, options);
        });
    }
    getDecimals() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDecimals", {});
        });
    }
    runGetRootKey(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getRootKey", {}, options);
        });
    }
    getRootKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getRootKey", {});
        });
    }
    runGetRootOwner(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getRootOwner", {}, options);
        });
    }
    getRootOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getRootOwner", {});
        });
    }
    runGetTotalSupply(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTotalSupply", {}, options);
        });
    }
    getTotalSupply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTotalSupply", {});
        });
    }
    runGetTotalGranted(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTotalGranted", {}, options);
        });
    }
    getTotalGranted() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTotalGranted", {});
        });
    }
    runHasWalletCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasWalletCode", {}, options);
        });
    }
    hasWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasWalletCode", {});
        });
    }
    runGetWalletCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletCode", {}, options);
        });
    }
    getWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletCode", {});
        });
    }
    runGetWalletAddress(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input, options);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetWalletCodeHash(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletCodeHash", {}, options);
        });
    }
    getWalletCodeHash() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletCodeHash", {});
        });
    }
}
exports.FlexTokenRootAccount = FlexTokenRootAccount;
FlexTokenRootAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_owner", "type": "optional(address)" }, { "name": "total_supply", "type": "uint128" }], "outputs": [], "id": "0xa" }, { "name": "setWalletCode", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "wallet_code", "type": "cell" }], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0xb" }, { "name": "deployWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "tokens", "type": "uint128" }, { "name": "evers", "type": "uint128" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xc" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xd" }, { "name": "grant", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "dest", "type": "address" }, { "name": "tokens", "type": "uint128" }, { "name": "evers", "type": "uint128" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xe" }, { "name": "mint", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "tokens", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0xf" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0x10" }, { "name": "getName", "inputs": [], "outputs": [{ "name": "value0", "type": "string" }], "id": "0x11" }, { "name": "getSymbol", "inputs": [], "outputs": [{ "name": "value0", "type": "string" }], "id": "0x12" }, { "name": "getDecimals", "inputs": [], "outputs": [{ "name": "value0", "type": "uint8" }], "id": "0x13" }, { "name": "getRootKey", "inputs": [], "outputs": [{ "name": "value0", "type": "uint256" }], "id": "0x14" }, { "name": "getRootOwner", "inputs": [], "outputs": [{ "name": "value0", "type": "optional(address)" }], "id": "0x15" }, { "name": "getTotalSupply", "inputs": [], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0x16" }, { "name": "getTotalGranted", "inputs": [], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0x17" }, { "name": "hasWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x18" }, { "name": "getWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "cell" }], "id": "0x19" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x1a" }, { "name": "getWalletCodeHash", "inputs": [], "outputs": [{ "name": "value0", "type": "uint256" }], "id": "0x1b" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "__replay", "type": "uint64" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "root_owner_", "type": "optional(address)" }, { "name": "total_supply_", "type": "uint128" }, { "name": "total_granted_", "type": "uint128" }, { "name": "wallet_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "te6ccgECRAEAFasAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBICcEAWT/jpeOgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QUEUG3tQAfDAAPTP9Mf0x+VAe1Q2zAiwRSOgOEiwQ+OgOEiwQyOgOEiwQscFwoGBP6P6QfyqAWj8uBE+CjIzhvOydD5AVQQtvkQ8qjbPFOavgrDAFAKsPJ8+COBA+iogggbd0CgKgG5cFRBzOMECvK8KHD4ZG4M0x/UMA3y4GwwUtW68uBkcRKw+AAoJycnVhAnJigrVQ/bPCn5AOECwAryqQbyqASj8uBE+CjIzhrOQ0IIBwHWydD5AUCl+RDyqO1E0NMAMPK++AAB1NTTB9XT/3Bw+GSOrwLTf9FTJrHy4GoCwwBwcAFVC1ULVQtVClUGVQZVB1UHVQ3bPHpVMFUVVUhfCwHZAtMAnXAkcFUDAVUDVQRVE9kiAeH6QAFxJdlCAv6C8Lbc1nnJ1WxxQgZozKfrbjMRN7uy8AtJZ6piG6Mw/XywuvgP+ADy4Gsp12XAD/Lga4ATYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAXEs8LIHESzwthAckBzMlw+wBVBlUGVQZVBlUKVQZVBVUGVQdVCds8QgkAFoALAVUSVTVfBwHZA/4iwQ6PYwfyqAWj8uBE+CjIIQHOHM7J0PkBVBDH+RDyqNs8U5u+CsMAUAqw8nz4I4ED6KiCCBt3QKArAblwVEHd4wQL8rwM0x/V+kDTf9N/cPhkjoAB0wCZcHEkVREBVRHZIgHh1HAk2eECwAzyqQbyqASj8uBE+CjIIQHOG87JQxULAmTQ+QFUELb5EPKo2zxTmr4KwwBQCrDyfPgjgQPoqIIIG3dAoCoBuSDyvA3TH9Vw+GTT/0MMBPiP93CAFWGAE2FVAeMEAtN/1dN/j2EB0QXRVhZuJ8AAAfLQbSZWEKBWESG58tBlUY2x8uBqgBFh8tBoVhmAE2G68uBk+ABwKVYWVhZWFlYdVhdVBVYXgBdhVh3bPPgP+ABWG9MBIcEDmDDAA/LQY/I04QHAAvK0AdMAAdMAQg8ODQAkmXBwJFURAVUR2SIB4fpAcSTZACKZcHEkVREBVRHZIgHh1HAk2QGYjrYDwADIcCEBzwsAcCEBzws/VhsBzFYaAcxWIyPOgBVhAcv/AVYZzwsHcM8LfwfSBzBWH1UHy/8B0wCVICNwWdkiAeEg0wQB1xgk2RAC/o7jgvC23NZ5ydVscUIGaMyn624zETe7svALSWeqYhujMP18sCcBzwv/gA/PCw8UygfJcBTPCyBxJgHPCwFWHgHMcc8LAFYfVQH0AFBGzMlQBczJUAPMyVACzMlSAsxwzwsAyfkAnSRVBzAhVaiAFGFVi9krAeBxJgHPCwCAFGESEQAIAc4h2QHUjtQwgBRh+GR0FM8LAgbSBzBQBsoHyHAhAc8LAFBCy/+CEEOE8pgkAc8LHx/Lfw7JdiIBzwsCcBXPCwHJ0FAEzgPQcRLPCwGAIGFVDs4tAct/VhlVAcwlIeAH0wQB1xgBMCcBVVFVB1UH2RMC/o7nyVAEzMlw+wBfCIAVYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAMgAwTzwsfE85xE88LYQLJUALMyXD7AHBVA1ULVQtVC1UOVQxVBVUMVQlVDds8VTBVFVUoXwkB2Q+jUjbOUA76AoAaYQH0AHD6AnD6AnNCFABYzwthcR7PCwAXzHDPCwDJUAzMcc8LAJlxFs8LABjMK9kjAeFwFs8LAAEwK9kD/gHRJVYVoFOgufLQZQvy0GhWFlUMuvLgZPgAcFYSVhBWEFYQVhpWEVUFVhCAG2FWGNs8+A/4AMhwIQHPCwGCEEOE8pgiAc8LHxjLf3YSzwsDB8mOq8kBzMlw+wBwVQ5VDFUMVQyAEWFVDVUFVQxVDVUO2zyADlVgVRhVO18NAdlCQhYAfAOjAdBQCM4YzlAF+gKAEmEB9ABw+gJw+gKAF2FVBs5xEs8LYXASzwt/mHHPCwASzCTZJwHhcM8LAFUBMCTZBP4iwRKOgOEiwRGOyVUP0NMB2zxw+GRfCAPAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOA/pAMFADznHPC2GAEYARFM8LHxTMyVADzMlw+wABVZJVPV8PAdnhAsAP8qkG8qgEo/LgRPgoyM4azsnQ+QFUEKX5EPKo2zwpVhO+CsMAUAqwGkNDGAL+8nz4I4ED6KiCCBt3QKBWEgG5cCGAFGFVAeMEAfK8cPhkDNMf1dN/0QXy0GhbUsW68uBk+ABwKygoKFYQKFUFJytWENs8+A+AEmHQ0wEBwAL4AMgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAfEs8LIHESzwthUDKgAskBzEIZAUzJcPsAcFUJVQZVBlUGVQpVBlUFVQZVB1UI2zyADwFVElUlXwYB2UID/gLBE47LMA7Q0wHbPHD4ZF8GBcACyAHysHMhAc8LAXAiAc8LAcnQAc4F+kAwUAXOgBNxEs8LYYATFs8LHxbLB8lQBMzJcPsAVXNVPF8PVQHZ4TAO0NMB2zxw+GRfBwTAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOBPpAMFAEzoAScRJDQxsAOM8LYYASFc8LHxXMyVADzMlw+wBVclU7Xw5VAdkE+CLBGI6A4SLBFo6A4QLBFY7lMA7Q0wHbPHD4ZF8DCMACyAHysHMhAc8LAXAiAc8LAcnQAc4I+kAwUAjOcc8LYY4VyQHMyXD7AIAVVeB0gBFjgBNlVQHZcRqwgBUZzwsfmgJxE88LABLOKNkpAeBwzwsAVQEwKNnhMA7Q0wEgHkMdAY7bPHD4ZF8FBsACyAHysHMhAc8LAXAiAc8LAcnQAc4G+kAwUAbOgBRxEs8LYYAUF88LHxfL/8lQBczJcPsAVXRVPYAQZVUB2UMD/gLBF47NMA7Q0wHbPHD4ZDAKwALIAfKwcyEBzwsBcCIBzwsBydABzgr6QDBQCs6AF3ESzwthgBcbzwsfG8t/yVAJzMlw+wBVeHSAEmOAFGVVAdnhMA7Q0wHbPHD4ZFsJwALIAfKwcyEBzwsBcCIBzwsBydABzgn6QDBQCc6AFnFDQx8AQhLPC2GAFhrPCx8ay3/JUAjMyXD7AFV3dIARY4ATZVUB2QTaIsEaj+QiwRuO1QLAG/KpMA7Q0wHbPHD4ZAvAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOC/pAMFALzoAbcRLPC2GAGxzPCx8M+QAczwv/yVAKzMlw+wBVeXSAE2OAFWVVAdnhAdXT/9s8cPhk4QLBGUNDIyED/o7LMA7Q0wHbPHD4ZAvAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOC/pAMFALzoAZcRLPC2GAGRzPCx8czMlQCszJcPsAVXl0gBNjgBVlVQHZ4TAO0NMB2zxw+GQLwALIAfKwcyEBzwsBcCIBzwsBydABzgv6QDBQC86AGHESzwthgBhDQyIARBzPCx8MbsAAcbAczwsAyVAKzMlw+wBVeXSAE2OAFWVVAdkB8I7h+CgC0QEg0wEhwQOYMMAD8tBj8jThAcAC8rSOsQPAAMhwIQHPCwBwIQHPCz+AFGEBzIATYQHMgBJhAcsHUYLOgBRhAcv/cBnPC38G0gcB0wCVICNwWdkiAeEg0wQB1xgk2QvTAJlwcS5VEQFVEdkiAeH6QHAu2SQC/o7igvC23NZ5ydVscUIGaMyn624zETe7svALSWeqYhujMP18sCYBzwv/gA/PCw8UygfJcBTPCyBxJQHPCwEfzHHPCwCAGmFVDvQAUEXMyVAEzMlQCczJUArMyVAJzHDPCwDJ+QALo4ATYVUIy/+acSYBzwsAHc4r2SIB4SRVATAmJQAUK1UBVZJVDFUb2QDgjlowgB9h0NMBAcAC8rBzIwHPCwFwJAHPCwHJ0AHOAfpAMAHOgBpxEs8LYYAaJAHPCx90Fc8LAgfSBzBQB8oHEsv/ydBQAs7JUATMyXD7AFWyVX90gBljgBplAdkjIeAF0wQB1xgBMCUBVTFVBVUF2QEC3ygE/AHQ0wAB8nAg1gGW7UDtUNswAdMAj9UwI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4W0E0x+YcFlVI18FAdkiwQ2OgyLBD+EiwQuOgOECwAoi4e1E0NMAMPK++ADU1NMH0/9wcPhkATAhAeEwA9IfAcD/+ADy4GbTHzUrKikCcoIQQ4TymBK68uBm0x/Tf9s8Uxu58tBnC6FxE7BVB1UHVQdVB1UHVQdVBVUGVQdVCds8cFUwXwQB2UNCAZKOrVMGsfLgagLTfzACwwBwcAFVClUKVQpVClUGVQZVB1UHVQ/bPHpVMFUVXwYB2QLTAJ1wJHBVAwFVA1UEVRPZIgHh+kABcSXZQgT+MAHBDI8K0x/T/9s8cHD4ZOHTH9s8cPhkbiQL1DAB8uBsI/LgaQ7TANMA0wD6QFHhxwUO+kD6ADAP8uBkMFYR+QCC8Lbc1nnJ1WxxQgZozKfrbjMRN7uy8AtJZ6piG6Mw/XywuvgA8uBrVhHXZcAP8uBr7UdvEG8XbxBxGLBQfkMtQywBwKFy+wLIdiEBzwsDcCIBzwsBydABzhfOcPoCgBJhAfQAUObLH3AW+gJxFs8LAHAW+gIFyXEWzwthFczJgQCA+wAwVQdVB1UHVQdVB1UHVQhVB1UHVQzbPIALWVUDXwMB2UIC/I77AdXTf9N/jt8B0StuKMAAAfLQbVJuoFPgufLQZVUHVhex8uBqLvLgaS+AG2HTANMA0wD6QFFRxwXy4GTtR28Q+Cj4ACDTAQMI+kD6ADAJbxdvEBmicvsCIMEDl8AD8tBj8jThwALytAHTAJlwcSRVEQFVEdkiAeHUcCTZDC8uADLTAJ5wLnBVAwFVEgFVBFUE2SIB4fpAcS/ZAZaOtQPAAMhwIQHPCwBwIQHPCz9WIQHMViABzFFyzoAkYQHL/1YfVQfLB3DPC38H0gcwVh5VB8v/AtMAlSAkcFnZIgHhINMEAdcYJdkwAv6O44LwttzWecnVbHFCBmjMp+tuMxE3u7LwC0lnqmIbozD9fLAnAc8L/4APzwsPFMoHyXAUzwsgcSYBzwsBVhsBzHHPCwBWKVUB9ABQRszJUAXMyVADzMlQAszJUgLMcM8LAMn5AJ0kVQcwIVXYgBdhVY7ZVhwB4HEmAc8LAIAYMjEACmEBziHZAdSO1DBWIvhkdBTPCwIG0gcwUAbKB8hwIQHPCwBQQsv/ghBDhPKYJAHPCx+AFGEBy38ByXYjAc8LAnAWzwsBydBQBc4E0HETzwsBUpLOVhMBy39WF1UBzCUh4AfTBAHXGAEwJwFVUVUHVQfZMwL8jvbJUA7MyXD7AMh2IQHPCwNwIgHPCwGAIGFVAssfcYAZYQGwAsnQUAPOGc5w+gKAIGEB9ABw+gJQ7s5wHvoCDclxHs8LYR3MyYEAgPsAXwWAFGGAFGGAFGGAFGGAFGGAFGFVBYAUYVULgBNh2zyADFWwVQ1fDQHZVQ+jUkfOQjQAjoAUYfoCViUB9ABw+gJw+gJzzwthcRPPCwAZzHDPCwDJAcxxzwsAmXESzwsAH8wm2SUB4XASzwsAVQIwJlUBVaNVDlUOVR3ZBP6P/SLBEI6A4TDTH9s8cPhkCtN/MCPy4GkkVQ/TANMA0wD6QFFRxwXy4GTtR28QbxcF+kD4APoAMAZvEFB5oHEasFCFoXL7Ash2IQHPCwNwIgHPCwHJ0AHOGM5w+gKAFGEB9ABVD1UHyx9wEvoCcRLPCwBwEvoCAclxEs8LYczJQEM/NgRs4TABwQ6PJNMf+kDTf9N/2zwkcPhkjoAM0wCZcHEvVREBVRHZIgHh1HAv2eHTH9P/2zxwcPhkQz1DNwHUjs4lAtXTf9EDbiLAAAHy0G1VAVYSsfLgau1HbxD4KCDTAQNvF4AZYdMA0wDTAPpA+kD6ADAGbxAWonL7AiXBA5lfBcAD8tBj8jThBcAC8rQM0wCecC5wVQMBVRIBVQRVBNkiAeH6QHEv2TgBlo61A8AAyHAhAc8LAHAhAc8LP1YcAcxWGwHMUcLOgB9hAcv/VhpVDMsHcM8LfwfSBzBWGVUHy/8H0wCVIClwWdkiAeEg0wQB1xgq2TkC9I74gvC23NZ5ydVscUIGaMyn624zETe7svALSWeqYhujMP18sCcBzwv/gA/PCw8UygfJcBTPCyBxJgHPCwFWFgHMcc8LAFYkVQH0AFFGzMlQBMzJUATMyQHMyQHMcM8LAMkg+QCOgCYh4AjTBAHXGAEwKAFVYVUIVQjZOzoAPp0kVQcwIVWYgBNhVYrZVhAB4HEmAc8LAIATYQHOIdkB/nQmAc8LAnYWzwsCcCcBzwsBydAK0gcwUKrOUJXKB8v/yXAVzwsfBNBSBM4EyXGAF2EBsFUEgBFh+gJWIAH0AHD6AnD6AnPPC2ETzHHPCwDMyXD7AMiAG2Ehyx8UznYkAc8LA3AVzwsBydAByQTOG85w+gKAHGEB9ABw+gJw+gI8AVxxzwthEszJgQCA+wBfCFUNVQ1VDVUNVQ1VDVUFVQ1VDVUN2zyADVVQVQdfBwHZQgL8VhFVBqBTcLny0GUo8uBpgBZh0wDTANMA+kBRoccF8uBk7UdvEG8XCvpA+AD6ADALbxCOsskBzMmBAID7AHEcsIARYYARYYARYYARYYARYYARYVUFVQ9VCVUP2zyADlWgVQxfDAHZCKMMoXL7Ash2IQHPCwNwIgHPCwHJ0AHOQj4AkIAZYQHOcPoCgBxhAfQAghBDhPKYEs8LH3AS+gIBgBhhzwt/cBL6AlAzznETzwthcBPPC3+Ycc8LABnMJtksAeFwzwsAATAm2QFMgQCA+wBfA1UIVQhVCFUIVQhVCFUFVQhVCFUJ2zyAD1lVA18DAdlCAvwCwBAi4QTTANMA7UdvEG8XAdMA+kD6QNs8cPhkCvoAMA5vEIAUYdMfcRawVQFVD6Fy+wLIdiEBzwsDcCIBzwsBydABzh/OcPoCgBVhAfQAUC7LH3Ae+gJSLst/cB76Ag3JcR7PC2EdzMmBAID7AFUHVQdVB1UHVQdVB1UKVQdDQQEgVQdVCds8gBBVUFUHXwcB2UIAru1AyHAhAc8LABzLPxrMcRWwjhFQNct/y3/0AMlQAszJ7VTtUAGjUJXMF8sHFcv/jhBwzwsAVRFbVSBeEFUCVQPZIwHhcc8LAANQA84BMFUgXhBVAlUD2QCW7UDtRNDTAAHyf9M/1NTTB9P/jhDV03/Tf/QE0QbtUFUBMFUDAdMAn3BwVQIwVUNVCFUVVRcB2SIB4fpAAXFVAjBVQ1UIVRVVFwHZ",
    codeHash: "8b7f59d7fc19eb2db0b3fb6e3d8c50d1c5fe6360a7df592a412069172e735cd6",
};
//# sourceMappingURL=FlexTokenRootAccount.js.map