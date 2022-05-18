import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class GlobalConfigAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        keep_evers: string | number | bigint;
        wrappers_cfg: string;
        flex: string;
        user_cfg: string;
        description: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        keep_evers: string | number | bigint;
        wrappers_cfg: string;
        flex: string;
        user_cfg: string;
        description: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
        };
    }>;
}
//# sourceMappingURL=GlobalConfigAccount.d.ts.map