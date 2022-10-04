
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type WrapperDeployerEverSetWrapperEverCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerEverSetFlexWalletCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerEverDeployInput = {
    _answer_id: number /* uint32 */,
    init_args: string /* cell */,
    wic_unsalted_code: string /* cell */,
};

export type WrapperDeployerEverDeployOutput = {
    first: string /* address */,
    second: string /* uint256 */,
};


export class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperEverCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECFQEABMYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkIAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QkC3G3tQAfDAAPTP9Mf0x+TAe1QIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AHBwAVUGVQZVAlUEVQRVBlUGVQsg2zx6VSBVJV8GVQHZChMD/CLBDI6A4QfyqAWj8uBEWwj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboK1DAK8uBkbvLgZgjQINdKwAL4AMgB8uBFURHOUpLOyQHMyVUFVQlVBlUGVQZVBlUGVQhVBwwUCwEcVQjbPIALVRFVNF8GAdkTAuwCwAzyqQbyqASj8uBEMAj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboL1DAL8uBkCG7y4Gb4AFUFVQlVBlUGVQZVBlUGVQZVB1UJ2zyADFURVTRfBgHZFBMC9N8B0NMAAfJwINYB0wAw8neW7UDtUNswI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4QPTH4ERERK6l3BVIF8DAdnhbQHTH9TbPCFw+GRuC9QwC/LQZyBu8tBnD9MA0wDTAPpA+kD6ADBTCrzy4GX4KNMBIcEDFA4BRJgwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkPAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2RAB/l8DVhkk9ABWEfoCcCUBzwsAcCEBzwv/cM8LB8khzHETzwsA7Ud0GM8LAnEjAc8LAQgEyVYTVQLOBG8QVhJVCMxSZMoHUCXMAW8XbxAbonL7AgnJgBhhVQHMJQHMFcx5zwsHEsoHVhMBy/9wzwt/E8zJyHAhAc8LAHEZzwsAIgERAfzMdikBzwsCcCMBzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABbPC//JehPPCx8C0FICzlBSyx8BVhL6AgFWEM8Lf1YbAcxxGc8LAS4BzHHPCwBWGVUB9ABw+gIkCclQMsxwzwsAcBP6AgLJcxPPC2ESzHESAdLPCwDMyXD7ADAE+GLIgBRhIcsfFc52JQHPCwNwFs8LAcnQAVYRzwv/Bc4WznD6AoATYQH0AHD6AnD6AnHPC2EDyVADzMmBAID7AF8HVQdVB1UHVQdVB1UHVQdVB1UHVQrbPIEREVlbAdkTAEzIcCEBzwsAG8s/Gcv/F8v/Fct/E8t/y38Fy3/O9AD0AMkBzMntVABQ7UDtRNDTAAHyf9M/0//T/9N/03/Tf9XTf/pA9AT0BNEL7VBVAjBVCA==",
        code: "te6ccgECEgEABJkAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAoEATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYC3G3tQAfDAAPTP9Mf0x+TAe1QIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AHBwAVUGVQZVAlUEVQRVBlUGVQsg2zx6VSBVJV8GVQHZBxAD/CLBDI6A4QfyqAWj8uBEWwj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboK1DAK8uBkbvLgZgjQINdKwAL4AMgB8uBFURHOUpLOyQHMyVUFVQlVBlUGVQZVBlUGVQhVBwkRCAEcVQjbPIALVRFVNF8GAdkQAuwCwAzyqQbyqASj8uBEMAj5AVQQlPkQ8qjbPClWEb4KwwBQCrDyfPgjgQPoqIIIG3dAoFYQAblwIYASYVUB4wQB8rxw+GRSyboL1DAL8uBkCG7y4Gb4AFUFVQlVBlUGVQZVBlUGVQZVB1UJ2zyADFURVTRfBgHZERAC9N8B0NMAAfJwINYB0wAw8neW7UDtUNswI9cNH2+jmHBZVSNfBQHZ4TAk10nysJdwVSFfAwHZ4QPTH4ERERK6l3BVIF8DAdnhbQHTH9TbPCFw+GRuC9QwC/LQZyBu8tBnD9MA0wDTAPpA+kD6ADBTCrzy4GX4KNMBIcEDEQsBRJgwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkMAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2Q0B/l8DVhkk9ABWEfoCcCUBzwsAcCEBzwv/cM8LB8khzHETzwsA7Ud0GM8LAnEjAc8LAQgEyVYTVQLOBG8QVhJVCMxSZMoHUCXMAW8XbxAbonL7AgnJgBhhVQHMJQHMFcx5zwsHEsoHVhMBy/9wzwt/E8zJyHAhAc8LAHEZzwsAIgEOAfzMdikBzwsCcCMBzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABbPC//JehPPCx8C0FICzlBSyx8BVhL6AgFWEM8Lf1YbAcxxGc8LAS4BzHHPCwBWGVUB9ABw+gIkCclQMsxwzwsAcBP6AgLJcxPPC2ESzHEPAdLPCwDMyXD7ADAE+GLIgBRhIcsfFc52JQHPCwNwFs8LAcnQAVYRzwv/Bc4WznD6AoATYQH0AHD6AnD6AnHPC2EDyVADzMmBAID7AF8HVQdVB1UHVQdVB1UHVQdVB1UHVQrbPIEREVlbAdkQAEzIcCEBzwsAG8s/Gcv/F8v/Fct/E8t/y38Fy3/O9AD0AMkBzMntVABQ7UDtRNDTAAHyf9M/0//T/9N/03/Tf9XTf/pA9AT0BNEL7VBVAjBVCA==",
        codeHash: "3aa91f9328d56fa543d042e9fa6ca97706dbd320603eca690bd1708dabd90455",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperDeployerEverAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
        wrapper_pubkey: string | number | bigint /* uint256 */,
        super_root: string /* address */,
        wrapper_deploy_value: string | number | bigint /* uint128 */,
        wrapper_keep_balance: string | number | bigint /* uint128 */,
        reserve_wallet_value: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setWrapperEverCode", input, options);
    }

    async setWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setWrapperEverCode", input);
    }

    async runSetFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlexWalletCode", input, options);
    }

    async setFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: WrapperDeployerEverDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerEverDeployOutput>> {
        return await runHelper(this, "deploy", input, options);
    }

    async deploy_(input: WrapperDeployerEverDeployInput): Promise<RunLocalHelperResult<WrapperDeployerEverDeployOutput>> {
        return await runLocalHelper(this, "deploy", input);
    }

}

