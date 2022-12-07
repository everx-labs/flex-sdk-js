import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export type WrapperDeployerTip31SetWrapperCodeInput = {
    code: string;
};
export type WrapperDeployerTip31SetFlexWalletCodeInput = {
    code: string;
};
export type WrapperDeployerTip31DeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export type WrapperDeployerTip31DeployOutput = {
    first: string;
    second: string;
};
export type WrapperDeployerTip31GetArgsInput = {
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export type WrapperDeployerTip31GetArgsOutput = {
    value0: string;
};
export declare class WrapperDeployerTip31Account extends Account {
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
        out_deploy_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperCode(input: WrapperDeployerTip31SetWrapperCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setWrapperCode(input: WrapperDeployerTip31SetWrapperCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetFlexWalletCode(input: WrapperDeployerTip31SetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setFlexWalletCode(input: WrapperDeployerTip31SetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeploy(input: WrapperDeployerTip31DeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerTip31DeployOutput;
    }>;
    deploy_(input: WrapperDeployerTip31DeployInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerTip31DeployOutput;
    }>;
    runGetArgs(input: WrapperDeployerTip31GetArgsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerTip31GetArgsOutput;
    }>;
    getArgs(input: WrapperDeployerTip31GetArgsInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerTip31GetArgsOutput;
    }>;
}
//# sourceMappingURL=WrapperDeployerTip31Account.d.ts.map