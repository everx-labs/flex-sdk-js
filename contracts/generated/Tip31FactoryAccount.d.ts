import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31FactoryDeployRootInput = {
    answerId: number;
    name: string;
    symbol: string;
    decimals: number;
    owner: string;
    initialSupplyTo: string;
    initialSupply: string | number | bigint;
    deployWalletValue: string | number | bigint;
    mintDisabled: boolean;
    burnByRootDisabled: boolean;
    burnPaused: boolean;
    remainingGasTo: string;
    upgradeable: boolean;
};
export declare type Tip31FactoryDeployRootOutput = {
    value0: string;
};
export declare type Tip31FactoryChangeDeployValueInput = {
    deployValue: string | number | bigint;
};
export declare type Tip31FactoryChangeRootCodeInput = {
    rootCode: string;
};
export declare type Tip31FactoryChangeWalletCodeInput = {
    walletCode: string;
};
export declare type Tip31FactoryChangeRootUpgradeableCodeInput = {
    rootUpgradeableCode: string;
};
export declare type Tip31FactoryChangeWalletUpgradeableCodeInput = {
    walletUpgradeableCode: string;
};
export declare type Tip31FactoryChangePlatformCodeInput = {
    platformCode: string;
};
export declare type Tip31FactoryTransferOwnerInput = {
    owner: string;
};
export declare type Tip31FactoryUpgradeInput = {
    code: string;
};
export declare type Tip31Factory_ownerOutput = {
    _owner: string;
};
export declare type Tip31Factory_pendingOwnerOutput = {
    _pendingOwner: string;
};
export declare type Tip31Factory_tokenNonceOutput = {
    _tokenNonce: string;
};
export declare type Tip31Factory_deployValueOutput = {
    _deployValue: string;
};
export declare type Tip31Factory_rootCodeOutput = {
    _rootCode: string;
};
export declare type Tip31Factory_walletCodeOutput = {
    _walletCode: string;
};
export declare type Tip31Factory_rootUpgradeableCodeOutput = {
    _rootUpgradeableCode: string;
};
export declare type Tip31Factory_walletUpgradeableCodeOutput = {
    _walletUpgradeableCode: string;
};
export declare type Tip31Factory_platformCodeOutput = {
    _platformCode: string;
};
export declare class Tip31FactoryAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owner: string;
        deployValue: string | number | bigint;
        rootCode: string;
        walletCode: string;
        rootUpgradeableCode: string;
        walletUpgradeableCode: string;
        platformCode: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployRoot(input: Tip31FactoryDeployRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31FactoryDeployRootOutput;
    }>;
    deployRoot(input: Tip31FactoryDeployRootInput): Promise<{
        transaction: Transaction;
        output: Tip31FactoryDeployRootOutput;
    }>;
    runChangeDeployValue(input: Tip31FactoryChangeDeployValueInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changeDeployValue(input: Tip31FactoryChangeDeployValueInput): Promise<{
        transaction: Transaction;
    }>;
    runChangeRootCode(input: Tip31FactoryChangeRootCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changeRootCode(input: Tip31FactoryChangeRootCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runChangeWalletCode(input: Tip31FactoryChangeWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changeWalletCode(input: Tip31FactoryChangeWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runChangeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runChangeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runChangePlatformCode(input: Tip31FactoryChangePlatformCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    changePlatformCode(input: Tip31FactoryChangePlatformCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferOwner(input: Tip31FactoryTransferOwnerInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferOwner(input: Tip31FactoryTransferOwnerInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptOwner(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptOwner(): Promise<{
        transaction: Transaction;
    }>;
    runUpgrade(input: Tip31FactoryUpgradeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    upgrade(input: Tip31FactoryUpgradeInput): Promise<{
        transaction: Transaction;
    }>;
    run_owner(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_ownerOutput;
    }>;
    _owner(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_ownerOutput;
    }>;
    run_pendingOwner(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_pendingOwnerOutput;
    }>;
    _pendingOwner(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_pendingOwnerOutput;
    }>;
    run_tokenNonce(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_tokenNonceOutput;
    }>;
    _tokenNonce(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_tokenNonceOutput;
    }>;
    run_deployValue(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_deployValueOutput;
    }>;
    _deployValue(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_deployValueOutput;
    }>;
    run_rootCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_rootCodeOutput;
    }>;
    _rootCode(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_rootCodeOutput;
    }>;
    run_walletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_walletCodeOutput;
    }>;
    _walletCode(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_walletCodeOutput;
    }>;
    run_rootUpgradeableCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_rootUpgradeableCodeOutput;
    }>;
    _rootUpgradeableCode(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_rootUpgradeableCodeOutput;
    }>;
    run_walletUpgradeableCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_walletUpgradeableCodeOutput;
    }>;
    _walletUpgradeableCode(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_walletUpgradeableCodeOutput;
    }>;
    run_platformCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31Factory_platformCodeOutput;
    }>;
    _platformCode(): Promise<{
        transaction: Transaction;
        output: Tip31Factory_platformCodeOutput;
    }>;
}
//# sourceMappingURL=Tip31FactoryAccount.d.ts.map