import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperDeployerTip3SetWrapperCodeInput = {
    code: string;
};
export declare type WrapperDeployerTip3SetExtWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerTip3SetFlexWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerTip3DeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export declare type WrapperDeployerTip3DeployOutput = {
    first: string;
    second: string;
};
export declare type WrapperDeployerTip3GetArgsInput = {
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export declare type WrapperDeployerTip3GetArgsOutput = {
    value0: string;
};
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
    runSetWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeploy(input: WrapperDeployerTip3DeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerTip3DeployOutput;
    }>;
    deploy_(input: WrapperDeployerTip3DeployInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerTip3DeployOutput;
    }>;
    runGetArgs(input: WrapperDeployerTip3GetArgsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerTip3GetArgsOutput;
    }>;
    getArgs(input: WrapperDeployerTip3GetArgsInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerTip3GetArgsOutput;
    }>;
}
//# sourceMappingURL=WrapperDeployerTip3Account.d.ts.map