import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WICOnDeployInput = {
    keep_evers: string | number | bigint;
    old_wrappers_cfg?: string;
    old_wrapper?: string;
    keep_wrapper: boolean;
    deployer: string;
    type: number;
    init_args: string;
};
export declare type WICSetNextInput = {
    old_wrappers_cfg?: string;
    next_symbol?: string;
    next: string;
};
export declare type WICCloneUpgradeInput = {
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    first_clone?: string;
    last_clone?: string;
    prev_symbol?: string;
    wic_count: number;
    token_version: number;
    new_wrappers_cfg: string;
    wrapper_deployers: string[];
};
export declare type WICGetDetailsOutput = {
    symbol: string;
    workchain_id: number;
    deployer?: string;
    wrapper?: string;
    type?: number;
    init_args?: string;
    next?: string;
    unlisted: boolean;
};
export declare class WICAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: WICOnDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onDeploy(input: WICOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runSetNext(input: WICSetNextInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setNext(input: WICSetNextInput): Promise<{
        transaction: Transaction;
    }>;
    runCloneUpgrade(input: WICCloneUpgradeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    cloneUpgrade(input: WICCloneUpgradeInput): Promise<{
        transaction: Transaction;
    }>;
    runUnlist(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unlist(): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WICGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WICGetDetailsOutput;
    }>;
}
//# sourceMappingURL=WICAccount.d.ts.map