
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperEverCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECFQEABNcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA4HAQL/CAT+j/2PeG3tQAfDAAPTP9Mf0x+TAe1QIsELjoMiwQzhAsAK8qkG8qgEo/LgRPgoyM4azsnQ+QFApfkQ8qjtRNDTADDyvvgAAdXT/9P/cPhk1fpA03/Tf9N/0QTR+ABwcAFVBlUGVQJVBFUEVQZVBlUJINs8egFVElVFXwgB2SLTAAsTCgkAMAHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QAkmXBwJFURAVUR2SIB4dP/cSTZA/6PfQLADPKpBvKoBKPy4ET4KMjOGs7J0PkBVBCl+RDyqNs8KVYTvgrDAFAKsPJ8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLZugzUMAzy4GQIbvLgZvgAVQVVClUGVQZVBlUGVQZVBlUHVQrbPIAMAVUSVTVfBwHZFBMMA/7hB/KoBaPy4ET4KMjOG87J0PkBVBC2+RDyqNs8U5q+CsMAUAqw8nz4I4ED6KiCCBt3QKAqAblwVEHM4wQK8rxw+GRS2LoL1DAL8uBkBm7y4GYJ0CDXSsAC+ADIAfLgRVERzlJizskBzMlVBlUKVQVVBVUFVQVVCVUHVQdVCNs8FBMNABaACwFVElVFXwgB2QL03wHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFtAdMf1Ns8IXD4ZG4L1DAL8tBnIG7y0GcP0wDTANMA+kD6QPoAMFMKvPLgZfgo0wEhwQMUDwHqmDDAA/LQY/I04QHAAvK00wCO08iCEEVWRVIhAc8LH8lvACBviAXSB46AJyFwXiDhBG+NFszJJW+IJVURAVUTVRVVFeGOFgFvjRbMySVviCMjVQJVJFUHVQdVJeJVAjAgAVURVQLZIiHhAdMEAdcYATAhVQHZEAH+XwNWGST0AFYR+gJwJQHPCwBwIQHPC/9wzwsHySHMcRPPCwDtR3QYzwsCcSMBzwsBCATJVhNVAs4EbxBWElUIzFJkygdQJcwBbxdvEBuicvsCCcmAGGFVAcwlAcwVzHnPCwcSygdWEwHL/3DPC38TzMnIcCEBzwsAcRnPCwAiAREB/Mx2KQHPCwJwIwHPCwHJ0PhEghCAAAAAIbGCEP////8SvHBY4wQCznATzwsAyfkAFs8L/8l6E88LHwLQUgLOUFLLHwFWEvoCAVYQzwt/VhsBzHEZzwsBLgHMcc8LAFYZVQH0AHD6AiQJyVAyzHDPCwBwE/oCAslzE88LYRLMcRIB0s8LAMzJcPsAMAT4YsiAFGEhyx8VznYlAc8LA3AWzwsBydABVhHPC/8FzhbOcPoCgBNhAfQAcPoCcPoCcc8LYQPJUAPMyYEAgPsAXwdVB1UHVQdVB1UHVQdVB1UHVQdVCts8gRERWVsB2RMATMhwIQHPCwAbyz8Zy/8Xy/8Vy38Ty3/LfwXLf870APQAyQHMye1UAFDtQO1E0NMAAfJ/0z/T/9P/03/Tf9N/1dN/+kD0BPQE0QvtUFUCMFUI",
        code: "te6ccgECEgEABKoAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAsEAQL/BQT+j/2PeG3tQAfDAAPTP9Mf0x+TAe1QIsELjoMiwQzhAsAK8qkG8qgEo/LgRPgoyM4azsnQ+QFApfkQ8qjtRNDTADDyvvgAAdXT/9P/cPhk1fpA03/Tf9N/0QTR+ABwcAFVBlUGVQJVBFUEVQZVBlUJINs8egFVElVFXwgB2SLTAAgQBwYAMAHTAJlwcCQBVRFVAtkiAeGBAgDXGHEk2QAkmXBwJFURAVUR2SIB4dP/cSTZA/6PfQLADPKpBvKoBKPy4ET4KMjOGs7J0PkBVBCl+RDyqNs8KVYTvgrDAFAKsPJ8+COBA+iogggbd0CgVhIBuXAhgBRhVQHjBAHyvHD4ZFLZugzUMAzy4GQIbvLgZvgAVQVVClUGVQZVBlUGVQZVBlUHVQrbPIAMAVUSVTVfBwHZERAJA/7hB/KoBaPy4ET4KMjOG87J0PkBVBC2+RDyqNs8U5q+CsMAUAqw8nz4I4ED6KiCCBt3QKAqAblwVEHM4wQK8rxw+GRS2LoL1DAL8uBkBm7y4GYJ0CDXSsAC+ADIAfLgRVERzlJizskBzMlVBlUKVQVVBVUFVQVVCVUHVQdVCNs8ERAKABaACwFVElVFXwgB2QL03wHQ0wAB8nAg1gHTADDyd5btQO1Q2zAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhA9MfgRERErqXcFUgXwMB2eFtAdMf1Ns8IXD4ZG4L1DAL8tBnIG7y0GcP0wDTANMA+kD6QPoAMFMKvPLgZfgo0wEhwQMRDAHqmDDAA/LQY/I04QHAAvK00wCO08iCEEVWRVIhAc8LH8lvACBviAXSB46AJyFwXiDhBG+NFszJJW+IJVURAVUTVRVVFeGOFgFvjRbMySVviCMjVQJVJFUHVQdVJeJVAjAgAVURVQLZIiHhAdMEAdcYATAhVQHZDQH+XwNWGST0AFYR+gJwJQHPCwBwIQHPC/9wzwsHySHMcRPPCwDtR3QYzwsCcSMBzwsBCATJVhNVAs4EbxBWElUIzFJkygdQJcwBbxdvEBuicvsCCcmAGGFVAcwlAcwVzHnPCwcSygdWEwHL/3DPC38TzMnIcCEBzwsAcRnPCwAiAQ4B/Mx2KQHPCwJwIwHPCwHJ0PhEghCAAAAAIbGCEP////8SvHBY4wQCznATzwsAyfkAFs8L/8l6E88LHwLQUgLOUFLLHwFWEvoCAVYQzwt/VhsBzHEZzwsBLgHMcc8LAFYZVQH0AHD6AiQJyVAyzHDPCwBwE/oCAslzE88LYRLMcQ8B0s8LAMzJcPsAMAT4YsiAFGEhyx8VznYlAc8LA3AWzwsBydABVhHPC/8FzhbOcPoCgBNhAfQAcPoCcPoCcc8LYQPJUAPMyYEAgPsAXwdVB1UHVQdVB1UHVQdVB1UHVQdVCts8gRERWVsB2RAATMhwIQHPCwAbyz8Zy/8Xy/8Vy38Ty3/LfwXLf870APQAyQHMye1UAFDtQO1E0NMAAfJ/0z/T/9P/03/Tf9N/1dN/+kD0BPQE0QvtUFUCMFUI",
        codeHash: "c0e19e7a71b75fccfbfe70c338d715749806bf5715e2e9a620108c060092e0e4",
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

