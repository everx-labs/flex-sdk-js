
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"reLendPubkey","inputs":[{"name":"new_lend_pubkey","type":"uint256"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0xb"},{"name":"remove","inputs":[],"outputs":[],"id":"0xc"},{"name":"requestLendPubkey","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"evers_balance","type":"uint128"}],"outputs":[{"name":"value0","type":"uint256"}],"id":"0xd"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"setRefillWallet","inputs":[{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"getConfig","inputs":[],"outputs":[{"name":"owner","type":"address"},{"name":"auth_index_code","type":"cell"}],"id":"0x10"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"workchain_id_","type":"int8"},{"name":"user_id_","type":"uint256"},{"name":"lend_pubkey_","type":"uint256"},{"name":"name_","type":"optional(string)"},{"name":"refill_wallet_","type":"uint128"},{"name":"min_refill_","type":"uint128"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "42e9cec6429926360bf111988ebe1539141534c27b3d4f9e023e0ab06d4cc408",
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

    async runOnDeploy(input: UserIdIndexOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: UserIdIndexOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runReLendPubkey(input: UserIdIndexReLendPubkeyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "reLendPubkey", input, options);
    }

    async reLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "reLendPubkey", input);
    }

    async runRemove(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "remove", {}, options);
    }

    async remove(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "remove", {});
    }

    async runRequestLendPubkey(input: UserIdIndexRequestLendPubkeyInput, options?: RunHelperOptions): Promise<RunHelperResult<UserIdIndexRequestLendPubkeyOutput>> {
        return await runHelper(this, "requestLendPubkey", input, options);
    }

    async requestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<RunLocalHelperResult<UserIdIndexRequestLendPubkeyOutput>> {
        return await runLocalHelper(this, "requestLendPubkey", input);
    }

    async runTransfer(input: UserIdIndexTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: UserIdIndexTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runSetRefillWallet(input: UserIdIndexSetRefillWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setRefillWallet", input, options);
    }

    async setRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setRefillWallet", input);
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<UserIdIndexGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<UserIdIndexGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

