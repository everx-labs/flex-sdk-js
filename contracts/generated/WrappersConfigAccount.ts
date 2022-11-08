
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
export type WrappersConfigOnDeployInput = {
    keep_evers: string | number | bigint /* uint128 */,
    evers?: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* optional(tuple) */,
    old_token_version?: number /* optional(uint32) */,
    wrapper_deployers: string[] /* address[] */,
    first_wic?: string /* optional(address) */,
    last_wic?: string /* optional(address) */,
    wic_count: number /* uint32 */,
};

export type WrappersConfigOnWICsClonedInput = {
    first_wic?: string /* optional(address) */,
    last_wic?: string /* optional(address) */,
    wic_count: number /* uint32 */,
};

export type WrappersConfigAddWrapperTypeInput = {
    keep_evers: string | number | bigint /* uint128 */,
    type: number /* uint8 */,
    wrapper_deployer: string /* address */,
};

export type WrappersConfigAddWrapperInput = {
    keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    symbol: string /* string */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type WrappersConfigUnlistWrapperInput = {
    wic: string /* address */,
};

export type WrappersConfigCloneUpgradeInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    keep_evers: string | number | bigint /* uint128 */,
    clone_deploy_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    new_token_version: number /* uint32 */,
    wrapper_deployers: string[] /* address[] */,
};

export type WrappersConfigCloneUpgradeOutput = {
    value0: string /* address */,
};

export type WrappersConfigGetDetailsOutput = {
    token_version: number /* uint32 */,
    wrapper_deployers: string[] /* address[] */,
    first_wic?: string /* optional(address) */,
    last_wic?: string /* optional(address) */,
    wic_count: number /* uint32 */,
    salted_wic_hash: string /* uint256 */,
};

export type WrappersConfigGetConfigOutput = {
    super_root: string /* address */,
    wic_code: string /* cell */,
};


export class WrappersConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"optional(tuple)"},{"name":"old_token_version","type":"optional(uint32)"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"onWICsCloned","inputs":[{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"wic","type":"address"}],"outputs":[]},{"name":"cloneUpgrade","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"name":"token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"},{"name":"salted_wic_hash","type":"uint256"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"name":"wic_code","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"token_version_","type":"uint32"},{"name":"deployed_","type":"bool"},{"name":"keep_evers_","type":"uint128"},{"name":"workchain_id_","type":"int8"},{"name":"wrapper_deployers_","type":"address[]"},{"name":"first_wic_","type":"optional(address)"},{"name":"last_wic_","type":"optional(address)"},{"name":"wic_count_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECMQEADoEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HAoz/0wAC0CDbPI6oMAPTAI6W7UAC0z/TH9MfkwHtUIIQNo/8HCMBuSIh4QHT/wEwIVUB2SMh4YECABXXGAEwJAFVIVUEVQTZDAgC/o72ghA2j/wcE7ryqTAIo/J52zxw+GT4KtAg10rAA/LgRdTU1YAUYdMBAcACAvpAyATysHMkAc8LAXAlAc8LAcnQAc4D+kAwUAPOcc8LYYIQto/8HBTPCx/OAdQwAczJAczJcPsAghA2j/wcgBFicoATY4ATZVUB2eGCEB0PEm4vCQL4E7ryqTAIo/J5+Cog0CDXSts8cPhkC8ADLddlDvkAAfLgRQzU1NX6QNQw0Mgh10rAAvLgRfgocRiwUTHOByHOgBJhAcv/gBJhAcsPyVAHzALAAIAWYdMBAcACBMlROM4TzMkD8rBzJwHPCwFwKAHPCwHJ0AHOAvpAMFACzi8KAf6CEJ0PEm4nAc8LH3ESzwthAVUPzwsfjkgB+QCOIR7LHxTL/8lQDMzJUAbMyXD7AIIQHQ8SblXAVR5fD1UB2ZoHcRfPCwAWzibZKgHhcBfPCwBVAjAlVQVVAlUGVSRVFdlxG7ANzwsfG/QAmglxGs8LABnOJ9ksAeBwzwsAVQIwCwAYJ1UBVUNVCFUIVRfZADjTAQHAAu1AAfKw7VD6QPpA+gDTADDDAHGwA18DAQLfDgT6bQLQINMAAfJwINYB0wAw8neW7UDtUNswJMcBBNs8joAlIeEmxwIh4TCj8nn4KtAg10rAA/LgRe1HbxBvF28Q2zxfCFEzvJlwVTBVRV8JAdnhchP7Ash0IQHPCwNwcBPPCwHJ0AHOBNTU1fpAMFAHznD6Ahz0AHD6AnD6AnAwEC8PACLPC2HJgQCC+wBVIVVFXwkB2QL+MCXXDR9vo5lwVSBVRF8IAdnhMCbXSfKwjuWj8nn4KtAg10rAA/LgRe1HbxBvF28Q2zxfCFEzvJlwVTBVRV8JAdnhchP7Ash0IQHPCwNwcBPPCwHJ0AHOBNTU1fpAMFAHznD6Ahz0AHD6AnD6AnDPC2HJgQCC+wBVIVVFXwkB2S8RBPrhBdMfnlsEo/J5cFUgVQRfBAHZghA7aJeTIwG5j9WCED7olbYjAbmOgOGCEDtol5MTuiLhBqPyeds8cHD4ZI6VAtWOgAHTAJRwcCTZIgHh+kABcSTZgBJh0wCfcCNwVRMBVQFVBFUFVRTZIgHh+kABcSTZ4YIQHQNlXCMBuSovKBICRo6A4YIQG+x1qBO6IuEGo/J5MATTf9N/03/Tf9T4KiDQINdKGBMD/I7bcoATYQH7Ash2IQHPCwNwEs8LAcnQAc5xG7BQSs5w+gKAFWEB9ABw+gJw+gJwzwthyYEAgvsAW1UMVQxVDFUMVQxVDFUMVQxVCFUIVQzbPIIQG+x1qFVQXwYB2ds8cPhkDMADD9MH1DBVD/LgRQ7U1NX6QIAaYdMA0wDTAC4vFAH++kAwUwXHBQXUMAXy4GRT+bzy4GuAICpWEFUB9A5vofLgQAXQINdKwALIAfLgRXAhAc8LAQf6QDAhzhzLB3AsAc8LAIAZYVUBzAfJ+Ch6LgHPCx8C0AnJcCQBzwsAUb/OUS/OVhz5AM8L/4AcYddlzwsPyVACzIAcYVUCy390LxUB+gHPCwJ2JQHPCwJwLQHPCwAtyQHMUV3MUMzOAVYXzwoHcBPPCwADyVUFVQ/OzMlxHM8LABvMcc8LAAPJcBXPCx9WIQH0AIAaYQHMcM8LCBTMyVACzHDPCwAHyQfJUHfMJvkAAckCy//J0FIIzoAYYfoCVhwB9ABw+gJw+gJzFgH+zwthFsxxzwsAFczJcPsAji5xGiEB4wQDcSFxVQNVNl8FL1VpVQhVDFUJcoARY4ASYVUeAXKAEWOAEmGAEmHZATAoAeHIdiEBzwsDcCIBzwsBydABzoAsIgHPCyFSY87JC1CyzArOgBRh+gJxGbCAE2GkCskFVhhVCfQAcPoCcBcAHvoCcc8LYRbMyXD7AFYR2QRqghA2w5HIIwG5jxeCEDbDkcgTuiLhBqPyeTAE0x/bPHD4ZOGCEB0DZVwTuiLh03/bPHBw+GQvIS8ZA/aPdo7xAdMf9ATVjtQB1Y6/AtMf0QbAAAXRDMAAD8AAgB9h8tBs+Cgg0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZAdMAlHBwJNkiAeH6QAFxJNkB0wCZcHAkAVURVQLZIgHh+kBxJNkC0wAN0wAcGxoAQo4ScF8gVhFwVQUBVQZVFFUGVRXZIgHh03/Tf9N/cVYS2QAkmXBwJVURAVUR2SIB4dMfcSXZA/ww0geOuHESsHGAFmEBsHGAHGEBgB5hVQlVDlUOgBlhVQaAEWFVCIAXYds8ghAdA2VcgBVic4AXY4AYZQHZjoBWFQHgBfLQbchwIQHPCwCAE2Ehyx9wzwuoVi4B9ABwzwsAcCIBzwsfyYAsYdMAUCPMdBXPCwIC0wDTAPpA+kAuHx0B/vgqUrjKBwH6ADAJyXEZzwsBF8xxzwsAF8xwzwsAyfkAFc8L/8nQUATHBfLgaI47XwWAGWGAGmFVElVFXwcjgAuAFWOAIGFygB9jAXWAHGOAFGF1gBljgBthc4AeY4AgYYAfYYAgYYAgYdkBMC0B4F8DVhZWGKBWFqAbqFYloBoeAf688uBqclYkAfsCyHAhAc8LAFFBzlYQAcsfLwH0AHAlAc8LIHAjAc8LAcl2F88LAgbQAVYlzwsfAslQAswFzhvOcPoCgCphAfQAcPoCcPoCcc8LYQPJgAwbzwsfgBZhAct/gBVhAct/gBRhAct/cM8LABrMyVACzMmBAID7ADAgJQH++CrQINdKwAPy4EXU1NX6QDCALmHTANMA0wD6QDBSBccF8uBlclYuAfsCyHYhAc8LA3ASzwsBydABzhTOcPoCgDNhAfQAcPoCcPoCcM8LYcmBAIL7AF8GgBxhgB1hVQJVdF8JInKAE2OAFWF1gBFjVQhVTXKAEWMBc4ATY3KAFCAADGMBgBVh2QL+jv34KiDQgBRh0wDTANMA+kAwJNdKCNN/03/V03/Tf9N/DsADDtMf0x/0BNFVD/LgRQ3U1NX6QDAsAccF8uBkXwNWGyK58uBmVhe68uBnUyOgIqBWEagnoCYBvPLgau1HU2egAW8QbxdvELny4GrIcigB+wJwIQHPCwBRIssfcCMiACoM0wCZcHEvVREBVRHZIgHh+kBwL9kC/s8LqFYiAfQAyHAhAc8LAYIQHQNlXCIBzwsfcCMBzwsAcBXPCwB0Fs8LAnYlAc8LAlDSy38CyXGAGGEBsHAoAc8LH8lQB8yOnVD49ACOgCoh4FYUcRXPCwAUziMBVQRVElUEVQTZcYAbYQGwKMAABNBxF88LAFBlzlYeVQ/KBwMmJAH+yXEpAc8LAVYWAcxxzwsAIQHMcM8LAFDmy39xG88LAYAVYQHMcc8LAFDKy38ay39xzwsAA8lWHlUDyx9QuMxwzwsAyfkAzwv/ydBSCc5QC/oCViEB9ABWF1UFyx9wEvoCcPoCc88LYRjMcc8LAJxxIwHPCwBWFQHOJtkiAeAjJiUAAtkB/jBWElUDyx/JUAfMyVAGzA2jDclNjuMEC8MAA8MAUMrMyXD7AMh2IQHPCwNwIgHPCwHJ0AHOG85w+gKAG2EB9ACAF2FVCssfcBL6AlAiznAS+gIByXESzwthzMmBAID7AIASYYASYYASYYASYYASYYASYYASYVUNgBJhVQiAEmEnARzbPIIQNsORyFWgXwsB2S4B/gLTH9EM8uBpDIAYYdMA0wDTAPpAMFAExwXy4GlyVhUB+wL4KtAg10rAA/LgRch2IQHPCwNwEs8LAcnQAc4B1NTV+kAwUATOcPoCB8MADMMAgB9hVQf0AHD6AnD6AnDPC2HJgQCC+wCAGWGAGWGAGWGAGWGAGWGAGWFVD1UGgBcpATRhgBJhgBdh2zyCEDtol5NV8HKAEmOAEmUB2S4D/oIQWDQyHCMBuY6A4YIQPuiVthO6IuEGo/J5+CrQINdK2zxw+GQLwAOAEmH6QDAB8uBFDNTU1fpAMIATYdMA0wDTAPpAMFAExwXy4GTIdiEBzwsDcCIBzwsBydABzoATYQHOgA0SzwsfcBL6AnEZsHEbsAHJgBdhVQj0AHD6AnAsLysBZPoCcc8LYczJgED7AFUOVQ5VDlUOVQ5VDlUOVQZVDVUOVQ/bPIIQPuiVtlVgVRhfCQHZLgL+ghBYNDIcE7oi4Qaj8nkwBNN/0wf4KtAg10rbPHD4ZAvAAw36QDAN8uBFC9TU1fpAMIATYdMA0wDTAPpAMFIFxwXy4GRfAyiAEWG68uBryFUPAc7J0IAgASpVCVUC9BZyVQ8B+wJxH7BxF7AIpMh2IQHPCwNwEs8LAcnQAc4Szi8tAXpw+gKAEmEB9ABw+gJw+gJwzwthyYEAgvsAVQpVClUKVQpVA1UMVQpVC1UKVQtVDNs8ghBYNDIcVUBfBQHZLgDqyHAhAc8LAFHMyx8bywBxFbCOPe1AcRawo44RMFBYyx/JUAfMye1UMO1QXwQgWQFVAeFxGc8LAARQBM4ncFUhXhBVFVUJVQhVBlUIVQlVCdkBo1Cly38YygcWyx8U9ACWcM8LACbZIgHhcc8LAAJQAs4lcFnZALLtRNDTAAHyf9Mf0wDTf9IH0x/0BI4y7UAD1ZjTH9EF7VBVAwHTAJ5wcFUCVQRVGF8EVREB2SIB4fpAAXFVAlUEVRhfBFURAdkB0wCUcHAk2SIB4fpAAXEk2QBY0wDtQALycNMA0wDTAPpA+kAG7VBfBfoA9AT6APoA0z/TH9MAMMMAcbAGXwY=",
        code: "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",
        codeHash: "304dcd93b924437d7354f5c084cf04dec790c303c1580e689a83e5d9bc8f8206",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrappersConfigAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: WrappersConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: WrappersConfigOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runOnWICsCloned(input: WrappersConfigOnWICsClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onWICsCloned", input, options);
    }

    async onWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onWICsCloned", input);
    }

    async runAddWrapperType(input: WrappersConfigAddWrapperTypeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapperType", input, options);
    }

    async addWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: WrappersConfigAddWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapper", input, options);
    }

    async addWrapper(input: WrappersConfigAddWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runUnlistWrapper(input: WrappersConfigUnlistWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistWrapper", input, options);
    }

    async unlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runCloneUpgrade(input: WrappersConfigCloneUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigCloneUpgradeOutput>> {
        return await runHelper(this, "cloneUpgrade", input, options);
    }

    async cloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<RunLocalHelperResult<WrappersConfigCloneUpgradeOutput>> {
        return await runLocalHelper(this, "cloneUpgrade", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<WrappersConfigGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<WrappersConfigGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

