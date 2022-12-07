import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type WrappersConfigOnDeployInput = {
    keep_evers: string | number | bigint;
    evers?: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    old_token_version?: number;
    wrapper_deployers: string[];
    first_wic?: string;
    last_wic?: string;
    wic_count: number;
};
export type WrappersConfigOnWICsClonedInput = {
    first_wic?: string;
    last_wic?: string;
    wic_count: number;
};
export type WrappersConfigAddWrapperTypeInput = {
    keep_evers: string | number | bigint;
    type: number;
    wrapper_deployer: string;
};
export type WrappersConfigAddWrapperInput = {
    keep_evers: string | number | bigint;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    symbol: string;
    type: number;
    init_args: string;
};
export type WrappersConfigUnlistWrapperInput = {
    wic: string;
};
export type WrappersConfigCloneUpgradeInput = {
    _answer_id: number;
    answer_addr?: string;
    keep_evers: string | number | bigint;
    clone_deploy_evers: string | number | bigint;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    new_token_version: number;
    wrapper_deployers: string[];
};
export type WrappersConfigCloneUpgradeOutput = {
    value0: string;
};
export type WrappersConfigGetDetailsOutput = {
    token_version: number;
    wrapper_deployers: string[];
    first_wic?: string;
    last_wic?: string;
    wic_count: number;
    salted_wic_hash: string;
};
export type WrappersConfigGetConfigOutput = {
    super_root: string;
    wic_code: string;
};
export declare class WrappersConfigAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: WrappersConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: WrappersConfigOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runOnWICsCloned(input: WrappersConfigOnWICsClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<RunLocalHelperResult<void>>;
    runAddWrapperType(input: WrappersConfigAddWrapperTypeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    addWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<RunLocalHelperResult<void>>;
    runAddWrapper(input: WrappersConfigAddWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    addWrapper(input: WrappersConfigAddWrapperInput): Promise<RunLocalHelperResult<void>>;
    runUnlistWrapper(input: WrappersConfigUnlistWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<RunLocalHelperResult<void>>;
    runCloneUpgrade(input: WrappersConfigCloneUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigCloneUpgradeOutput>>;
    cloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<RunLocalHelperResult<WrappersConfigCloneUpgradeOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<WrappersConfigGetDetailsOutput>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<WrappersConfigGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<WrappersConfigGetConfigOutput>>;
}
//# sourceMappingURL=WrappersConfigAccount.d.ts.map