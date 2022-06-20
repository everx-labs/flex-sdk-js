import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31WalletSupportsInterfaceInput = {
    answerId: number;
    interfaceID: number;
};
export declare type Tip31WalletSupportsInterfaceOutput = {
    value0: boolean;
};
export declare type Tip31WalletDestroyInput = {
    remainingGasTo: string;
};
export declare type Tip31WalletBurnByRootInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31WalletBurnInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31WalletBalanceInput = {
    answerId: number;
};
export declare type Tip31WalletBalanceOutput = {
    value0: string;
};
export declare type Tip31WalletOwnerInput = {
    answerId: number;
};
export declare type Tip31WalletOwnerOutput = {
    value0: string;
};
export declare type Tip31WalletRootInput = {
    answerId: number;
};
export declare type Tip31WalletRootOutput = {
    value0: string;
};
export declare type Tip31WalletWalletCodeInput = {
    answerId: number;
};
export declare type Tip31WalletWalletCodeOutput = {
    value0: string;
};
export declare type Tip31WalletTransferInput = {
    amount: string | number | bigint;
    recipient: string;
    deployWalletValue: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletTransferToWalletInput = {
    amount: string | number | bigint;
    recipientTokenWallet: string;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletAcceptTransferInput = {
    amount: string | number | bigint;
    sender: string;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletAcceptMintInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletSendSurplusGasInput = {
    to: string;
};
export declare class Tip31WalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runSupportsInterface(input: Tip31WalletSupportsInterfaceInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WalletSupportsInterfaceOutput;
    }>;
    supportsInterface(input: Tip31WalletSupportsInterfaceInput): Promise<{
        transaction: Transaction;
        output: Tip31WalletSupportsInterfaceOutput;
    }>;
    runDestroy(input: Tip31WalletDestroyInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    destroy(input: Tip31WalletDestroyInput): Promise<{
        transaction: Transaction;
    }>;
    runBurnByRoot(input: Tip31WalletBurnByRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burnByRoot(input: Tip31WalletBurnByRootInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: Tip31WalletBurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burn(input: Tip31WalletBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runBalance(input: Tip31WalletBalanceInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WalletBalanceOutput;
    }>;
    balance(input: Tip31WalletBalanceInput): Promise<{
        transaction: Transaction;
        output: Tip31WalletBalanceOutput;
    }>;
    runOwner(input: Tip31WalletOwnerInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WalletOwnerOutput;
    }>;
    owner(input: Tip31WalletOwnerInput): Promise<{
        transaction: Transaction;
        output: Tip31WalletOwnerOutput;
    }>;
    runRoot(input: Tip31WalletRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WalletRootOutput;
    }>;
    root(input: Tip31WalletRootInput): Promise<{
        transaction: Transaction;
        output: Tip31WalletRootOutput;
    }>;
    runWalletCode(input: Tip31WalletWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WalletWalletCodeOutput;
    }>;
    walletCode(input: Tip31WalletWalletCodeInput): Promise<{
        transaction: Transaction;
        output: Tip31WalletWalletCodeOutput;
    }>;
    runTransfer(input: Tip31WalletTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transfer(input: Tip31WalletTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferToWallet(input: Tip31WalletTransferToWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferToWallet(input: Tip31WalletTransferToWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: Tip31WalletAcceptTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptTransfer(input: Tip31WalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptMint(input: Tip31WalletAcceptMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptMint(input: Tip31WalletAcceptMintInput): Promise<{
        transaction: Transaction;
    }>;
    runSendSurplusGas(input: Tip31WalletSendSurplusGasInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    sendSurplusGas(input: Tip31WalletSendSurplusGasInput): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=Tip31WalletAccount.d.ts.map