
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
export type Tip31WrapperDeployerSetWrapperCodeInput = {
    code: string /* cell */,
};

export type Tip31WrapperDeployerSetFlexWalletCodeInput = {
    code: string /* cell */,
};

export type Tip31WrapperDeployerDeployInput = {
    _answer_id: number /* uint32 */,
    init_args: string /* cell */,
    wic_unsalted_code: string /* cell */,
};

export type Tip31WrapperDeployerDeployOutput = {
    first: string /* address */,
    second: string /* uint256 */,
};

export type Tip31WrapperDeployerGetArgsInput = {
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
};

export type Tip31WrapperDeployerGetArgsOutput = {
    value0: string /* cell */,
};


export class Tip31WrapperDeployerAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"},{"name":"out_deploy_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"out_deploy_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECHQEAB00AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QUEAQr0pCD0oRYCASAOBgE2/46AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZBwEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkIA/pt7UAHwwAD0z/TH9MfkwHtUCLBDY6A4SLBC46A4QLACvKpBvKoBKPy4ERbB/kBQIP5EPKo7UTQ0wAw8r74ANXT/9P/1fpAcPhk03/Tf9N/1dN/03/RAtEG0fgAcHBVDVUJVQlVB1UHVQdVCVUIVQkoINs8elUgVSVfBlUB2QsJGwL+AsAL8qkG8qgEo/LgRDAI+QFUEJT5EPKo2zwsVhS+DcMAUA2w8nz4I4ED6KiCCBt3QKBWEwG5cCGAFWFVAeMEAfK8cPhkUvq6DtQwDvLgZG7y4GYM0CDXSsAC+ADIAfLgRVERzlLSzskBzMlVBlUIVQhVDFUJVQlVCVUJVQlVCRwKASRVDFUKVQvbPIALVRFVNF8GAdkbBPyCEEyG9kgjAbmOgOECwA3yqQbyqASj8uBEMAj5AVQQlPkQ8qjbPCxWFL4NwwBQDbDyfPgjgQPoqIIIG3dAoFYTAblwIYAVYVUB4wQB8rxw+GRS+roO1DAO8uBkC27y4Gb4AFUGVQhVCFUMVQlVCVUJVQlVCVUJVQlVClUM2zwNHBsMABSADVURVTRfBgHZAfCCEEyG9kgTuvKp2zxfDdRVD9DTAQLU0wfV0/9w+GT6QAbAAgbRyAbysHMmAc8LAXAnAc8LAcnQAc4H+kAwUAfOUXXMFMxxF88LYYIQzIb2SBXPCx9QJssHEsv/E87JUAPMyVACzMlw+wCCEEyG9kgBVXJVO18NAdkcAQLfDwP6AdDTAAHycCDWAdMAMPJ3MCHXDR9vo3CZ7UDtUBZfBtswIiHhcENQ4wQl10nysJVwJFUE2SEB4W2CEIAAAAASsAbTH46AKAHggRERErqXcAEwJFUE2eHbPIAgU8tVAfQPb6EtpIIQf////7BBDuMEDtMf1CRWEfhkbgHUMAEXHBACuvLQZyNu8tBngBVh0wBTvKAB0wAF0NTU0wcJ2zwJ0/8J0wD6QPpA+gAwUgq8DPpAMAzy4GX4KNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RYRAf7IcCEBzwsAcCEBzwv/VhYBy39WISP0AFYZ+gIBye1HbxBvF1ETzHETzwsAAXEkAc8LAQFvEAPJVhhVAs50Fs8LAgfSBzBWFCRWE6Fy+wJWGFUDzFIpygdQNszJgBNhVQTMH8wdzBvLBxvKB1YZAcv/cM8LfxvMyXETzwsAIgHMEgH+cM8LAPhEghCAAAAAIbGCEP////8SvHBY4wTIghAx7dTHIQHPCx8Syx8CyXYiAc8LA3ATzwsBydBQAs4B+QAczwv/ySDQUALOVhgBy3/JUPvOcPoCgB5hAfQAcPoCcPoCcc8LYRrMyYEAgPsABvhi+ELTASHBA5gwwAPy0GPyNBMBMuEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkUAvzIgRERgRERIgHPCx8E0gcFygcE0/8wUATL/1FxzslQB8xwzwsBgQEBS3DPAMmBAQFVD1UGVQHPAIEBAU0QzwAX9AAc9AAZzMmAIAFWGYAXYVUC9BeAFmGAF2FVAYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYYAWYds8VUMbFQAMXwglVQXZAAACroIQgAAAABKy2zyAIFPrVQH0D2+h8rvQ0x+AFWHTANMA0wD6QDDTAQXSB9P/1fpA0STBA5lfBMAD8tBj8jThBMAC8rQH0wCOgCIh4QHTBAHXGAEwIVUB2RwYAfww0gcEugPT/zBQAroSsPK7gCCAFWGAE2FVAfRbgRERgRERGrryujCAFGH4Y4AgVhMiVQH0D2+hVhSkghB/////sIAVYeMEIPhkCNMBgQEB1wCBAQHXAPQE9AT4AAHQyHAhAc8LAHYhAc8LAnAjAc8LAcnQAc4jAc5WGPoCcRIZAf7PCwFWEwHMcc8LABXMcM8LAMlWHFUE9AB6E88LH/hD+kAwAc5WFQHLfwTVgQEB1wAwUAahcBP6AnD6AnPPC2HMVhBVA8xxEs8LAAHJAczJcPsAcvsCyFEzyx/OdiMBzwsDcBTPCwHJ0AFWFs8L/wPOF85w+gKAF2EB9ABw+gJwGgGM+gJxzwthAckBzMmBAID7AFuAEmFVBlUBgBJhgBJhgBJhgBJhgBJhgBJhgBJhgBJhgBJhgBJh2zxfAyVVE1USVQRVBVUF2RsAZMhwIQHPCwAeyz8cyx9QTMt/Est/UIr0ABbL/xTL/xLLf8t/y39QJM70APQAyQHMye1UAFztQO1E0NMAAfJ/0z/TH/QE0//T/9N/03/Tf9XTf9N/+kD0BPQE0Q7tUFUDMFUL",
        code: "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",
        codeHash: "ad9864c8dc34c0e7f4120b6e7c1b47e82c0b1495f48a689a28e0c32ef8e8d9c7",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(Tip31WrapperDeployerAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
        wrapper_pubkey: string | number | bigint /* uint256 */,
        super_root: string /* address */,
        ext_wallet_value: string | number | bigint /* uint128 */,
        wrapper_deploy_value: string | number | bigint /* uint128 */,
        wrapper_keep_balance: string | number | bigint /* uint128 */,
        reserve_wallet_value: string | number | bigint /* uint128 */,
        out_deploy_value: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setWrapperCode", input, options);
    }

    async setWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlexWalletCode", input, options);
    }

    async setFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: Tip31WrapperDeployerDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerDeployOutput>> {
        return await runHelper(this, "deploy", input, options);
    }

    async deploy_(input: Tip31WrapperDeployerDeployInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerDeployOutput>> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: Tip31WrapperDeployerGetArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerGetArgsOutput>> {
        return await runHelper(this, "getArgs", input, options);
    }

    async getArgs(input: Tip31WrapperDeployerGetArgsInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerGetArgsOutput>> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

