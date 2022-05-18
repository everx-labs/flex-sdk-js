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
import { ${options.hasDeploy ? "deployHelper, " : ""}runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";
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
    let code =
        `
export class ${name}Account extends Account {
    static package: ContractPackageEx = {
        abi: ${JSON.stringify(abi)} as unknown as AbiContract,
        tvc: "${tvc}",
        code: "${contractCode}",
        codeHash: "${contractCodeHash}",
    };
    
    constructor(options: AccountOptions) {
        super(${name}Account.package, options);
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
}

function fnHeader(fn: AbiFunction, prefix: string): string {
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

function fnCode(fn: AbiFunction): string {
    const input = fn.inputs.length > 0 ? "input" : "{}";
    let code = fnHeader(fn, "run");
    code += `        return await runHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;

    code += fnHeader(fn, "runLocal");
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
            decl += `${indent}    ${paramDecl(field, indent + "    ", isInput)}\n`;
        }
        decl += `${indent}}`;
        break;
    default:
        decl += type.name;
        break;
    }
    decl += `// ${param.type}`;
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
