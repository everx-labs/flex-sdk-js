import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class WrapperDeployerTip3Account extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        ext_wallet_value: string | number | bigint;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetWrapperCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetExtWalletCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetExtWalletCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetFlexWalletCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetFlexWalletCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeploy(input: {
        _answer_id: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeploy(input: {
        _answer_id: number;
        init_args: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetArgs(input: {
        tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetArgs(input: {
        tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=WrapperDeployerTip3Account.d.ts.map