import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31WrapperInitInput = {
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type Tip31WrapperDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type Tip31WrapperDeployEmptyWalletOutput = {
    value0: string;
};
export declare type Tip31WrapperOnAcceptTokensTransferInput = {
    tokenRoot: string;
    amount: string | number | bigint;
    sender: string;
    senderWallet: string;
    remainingGasTo: string;
    payload: string;
};
export declare type Tip31WrapperBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export declare type Tip31WrapperTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type Tip31WrapperRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type Tip31WrapperRequestTotalGrantedOutput = {
    value0: string;
};
export declare type Tip31WrapperClonedInput = {
    _answer_id: number;
};
export declare type Tip31WrapperClonedOutput = {
    first?: string;
    second: string;
};
export declare type Tip31WrapperSetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export declare type Tip31WrapperGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    total_granted: string;
    wallet_code: string;
    external_wallet?: string;
    reserve_wallet: string;
    super_root: string;
    cloned?: string;
    type_id: number;
};
export declare type Tip31WrapperGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type Tip31WrapperHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type Tip31WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type Tip31WrapperGetWalletAddressOutput = {
    value0: string;
};
export declare type Tip31WrapperGetReserveWalletOutput = {
    value0: string;
};
export declare class Tip31WrapperAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: Tip31WrapperInitInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    init(input: Tip31WrapperInitInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyWallet(input: Tip31WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: Tip31WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: Tip31WrapperDeployEmptyWalletOutput;
    }>;
    runOnAcceptTokensTransfer(input: Tip31WrapperOnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onAcceptTokensTransfer(input: Tip31WrapperOnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: Tip31WrapperBurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burn(input: Tip31WrapperBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: Tip31WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferFromReserveWallet(input: Tip31WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestTotalGranted(input: Tip31WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: Tip31WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: Tip31WrapperRequestTotalGrantedOutput;
    }>;
    runCloned(input: Tip31WrapperClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperClonedOutput;
    }>;
    cloned(input: Tip31WrapperClonedInput): Promise<{
        transaction: Transaction;
        output: Tip31WrapperClonedOutput;
    }>;
    runSetCloned(input: Tip31WrapperSetClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setCloned(input: Tip31WrapperSetClonedInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: Tip31WrapperGetDetailsOutput;
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperGetTip3ConfigOutput;
    }>;
    getTip3Config(): Promise<{
        transaction: Transaction;
        output: Tip31WrapperGetTip3ConfigOutput;
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperHasInternalWalletCodeOutput;
    }>;
    hasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: Tip31WrapperHasInternalWalletCodeOutput;
    }>;
    runGetWalletAddress(input: Tip31WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperGetWalletAddressOutput;
    }>;
    getWalletAddress(input: Tip31WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: Tip31WrapperGetWalletAddressOutput;
    }>;
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: Tip31WrapperGetReserveWalletOutput;
    }>;
    getReserveWallet(): Promise<{
        transaction: Transaction;
        output: Tip31WrapperGetReserveWalletOutput;
    }>;
}
//# sourceMappingURL=Tip31WrapperAccount.d.ts.map