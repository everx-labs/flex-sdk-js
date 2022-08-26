
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
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"optional(tuple)"},{"name":"old_token_version","type":"optional(uint32)"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"onWICsCloned","inputs":[{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"wic","type":"address"}],"outputs":[]},{"name":"cloneUpgrade","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"name":"token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"},{"name":"first_wic","type":"optional(address)"},{"name":"last_wic","type":"optional(address)"},{"name":"wic_count","type":"uint32"},{"name":"salted_wic_hash","type":"uint256"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"name":"wic_code","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"token_version_","type":"uint32"},{"name":"deployed_","type":"bool"},{"name":"keep_evers_","type":"uint128"},{"name":"workchain_id_","type":"int8"},{"name":"wrapper_deployers_","type":"address[]"},{"name":"first_wic_","type":"optional(address)"},{"name":"last_wic_","type":"optional(address)"},{"name":"wic_count_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "3f62ab33b9ef9ea20ccb42586670cb9dfa8ba17502302acc43db6c79fa44092a",
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

    async runOnDeploy(input: WrappersConfigOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: WrappersConfigOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runOnWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onWICsCloned", input);
    }

    async onWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onWICsCloned", input);
    }

    async runAddWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "addWrapperType", input);
    }

    async addWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: WrappersConfigAddWrapperInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "addWrapper", input);
    }

    async addWrapper(input: WrappersConfigAddWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runUnlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unlistWrapper", input);
    }

    async unlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runCloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrappersConfigCloneUpgradeOutput,
    }> {
        return await runHelper(this, "cloneUpgrade", input);
    }

    async cloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<{
        transaction: Transaction,
        output: WrappersConfigCloneUpgradeOutput,
    }> {
        return await runLocalHelper(this, "cloneUpgrade", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrappersConfigGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrappersConfigGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrappersConfigGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: WrappersConfigGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

