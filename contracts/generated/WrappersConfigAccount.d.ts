import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class WrappersConfigAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        keep_evers: string | number | bigint;
        evers?: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        old_token_version?: number;
        wrapper_deployers: string;
        first_wic?: string;
        last_wic?: string;
        wic_count: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        keep_evers: string | number | bigint;
        evers?: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        old_token_version?: number;
        wrapper_deployers: string;
        first_wic?: string;
        last_wic?: string;
        wic_count: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runOnWICsCloned(input: {
        first_wic?: string;
        last_wic?: string;
        wic_count: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnWICsCloned(input: {
        first_wic?: string;
        last_wic?: string;
        wic_count: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapperType(input: {
        keep_evers: string | number | bigint;
        type: number;
        wrapper_deployer: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAddWrapperType(input: {
        keep_evers: string | number | bigint;
        type: number;
        wrapper_deployer: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapper(input: {
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        symbol: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAddWrapper(input: {
        keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            wic_keep: string | number | bigint;
        };
        symbol: string;
        type: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnlistWrapper(input: {
        wic: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlistWrapper(input: {
        wic: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runCloneUpgrade(input: {
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
        wrapper_deployers: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalCloneUpgrade(input: {
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
        wrapper_deployers: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            token_version: number;
            wrapper_deployers: string;
            first_wic?: string;
            last_wic?: string;
            wic_count: number;
            salted_wic_hash: string;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            token_version: number;
            wrapper_deployers: string;
            first_wic?: string;
            last_wic?: string;
            wic_count: number;
            salted_wic_hash: string;
        };
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
            wic_code: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
            wic_code: string;
        };
    }>;
}
//# sourceMappingURL=WrappersConfigAccount.d.ts.map