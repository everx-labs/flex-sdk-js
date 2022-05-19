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
import { AbiContract } from "@eversdk/core";
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
function genContractCode(client, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { name, abi, tvc, } = options;
        const contractCode = (_a = (yield client.boc.decode_tvc({ tvc })).code) !== null && _a !== void 0 ? _a : "";
        const contractCodeHash = (yield client.boc.get_boc_hash({ boc: contractCode })).hash;
        let code = `
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
                code += fnCode(fn);
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
function fnHeader(fn, prefix) {
    const name = `${prefix}${fn.name[0].toUpperCase()}${fn.name.slice(1)}`;
    let header = `    async ${name}(`;
    if (fn.inputs.length > 0) {
        header += `input: ${paramsDecl(fn.inputs, "    ", true)}`;
    }
    header += "): Promise<{\n";
    header += "        transaction: Transaction,\n";
    if (fn.outputs.length > 0) {
        header += "        output: ";
        header += paramsDecl(fn.outputs, "        ", false);
        header += "\n";
    }
    header += "    }> {\n";
    return header;
}
function fnCode(fn) {
    const input = fn.inputs.length > 0 ? "input" : "{}";
    let code = fnHeader(fn, "run");
    code += `        return await runHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;
    code += fnHeader(fn, "runLocal");
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
function paramDecl(param, indent, isInput) {
    var _a;
    const type = parseType(param.type);
    let decl = `${param.name}${type.optional ? "?" : ""}: `;
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
            for (const field of (_a = param.components) !== null && _a !== void 0 ? _a : []) {
                decl += `${indent}    ${paramDecl(field, indent + "    ", isInput)},\n`;
            }
            decl += `${indent}}`;
            break;
        default:
            decl += type.name;
            break;
    }
    if (type.array) {
        decl += "[]";
    }
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