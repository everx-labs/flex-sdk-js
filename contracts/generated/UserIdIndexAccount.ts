
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
        tvc: "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",
        code: "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",
        codeHash: "dfaaa38ac2ea3b748e14e456fe59a7b3a474bfc2efd89b3de6be3ecac703b5a9",
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

