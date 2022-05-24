
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
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
        codeHash: "f35fcd1b1007995ab949fff2909dd75b1d59f1e76e948e52b5a802710f31793b",
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

