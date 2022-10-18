
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
export type WICOnDeployInput = {
    keep_evers: string | number | bigint /* uint128 */,
    old_wrappers_cfg?: string /* optional(address) */,
    old_wrapper?: string /* optional(address) */,
    keep_wrapper: boolean /* bool */,
    deployer: string /* address */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type WICSetNextInput = {
    old_wrappers_cfg?: string /* optional(address) */,
    next_symbol?: string /* optional(string) */,
    next: string /* address */,
};

export type WICCloneUpgradeInput = {
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    first_clone?: string /* optional(address) */,
    last_clone?: string /* optional(address) */,
    prev_symbol?: string /* optional(string) */,
    wic_count: number /* uint32 */,
    token_version: number /* uint32 */,
    new_wrappers_cfg: string /* address */,
    wrapper_deployers: string[] /* address[] */,
};

export type WICGetDetailsOutput = {
    symbol: string /* string */,
    workchain_id: number /* int8 */,
    deployer?: string /* optional(address) */,
    wrapper?: string /* optional(address) */,
    type?: number /* optional(uint8) */,
    init_args?: string /* optional(cell) */,
    next?: string /* optional(address) */,
    unlisted: boolean /* bool */,
};


export class WICAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"old_wrappers_cfg","type":"optional(address)"},{"name":"old_wrapper","type":"optional(address)"},{"name":"keep_wrapper","type":"bool"},{"name":"deployer","type":"address"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"setNext","inputs":[{"name":"old_wrappers_cfg","type":"optional(address)"},{"name":"next_symbol","type":"optional(string)"},{"name":"next","type":"address"}],"outputs":[],"id":"0xb"},{"name":"cloneUpgrade","inputs":[{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"first_clone","type":"optional(address)"},{"name":"last_clone","type":"optional(address)"},{"name":"prev_symbol","type":"optional(string)"},{"name":"wic_count","type":"uint32"},{"name":"token_version","type":"uint32"},{"name":"new_wrappers_cfg","type":"address"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[],"id":"0xc"},{"name":"unlist","inputs":[],"outputs":[],"id":"0xd"},{"name":"getDetails","inputs":[],"outputs":[{"name":"symbol","type":"string"},{"name":"workchain_id","type":"int8"},{"name":"deployer","type":"optional(address)"},{"name":"wrapper","type":"optional(address)"},{"name":"type","type":"optional(uint8)"},{"name":"init_args","type":"optional(cell)"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0xe"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"symbol_","type":"string"},{"name":"workchain_id_","type":"int8"},{"name":"deployer_","type":"optional(address)"},{"name":"wrapper_","type":"optional(address)"},{"name":"type_","type":"optional(uint8)"},{"name":"init_args_","type":"optional(cell)"},{"name":"next_","type":"optional(address)"},{"name":"unlisted_","type":"bool"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECOwEAEhQAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAsEAQL/BQT80wAC0CDbPI9kMAPTAI9SMNM/0x/THzDADvKpXwMCo/J52zxw+GRxGLBxFrBVD9MBB8AAyALAAvKwcyIBzwsBcCMBzwsBydABzoAOIwHPCx8J+kAwAc5Q+MwdygdxF88LYSIh4QHT/wEwIVUB2SMh4YECABXXGAEwJAFVIVUECjYHBgAGVQTZAaSOrXEUsAXAAI6GcROwBsAAmglxLQHPCwDOKdkuAeFwLQHPCwBVCTAhVQFVclUY2XEcsJoLcRfPCwAWzinZ4HAXzwsAVQowKlUGVTdVBlU3VRnZCAH+jn0IwwAGwACOTu1AcRiwjhYVywDJUATMyVADzMkBzMlw+wDtUIAOjhUFcR/PCwAezlURVQVVN1U9XwtVAdkrAeFwH88LAFUiVQZVOFU+XwwBVTFVBFUF2ZoGcRrPCwAZzCXZKQHhcBrPCwBVATAoVREBVQZVCFUVVQhVCFUX2QkAQJpxFM8LABjLByLZIwHhcBTPCwBVATAiVQFVQlUHVRbZADjTAQHAAu1AAfKw7VD6QPpA+gDTADDDAHGwA18DAvbfAdAg0wAB8nAg1gHTADDyd5ntQO1QCl8K2zAkxwEE2zyOxDAl1w0fb6NwISZwVQpVCVUGVRIBVQpVCVULVQpVKFUL4XAT4wQi10nysJ1fA6PyeXAicF8wVRPZIQHhbYIQgAAAABKwJSHhJscCIeEwo/J5cCFwX0BVFNk6DAPMj08Do/J5MNMfghCAAAAAErLbPIAgVhAvVQH0D2+h8rvQ0x+AFGHTANMA0wD6QDDTAQXSB9P/1fpA0TAjwQOZXwPAA/LQY/I04QPAAvK0BtMA4ALTH51fBKPyeXAicF8wVRPZIsEMNi4NBD6PmSLBDY6A4TAEo/J5WwHTf9N/03/bPHBw+GThIsELLDYeDgSsjywwBKPyeds8cHD4ZI6AgBRh0wCOEHAjcFUTAVUBVRMBVQVVBdkiAeH6QHEk2eECwAoi4ds8gCBT/lUB9A9voVYQpIIQf////7CAEWHjBFUP038i+GQ2GjYPA/6PbwHVj1YB0wDV+kDTB9TR+CrQINdKwAMF0QTy4EUj1NTV+kDV+kDT/9MP0Y6uXwQMwwD4KNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2QHTAJlwcCQBVRFVAtkiAeH6QHEk2QHTAJlwcCQBVRFVAtkiExEQAA4B4fpAcSTZAf6ONoAsYdMA0wDTAPpAMFNwxwXy4GZVIF8DIYATgBNjeoAbY4AeYYAmYXSAIGOAJmFygCVjgCZh2VYUAeEs10lyLlnXMMiAFmEhzoAuYdMAUnPL/wLTANMAUWXOUcXOUoXLD3QmAc8LAgf6QHAYzwsAgC1hVQjKBwPJUAfMyVANEgCgzMlwJgHPCwBxIQHPCwASzHAiAc8LAALJUALMcRLPCwAByXAXzwsfVjAB9ABWLAHMcM8LCBbMyVAFzHDPCwDJ+QAUzwv/ydAqxwXy4GUwI9kD/jBS87CO3g5WHMAAVh/AAFYjwABxgCVhAbBxgCNhAbBxgCJhAbBxgCFhAbBQZrFQRLFQIrGAG2GAE2GAI2FVCVUNVQSAImFVCoAWYVUIVQtVCoAgYVUMgCBh2zx6gBNigBNlJtkBoy0E0geOgAEwIgHhcoAaYQH7Ash0IQHPCwMzFRQAyHASzwsBydABzoATYVCIznD6AoAqYQH0AHD6AnD6AnDPC2HJgQCA+wBxVQFVA1UFVQdfBCJzgCFjVRcBgA+AEmN1gBljc4AhY4AgYYAjYYAhYYAjYYAiYYAjYYAjYYAkYYAkYdkC/o77VhPXSXKAFWFVAVUB1zDIclYeAfsC+ERQIs6CEIAAAAAisYIQ/////xO8yALJdiMBzwsDcEMF4wSBEREjAc8LH8sfVhQBzMxwEs8LAcnQAckCzoAUYQHOcPoCgC5hAfQAcPoCcPoCcc8LYczJgQCA+wAo+GL4QtMBIcEDgBIXFgDIYaOVcF8gI9nhgBJh0wEhwQOYMMAD8tBj8jThAcAC8rTTAI4xMNIH0/9xATAkgBFhdYASY3KAFWNygBVjAYATYXOAFGNygBVjAYAUYXKAFWN0gBNj2SIh4QHTBAHXGAEwIVUB2QEimDDAA/LQY/I04QHAAvK00wAYAf6Oe8h6IQHPCx8D0geBAQGAGWEkVQHPAFAlygcB0/8wAcv/gBFhIs7JAcyBAQFIQM8AgQEBRhDPAIEBARQmAc8AyVADzHATzwsBgQEBgBthVQFVAc8AcYAkYQGwUNXOAskCyVAMzIEBAUsQzwAZzMmAIAFWGIAmYVUC9Bcl2SIhGQAa4QHTBAHXGAEwIVUB2QP+j20B1fpA+CoB0dAg10rAA/LgRSDU1NX6QNX6QNP/0w/RjsxxgBRhAbBxgBZhAbBxgBhhAbBxgBphAbALcYAfYYAfYYAfYYAfYYAfYYARYYAfYVUIgB9hVQqAH2FVDFUMVQyAHWHbPIALVdBfDibZAtMAmXBxJVURAVUR2SIB4TMcGwAI1HAl2QH+jjGAJ2HTANMA0wD6QDAXxwXy4GRVUl8IIIAVemNygBZjAXWAGmNeMIAfYXKAHmOAH2HZVhAB4Qyj8tBoKNdJckoQ1zDIgBFhIc4Ty/+AJmHTANMAUUXOUYXOUMPLD3QlAc8LAgTTAHAXzwsAViNVBcoHBvpAMAPJUAXMyVAIzB0AoMlwJAHPCwBxIQHPCwASzHAiAc8LAALJUALMcRLPCwAByXAVzwsfgChhAfQAVQ8BzHDPCwgUzMlQA8xwzwsAyfkAE88L/8nQAccF8uBnMCnZAuSO6wLVjtKOvAHTH9Mf1fpA0x/0BNED0VYY8uBqVhkhufLgaVYWwABWHcAAsfLQavgqINAg10rAA/LgRSDU1NX6QNX6QALTAJlwcSVVEQFVEdkiAeHUcCXZAdMAmXBwJAFVEVUC2SIB4fpAcSTZgBFh0wAgHwAyn3AjcFUTAVUBVQRVBVUU2SIB4fpAAXEk2QTuj+aPWXJWLwH7Ao7RcYAeYQGwcYAgYQGwcYAiYQGwcYAkYQGwgB9hwwCAKGGAKGGAKGGAKGGAKGFVBYAoYVUHgChhVQmAKGFVC4AoYVUMgChh2zyADIAVYoAVZSbZjoBWIAHhgBZhIdkPowHT/9MP0chwIQHPCwAzKCMhAfyOZXAhAc8LAHAhAc8LACHJAczJcBPPCx9WNAH0AIAVYQHMcM8LCBLMcRLPCwAdzHQSzwsCDMlWKlUMygdxE88LAIAyYdMA0wDTAPpAMFBUzHDPCwDJ+QAVzwv/ydASxwXy4GswVhHZJQHhVhAhyx9wzwuoVjMB9ABwzwsAcBIiAMzPCx/JAczJdCIBzwsCgDRh0wDTANMAVjBVBMoHAfpAMCXXZYICATQYzwsXKAHLDxfLDygBy/8F+QAVzwv/ydD5AhTPC//J0FFExwXy4GxfAy3HBfLgbFYQVVtVloASYYASYYASYdkB/oAUYcAALddJck8Q1zDIgCBWJ1YTVQH0Dm+h8uBAVhEizhjL/xbLD1YqB/pAyHohAc8LH1I7xwUEyXAiAc8LAHAhAc8LAHAkAc8LAYARYS3OFMwHwwBWNVUNy38EyXQmAc8LAnYlAc8LAgLQcCUBzwsAJclxGc8LAFYTAc5xFrAkAv5WLlCSzAzJVQyAEWHOUDXOVjNVA8oHcVYwsFBFzMlxF88LABbMcc8LAAvJcCcBzwsfVjoB9ABWNAHMcM8LCMzJUAvMcM8LAMkg+QASzwv/ydBSBc5WN/oCVjgB9ABw+gJw+gJzzwthzHHPCwCOgCIh4XEoAc8LAFYvAc5VAjAhJiUAFAFVE1UFVRRVBdkB/jCAIWHAAFBlywBQhs5WKQHLBxjMyVAEzMlQBszJAczJcPsAjjMwIFUDAYAbYeMEgBJhpHFxJwFVA3SAGWNVBnKAG2NVCVXOgBxhcoAaY4AcYYAcYYAcYdkuIeDIdiEBzwsDcCIBzwsBydABzoAXIgHPCyAcznHPCwCAGWFVC84nAIRWLFUBzFJDzslQAszJAVYv+gJWMQH0AHD6AnD6AnHPC2HMyXD7ACBwcFUPdYARY1VucoASY3KAFGNygBFjc4ATY9kC+o7ByHAhAc8LAHYhAc8LAnAjAc8LAcnQAc6AE2EBzoIQO2iXkyMBzwsfcBL6AoAZYcAAgDVhVQH0AHD6AnD6AnHPC2FWIgHhyHEhAc8LAXIhAc8LAXAjAc8LAcnQAc5WJQHOgAwjAc8LH4A1YQHLf4A0YQHLf3AS+gIBgDNhKykB4M8Lf4AaYcAAgDNhVQL0AHD6AnD6AnHPC2GOVY42MFYwVQTMgBlhAcsfgBhhAcsfgBZhVQXOgBVhAcsfgBVhAfQAyQHMyQHMyQHMyYEAgPsAMCHZIyHgcScBzwsAGc5xzwsAKFUFVRZVA1U0VQhVCNkqAE6OFXAUzwsAVQcwI4AReWOAGmF5gBJj2VYiAeFxFM8LAIAgYQHOI9kA6o5OjiswgBhhVQTLH8kBzMkBzMmBAID7AFVDXwgggCVyY3KAKGOAKGGAKWGAKWHZIyHgcRfPCwAYziVwVQVVB1UGVQRVBlUEVQZVCFUIVQjZjhNwFM8LAFUHMCNV+IAZYXmAEWPZViEB4XEUzwsAgB9hAc4j2QL+AsANIuFfAwGj8nn4KtAg10rbPHD4ZDAOwAPy4EUO1NTV+kCAFGHTANMAA9X6QNP/0w/RWwTTAPpAMCUBxwXy4GTIdCEBzwsDcBLPCwHJ0AHOFc5w+gJxgBZhAbBxG7BxHbBxH7BxgBFhAbCAF2FVAvQAcPoCcPoCcM8LYcmAQDYtAW77AHGAFWGAFWGAFWGAFWGAFWFVBYAVYVUHgBRhgBVhgBRhgBVhgBZhgBZhVQ3bPIANVSBfAybZMwL8jvUw0gcDugLT/zBQB7qw8ruAIIAWYYAVYVUB9FswBsAK8rqAFGH4Y4AgVhQnVQH0D2+hVhWkghB/////sIAWYeMEIPhkcVUPIFUB4wQD0wGBAQHXANWBAQES1wDVgQEB1wCBAQHXAIEBAdcA1fgA+EP6QHIb+wIiIeEB0wQBMC8AENcYATAhVQHZArCOynGAEWEBsHGAE2EBsHGAFWEBsHGAGGEBsAnDAFULgBJhgBphgBphgBphVQ1VDlUGgBlhVQiAGWFVCoAZYVUMgBlh2zx6VWBfBybZgQEBE9cAMCEL0//IMzEB2o4/dCEBzwsDcBLPCwHJ0AHOHM5w+gJxgBFhAbCAImFVAfQAcPoCcPoCcM8LYcmBAID7AFUgVSRfBiFVUF5AVQXZJAHhdiEBzwsDcCIBzwsBydABznQiAc8LAhrKBxjL/8nQUAjOgQUAJwHPCx8yAKyOHRPL/1DHzhrL/xfLD8lQBMzJUAfMyYEAgPsAMCTZcYATYQGwcBT6AoAkYQH0AHD6AnD6AnHPC2GZcRPPCwAWziXZJAHgcBPPCwBVBDAhVQFVMlUU2QF2yHAhAc8LAFUPIcsfVQ8B9ABxHbCOgAGjVQ9VDcwfygeWcM8LACHZLwHhcc8LAA1QDc4scFWiVQ1VHNk0Af5xHLCOeXEbsI5dcRmwjkDtQHEYsKOOFTBQU8sAyVACzMlQCszJ7VRb7VBfCSBZAVUB4XEWzwsACFAIziRwVQRVFlUGVRUBVQVVCFUIVQjZAaOXcBnPCwAo2eFxGc8LAAlQCcwncFnZAaOXcBvPCwAq2eFxG88LABvLBylwWdkBNQA6o5MiIdnhcSQBzwsADVANzixwVQJVk1UqXhBVDdkBRO1E0NMAAfJ/0x/0BNTSB46AAdMAlHBwJNkiAeH6QAFxJNk3AvwC1Y73jnKOYO1AA9Wb0wDRDNEK7VBVGAEB0wCOI3BwVQJVCFUKVQxVP3KAFmNfClUDVQZVGwFVOVUbVRlVGwHZIgHh+kABcVUCVQhVClUMVT9ygBZjXwpVA1UGVRsBVTlVG1UZVRsB2QLTAJRwcCXZIgHh1AFxJdkD0wAB0wA5OAAclHBwJNkiAeH6QAFxJNkAJJlwcCZVEQFVEdkiAeHTB3Em2QBY0wDtQALycNMA0wDTAPpA+kAG7VBfBfoA9AT6APoA0z/TH9MAMMMAcbAGXwY=",
        codeHash: "f0463fa9b52593ad687e04bed7872a4e7172b4676d3b856a431cf2d635d34a99",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WICAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: WICOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: WICOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runSetNext(input: WICSetNextInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setNext", input, options);
    }

    async setNext(input: WICSetNextInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setNext", input);
    }

    async runCloneUpgrade(input: WICCloneUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "cloneUpgrade", input, options);
    }

    async cloneUpgrade(input: WICCloneUpgradeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "cloneUpgrade", input);
    }

    async runUnlist(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlist", {}, options);
    }

    async unlist(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlist", {});
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WICGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<WICGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

