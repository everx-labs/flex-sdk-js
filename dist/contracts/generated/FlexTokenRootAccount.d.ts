import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexTokenRootSetWalletCodeInput = {
    _answer_id: number;
    wallet_code: string;
};
export declare type FlexTokenRootSetWalletCodeOutput = {
    value0: boolean;
};
export declare type FlexTokenRootDeployWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type FlexTokenRootDeployWalletOutput = {
    value0: string;
};
export declare type FlexTokenRootDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type FlexTokenRootDeployEmptyWalletOutput = {
    value0: string;
};
export declare type FlexTokenRootGrantInput = {
    _answer_id: number;
    dest: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type FlexTokenRootMintInput = {
    _answer_id: number;
    tokens: string | number | bigint;
};
export declare type FlexTokenRootMintOutput = {
    value0: boolean;
};
export declare type FlexTokenRootRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type FlexTokenRootRequestTotalGrantedOutput = {
    value0: string;
};
export declare type FlexTokenRootGetNameOutput = {
    value0: string;
};
export declare type FlexTokenRootGetSymbolOutput = {
    value0: string;
};
export declare type FlexTokenRootGetDecimalsOutput = {
    value0: number;
};
export declare type FlexTokenRootGetRootKeyOutput = {
    value0: string;
};
export declare type FlexTokenRootGetRootOwnerOutput = {
    value0?: string;
};
export declare type FlexTokenRootGetTotalSupplyOutput = {
    value0: string;
};
export declare type FlexTokenRootGetTotalGrantedOutput = {
    value0: string;
};
export declare type FlexTokenRootHasWalletCodeOutput = {
    value0: boolean;
};
export declare type FlexTokenRootGetWalletCodeOutput = {
    value0: string;
};
export declare type FlexTokenRootGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type FlexTokenRootGetWalletAddressOutput = {
    value0: string;
};
export declare type FlexTokenRootGetWalletCodeHashOutput = {
    value0: string;
};
export declare class FlexTokenRootAccount extends Account {
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
    runSetWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootSetWalletCodeOutput;
    }>;
    setWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootSetWalletCodeOutput;
    }>;
    runDeployWallet(input: FlexTokenRootDeployWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootDeployWalletOutput;
    }>;
    deployWallet(input: FlexTokenRootDeployWalletInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootDeployWalletOutput;
    }>;
    runDeployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootDeployEmptyWalletOutput;
    }>;
    runGrant(input: FlexTokenRootGrantInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    grant(input: FlexTokenRootGrantInput): Promise<{
        transaction: Transaction;
    }>;
    runMint(input: FlexTokenRootMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootMintOutput;
    }>;
    mint(input: FlexTokenRootMintInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootMintOutput;
    }>;
    runRequestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootRequestTotalGrantedOutput;
    }>;
    runGetName(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetNameOutput;
    }>;
    getName(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetNameOutput;
    }>;
    runGetSymbol(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetSymbolOutput;
    }>;
    getSymbol(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetSymbolOutput;
    }>;
    runGetDecimals(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetDecimalsOutput;
    }>;
    getDecimals(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetDecimalsOutput;
    }>;
    runGetRootKey(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetRootKeyOutput;
    }>;
    getRootKey(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetRootKeyOutput;
    }>;
    runGetRootOwner(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetRootOwnerOutput;
    }>;
    getRootOwner(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetRootOwnerOutput;
    }>;
    runGetTotalSupply(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetTotalSupplyOutput;
    }>;
    getTotalSupply(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetTotalSupplyOutput;
    }>;
    runGetTotalGranted(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetTotalGrantedOutput;
    }>;
    getTotalGranted(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetTotalGrantedOutput;
    }>;
    runHasWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootHasWalletCodeOutput;
    }>;
    hasWalletCode(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootHasWalletCodeOutput;
    }>;
    runGetWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetWalletCodeOutput;
    }>;
    getWalletCode(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetWalletCodeOutput;
    }>;
    runGetWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetWalletAddressOutput;
    }>;
    getWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetWalletAddressOutput;
    }>;
    runGetWalletCodeHash(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexTokenRootGetWalletCodeHashOutput;
    }>;
    getWalletCodeHash(): Promise<{
        transaction: Transaction;
        output: FlexTokenRootGetWalletCodeHashOutput;
    }>;
}
//# sourceMappingURL=FlexTokenRootAccount.d.ts.map