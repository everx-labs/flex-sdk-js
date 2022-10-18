
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
export type FlexClientStubOnDeployInput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* tuple */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
    signature: string /* bytes */,
};


export class FlexClientStubAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"},{"name":"signature","type":"bytes"}],"outputs":[],"id":"0xa"},{"name":"unused","inputs":[],"outputs":[],"id":"0xb"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECEQEABA0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAEKCIn+Rw8sBnAgEgCAcABv/yKQHW3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOuTAj1w0fb6NwISVwcFUIVQZVEgFVA1UZAVUJVSdVCuFwE+MEItdJ8rCTcCbZIQHhghCAAAAAsALTHyBZAVUB4STHAiHhcCJwXzBVE9kJA7CPR4IQgAAAABKy2zyAIFYQLlUB9A9vofK70NMfgBVh0wDTANMA+kAw0wEF0gfT/9X6QNFbIsEDmFvAA/LQY/I04QLAAvK0BdMAJAHgbZdwVTBfBCbZI8ELEA8KBP6PUQPACyNwcFUR4ds8gCBT7VUB9A9voS+kghB/////sFUP4wQg+GRxE7AEVQ5VAlUOVQ5VDlUOVQ5VDlUOVQ5VDlUOVQtVDVUO2zyAC1VAXwUm2eEDwAojcHBVFlUSAVUDVQVVCFUHVQdVCOHTH9Mf0x/4KtDXSgH6QNP/2zwCEA4QCwGCD9Rw+GSAE2HAAwHU1NQwA/LgZSdu8uBm+CjTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkMAf4wBNAE0gfT/zBVBFYR+RCObshwIQHPCwCAFGEByz+AE2EByx+AEmEB9ABxEs8LAIAUYQHOJvsEgBNhAcv/AYARYc8L/wbQ1NQw0O0egBVhVQfLHwHtUwLJgBNhVQLLH4ASYQHLHx3LHxvLHxnLHxP0APQAGMzJghCIn+Rw7UPYDQHk4Mh0IQHPCwNwEs8LAcnQAc6AGmHTANMA0wD6QDBQBM5w+gJxG7CAHWFVCvQAcPoCcPoCcM8LYcmBAKP7AIAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAWYYAWYVUN2zx6VdBfDibZDgDO7UDIcCEBzwsAcRSwgBFhJMs/gBFhAcsfVQ8B9AABow/PC/8dyx8byx8Zyx8Xyx8Vyx8Tyx/0APQAnTADyVADzMntVFvtUFsnIeFxF88LAAJQAs4Sy/8kcHBVFAFVBFUSVQVVBlUG2QCojkMw0gcHugbT/zBQAroVsPK7gCCAFWGAE2FVAfRbMAXAC/K6XwQP+GOAIC1VD1UB9A9voS6kghB/////sEEP4wT4ZPgAIiHhAdMEAdcYATAhVQHZAMDtQO1E0NMAAfJ/0z/TH/QE0//TH9Mf0x/TH9Mf0x/0BPQE1ZbRA+1QVQEB0wCOFnBwcFUDVQVbVbSAEWFVHQFVDlUfAdkiAeH6QNP/cVUDVQVbVbSAEWFVHlUeAYARYdk=",
        code: "te6ccgECDgEAA+AAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAEKCIn+Rw8sBnAgEgBQQABv/yKQHW3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOuTAj1w0fb6NwISVwcFUIVQZVEgFVA1UZAVUJVSdVCuFwE+MEItdJ8rCTcCbZIQHhghCAAAAAsALTHyBZAVUB4STHAiHhcCJwXzBVE9kGA7CPR4IQgAAAABKy2zyAIFYQLlUB9A9vofK70NMfgBVh0wDTANMA+kAw0wEF0gfT/9X6QNFbIsEDmFvAA/LQY/I04QLAAvK0BdMAJAHgbZdwVTBfBCbZI8ELDQwHBP6PUQPACyNwcFUR4ds8gCBT7VUB9A9voS+kghB/////sFUP4wQg+GRxE7AEVQ5VAlUOVQ5VDlUOVQ5VDlUOVQ5VDlUOVQtVDVUO2zyAC1VAXwUm2eEDwAojcHBVFlUSAVUDVQVVCFUHVQdVCOHTH9Mf0x/4KtDXSgH6QNP/2zwCDQsNCAGCD9Rw+GSAE2HAAwHU1NQwA/LgZSdu8uBm+CjTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkJAf4wBNAE0gfT/zBVBFYR+RCObshwIQHPCwCAFGEByz+AE2EByx+AEmEB9ABxEs8LAIAUYQHOJvsEgBNhAcv/AYARYc8L/wbQ1NQw0O0egBVhVQfLHwHtUwLJgBNhVQLLH4ASYQHLHx3LHxvLHxnLHxP0APQAGMzJghCIn+Rw7UPYCgHk4Mh0IQHPCwNwEs8LAcnQAc6AGmHTANMA0wD6QDBQBM5w+gJxG7CAHWFVCvQAcPoCcPoCcM8LYcmBAKP7AIAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAVYYAWYYAWYVUN2zx6VdBfDibZCwDO7UDIcCEBzwsAcRSwgBFhJMs/gBFhAcsfVQ8B9AABow/PC/8dyx8byx8Zyx8Xyx8Vyx8Tyx/0APQAnTADyVADzMntVFvtUFsnIeFxF88LAAJQAs4Sy/8kcHBVFAFVBFUSVQVVBlUG2QCojkMw0gcHugbT/zBQAroVsPK7gCCAFWGAE2FVAfRbMAXAC/K6XwQP+GOAIC1VD1UB9A9voS6kghB/////sEEP4wT4ZPgAIiHhAdMEAdcYATAhVQHZAMDtQO1E0NMAAfJ/0z/TH/QE0//TH9Mf0x/TH9Mf0x/0BPQE1ZbRA+1QVQEB0wCOFnBwcFUDVQVbVbSAEWFVHQFVDlUfAdkiAeH6QNP/cVUDVQVbVbSAEWFVHlUeAYARYdk=",
        codeHash: "b74020356d8a4d104c2a64d2dad265e63e6b3684846cd650498b3422a0bd4181",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexClientStubAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: FlexClientStubOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: FlexClientStubOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runUnused(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unused", {}, options);
    }

    async unused(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unused", {});
    }

}

