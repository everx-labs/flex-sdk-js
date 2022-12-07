import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type WICOnDeployInput = {
    keep_evers: string | number | bigint;
    old_wrappers_cfg?: string;
    old_wrapper?: string;
    keep_wrapper: boolean;
    deployer: string;
    type: number;
    init_args: string;
};
export type WICSetNextInput = {
    old_wrappers_cfg?: string;
    next_symbol?: string;
    next: string;
};
export type WICCloneUpgradeInput = {
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
export type WICGetDetailsOutput = {
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
    runOnDeploy(input: WICOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: WICOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runSetNext(input: WICSetNextInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setNext(input: WICSetNextInput): Promise<RunLocalHelperResult<void>>;
    runCloneUpgrade(input: WICCloneUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cloneUpgrade(input: WICCloneUpgradeInput): Promise<RunLocalHelperResult<void>>;
    runUnlist(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlist(): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WICGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<WICGetDetailsOutput>>;
}
//# sourceMappingURL=WICAccount.d.ts.map