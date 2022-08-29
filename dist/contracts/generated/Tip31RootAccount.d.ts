import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31RootSupportsInterfaceInput = {
    answerId: number;
    interfaceID: number;
};
export declare type Tip31RootSupportsInterfaceOutput = {
    value0: boolean;
};
export declare type Tip31RootDisableMintInput = {
    answerId: number;
};
export declare type Tip31RootDisableMintOutput = {
    value0: boolean;
};
export declare type Tip31RootMintDisabledInput = {
    answerId: number;
};
export declare type Tip31RootMintDisabledOutput = {
    value0: boolean;
};
export declare type Tip31RootBurnTokensInput = {
    amount: string | number | bigint;
    walletOwner: string;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31RootDisableBurnByRootInput = {
    answerId: number;
};
export declare type Tip31RootDisableBurnByRootOutput = {
    value0: boolean;
};
export declare type Tip31RootBurnByRootDisabledInput = {
    answerId: number;
};
export declare type Tip31RootBurnByRootDisabledOutput = {
    value0: boolean;
};
export declare type Tip31RootBurnPausedInput = {
    answerId: number;
};
export declare type Tip31RootBurnPausedOutput = {
    value0: boolean;
};
export declare type Tip31RootSetBurnPausedInput = {
    answerId: number;
    paused: boolean;
};
export declare type Tip31RootSetBurnPausedOutput = {
    value0: boolean;
};
export declare type Tip31RootTransferOwnershipInput = {
    newOwner: string;
    remainingGasTo: string;
    callbacks: {
        [key: string]: {
            value: string | number | bigint;
            payload: string;
        };
    };
};
export declare type Tip31RootNameInput = {
    answerId: number;
};
export declare type Tip31RootNameOutput = {
    value0: string;
};
export declare type Tip31RootSymbolInput = {
    answerId: number;
};
export declare type Tip31RootSymbolOutput = {
    value0: string;
};
export declare type Tip31RootDecimalsInput = {
    answerId: number;
};
export declare type Tip31RootDecimalsOutput = {
    value0: number;
};
export declare type Tip31RootTotalSupplyInput = {
    answerId: number;
};
export declare type Tip31RootTotalSupplyOutput = {
    value0: string;
};
export declare type Tip31RootWalletCodeInput = {
    answerId: number;
};
export declare type Tip31RootWalletCodeOutput = {
    value0: string;
};
export declare type Tip31RootRootOwnerInput = {
    answerId: number;
};
export declare type Tip31RootRootOwnerOutput = {
    value0: string;
};
export declare type Tip31RootWalletOfInput = {
    answerId: number;
    walletOwner: string;
};
export declare type Tip31RootWalletOfOutput = {
    value0: string;
};
export declare type Tip31RootDeployWalletInput = {
    answerId: number;
    walletOwner: string;
    deployWalletValue: string | number | bigint;
};
export declare type Tip31RootDeployWalletOutput = {
    tokenWallet: string;
};
export declare type Tip31RootMintInput = {
    amount: string | number | bigint;
    recipient: string;
    deployWalletValue: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31RootAcceptBurnInput = {
    amount: string | number | bigint;
    walletOwner: string;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31RootSendSurplusGasInput = {
    to: string;
};
export declare class Tip31RootAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        initialSupplyTo: string;
        initialSupply: string | number | bigint;
        deployWalletValue: string | number | bigint;
        mintDisabled: boolean;
        burnByRootDisabled: boolean;
        burnPaused: boolean;
        remainingGasTo: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSupportsInterface(input: Tip31RootSupportsInterfaceInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootSupportsInterfaceOutput;
    }>;
    supportsInterface(input: Tip31RootSupportsInterfaceInput): Promise<{
        transaction: Transaction;
        output: Tip31RootSupportsInterfaceOutput;
    }>;
    runDisableMint(input: Tip31RootDisableMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootDisableMintOutput;
    }>;
    disableMint(input: Tip31RootDisableMintInput): Promise<{
        transaction: Transaction;
        output: Tip31RootDisableMintOutput;
    }>;
    runMintDisabled(input: Tip31RootMintDisabledInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootMintDisabledOutput;
    }>;
    mintDisabled(input: Tip31RootMintDisabledInput): Promise<{
        transaction: Transaction;
        output: Tip31RootMintDisabledOutput;
    }>;
    runBurnTokens(input: Tip31RootBurnTokensInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burnTokens(input: Tip31RootBurnTokensInput): Promise<{
        transaction: Transaction;
    }>;
    runDisableBurnByRoot(input: Tip31RootDisableBurnByRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootDisableBurnByRootOutput;
    }>;
    disableBurnByRoot(input: Tip31RootDisableBurnByRootInput): Promise<{
        transaction: Transaction;
        output: Tip31RootDisableBurnByRootOutput;
    }>;
    runBurnByRootDisabled(input: Tip31RootBurnByRootDisabledInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootBurnByRootDisabledOutput;
    }>;
    burnByRootDisabled(input: Tip31RootBurnByRootDisabledInput): Promise<{
        transaction: Transaction;
        output: Tip31RootBurnByRootDisabledOutput;
    }>;
    runBurnPaused(input: Tip31RootBurnPausedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootBurnPausedOutput;
    }>;
    burnPaused(input: Tip31RootBurnPausedInput): Promise<{
        transaction: Transaction;
        output: Tip31RootBurnPausedOutput;
    }>;
    runSetBurnPaused(input: Tip31RootSetBurnPausedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootSetBurnPausedOutput;
    }>;
    setBurnPaused(input: Tip31RootSetBurnPausedInput): Promise<{
        transaction: Transaction;
        output: Tip31RootSetBurnPausedOutput;
    }>;
    runTransferOwnership(input: Tip31RootTransferOwnershipInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferOwnership(input: Tip31RootTransferOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    runName(input: Tip31RootNameInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootNameOutput;
    }>;
    name(input: Tip31RootNameInput): Promise<{
        transaction: Transaction;
        output: Tip31RootNameOutput;
    }>;
    runSymbol(input: Tip31RootSymbolInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootSymbolOutput;
    }>;
    symbol(input: Tip31RootSymbolInput): Promise<{
        transaction: Transaction;
        output: Tip31RootSymbolOutput;
    }>;
    runDecimals(input: Tip31RootDecimalsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootDecimalsOutput;
    }>;
    decimals(input: Tip31RootDecimalsInput): Promise<{
        transaction: Transaction;
        output: Tip31RootDecimalsOutput;
    }>;
    runTotalSupply(input: Tip31RootTotalSupplyInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootTotalSupplyOutput;
    }>;
    totalSupply(input: Tip31RootTotalSupplyInput): Promise<{
        transaction: Transaction;
        output: Tip31RootTotalSupplyOutput;
    }>;
    runWalletCode(input: Tip31RootWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootWalletCodeOutput;
    }>;
    walletCode(input: Tip31RootWalletCodeInput): Promise<{
        transaction: Transaction;
        output: Tip31RootWalletCodeOutput;
    }>;
    runRootOwner(input: Tip31RootRootOwnerInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootRootOwnerOutput;
    }>;
    rootOwner(input: Tip31RootRootOwnerInput): Promise<{
        transaction: Transaction;
        output: Tip31RootRootOwnerOutput;
    }>;
    runWalletOf(input: Tip31RootWalletOfInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootWalletOfOutput;
    }>;
    walletOf(input: Tip31RootWalletOfInput): Promise<{
        transaction: Transaction;
        output: Tip31RootWalletOfOutput;
    }>;
    runDeployWallet(input: Tip31RootDeployWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31RootDeployWalletOutput;
    }>;
    deployWallet(input: Tip31RootDeployWalletInput): Promise<{
        transaction: Transaction;
        output: Tip31RootDeployWalletOutput;
    }>;
    runMint(input: Tip31RootMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    mint(input: Tip31RootMintInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptBurn(input: Tip31RootAcceptBurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptBurn(input: Tip31RootAcceptBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runSendSurplusGas(input: Tip31RootSendSurplusGasInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    sendSurplusGas(input: Tip31RootSendSurplusGasInput): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=Tip31RootAccount.d.ts.map