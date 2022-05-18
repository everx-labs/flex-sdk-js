
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperEverCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setExtWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1111"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"ext_wallet_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECFgEABbYAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIA4EATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkFAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QYD/G3tQAfDAAPTP9Mf0x+TAe1QIsEMjoDhIsELjoDhAsAK8qkG8qgEo/LgRFsH+QFAg/kQ8qjtRNDTADDyvvgA1dP/0/9w+GTV+kDTf9N/03/RBNH4AMhwIQHPC0AXy/8Vy/9wzwt/y38Ty38Dy3/OJgH0ACYB9AAW9ADJUAXMyQoIBwAa7VR6WVUDVSVfBlUB2QH+B/KoBaPy4ERbCPkBVBCU+RDyqO1E0NMAAfJ/0z9TGL4B0//T/9N/038GwwBQBbAF03/V03/6QPQE9AT0BNEL8nz4I4ED6KiCCBt3QKBWEgG5cCGAFGFVAeMEAfK8cPhkUuq6DNQwDPLgZAFu8uBmCtAg10rAAvgAyAHy4EVREQkAfM5TIc7JAczJUhTPC38SzhL0ABn0AHAZzwsAUHj0AMlQR8s/GMv/y/8Wy3/LfxTLf8zJ7VSAC1UhVTVfBwHZAvwiwQ2OgOEH8qgFo/LgRFsI+QFUEJT5EPKo7UTQ0wAB8n/TP1MYvgHT/9P/03/TfwbDAFAFsAXTf9XTf/pA9AT0BPQE0QvyfPgjgQPoqIIIG3dAoFYSAblwIYAUYVUB4wQB8rxw+GRS6roM1DAM8uBkbvLgZvgAyHAhAc8LABkMCwBayz8dy/8Wy/8Uy38Wy3/LfwPLf84W9AAT9AD0AMlQA8zJ7VSADFUhVTVfBwHZAfwCwA3yqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/Uxi+AdP/0//Tf9N/BsMAUAWwBdN/1dN/+kD0BPQE9ATRC/J8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLqug3UMA3y4GQKbvLgZvgAyHAhAc8LABkNAF7LPx3L/xbL/xTLfxbLf8t/A8t/zhb0ABL0ABP0AMlQA8zJ7VSADQFVElU1XwcB2QEC3w8B/gHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFt7UTQ0wAB8n8C0x8wAtM/0//T/9N/03/Tf9XTf/pA9AT0BPQEI24B0XD4ZPLQZyBu8tBnD9MA0wAQAXDTAPpA+kD6ADBTDLzy4GX4KNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2REBpsiCEEVWRVIhAc8LH8lvACBviAXSB46AJyFwXiDhBG+NFszJJW+IJVURAVUTVRVVFeGOFgFvjRbMySVviCMjVQJVJFUHVQdVJeJVAjAgAVURVQLZEgH+cCcBzwsAU2DMF8xxKAHPCwB5Es8LB+1HcSkBzwsBUnPKB1YWVQPOCckCbxBvF1ApzAFWG88L/3QazwsCVhRVAswIbxAdonL7AslxF88LAFBLygdwF88Lf1YbAfQAVhX6AhXMyVIKzHDPCwDJyAH5AHAiAc8LAHYhAc8LAnAkARMB/s8LAcnQAc74RFA5y/+CEIAAAAApsYIQ/////xq8AclxE88LAQLQVhRVAsxSFM5xFM8LAFUCVhn6AlDdzHBDCeMEehPPCx8Syx9WEwHLf1YeAcxWG1UK9AAiAslwGc8LAHAS+gIByXAS+gJzzwthzHHPCwAXzMlw+wAF+GLIgBoUAf5hIcsfFs52JgHPCwNwF88LAcnQAckGzhrOcPoCgBhhAfQAcPoCcPoCcc8LYRTMyYEAgPsAyHAhAc8LAIAXYQHLP4AWYQHL/4AVYQHL/4AUYQHLf4ATYQHLf4ASYQHLfwFVD88Lfx/OHfQAG/QAH/QAyVALzMntVIEREVXAXw0BFQAC2Q==",
        codeHash: "738af3dbfdd6ea20f9dcaa26f38f538556c3683182e9dd1a7c7dbc225e061467",
    };
    
    constructor(options: AccountOptions) {
        super(WrapperDeployerEverAccount.package, options);
    }
    async deployContract(input: {
        pubkey: string | number | bigint// uint256,
        wrapper_pubkey: string | number | bigint// uint256,
        super_root: string// address,
        wrapper_deploy_value: string | number | bigint// uint128,
        wrapper_keep_balance: string | number | bigint// uint128,
        reserve_wallet_value: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperEverCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setWrapperEverCode", input);
    }

    async runLocalSetWrapperEverCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setWrapperEverCode", input);
    }

    async runSetExtWalletCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setExtWalletCode", input);
    }

    async runLocalSetExtWalletCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setExtWalletCode", input);
    }

    async runSetFlexWalletCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setFlexWalletCode", input);
    }

    async runLocalSetFlexWalletCode(input: {
        code: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: {
        _answer_id: number// uint32,
        init_args: string// cell,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "deploy", input);
    }

    async runLocalDeploy(input: {
        _answer_id: number// uint32,
        init_args: string// cell,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "deploy", input);
    }

}

