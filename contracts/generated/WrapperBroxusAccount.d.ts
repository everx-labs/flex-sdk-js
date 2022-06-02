import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperBroxusInitInput = {
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type WrapperBroxusDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type WrapperBroxusDeployEmptyWalletOutput = {
    value0: string;
};
export declare type WrapperBroxusOnAcceptTokensTransferInput = {
    tokenRoot: string;
    amount: string | number | bigint;
    sender: string;
    senderWallet: string;
    remainingGasTo: string;
    payload: string;
};
export declare type WrapperBroxusBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export declare type WrapperBroxusTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type WrapperBroxusRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type WrapperBroxusRequestTotalGrantedOutput = {
    value0: string;
};
export declare type WrapperBroxusClonedInput = {
    _answer_id: number;
};
export declare type WrapperBroxusClonedOutput = {
    first?: string;
    second: string;
};
export declare type WrapperBroxusSetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export declare type WrapperBroxusGetDetailsOutput = {
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
export declare type WrapperBroxusGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type WrapperBroxusHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type WrapperBroxusGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type WrapperBroxusGetWalletAddressOutput = {
    value0: string;
};
export declare type WrapperBroxusGetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperBroxusAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperBroxusInitInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    init(input: WrapperBroxusInitInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyWallet(input: WrapperBroxusDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: WrapperBroxusDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperBroxusDeployEmptyWalletOutput;
    }>;
    runOnAcceptTokensTransfer(input: WrapperBroxusOnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onAcceptTokensTransfer(input: WrapperBroxusOnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: WrapperBroxusBurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burn(input: WrapperBroxusBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: WrapperBroxusTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferFromReserveWallet(input: WrapperBroxusTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestTotalGranted(input: WrapperBroxusRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: WrapperBroxusRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperBroxusRequestTotalGrantedOutput;
    }>;
    runCloned(input: WrapperBroxusClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusClonedOutput;
    }>;
    cloned(input: WrapperBroxusClonedInput): Promise<{
        transaction: Transaction;
        output: WrapperBroxusClonedOutput;
    }>;
    runSetCloned(input: WrapperBroxusSetClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setCloned(input: WrapperBroxusSetClonedInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WrapperBroxusGetDetailsOutput;
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusGetTip3ConfigOutput;
    }>;
    getTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperBroxusGetTip3ConfigOutput;
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusHasInternalWalletCodeOutput;
    }>;
    hasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperBroxusHasInternalWalletCodeOutput;
    }>;
    runGetWalletAddress(input: WrapperBroxusGetWalletAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusGetWalletAddressOutput;
    }>;
    getWalletAddress(input: WrapperBroxusGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperBroxusGetWalletAddressOutput;
    }>;
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperBroxusGetReserveWalletOutput;
    }>;
    getReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperBroxusGetReserveWalletOutput;
    }>;
}
//# sourceMappingURL=WrapperBroxusAccount.d.ts.map