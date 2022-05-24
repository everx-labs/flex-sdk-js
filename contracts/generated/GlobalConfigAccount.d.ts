import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type GlobalConfigOnDeployInput = {
    keep_evers: string | number | bigint;
    wrappers_cfg: string;
    flex: string;
    user_cfg: string;
    description: string;
};
export declare type GlobalConfigGetDetailsOutput = {
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
export declare type GlobalConfigGetConfigOutput = {
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
    runOnDeploy(input: GlobalConfigOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(input: GlobalConfigOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: GlobalConfigGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: GlobalConfigGetDetailsOutput;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: GlobalConfigGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: GlobalConfigGetConfigOutput;
    }>;
}
//# sourceMappingURL=GlobalConfigAccount.d.ts.map