
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type GlobalConfigOnDeployInput = {
    keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    flex: string /* address */,
    user_cfg: string /* address */,
    description: string /* string */,
};

export type GlobalConfigGetDetailsOutput = {
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    wrappers_cfg: string /* address */,
    flex: string /* address */,
    user_cfg: string /* address */,
    description: string /* string */,
};

export type GlobalConfigGetConfigOutput = {
    super_root: string /* address */,
};


export class GlobalConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version_","type":"tuple"},{"name":"wrappers_cfg_","type":"optional(address)"},{"name":"flex_","type":"optional(address)"},{"name":"user_cfg_","type":"optional(address)"},{"name":"description_","type":"optional(string)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECKgEACLwAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBIEA6T/AdBtbSIhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZJxsFATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdkGASxfBQ/TAI6AIiHhgQIAEtcYATAhVQHZBwEucYASYQGwAtMAjoAiIeEB0/8BMCFVAdkIApDtQAXDAALTP9Mf0x+TAe1QghB5ITw4IwG5joDhghBHM4mWE7ryqTAE8nntRNDTAAHyf9Mf0x/TH9MAjoAiIeEB+kABMCFVAdkMCQEkMNXTAI6AIiHhAfpAATAhVQHZCgH+MNXTAI55MNMAjmkw0VvRcPhk+CrQINdKwAPy4EWAHGHTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACznHPC2GCEMcziZYSzwsfAtTU1fpAMFAFzslQA8zJcPsAghBHM4mWVbBVHYAOgBFjgBxlAdkiIeEB1AEwIVUB2QsAGCIh4QH6QAEwIVUB2QFmghB5ITw4E7ryqTAE8nntRNDTAAHyf9Mf0x/TH46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZDQEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2Q4BMgHVjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkPASyOgALTAJlwcSVVEQFVEdkiAeHUcCXZEAH8AdEI0QjAAA3AAFANsQHAAHD4ZLFQBbFxsKPy0GaAJWHTAQHAAsgB8rBwIQHPCwHJcyIBzwsBAdBRks5RQs4YzMlQA8xQds4G+kAwUAbOghD5ITw4Fs8LH3EWzwthBMlQ9csfHcsfG8sfF87MyVAFzMlw+wCCEHkhPDhVsFUdEQAUgA6AEWOAHGUB2QPG3wHQbSHTAAHycCDWAdMAMPJ3MCFtVQMhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZJxsTATxxFrCOgCYh4HGV8rQwINlxFbqTcCTZ4YsI0SNwWdkUAUrtQJMB7VBWGMcBBMMAjoAlIeFWGscCIeEw8nlwgBdzY4AXZQHZFQHKMFYZ1w0fb6OccFUggBd2Y4AaZQHZ4TBWGtdJ8rCc8nlwgBdzY4AXZQHZ4YAZYdMfghBPfgakErqdMPJ5cIAWc2OAFmUB2eHtRNDTAAHyf9Mf0x/TH9MAjoAiIeEB+kABMCFVAdkWASww1Y6AAdMAlnAjcFUg2SIB4fpAcSTZFwEkAdXTAI6AIiHhAfpAATAhVQHZGAEgMNMAjoAiIeEB1AEwIVUB2RkB/DDRW9EJ03/6QNX6QNVw+GT6QNTRAtEO8tBlgCVh0wDTAPgq0CDXSsADAtMA+kAwA/LgRTDU1NX6QDAkAccF8uBnchv7AsiADCEBzwsfVhMByx92IgHPCwNwE88LAcnQUALOAVYSzwsfUETOcPoCgCthAfQAcPoCcPoCcc8LYRoArlYQVQPLH8kBzMmBAID7AMhxIQHPCwBRd86AE2FVB85xzwsAF8zJUAbMyXAWzwsAVQ8Byx8fyx8dyx9xzwsAFc4SzMntVIIQT34GpFWwgBSAD2OAIGUB2QG87UCOVoAZYe1QC4ARYYATYYAUYXBf8HBfMIATYYAwYYAiYXKAL2OAJGGAMGF3gB9jgCBhgCVhgCFhgCZhdIAtY3KAJ2MBgDBhgCphdYAsY4AQgCBjgDBhgDBhVQ/TABwD/o4lcXBfwFUOMFULVRlVCVUPgA6AEWOAG2GAG2F3gBVjc4AcY14Q2SIB4SDTAI4vcXBfwFUdgBFhXwNVC1UZVQlVD4AOgBFjgBthgBthdYAXY4AcYXKAG2NygB1jAdlxIwG5joDgcRO6IuHVjoAB0wCZcHAkVREBVRHZIgHh0wQgHh0ABnEk2QH8jnmOZ45VjkMC0XFfIFUEVRdVG1UOgBJhgBRhcoAWY3OAGWNfDVUMVRpVClUPgA6AEWOAHGGAHGFzgBpjcoAbYwFzgBpjcoAdYwHZA9MAlHBwJtkiAeHUAXEm2QPTAJRwcCbZIgHh1AFxJtkC0wCUcHAl2SIB4dQBcSXZAtMAHwAsm3BfICZVEVUDVRLZIgHh0wDTAHEm2QEWjoAhVSFeEFUSAeIhAS6OgAHTAJlwcCRVEQFVEdkiAeHTBHEk2SIBNo6AAtMAm3BfICZVEVUDVRLZIgHh0wDTAHEm2SMBJI6AAtMAlHBwJdkiAeHUAXEl2SQBJI6AA9MAlHBwJtkiAeHUAXEm2SUB/ALTAI5FcXBfIHFVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFygBxjAXOAGWOAHGGAHGGAHWGAHmHZIgHh1AFwcV8gVQVVCFUbVQ6AEmGAFGF1gBZjXwxVDVUbVQtVD4AOgBFjgB1hgB1hgB1hciYALoAcYwGAHGFygBtjAXKAG2OAHWGAHmHZAeztQI46gBJh7VAOD1UPgBFhcF/wcF/AgBxhgA2AIGOAKWGALWF0gCdjcoArYwGALGGALWGAFYAZY4AuYYAuYSbTAI4s0wDTANMA+kD6QPoA9AT6APoA0z/TH3FwVQ2AFWFbVQ5VP1WnVS9eEIATYdkiAeFbJtMBKAH+jiptbXJwXyAlcF9QVRxbVQ1VPlUrgBFhVR2AEWFVPIARYYARYYATYYATYdkiwQOOOALAAyLh+kABAfpAAQHTP9MfAW1tcXJwX0BVDYAVYVtVDlU/VS9VH1UNgBFhVTtVHwGAEmGAE2HZ4QLAAiLh+kABAfpAAQH6AG1tcXAjcCkATl8wcVUNgBVhW1UOVT9VL4ARYVUdAYARYVU8gBFhgBFhgBJhgBNh2Q==",
        codeHash: "56e189c3b798a674c0423b4a773eed03aa623faf0cb4f2ab5303bc8b33a69a54",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(GlobalConfigAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: GlobalConfigOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: GlobalConfigOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: GlobalConfigGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: GlobalConfigGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: GlobalConfigGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: GlobalConfigGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

