import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31FactoryBuilderSetRootCodeInput = {
    rootCode: string;
};
export declare type Tip31FactoryBuilderSetWalletCodeInput = {
    walletCode: string;
};
export declare type Tip31FactoryBuilderDeployTokenFactoryInput = {
    factoryCode: string;
    nonce: string | number | bigint;
    owner: string;
    factoryDeployValue: string | number | bigint;
    rootDeployValue: string | number | bigint;
};
export declare type Tip31FactoryBuilderDeployTokenFactoryOutput = {
    value0: string;
};
export declare type Tip31FactoryBuilder_rootCodeOutput = {
    _rootCode: string;
};
export declare type Tip31FactoryBuilder_walletCodeOutput = {
    _walletCode: string;
};
export declare class Tip31FactoryBuilderAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runSetRootCode(input: Tip31FactoryBuilderSetRootCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setRootCode(input: Tip31FactoryBuilderSetRootCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31FactoryBuilderDeployTokenFactoryOutput;
    }>;
    deployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput): Promise<{
        transaction: Transaction;
        output: Tip31FactoryBuilderDeployTokenFactoryOutput;
    }>;
    run_rootCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31FactoryBuilder_rootCodeOutput;
    }>;
    _rootCode(): Promise<{
        transaction: Transaction;
        output: Tip31FactoryBuilder_rootCodeOutput;
    }>;
    run_walletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31FactoryBuilder_walletCodeOutput;
    }>;
    _walletCode(): Promise<{
        transaction: Transaction;
        output: Tip31FactoryBuilder_walletCodeOutput;
    }>;
}
//# sourceMappingURL=Tip31FactoryBuilderAccount.d.ts.map