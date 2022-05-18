import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperEverCode(input: {
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetWrapperEverCode(input: {
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
}
//# sourceMappingURL=WrapperDeployerEverAccount.d.ts.map