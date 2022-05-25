
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type WrapperDeployerEverSetWrapperEverCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerEverSetExtWalletCodeInput = {
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
    value0: string /* address */,
};


export class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperEverCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setExtWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1111"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"ext_wallet_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECFgEABboAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIA4EATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYD/G3tQAfDAAPTP9Mf0x+TAe1QIsEMjoDhIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AMhwIQHPC0AXy/8Vy/9wzwt/y38Ty38Dy3/OJgH0ACYB9AAW9ADJUAXMyQoIBwAa7VR6WVUDVSVfBlUB2QH+B/KoBaPy4ERbCPkBVBCU+RDyqO1E0NMAAfJ/0z9TGL4B0//T/9N/038GwwBQBbAF03/V03/6QPQE9AT0BNEL8nz4I4ED6KiCCBt3QKBWEgG5cCGAFGFVAeMEAfK8cPhkUuq6DNQwDPLgZAFu8uBmCtAg10rAAvgAyAHy4EVREQkAfM5TIc7JAczJUhTPC38SzhL0ABn0AHAZzwsAUHj0AMlQR8s/GMv/y/8Wy3/LfxTLf8zJ7VSAC1UhVTVfBwHZAvwiwQ2OgOEH8qgFo/LgRFsI+QFUEJT5EPKo7UTQ0wAB8n/TP1MYvgHT/9P/03/TfwbDAFAFsAXTf9XTf/pA9AT0BPQE0QvyfPgjgQPoqIIIG3dAoFYSAblwIYAUYVUB4wQB8rxw+GRS6roM1DAM8uBkbvLgZvgAyHAhAc8LABkMCwBayz8dy/8Wy/8Uy38Wy3/LfwPLf84W9AAT9AD0AMlQA8zJ7VSADFUhVTVfBwHZAfwCwA3yqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AdP/0//Tf9N/BsMAUAWwBdN/1dN/+kD0BPQE9ATRC/J8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLqug3UMA3y4GQKbvLgZvgAyHAhAc8LABkNAF7LPx3L/xbL/xTLfxbLf8t/A8t/zhb0ABL0ABP0AMlQA8zJ7VSADQFVElU1XwcB2QEC3w8B/gHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFt7UTQ0wAB8n8C0x/U1DAE0z/T/9P/03/Tf9N/1dN/+kD0BPQE9AQjbgHRcPhk8tBnIG7y0GeAEWEQAXjTANMA0wD6QPpA+gAwUw288uBl+CjTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkRAabIghBFVkVSIQHPCx/JbwAgb4gF0geOgCchcF4g4QRvjRbMySVviCVVEQFVE1UVVRXhjhYBb40WzMklb4gjI1UCVSRVB1UHVSXiVQIwIAFVEVUC2RIB/l8DVhsk9ABwJQHPCwAgySHMVQFWFvoC7UdxEs8LAAECyYAgYSTMdBnPCwJxFc8LAVYVVQLOA28QbxdQI8xSaMwCbxBWE1UBzFJEygcLoXL7AgXJUEXMec8LB8oHVhYBy/9wzwt/E8zJyHAhAc8LAHEUzwsAIgHMdiQBzwsCcCMTAf4BzwsBydD4RIIQgAAAACGxghD/////ErxwWOMEAs5wE88LAMn5ABrPC//JehPPCx8C0FICzlCSyx8BVhX6AgFWEs8Lfy4BzHEUzwsBVhABzHHPCwBWHFUB9ABw+gIoBMlQMsxwzwsAcBP6AgLJcxPPC2ESzHHPCwDMyXD7APhiFAH+yIAYYSHLHxbOdiYBzwsDcBfPCwHJ0AHJBs4XznD6AoAXYQH0AHD6AnD6AnHPC2EUzMmBAID7AMhwIQHPCwCAFWEByz+AFGEBy/+AE2EBy/+AEmEBy3+AEWEBy39VDwHLfw7PC38czhr0ABj0ABb0AMlQCczJ7VSBERFVoF8LARUAAtk=",
        codeHash: "04eccde8f75ffd6d97c4c0ee27831d2c5ce1231b43096a87bd4b9c85e329d333",
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

    async runSetWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setWrapperEverCode", input);
    }

    async setWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setWrapperEverCode", input);
    }

    async runSetExtWalletCode(input: WrapperDeployerEverSetExtWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setExtWalletCode", input);
    }

    async setExtWalletCode(input: WrapperDeployerEverSetExtWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setExtWalletCode", input);
    }

    async runSetFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setFlexWalletCode", input);
    }

    async setFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: WrapperDeployerEverDeployInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerEverDeployOutput,
    }> {
        return await runHelper(this, "deploy", input);
    }

    async deploy_(input: WrapperDeployerEverDeployInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerEverDeployOutput,
    }> {
        return await runLocalHelper(this, "deploy", input);
    }

}

