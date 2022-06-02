import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperDeployerBroxusSetWrapperCodeInput = {
    code: string;
};
export declare type WrapperDeployerBroxusSetFlexWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerBroxusDeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export declare type WrapperDeployerBroxusDeployOutput = {
    first: string;
    second: string;
};
export declare type WrapperDeployerBroxusGetArgsInput = {
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export declare type WrapperDeployerBroxusGetArgsOutput = {
    value0: string;
};
export declare class WrapperDeployerBroxusAccount extends Account {
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
    runSetWrapperCode(input: WrapperDeployerBroxusSetWrapperCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setWrapperCode(input: WrapperDeployerBroxusSetWrapperCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetFlexWalletCode(input: WrapperDeployerBroxusSetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setFlexWalletCode(input: WrapperDeployerBroxusSetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeploy(input: WrapperDeployerBroxusDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerBroxusDeployOutput;
    }>;
    deploy_(input: WrapperDeployerBroxusDeployInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerBroxusDeployOutput;
    }>;
    runGetArgs(input: WrapperDeployerBroxusGetArgsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerBroxusGetArgsOutput;
    }>;
    getArgs(input: WrapperDeployerBroxusGetArgsInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerBroxusGetArgsOutput;
    }>;
}
//# sourceMappingURL=WrapperDeployerBroxusAccount.d.ts.map