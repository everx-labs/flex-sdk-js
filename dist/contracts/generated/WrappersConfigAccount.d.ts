import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrappersConfigOnDeployInput = {
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
export declare type WrappersConfigOnWICsClonedInput = {
    first_wic?: string;
    last_wic?: string;
    wic_count: number;
};
export declare type WrappersConfigAddWrapperTypeInput = {
    keep_evers: string | number | bigint;
    type: number;
    wrapper_deployer: string;
};
export declare type WrappersConfigAddWrapperInput = {
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
export declare type WrappersConfigUnlistWrapperInput = {
    wic: string;
};
export declare type WrappersConfigCloneUpgradeInput = {
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
export declare type WrappersConfigCloneUpgradeOutput = {
    value0: string;
};
export declare type WrappersConfigGetDetailsOutput = {
    token_version: number;
    wrapper_deployers: string[];
    first_wic?: string;
    last_wic?: string;
    wic_count: number;
    salted_wic_hash: string;
};
export declare type WrappersConfigGetConfigOutput = {
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
    runOnDeploy(input: WrappersConfigOnDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onDeploy(input: WrappersConfigOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runOnWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onWICsCloned(input: WrappersConfigOnWICsClonedInput): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    addWrapperType(input: WrappersConfigAddWrapperTypeInput): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapper(input: WrappersConfigAddWrapperInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    addWrapper(input: WrappersConfigAddWrapperInput): Promise<{
        transaction: Transaction;
    }>;
    runUnlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unlistWrapper(input: WrappersConfigUnlistWrapperInput): Promise<{
        transaction: Transaction;
    }>;
    runCloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrappersConfigCloneUpgradeOutput;
    }>;
    cloneUpgrade(input: WrappersConfigCloneUpgradeInput): Promise<{
        transaction: Transaction;
        output: WrappersConfigCloneUpgradeOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrappersConfigGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WrappersConfigGetDetailsOutput;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrappersConfigGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: WrappersConfigGetConfigOutput;
    }>;
}
//# sourceMappingURL=WrappersConfigAccount.d.ts.map