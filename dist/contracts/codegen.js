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
exports.genContractCode = exports.contractCodeHeader = void 0;
function contractCodeHeader(options) {
    return `
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    ${options.hasDeploy ? "deployHelper," : ""}
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
`;
}
exports.contractCodeHeader = contractCodeHeader;
function genContractCode(web3, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { name, abi, tvc, } = options;
        const contractCode = (_a = (yield web3.boc.decode_tvc({ tvc })).code) !== null && _a !== void 0 ? _a : "";
        const contractCodeHash = (yield web3.boc.get_boc_hash({ boc: contractCode })).hash;
        let code = "";
        for (const fn of abi.functions || []) {
            if (fn.name !== "constructor") {
                code += fnTypesCode(name, fn);
            }
        }
        code +=
            `
export class ${name}Account extends Account {
    static package: ContractPackageEx = {
        abi: ${JSON.stringify(abi)} as unknown as AbiContract,
        tvc: "${tvc}",
        code: "${contractCode}",
        codeHash: "${contractCodeHash}",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(${name}Account.package, options);
        this.log = options.log ?? Log.default;
    }
`;
        code += deployFnCode(abi);
        for (const fn of abi.functions || []) {
            if (fn.name !== "constructor") {
                code += fnCode(name, fn);
            }
        }
        code += `}\n\n`;
        return {
            code,
            hasDeploy: true,
        };
    });
}
exports.genContractCode = genContractCode;
const RESERVED_FN_NAMES = new Set([
    "contract",
    "client",
    "abi",
    "signer",
    "initData",
    "useCachedState",
    "address",
    "syncLastTransLt",
    "cachedBoc",
    "subscriptions",
    "getAddress",
    "getParamsOfDeployMessage",
    "calcDeployFees",
    "deploy",
    "deployLocal",
    "calcRunFees",
    "run",
    "runLocal",
    "boc",
    "refresh",
    "getAccount",
    "subscribeAccount",
    "subscribeTransactions",
    "subscribeMessages",
    "decodeMessage",
    "decodeMessageBody",
    "getBalance",
    "subscribe",
    "free",
]);
function fnName(fn, prefix, suffix = "") {
    const middle = prefix !== "" ? `${fn.name[0].toUpperCase()}${fn.name.slice(1)}` : fn.name;
    const name = `${prefix}${middle}${suffix || ""}`;
    return RESERVED_FN_NAMES.has(name) ? `${name}_` : name;
}
function fnTypeDecl(contractName, fn, isInput) {
    const params = isInput ? fn.inputs : fn.outputs;
    if (params.length === 0) {
        return "";
    }
    const typeName = fnName(fn, contractName, isInput ? "Input" : "Output");
    const decl = paramsDecl(params, "", isInput);
    return `export type ${typeName} = ${decl};\n\n`;
}
function fnTypesCode(contractName, fn) {
    return fnTypeDecl(contractName, fn, true) + fnTypeDecl(contractName, fn, false);
}
function fnHeader(contractName, fn, prefix) {
    const name = fnName(fn, prefix);
    let header = `    async ${name}(`;
    if (fn.inputs.length > 0) {
        header += `input: ${fnName(fn, contractName, "Input")}`;
    }
    header += "): Promise<{\n";
    header += "        transaction: Transaction,\n";
    if (prefix === "run") {
        header += "        transactionTree: ResultOfQueryTransactionTree,\n";
    }
    if (fn.outputs.length > 0) {
        header += `        output: ${fnName(fn, contractName, "Output")},\n`;
    }
    header += "    }> {\n";
    return header;
}
function fnCode(contractName, fn) {
    const input = fn.inputs.length > 0 ? "input" : "{}";
    let code = fnHeader(contractName, fn, "run");
    code += `        return await runHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;
    code += fnHeader(contractName, fn, "");
    code += `        return await runLocalHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;
    return code;
}
function deployFnCode(abi) {
    var _a, _b;
    const ctor = (_b = (_a = abi.functions) === null || _a === void 0 ? void 0 : _a.find(x => x.name === "constructor")) !== null && _b !== void 0 ? _b : {
        name: "",
        inputs: [],
        outputs: [],
    };
    let code = `    async deployContract(`;
    if (ctor.inputs.length > 0) {
        code += `input: ${paramsDecl(ctor.inputs, "    ", true)}`;
    }
    code += "): Promise<{\n";
    code += "        transaction: Transaction,\n";
    code += "    }> {\n";
    const input = ctor.inputs.length > 0 ? "input" : "{}";
    code += `        return await deployHelper(this, "${ctor.name}", ${input});\n`;
    code += `    }\n\n`;
    return code;
}
function paramsDecl(params, indent, isInput) {
    let decl = `{\n`;
    for (const p of params) {
        decl += `${indent}    ${paramDecl(p, indent + "    ", isInput)},\n`;
    }
    decl += `${indent}}`;
    return decl;
}
function paramTypeDecl(type, indent, isInput, components) {
    let decl = "";
    switch (type.name) {
        case "uint128":
        case "uint256":
        case "uint64":
            decl += isInput ? "string | number | bigint" : "string";
            break;
        case "int8":
        case "uint8":
        case "uint16":
        case "uint32":
            decl += "number";
            break;
        case "bool":
            decl += "boolean";
            break;
        case "string":
        case "address":
        case "cell":
        case "bytes":
            decl += "string";
            break;
        case "tuple":
            decl += "{\n";
            for (const field of components !== null && components !== void 0 ? components : []) {
                decl += `${indent}    ${paramDecl(field, indent + "    ", isInput)},\n`;
            }
            decl += `${indent}}`;
            break;
        case "map":
            break;
        default:
            if (type.name.startsWith("map")) {
                const mapTypes = type.name.slice(4, -1).split(",");
                const keyType = parseType(mapTypes[0]);
                const valueType = parseType(mapTypes.slice(1).join(","));
                decl += "{\n";
                decl += `${indent}[key: ${paramTypeDecl(keyType, indent, isInput)}]: ${paramTypeDecl(valueType, indent + "    ", isInput, components)}`;
                decl += `${indent}}`;
            }
            else {
                throw "Unknown ABI type";
            }
            break;
    }
    if (type.array) {
        decl += "[]";
    }
    return decl;
}
function paramDecl(param, indent, isInput) {
    const type = parseType(param.type);
    let decl = `${param.name}${type.optional ? "?" : ""}: `;
    decl += paramTypeDecl(type, indent, isInput, param.components);
    decl += ` /* ${param.type} */`;
    return decl;
}
function parseType(source) {
    const type = {
        name: source,
        array: source.endsWith("[]"),
        optional: source.startsWith("optional("),
    };
    if (type.array) {
        type.name = type.name.slice(0, -2);
    }
    if (type.optional) {
        type.name = type.name.slice(9, -1);
    }
    return type;
}
//# sourceMappingURL=codegen.js.map