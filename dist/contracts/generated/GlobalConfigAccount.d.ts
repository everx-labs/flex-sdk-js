import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type GlobalConfigOnDeployInput = {
    keep_evers: string | number | bigint;
    wrappers_cfg: string;
    flex: string;
    user_cfg: string;
    description: string;
};
export type GlobalConfigGetDetailsOutput = {
    version: {
        wallet: number;
        exchange: number;
        user: number;
    };
    wrappers_cfg: string;
    flex: string;
    user_cfg: string;
    description: string;
};
export type GlobalConfigGetConfigOutput = {
    super_root: string;
};
export declare class GlobalConfigAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: GlobalConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: GlobalConfigOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<GlobalConfigGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<GlobalConfigGetDetailsOutput>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<GlobalConfigGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<GlobalConfigGetConfigOutput>>;
}
//# sourceMappingURL=GlobalConfigAccount.d.ts.map