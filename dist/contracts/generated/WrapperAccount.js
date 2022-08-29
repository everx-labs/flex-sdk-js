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
exports.WrapperAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WrapperAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(WrapperAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runInit(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "init", input);
        });
    }
    init(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "init", input);
        });
    }
    runDeployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runOnTip3Transfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onTip3Transfer", input);
        });
    }
    onTip3Transfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onTip3Transfer", input);
        });
    }
    runBurn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burn", input);
        });
    }
    burn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burn", input);
        });
    }
    runTransferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferFromReserveWallet", input);
        });
    }
    transferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferFromReserveWallet", input);
        });
    }
    runRequestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloned", input);
        });
    }
    cloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloned", input);
        });
    }
    runSetCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setCloned", input);
        });
    }
    setCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setCloned", input);
        });
    }
    runGetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {});
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTip3Config", {});
        });
    }
    getTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTip3Config", {});
        });
    }
    runHasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasInternalWalletCode", {});
        });
    }
    hasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasInternalWalletCode", {});
        });
    }
    runGetWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getReserveWallet", {});
        });
    }
    getReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getReserveWallet", {});
        });
    }
}
exports.WrapperAccount = WrapperAccount;
WrapperAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "init", "inputs": [{ "name": "external_wallet", "type": "address" }, { "name": "reserve_wallet_evers", "type": "uint128" }, { "name": "internal_wallet_code", "type": "cell" }], "outputs": [], "id": "0xa" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xb" }, { "name": "onTip3Transfer", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "balance", "type": "uint128" }, { "name": "new_tokens", "type": "uint128" }, { "name": "evers_balance", "type": "uint128" }, { "components": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "name": "tip3cfg", "type": "tuple" }, { "components": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "name": "sender", "type": "optional(tuple)" }, { "components": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "name": "receiver", "type": "tuple" }, { "name": "payload", "type": "cell" }, { "name": "answer_addr", "type": "address" }], "outputs": [{ "name": "err_code", "type": "uint32" }, { "name": "flex_wallet", "type": "address" }], "id": "0xca" }, { "name": "burn", "inputs": [{ "name": "tokens", "type": "uint128" }, { "name": "answer_addr", "type": "address" }, { "name": "sender_pubkey", "type": "uint256" }, { "name": "sender_owner", "type": "optional(address)" }, { "name": "out_pubkey", "type": "uint256" }, { "name": "out_owner", "type": "optional(address)" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xc" }, { "name": "transferFromReserveWallet", "inputs": [{ "name": "answer_addr", "type": "optional(address)" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint128" }], "outputs": [], "id": "0xd" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0xe" }, { "name": "cloned", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "first", "type": "optional(address)" }, { "name": "second", "type": "uint256" }], "id": "0x400" }, { "name": "setCloned", "inputs": [{ "name": "cloned", "type": "optional(address)" }, { "name": "cloned_pubkey", "type": "uint256" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "wrappers_cfg_code_hash", "type": "uint256" }, { "name": "wrappers_cfg_code_depth", "type": "uint16" }], "outputs": [], "id": "0x500" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "total_granted", "type": "uint128" }, { "name": "wallet_code", "type": "cell" }, { "name": "external_wallet", "type": "optional(address)" }, { "name": "reserve_wallet", "type": "address" }, { "name": "super_root", "type": "address" }, { "name": "cloned", "type": "optional(address)" }, { "name": "type_id", "type": "uint8" }], "id": "0x100" }, { "name": "getTip3Config", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "id": "0x200" }, { "name": "hasInternalWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x10" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x300" }, { "name": "getReserveWallet", "inputs": [], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x12" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "wic_unsalted_code_", "type": "cell" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "workchain_id_", "type": "int8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "total_granted_", "type": "uint128" }, { "name": "internal_wallet_code_", "type": "optional(cell)" }, { "name": "start_balance_", "type": "varuint16" }, { "name": "super_root_", "type": "optional(address)" }, { "name": "wallet_", "type": "optional(address)" }, { "name": "cloned_", "type": "optional(address)" }, { "name": "cloned_pubkey_", "type": "uint256" }, { "name": "type_id_", "type": "uint8" }], "events": [] },
    tvc: "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",
    code: "te6ccgECRQEAFnIAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBUEAjz/0wAC0CDbPI6AIyHhgQIAFdcYATAkAVUhVQRVBNkUBQEkMAPTAI6AIiHhAdP/ATAhVQHZBgP2be1AA9M/0x/TH5UB7VDbMIEBACMBuY6A4SLBEo6A4QLAEPKpMAmj8nlfBALTAds8cPhkXwkJwALIAfKwcyEBzwsBcCIBzwsBydABzgn6QDBQCc6AEHESzwthgBAazwsfCm7AAHGwGs8LAMlQCMzJcPsAVQdVCV8JVQHZCwdBAnYCwBLyqTAJo/J5+CjbPHD4ZF8LJtMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2UEIAf7IcSEBzwsAcCIBzwsAgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCMBzwv/gBKAEhLPCw8G0gcwUgfKB8kizFLkznDPCyBwE88LP4AVYdMBBclQ4sxR9c6AEmFVA/QADcACUC3MyXASzwv/zMlQrcwYywdwzwt/CQH+Fcv/GszJB/KwcyMBzwsBcCQBzwsBydABzgX6QDBQBc6CEgE0ABIjAc8LJyfXZc8LD3QkAc8LAnETzwthgBIVzwsfUGLKB4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwWzwv/B/kAF88L/8nQ+QIUzwv/ydBQBQoAJM7JUATMyXD7AFVRVRhfCVUB2QOygQIAIwG5joDhgQEAE7ryqTAJo/J52zxw+GRbAQUDBPLgbSZuwwACwABQArHy0G34KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkPQQwB/shxIQHPCwBwIgHPCwCC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868IwHPC/+AEs8LDwXSBzBSBsoHySHMU3LOcM8LIHAjAc8LP4AdYdMBBMlWF1UCzFG3zoAbYVUD9AADwAJQI8zJcBLPC//MyVYUVQnMVhMBywcNAfxwzwt/VhEBy//MyQHysHMlAc8LAXAmAc8LAcnQAc6BAQAmAc8LH4ISATQAEicBzwsnI9dlzwsPgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvM8L/wP5ABPPC/+AFWFVAswD+kAwUALOUaXOgBNhVQLMAsl0JgEOAOzPCwIYygcH0HEbzwthgBJhVQLLB3EasAr5AhfPC//J0FAEzlDny/8cy38azHHPCwAWzo4kcBzPCwfJUAnMyVADzMlQB8zJAczJcPsAgQEAVbBVHV8OVQHZJSHhUHrOKXBVAVULVRlVGFUYAVUHVQlVClULVQvZAtaBAwAjAbmOgOGBAgCBAgAUuvKpC6PyeTAH0wHbPHD4ZF8LB8ACyAHysHMhAc8LAXAiAc8LAcnQAc4H+kAwUAfOgQIAF88LHxTMEsxxFc8LYQTLBxTL//goAc7JUALMyXD7AFUGVQhfCF4Q2RBBAlqBAwATuvKpCqPyeQnV0//bPHD4ZI6AgBJh0wCZcHEkVREBVRHZIgHh+kBwJNlBEQGqAdHIcCEBzwsAcCEBzws/+CgjzoAZYQHL/4AXYVUBzIAWYQHMjoAFowGAFmHPCwdwzwt/gBRhAcv/mnElAc8LABfOJdkiAeEjVQEwJVUBVTJVBlUV2RIB/ILwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwlAc8L/4ASzwsPVhUBygfJUATMcBTPCyCAHWHTAYAbYVUC9AAFyQLAAlAlzMlQA8zJUAbMyQLysHMjAc8LAXAkAc8LAcnQAc4B+kAwAc6CEgE0ABIjAc8LJyLXZRMA2s8LD3QkAc8LAoEDAHEUzwthgQMAFs8LHwGAFWHPCgeC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868E88L/wT5ABTPC//J0PkCzwv/ydBQAs7JUALMyXD7AIAUYnKAFmOAFmVVAdkAONMBAcAC7UAB8rDtUPpA+kD6ANMAMMMAcbADXwMD9t8B0CDTAAHycCDWAZbtQO1Q2zAB0wCOgAEwIQHhMATSHwHA//gA8uBl0x+CEEOE8pgSuvLgZdN/2zwqVhO58tBmVQmAEmGhcRiwcRawcRSwVQ9VD1UPVQ9VD1UPVQxVD1UPVQ9VDlUPVQ5VD1UNVQ9VD9s8cFUwXwQB2RZBPgSWMCTXDR9vowbbPJlwVSBVNF8HAdknAeEn10nysJuj8nlwWVUzXwYB2SMB4W0I0x+cW6PyeXBZVTNfBgHZIsEOjoDhIsEMjoDhIsELRC8gFwP6joDhAsAKIuH6QNN/2zxw+GSAEWHUMAXy0GwJbvLgaCP5AILwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zry68uBn+CrQINdKwAPy4EXIgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCEBzwv/gBIbQRgB/s8LDy4BygdwIgHPCwD4KHEiAc8LAQPJcCUBzwsBcSYBzwsAgCBh0wAJ1FJkzgTJA9RRaMx2KQHPCwJwGs8LP1YQVQrMDNMACdVwLgHPCx90LwHPCwIK0HAczwsgcVYXsAP6QDCAF2HAAA7TAAnJcYAUYQHPCwBWIVUJzFYsVQUZAfz0AFUOgBJhzlYdVQ/KBwjJDPpAcYAWYQGwgBJhVQuxgCNhC1CWzMmAEmGAE2HOcM8L/8zJVh1VBsxWHAHLB3DPC39WGgHL/8zJUAbMcM8LAMkg+QAazwv/ydBQA86AHWH6AlYkAfQAcPoCcPoCc88LYRjMcc8LABrMyXD7AHIaAdRWEgH7Ash2IQHPCwNwEs8LAcnQAc4WznD6AoAhYQH0AHD6AnD6AnDPC2HJgQCC+wBxgBlhgBlhgBlhgBlhgBlhgBlhgBlhgBVhgBhhVQ1VC1UNVQuAFmFVDYAWYYAZYds8elXAVR5fDwHZPgJQMAKj8nkw0x/T/9s8cPhkjoCAEmHTAJlwcSRVEQFVEdkiAeH6QHAk2UEcAe6AHGHTANMA0wD6QO1HbxBvFwH6QAjV03/4KAHRCvoAMARvEI6ACqMFoXL7AshwIQHPCwBwIQHPCz9Rws6AIWEBy/9WH1UMzFYeAcxWHQHLB3DPC39WGwHL/5pxJAHPCwAezizZKAHhIlUFMCxVAVVmVQ1VOlUc2R0B/oLwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwkAc8L/3AlAc8LAYASEs8LD1YeAcoHcSUBzwsBAckCyXQnAc8LAnYnAc8LAgLQUEfMcBXPCyBWHVUCzHAYzwsfcRjPCwBWK1UB9AAEyVBizlYfVQLKBwbJcYAWYQEeAf6wcYAYYQGwcYAaYQGwUFbMyVAGzMmAEWHMyVAGzHDPCwDJIPkAF88L/8nQUgLOUAf6AlYlAfQAcPoCcPoCc88LYRXMcc8LABPMyXD7AMiAHWEhyx8VznYlAc8LA3AWzwsBydAByQXOGM5w+gKAIWEB9ABw+gJw+gJxzwthE8zJHwGEgQCA+wCAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWFVCoAZYVULgBlhgBFhgBlhgBlh2zyAC1WgVRxfDQHZPgNyMAHBDY6A4QGj8nnTf/pA0//V2zxwcPhkjoCAE2HTAI4QcCNwVRMBVQFVEwFVBVUF2SIB4fpAcSTZKUEhATYB0//VjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkiASyOgALTAJlwcSVVEQFVEdkiAeHUcCXZIwH0AdEI0QLAAI6ACsAAgBNh8uBtVhhWI7ny0GrIcCEBzwsAcCEBzws/ViABzFYfAcz4KCPOgCRhAcv/AVYfzwsHgCph0wDTANMAcBXPC38E+kAwViFVBMv/jhAmVQIwVhJV84AUYXSAEWPZKQHgcSgBzwsAgBRhAc5WE9kkAdSC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868KQHPC/+AEs8LD1YjAcoHySjMcBLPCyBWMAH0AAHJdCoBzwsCghIBNAASKwHPCycBViXPCgdQI8zJUAjMyVACzMkg12UXzwsPJQH8gvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvM8L/wb5ABbPC//J0PkCFc8L/8nQFMcF8uBr+ESCEIAAAAAhsYIQ/////xK8cFjjBHYlAc8LAnAnAc8LAcnQAc6ACycBzwsfVhpQAs4Czwsfcc8LAIAmYQHOVQ8BJgFuy/9wEvoCgCthAfQAcPoCcPoCcc8LYY6AKSHgcSgBzwsAHs4tVQxVGwFVG1UbAVUHVUhVDVUN2ScBaHAYzwt/ViZVBst/cM8L/3HPCwCOgIARYaOZcRPPCwAczCHZ4XATzwsAVQQwIlUBVZJVGtkoAcjJUAvMyVACzMlxgBVhAbBxgBhhAbCAG2GAI2GhUDTMyYBA+wBxgCBhgCBhgCBhgCBhgCBhgCBhVQiAIGGAIGGAIGFVC4AgYVULgCBhVQ2AIGGAIGHbPIAMgBNicoAVY4AVZQHZPgJEAaPyeds8cPhkjoCAEmHTAJlwcSRVEQFVEdkiAeH6QHAk2UEqAZIB1fpA03/RDfLgbS2AHGHTANMA0wD6QDBRRMcF8uBk+Cgg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZKwH++ESCEIAAAAAhsYIQ/////xK8cFjjBMhRqs6AFmEBy396KwHPCx8Syx9xKwHPCwBwE88L/w2jQK7jBHEZzwsAcBzPCwBSTc5wKgHPCwCC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868KwHPC/+AEs8LDwTSBzBSBSwB/soHyVCtzlHJzHASzwsgUVrODclwKgHPCz8NzAHJcB7PC/90KwHPCwJ2G88LAnAsAc8LAVYnVQf0AFYgVQ7MghIBNAASHs8LJ3GAFWEBsHGAF2EBsIARYVUDzMkEydAHyVB1zlCNygdQJMzJVhtVDMxWGgHLB3DPC39WGAHL/8wtAfzJINdlEs8LD4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrzPC/8B+QDPC//J0PkCEs8L/8nQUAnOcPoCgB9hAfQAcPoCcPoCcc8LYRjMyYBA+wBxgBhhgBhhgBhhgBhhgBhhgBhhgBhhgBhhgBhhgBhhVQmAGGEuATSAEmGAGGFVDoAYYYAYYds8gA1VkFUbXwwB2T4E/oEEACMBuY6A4YEAyiMBuY6A4QLADiLhAqPyeds8cPhkgBJh0x/IUSLLH3YjAc8LA3AUzwsBydCAGmHTAFAlzlLzy38E0wDTAPpAcRuwcR2wcR+wB8kFznD6AoAeYQH0AHD6AnD6AnHPC2EUzMmAQPsAXwSAEWGAEWGAEWGAEWE4MUEwAVyAEWGAEWGAEWGAEWGAEWGAEWFVCVUPgBFhVQ+AEWFVD1UP2zyADlUwVRVfBgHZPgKGgQDKE7oi4QKj8nkw0x/Tf9N/03/U2zyAEWHUcPhk0wfT/9X6QNXTAI6AIiHhAdP/0wBVATAiVREB4QH6QAEwIVUB2UEyASgw1dP/0wCOgCIh4QH6QAEwIVUB2TMBjjDU1fpA0QHRBNEF0Vss8uBpLYAjYdMA0wDTAPpABccFBPpA+gAwBfLgaV8EI9DT/46AAdMAmXBxJFURAVUR2SIB4fpAcCTZNAG+7UdvEG8XAtN/038wA/goAW8QjoAEowqhcvsCyHAhAc8LAHAhAc8LP1EyzhrL/1YiVQLMViEBzFYgAcsHcM8Lf1YeAcv/mnEjAc8LABfOJNkrAeEpVQYwJVUBVUJVFdk1Af6CEEOE8pgjAc8LH4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwkAc8L/4ASzwsPcCUBzwsBAVYizwoHVilVAst/LgHOGMt/cSwBzwsBCMkCyXYtAc8LAgHQUD3McBTPCyBWH1UIzHETzwsAdBfPCwJxE88LAFYxNgH+VQH0AATJUMPOAVYhzwoHUPXMcYAXYQGwcYAZYQGwcYAbYQGwgCdhgB9hoFBWzMlQBszJUAnMyVALzArJcBvPCwDJIPkAFc8L/8nQUg/OUAX6AlYpAfQAcPoCcPoCc88LYRPMcc8LABjMyXD7AMh2IQHPCwNwIgHPCwHJ0IAjYTcB1lUCyx9wzwsfHc5QzM4ZznD6AoAlYQH0AHD6AnD6AnHPC2EKyVAKzMmBAID7ADCAGWGAGWGAGWGAGWGAGWGAGWFVCoAZYYAZYYAZYVUPgBlhVQ6AGWFVDYAZYYAZYds8gQDKVdBVH4AQZQHZPgPkgQUAIwG5joDhgQQAE7oi4QKj8nmOgNs8cPhkyHAhAc8LAcl2IgHPCwMB0IAbYdMA0wDTAIAaYdMfMFBWzlBWyx8D+kAwUAXOcPoCgB1hAfQAcPoCcPoCcc8LYZhwE88LAFYW2SgB4XETzwsAKAHOVhbZOjlBAaomAcv/yVACzMmAQPsAcRawcRiwcRqwgBNhgBNhgBNhgBNhgBNhgBNhgBNhgBNhgBNhgBNhVQmAEmGAE2GAEmGAE2GAEmGAEmHbPIEEAFVgVRhfCQHZPgJigQUAE7oi4QKj8nnbPHBw+GSOgIAUYdMAn3AjcFUTAVUBVQRVBVUU2SIB4fpAAXEk2UE7AfwC0//V+kDT/9MP0VUP8uBtVhnQINdKwALIAfLgRVYSIc5RUc4Uy/8Syw/JUAPMcCIBzwsAcCEBzwsAAslRQ850JAHPCwJwJAHPCwAkyYAkYdMA0wDTAPpAMFBFzFYdVQXKB1CmzMlxGM8LABfMcc8LAAjJcCYBzwsfVicB9AA8AfxWHgHMcM8LCMzJUAjMcM8LAMn5ABPPC//J0CEBxwXy4G52E88LAnAVzwsBydBQBM7OcPoCcVUPAbAIwwCAIWFVAfQAcPoCcPoCcM8LYcmAQvsAcYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYYAaYVUJgBphgBNhgBNhVQ09ASaAE2GAF2HbPIEFAFXAVR5fDwHZPgE4yHAhAc8LAIASYSHMgBJhAcxxGrBRwvQAUAv6Aj8B/o5ncRawjkjtQHEWsKOOGjBQOcv/ywfJUAfMyVADzMlQCMzJ7VTtUF8HIFkBVQHhcR3PCwAGUAbOK3BVGlUTAVULVRoBVShVCVULVQxVDNkBo5MoIdnhcSsBzwsAB1AHziZwVUJVB1UW2QyjgBFhVQnMVQ8Bywcfygcdy/8by39AADqXcBzPCwAp2S0B4XEczwsAB1AHzihwVUJVB1UW2QEw7UTQ0wAB8n/U1NTTB9IH0//Tf9X0BPoAQgH8jnEC1Y5c7UAD1Y4Q0//TB9EJ0QnRBu1QVQRVFQHTAI4ecHBVAlUYVR2AEmFfBlUHVQRVB1UYAVUYVRZVGAHZIgHh+kABcVUCVRhVHYASYV8GVQdVBFUHVRgBVRhVFlUYAdkB0wCUcHAk2SIB4fpAAXEk2QHTAJRwcCTZIgHhQwAM+kABcSTZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
    codeHash: "35e11a6fa6b9d68522dfc7d60e025305c899ae5d2d1b63b1be3ed34b73466045",
};
//# sourceMappingURL=WrapperAccount.js.map