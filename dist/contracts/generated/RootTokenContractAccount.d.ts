import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type RootTokenContractSetWalletCodeInput = {
    _answer_id: number;
    wallet_code: string;
};
export declare type RootTokenContractSetWalletCodeOutput = {
    value0: boolean;
};
export declare type RootTokenContractDeployWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type RootTokenContractDeployWalletOutput = {
    value0: string;
};
export declare type RootTokenContractDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type RootTokenContractDeployEmptyWalletOutput = {
    value0: string;
};
export declare type RootTokenContractGrantInput = {
    _answer_id: number;
    dest: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type RootTokenContractMintInput = {
    _answer_id: number;
    tokens: string | number | bigint;
};
export declare type RootTokenContractMintOutput = {
    value0: boolean;
};
export declare type RootTokenContractRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type RootTokenContractRequestTotalGrantedOutput = {
    value0: string;
};
export declare type RootTokenContractGetNameOutput = {
    value0: string;
};
export declare type RootTokenContractGetSymbolOutput = {
    value0: string;
};
export declare type RootTokenContractGetDecimalsOutput = {
    value0: number;
};
export declare type RootTokenContractGetRootKeyOutput = {
    value0: string;
};
export declare type RootTokenContractGetRootOwnerOutput = {
    value0?: string;
};
export declare type RootTokenContractGetTotalSupplyOutput = {
    value0: string;
};
export declare type RootTokenContractGetTotalGrantedOutput = {
    value0: string;
};
export declare type RootTokenContractHasWalletCodeOutput = {
    value0: boolean;
};
export declare type RootTokenContractGetWalletCodeOutput = {
    value0: string;
};
export declare type RootTokenContractGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type RootTokenContractGetWalletAddressOutput = {
    value0: string;
};
export declare type RootTokenContractGetWalletCodeHashOutput = {
    value0: string;
};
export declare class RootTokenContractAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_owner?: string;
        total_supply: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractSetWalletCodeOutput;
    }>;
    setWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractSetWalletCodeOutput;
    }>;
    runDeployWallet(input: RootTokenContractDeployWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractDeployWalletOutput;
    }>;
    deployWallet(input: RootTokenContractDeployWalletInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractDeployWalletOutput;
    }>;
    runDeployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractDeployEmptyWalletOutput;
    }>;
    runGrant(input: RootTokenContractGrantInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    grant(input: RootTokenContractGrantInput): Promise<{
        transaction: Transaction;
    }>;
    runMint(input: RootTokenContractMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractMintOutput;
    }>;
    mint(input: RootTokenContractMintInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractMintOutput;
    }>;
    runRequestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractRequestTotalGrantedOutput;
    }>;
    runGetName(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetNameOutput;
    }>;
    getName(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetNameOutput;
    }>;
    runGetSymbol(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetSymbolOutput;
    }>;
    getSymbol(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetSymbolOutput;
    }>;
    runGetDecimals(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetDecimalsOutput;
    }>;
    getDecimals(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetDecimalsOutput;
    }>;
    runGetRootKey(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetRootKeyOutput;
    }>;
    getRootKey(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetRootKeyOutput;
    }>;
    runGetRootOwner(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetRootOwnerOutput;
    }>;
    getRootOwner(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetRootOwnerOutput;
    }>;
    runGetTotalSupply(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetTotalSupplyOutput;
    }>;
    getTotalSupply(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetTotalSupplyOutput;
    }>;
    runGetTotalGranted(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetTotalGrantedOutput;
    }>;
    getTotalGranted(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetTotalGrantedOutput;
    }>;
    runHasWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractHasWalletCodeOutput;
    }>;
    hasWalletCode(): Promise<{
        transaction: Transaction;
        output: RootTokenContractHasWalletCodeOutput;
    }>;
    runGetWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetWalletCodeOutput;
    }>;
    getWalletCode(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetWalletCodeOutput;
    }>;
    runGetWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetWalletAddressOutput;
    }>;
    getWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetWalletAddressOutput;
    }>;
    runGetWalletCodeHash(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: RootTokenContractGetWalletCodeHashOutput;
    }>;
    getWalletCodeHash(): Promise<{
        transaction: Transaction;
        output: RootTokenContractGetWalletCodeHashOutput;
    }>;
}
//# sourceMappingURL=RootTokenContractAccount.d.ts.map