
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version_","type":"tuple"},{"name":"wrappers_cfg_","type":"optional(address)"},{"name":"flex_","type":"optional(address)"},{"name":"user_cfg_","type":"optional(address)"},{"name":"description_","type":"optional(string)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECFwEABLoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HAmD/0wAC0CDbPI6SMAPTAI6AIiHhAdP/ATAhVQHZIyHhgQIAFdcYATAkAVUhVQRVBNkMCAP87UAC0z/TH9MfkwHtUIIQeSE8OCMBuY6A4YIQRzOJloIQRzOJlhS68qkKo/J52zxw+GT4KtAg10rAA/LgRYATYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOcc8LYYIQxzOJlhLPCx8C1NTV+kAwUAXOyVADzMlwChMJABz7AFUvcoAUY4AUZVUB2QL+ghB5ITw4E7ryqTAIo/J52zwEwAAGwABQBrEBwACxAsAAcPhkBFBCsQMCBAPy0GYM0wEBwALIAfKwcCEBzwsByXMiAc8LAQHQUWLOUULOH8zJUAPMUE3OA/pAMFADzoIQ+SE8OBPPCx9xE88LYQvJUFLLHxPLH8sfEs7MyVAGzBMLACTJcPsAghB5ITw4WVUjXwVVAdkAONMBAcAC7UAB8rDtUPpA+kD6ANMAMMMAcbADXwMCaN8B0CDTAO1AAvJwINYB0wAw8neTAe1QJccBBds8joAmIeEnxwIh4TCj8nlwVRFVFF8EAdkWDgL+MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4QbTH4IQT34GpBK6njAFo/J5cFlVA18DVQHZ4W0B03/6QNX6QNs8cPhkC9X6QNTRAtEF8tBlgBNh0wDTAPgq0CDXSsADAtMA+kAwA/LgRTDU1NX6QDAkARMPAfzHBfLgZ3KAFmEB+wLIcCEBzwsBgAwiAc8LHwHJcVYVsHYUzwsDAdBWFFUCyx9xVhGwcS6wgBJhwAAPwACAF2HAAFBWzlBWsVA0sVDSsVYSVQzLHwsOgBRhgBZhUKbOcPoCgBZhAfQAcPoCcPoCcc8LYVYSVQzLH8kBzMmBAIAQAVb7AIASYYASYYASYVUGVQRVClUFVQZVD1UI2zyCEE9+BqRVkFULVR1fDQHZEQH8yHAhAc8LAFG7yx8ayx9xF7COaXEUsKNxGs8LAAUlzo5F7UBxFLCdyVADzMlQAszJ7VTtUAGjjhVwHc8LAAFVA1VVXwhVIF4QVQJVA9nhcR3PCwAEUATMVQJVVF8HVSBeEFUCVQPZKiHhBVAGziRwVQFVR1UFVSdVGlUL2QGjEgBEUJfLH5ZwzwsAKNknAeFxzwsAB1AHzidwVQYBVTNVB1UW2QFC7UTQ0wAB8n/TH9Mf0x+OgAHTAJRwcCTZIgHh+kABcSTZFAH8AtWObwLVjlrtQJoB0QnRB+1QVRUBBNMAjiJwcFUCVRdVLHKAEmNfCFUGVQNVGQFVGQFVGFUYAVUJVQrZIgHh1AFxVQJVF1UscoASY18IVQZVA1UZAVUZAVUYVRgBVQlVCtkB0wCUcHAk2SIB4fpAAXEk2QHTAJRwcCTZIgHhFQAM+kABcSTZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        code: "te6ccgECFAEABI0AAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAoEAmD/0wAC0CDbPI6SMAPTAI6AIiHhAdP/ATAhVQHZIyHhgQIAFdcYATAkAVUhVQRVBNkJBQP87UAC0z/TH9MfkwHtUIIQeSE8OCMBuY6A4YIQRzOJloIQRzOJlhS68qkKo/J52zxw+GT4KtAg10rAA/LgRYATYdMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOcc8LYYIQxzOJlhLPCx8C1NTV+kAwUAXOyVADzMlwBxAGABz7AFUvcoAUY4AUZVUB2QL+ghB5ITw4E7ryqTAIo/J52zwEwAAGwABQBrEBwACxAsAAcPhkBFBCsQMCBAPy0GYM0wEBwALIAfKwcCEBzwsByXMiAc8LAQHQUWLOUULOH8zJUAPMUE3OA/pAMFADzoIQ+SE8OBPPCx9xE88LYQvJUFLLHxPLH8sfEs7MyVAGzBAIACTJcPsAghB5ITw4WVUjXwVVAdkAONMBAcAC7UAB8rDtUPpA+kD6ANMAMMMAcbADXwMCaN8B0CDTAO1AAvJwINYB0wAw8neTAe1QJccBBds8joAmIeEnxwIh4TCj8nlwVRFVFF8EAdkTCwL+MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4QbTH4IQT34GpBK6njAFo/J5cFlVA18DVQHZ4W0B03/6QNX6QNs8cPhkC9X6QNTRAtEF8tBlgBNh0wDTAPgq0CDXSsADAtMA+kAwA/LgRTDU1NX6QDAkARAMAfzHBfLgZ3KAFmEB+wLIcCEBzwsBgAwiAc8LHwHJcVYVsHYUzwsDAdBWFFUCyx9xVhGwcS6wgBJhwAAPwACAF2HAAFBWzlBWsVA0sVDSsVYSVQzLHwsOgBRhgBZhUKbOcPoCgBZhAfQAcPoCcPoCcc8LYVYSVQzLH8kBzMmBAIANAVb7AIASYYASYYASYVUGVQRVClUFVQZVD1UI2zyCEE9+BqRVkFULVR1fDQHZDgH8yHAhAc8LAFG7yx8ayx9xF7COaXEUsKNxGs8LAAUlzo5F7UBxFLCdyVADzMlQAszJ7VTtUAGjjhVwHc8LAAFVA1VVXwhVIF4QVQJVA9nhcR3PCwAEUATMVQJVVF8HVSBeEFUCVQPZKiHhBVAGziRwVQFVR1UFVSdVGlUL2QGjDwBEUJfLH5ZwzwsAKNknAeFxzwsAB1AHzidwVQYBVTNVB1UW2QFC7UTQ0wAB8n/TH9Mf0x+OgAHTAJRwcCTZIgHh+kABcSTZEQH8AtWObwLVjlrtQJoB0QnRB+1QVRUBBNMAjiJwcFUCVRdVLHKAEmNfCFUGVQNVGQFVGQFVGFUYAVUJVQrZIgHh1AFxVQJVF1UscoASY18IVQZVA1UZAVUZAVUYVRgBVQlVCtkB0wCUcHAk2SIB4fpAAXEk2QHTAJRwcCTZIgHhEgAM+kABcSTZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        codeHash: "516d645e4fbbb7fc9fcf1dd68b2b2fd9de7e17b6b5dc15d618ab242727a34123",
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

    async runOnDeploy(input: GlobalConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: GlobalConfigOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<GlobalConfigGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<GlobalConfigGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<GlobalConfigGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<GlobalConfigGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

