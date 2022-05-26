
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
        codeHash: "734e5861704f088f7c5fa66adac8612eeda42ec8e8c4ff04ab5b2755fa0a4879",
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

