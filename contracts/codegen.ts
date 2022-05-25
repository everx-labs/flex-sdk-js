import {
    AbiContract,
    AbiFunction,
    AbiParam,
    TonClient,
} from "@eversdk/core";

export function contractCodeHeader(options: { hasDeploy: boolean }): string {
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

export async function genContractCode(client: TonClient, options: {
    name: string,
    abi: AbiContract,
    tvc: string,
}): Promise<{
    code: string,
    hasDeploy: boolean,
}> {
    const {
        name,
        abi,
        tvc,
    } = options;
    const contractCode = (await client.boc.decode_tvc({ tvc })).code ?? "";
    const contractCodeHash = (await client.boc.get_boc_hash({ boc: contractCode })).hash;
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
}

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

function fnName(fn: AbiFunction, prefix: string, suffix: string = ""): string {
    const middle = prefix !== "" ? `${fn.name[0].toUpperCase()}${fn.name.slice(1)}` : fn.name;
    const name = `${prefix}${middle}${suffix || ""}`;
    return RESERVED_FN_NAMES.has(name) ? `${name}_` : name;
}

function fnTypeDecl(contractName: string, fn: AbiFunction, isInput: boolean): string {
    const params = isInput ? fn.inputs : fn.outputs;
    if (params.length === 0) {
        return "";
    }
    const typeName = fnName(fn, contractName, isInput ? "Input" : "Output");
    const decl = paramsDecl(
        params,
        "",
        isInput,
    );
    return `export type ${typeName} = ${decl};\n\n`;
}

function fnTypesCode(contractName: string, fn: AbiFunction): string {
    return fnTypeDecl(contractName, fn, true) + fnTypeDecl(contractName, fn, false);
}


function fnHeader(contractName: string, fn: AbiFunction, prefix: string): string {
    const name = fnName(fn, prefix);
    let header = `    async ${name}(`;
    if (fn.inputs.length > 0) {
        header += `input: ${fnName(fn, contractName, "Input")}`;
    }
    header += "): Promise<{\n";
    header += "        transaction: Transaction,\n";
    if (fn.outputs.length > 0) {
        header += `        output: ${fnName(fn, contractName, "Output")},\n`;
    }
    header += "    }> {\n";
    return header;
}

function fnCode(contractName: string, fn: AbiFunction): string {
    const input = fn.inputs.length > 0 ? "input" : "{}";
    let code = fnHeader(contractName, fn, "run");
    code += `        return await runHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;

    code += fnHeader(contractName, fn, "");
    code += `        return await runLocalHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;
    return code;
}


function deployFnCode(abi: AbiContract): string {
    const ctor = abi.functions?.find(x => x.name === "constructor") ?? {
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

function paramsDecl(params: AbiParam[], indent: string, isInput: boolean): string {
    let decl = `{\n`;
    for (const p of params) {
        decl += `${indent}    ${paramDecl(p, indent + "    ", isInput)},\n`;
    }
    decl += `${indent}}`;
    return decl;
}

function paramDecl(param: AbiParam, indent: string, isInput: boolean): string {
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
        for (const field of param.components ?? []) {
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

type TypeInfo = {
    name: string,
    optional: boolean,
    array: boolean,
}

function parseType(source: string): TypeInfo {
    const type: TypeInfo = {
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
