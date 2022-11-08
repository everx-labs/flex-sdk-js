
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[],"outputs":[],"id":"0xa"},{"name":"remove","inputs":[{"name":"dst","type":"address"}],"outputs":[],"id":"0xb"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"owner_","type":"optional(address)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECDwEAAg4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIAkHAQ7/MNDbPPIpCAAY0wEwwALtQAHysO1QAuLfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI69MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4W0H0x+dW6PyeXBVEVUUXwQB2SLBCyYh4SfHAiHhMKPyeXBVEVUUXwQB2Q4KBPyPYgLACyLhAqPyeds8cPhkBPpAMCTy4GQhCNMA0wDTAPpAMFALxwXy4GRxF7BEMNs8yHQhAc8LA3ASzwsBydABzhLOcPoCGfQAcPoCcPoCcM8LYcmBAKP7AIALWVUTVRZfBgHZ4QLACiLh2zxw+GTy0GUwBtMA0wDTAPpAMHENDA0LAR5KENs8elVAVRZVGV8JAdkMAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        code: "te6ccgECDAEAAeEAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAYEAQ7/MNDbPPIpBQAY0wEwwALtQAHysO1QAuLfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI69MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4W0H0x+dW6PyeXBVEVUUXwQB2SLBCyYh4SfHAiHhMKPyeXBVEVUUXwQB2QsHBPyPYgLACyLhAqPyeds8cPhkBPpAMCTy4GQhCNMA0wDTAPpAMFALxwXy4GRxF7BEMNs8yHQhAc8LA3ASzwsBydABzhLOcPoCGfQAcPoCcPoCcM8LYcmBAKP7AIALWVUTVRZfBgHZ4QLACiLh2zxw+GTy0GUwBtMA0wDTAPpAMHEKCQoIAR5KENs8elVAVRZVGV8JAdkJAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
        codeHash: "f5d205ce22e13d69e95baaa5ff056744ab175635dc2a17ec20a4bc8bcbc984d2",
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

