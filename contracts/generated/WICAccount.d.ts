import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class WICAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        keep_evers: string | number | bigint;
        old_wrappers_cfg?: string;
        keep_wrapper?: string;
        deployer: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        keep_evers: string | number | bigint;
        old_wrappers_cfg?: string;
        keep_wrapper?: string;
        deployer: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetNext(input: {
        old_wrappers_cfg?: string;
        next_symbol?: string;
        next: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetNext(input: {
        old_wrappers_cfg?: string;
        next_symbol?: string;
        next: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runCloneUpgrade(input: {
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
        wrapper_deployers: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCloneUpgrade(input: {
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
        wrapper_deployers: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnlist(): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlist(): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            symbol: string;
            workchain_id: number;
            deployer?: string;
            wrapper?: string;
            type?: number;
            init_args?: string;
            next?: string;
            unlisted: boolean;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            symbol: string;
            workchain_id: number;
            deployer?: string;
            wrapper?: string;
            type?: number;
            init_args?: string;
            next?: string;
            unlisted: boolean;
        };
    }>;
}
//# sourceMappingURL=WICAccount.d.ts.map