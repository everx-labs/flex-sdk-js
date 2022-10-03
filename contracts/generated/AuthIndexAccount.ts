
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
export type AuthIndexRemoveInput = {
    dst: string /* address */,
};


export class AuthIndexAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[],"outputs":[],"id":"0xa"},{"name":"remove","inputs":[{"name":"dst","type":"address"}],"outputs":[],"id":"0xb"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"owner_","type":"optional(address)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECDwEAAg4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIAkHAQ7/MNDbPPIpCAAY0wEwwALtQAHysO1QAmjfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI6AJiHhJ8cCIeEwo/J5cFURVRRfBAHZDgoD0DAm1w0fb6ObcFUgVRRVF18HAdnhMCfXSfKwnKPyeXBVEVUUXwQB2eFtB9MfnVuj8nlwVRFVFF8EAdkiwQuOgOECwAoi4ds8cPhk8tBlMAbTANMA0wD6QDBxShDbPHpVQFUWVRlfCQHZCw0MAsQCwAsi4QKj8nnbPHD4ZAT6QDAk8uBkIQjTANMA0wD6QDBQC8cF8uBkcRewRDDbPMh0IQHPCwNwEs8LAcnQAc4SznD6Ahn0AHD6AnD6AnDPC2HJgQCj+wCAC1lVE1UWXwYB2Q0MAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        code: "te6ccgECDAEAAeEAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAYEAQ7/MNDbPPIpBQAY0wEwwALtQAHysO1QAmjfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI6AJiHhJ8cCIeEwo/J5cFURVRRfBAHZCwcD0DAm1w0fb6ObcFUgVRRVF18HAdnhMCfXSfKwnKPyeXBVEVUUXwQB2eFtB9MfnVuj8nlwVRFVFF8EAdkiwQuOgOECwAoi4ds8cPhk8tBlMAbTANMA0wD6QDBxShDbPHpVQFUWVRlfCQHZCAoJAsQCwAsi4QKj8nnbPHD4ZAT6QDAk8uBkIQjTANMA0wD6QDBQC8cF8uBkcRewRDDbPMh0IQHPCwNwEs8LAcnQAc4SznD6Ahn0AHD6AnD6AnDPC2HJgQCj+wCAC1lVE1UWXwYB2QoJAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        codeHash: "53e8116bbfc3323f66cf6c60aba91f4c3bc03799afce731cf9b0b9e6f9107827",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(AuthIndexAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", {}, options);
    }

    async onDeploy(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", {});
    }

    async runRemove(input: AuthIndexRemoveInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "remove", input, options);
    }

    async remove(input: AuthIndexRemoveInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "remove", input);
    }

}

