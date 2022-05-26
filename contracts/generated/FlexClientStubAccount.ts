
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
};


export class FlexClientStubAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"unused","inputs":[],"outputs":[],"id":"0xb"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECEwEAA1AAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAEKAAAAAB8sBnAgEgCAcABv/yKQFk3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOgCBZAVUB4STHAiHhcCJwXzBVE9kJBP4wI9cNH2+jcCElcHBVCFUGVRIBVQNVGQFVCVUnVQrhcBPjBCLXSfKwk3Am2SEB4YIQgAAAALAC0x+OgCQB4JVwATAm2SLBC46A4QLACiLh7UTQ0wAB8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATV0wCOgCIh4QH6QNP/WVshEA0LCgAGVQHZAfwwD9Mf0x+AEWHR0x/6QNP/+CrQ10pw+GTAAwHU1NQwA/LgZQtu8uBmyHAhAc8LAIAWYQHLP4AVYQHLH4AUYQH0AHESzwsAFc4h+wQTy/+AEWFVA8v/A9DU1DDQ7R5QdMsfA+1TyVBCyx8Syx8ayx8Yyx8Wyx8U9AAV9AAVzMkMAATwAQGCAsALIuHtRNDTAAHyf9M/0x/0BNP/0x/TH9Mf0x/TH9Mf9AT0BNWOgAHTAJtwcHElVSFeEFUS2SIB4fpA0/9wJdkOAfwB0YAgVhFWEVUB9A9voVYSpIIQf////7CAE2HjBCD4ZMhwIQHPCwAEo4AUYSXLPxPLH4ATYQH0AIASYQHL/4ARYQHLH1UPAcsfH8sfHcsfG8sfGcsfF/QAFfQAjhEwBslQBszJ7VSAC1WAXwkm2Skh4HEbzwsAFc4Vy/8ocHAPACJVJ1UlXhBVCVUWVQlVClUK2QF2ghCAAAAAErLtRNDTAAHyf9M/0x/0BNP/0x/TH9Mf0x/TH9Mf9AT0BNXTAI6AIiHhAfpA0/9ZWyFVAdkRAXww0YAgU/xVAfQPb6Hyu9DTH4AUYdMA0wDTAPpAMNMBBdIH0//V+kDRWyLBA5hbwAPy0GPyNOECwALytAXTABIApI5BMNIHB7oG0/8wUAK6FbDyu4AggBRhgBJhVQH0WzAFwAvyul8EDvhjgCBUTP/0D2+hLKSCEH////+wQQ3jBPhk+AAiIeEB0wQB1xgBMCFVAdk=",
        code: "te6ccgECEAEAAyMAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAEKAAAAAB8sBnAgEgBQQABv/yKQFk3wHQ0wAB8nAg1gHTADDyd5ntQO1QCV8J2zAjxwGOgCBZAVUB4STHAiHhcCJwXzBVE9kGBP4wI9cNH2+jcCElcHBVCFUGVRIBVQNVGQFVCVUnVQrhcBPjBCLXSfKwk3Am2SEB4YIQgAAAALAC0x+OgCQB4JVwATAm2SLBC46A4QLACiLh7UTQ0wAB8n/TP9Mf9ATT/9Mf0x/TH9Mf0x/TH/QE9ATV0wCOgCIh4QH6QNP/WVshDQoIBwAGVQHZAfwwD9Mf0x+AEWHR0x/6QNP/+CrQ10pw+GTAAwHU1NQwA/LgZQtu8uBmyHAhAc8LAIAWYQHLP4AVYQHLH4AUYQH0AHESzwsAFc4h+wQTy/+AEWFVA8v/A9DU1DDQ7R5QdMsfA+1TyVBCyx8Syx8ayx8Yyx8Wyx8U9AAV9AAVzMkJAATwAQGCAsALIuHtRNDTAAHyf9M/0x/0BNP/0x/TH9Mf0x/TH9Mf9AT0BNWOgAHTAJtwcHElVSFeEFUS2SIB4fpA0/9wJdkLAfwB0YAgVhFWEVUB9A9voVYSpIIQf////7CAE2HjBCD4ZMhwIQHPCwAEo4AUYSXLPxPLH4ATYQH0AIASYQHL/4ARYQHLH1UPAcsfH8sfHcsfG8sfGcsfF/QAFfQAjhEwBslQBszJ7VSAC1WAXwkm2Skh4HEbzwsAFc4Vy/8ocHAMACJVJ1UlXhBVCVUWVQlVClUK2QF2ghCAAAAAErLtRNDTAAHyf9M/0x/0BNP/0x/TH9Mf0x/TH9Mf9AT0BNXTAI6AIiHhAfpA0/9ZWyFVAdkOAXww0YAgU/xVAfQPb6Hyu9DTH4AUYdMA0wDTAPpAMNMBBdIH0//V+kDRWyLBA5hbwAPy0GPyNOECwALytAXTAA8ApI5BMNIHB7oG0/8wUAK6FbDyu4AggBRhgBJhVQH0WzAFwAvyul8EDvhjgCBUTP/0D2+hLKSCEH////+wQQ3jBPhk+AAiIeEB0wQB1xgBMCFVAdk=",
        codeHash: "3a929b8afb8b282e55dc8dd18761307909709ff14dba1316df8835982bff78d0",
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

    async runOnDeploy(input: FlexClientStubOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: FlexClientStubOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runUnused(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unused", {});
    }

    async unused(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unused", {});
    }

}

