
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
export type UserIdIndexOnDeployInput = {
    lend_pubkey: string | number | bigint /* uint256 */,
    name: string /* string */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
    refill_wallet: string | number | bigint /* uint128 */,
    min_refill: string | number | bigint /* uint128 */,
};

export type UserIdIndexReLendPubkeyInput = {
    new_lend_pubkey: string | number | bigint /* uint256 */,
    evers_to_remove: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
};

export type UserIdIndexRequestLendPubkeyInput = {
    _answer_id: number /* uint32 */,
    evers_balance: string | number | bigint /* uint128 */,
};

export type UserIdIndexRequestLendPubkeyOutput = {
    value0: string /* uint256 */,
};

export type UserIdIndexTransferInput = {
    dest: string /* address */,
    value: string | number | bigint /* uint128 */,
    bounce: boolean /* bool */,
};

export type UserIdIndexSetRefillWalletInput = {
    refill_wallet: string | number | bigint /* uint128 */,
    min_refill: string | number | bigint /* uint128 */,
};

export type UserIdIndexGetConfigOutput = {
    owner: string /* address */,
    auth_index_code: string /* cell */,
};


export class UserIdIndexAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"reLendPubkey","inputs":[{"name":"new_lend_pubkey","type":"uint256"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0xb"},{"name":"remove","inputs":[],"outputs":[],"id":"0xc"},{"name":"requestLendPubkey","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"evers_balance","type":"uint128"}],"outputs":[{"name":"value0","type":"uint256"}],"id":"0xd"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"setRefillWallet","inputs":[{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"getConfig","inputs":[],"outputs":[{"name":"owner","type":"address"},{"name":"auth_index_code","type":"cell"}],"id":"0x10"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"workchain_id_","type":"int8"},{"name":"user_id_","type":"uint256"},{"name":"lend_pubkey_","type":"uint256"},{"name":"name_","type":"optional(string)"},{"name":"refill_wallet_","type":"uint128"},{"name":"min_refill_","type":"uint128"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECGwEABnwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIA0HATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkIAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QkD/m3tQAfDAAPTP9Mf0x+TAe1QIsEPjoDhAsAO8qkG8qgEo/LgRDAI+QFUEJT5EPKo2zxTfr4IwwBQCLDyfPgjgQPoqIIIG3dAoC4BuXAhVQ9VAeMEAfK8cPhkCdX6QNN/0wDRUti68uBk+ADIcSEBzwsBCMMAcbAYzwsAcM8LAHALGgoBfhjPCwHJ0FAHzs5xFLBQNfoCHvQAcPoCcPoCcM8LYclw+wAwVQVVA1UDVQZVA1UEVQpVBts8gA5VEVUkXwUB2RkD4iLBEI6A4QfyqAWj8uBEWwj5AVQQlPkQ8qjbPFtTXL4GwwBQBrDyfPgjgQPoqIIIG3dAoCwBuXBUQe7jBAzyvHD4ZAXV03/Tf9FSlLry4GRxFrD4AFULVQRVBFUIVQdVBFUHVQfbPIAPAVUSVTVfBwHZDBoZAdICwBDyqds8cPhk+CrQINdKwAPy4EXU1NWAG2HQ0wEBwAIC+kDIBPKwcyQBzwsBcCUBzwsBydABzgP6QDBQA86AEHESzwthgBAVzwsfEs4C1DBQAszJUALMyXD7AFWwVX10gBdjgBhlAdkaAV7fAdDTAAHycCDWAdMAMPJ3lu1A7VDbMCPHAY6AIFkBVQHhJMcCIeFwAVUiXwQB2Q4E/jAj1w0fb6OYcFlVI18FAdnhMCTXSfKwl3BVIV8DAdnhbQTTH5hwWVUjXwUB2SLBDI6A4SLBC46A4QLACiLh0//U03/Tf/gq0CDXSts8cPhkWwbAAwjTfzAI8uBFWwTU1NX6QIARYdMA0wDTAPpAMFAFxwUD1DAD8uBmWwfy0GUUERoPAVhfBQb4KNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RACpMhwzwsAcSEBzwsBJgHMcc8LAFEczwv/cM8LAMkBzHDPCwAC0gcwAsn5ACIBVQlVBizbPHD7AHFVB1UCVQVVCFUGVQRVCFUI2zx6VSBVFF8FAdkTGQP+MNP/03/4KtAg10rbPHD4ZAjAAwrTfzAK8uBFCNTU1fpAgBNh0wDTANMA+kAwUgbHBQTUMATy4GTIcM8LAHEhAc8LASUBzHHPCwAMzwv/cM8LAMlQC8xwzwsAcRmwCMn5ACwBgBJhVQXbPHD7AMhwzwsAcSEBzwsBJAHMcc8LABoWEgJ8AVYRzwv/cM8LAMkBzHDPCwDJ+QArAVUPVQRWEds8cPsAXwVVBFUEVQRVB1UEVQRVB1UH2zyAC1lVE18EAdkTGQCkyHEhAc8LAhPMgQDEIwHPCwgWywcUy/96IgHPCx9xFs8LAHATzwsAFMv/cM8LAMkBzHDPCwDJA8lQIvoCbQH0AHD6AnD6AnPPC2ESzHHPCwDMyQT+IsENjoDhXwMC0wDTANMA+CrQINdK2zxw+GQIwAMK+kAwCvLgRQjU1NX6QFLSxwXy4GTIcM8LAHEhAc8LAQLUMFACzHHPCwBRF88L/3DPCwDJAcxwzwsAcRWwBMn5AHApVQFVAVUN2zyBAKD7AF8DVQRVBFUEVQRVBFUEVQZVBhcaFhUBGNs8gAxVMFUFXwUB2RkAWsiBAMQhAc8LCBXLBxPL/4ALFM8LH1Az+gJtAfQAcPoCcPoCcc8LYQLOyQHMyQL+AsANIuEE0wDTANMAB9Mf+CrQINdK2zxw+GQIwAMK038wgBJh+kAwC/LgRQnU1NX6QDAtAccF8uBkyHYhAc8LA3AiAc8LAcnQAc4ezlDtyx9SPKEqtgkc+gJSW8v/cRSwA8mAE2FVCvQAcPoCcPoCcc8LYczJcPsAMFUFVQVVBRoYASxVBVUFVQVVBVUG2zyADVVQVQdfBwHZGQCQ7UDIcM8LABnLPxfKB3ETsJoSy3/Lf8ntVO1QAaNQY8v/FMv/nnDPCwBZWwFVAlUBVQLZIgHhcc8LAAJQAswBMAFVAlUBVQLZAI7tQO1E0NMAAfJ/0z/SB9P/0/+e038E7VAD038wWVUCVQIB0wCfcHBVAjBVM1UHVRRVFgHZIgHh1AFxVQIwVTNVB1UUVRYB2Q==",
        code: "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",
        codeHash: "e448d9263cda7171f5da2e4164e6dc2259d289a7a68ba01c586560c36295620c",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(UserIdIndexAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: UserIdIndexOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: UserIdIndexOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runReLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "reLendPubkey", input);
    }

    async reLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "reLendPubkey", input);
    }

    async runRemove(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "remove", {});
    }

    async remove(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "remove", {});
    }

    async runRequestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserIdIndexRequestLendPubkeyOutput,
    }> {
        return await runHelper(this, "requestLendPubkey", input);
    }

    async requestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<{
        transaction: Transaction,
        output: UserIdIndexRequestLendPubkeyOutput,
    }> {
        return await runLocalHelper(this, "requestLendPubkey", input);
    }

    async runTransfer(input: UserIdIndexTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: UserIdIndexTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runSetRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setRefillWallet", input);
    }

    async setRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setRefillWallet", input);
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserIdIndexGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: UserIdIndexGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

