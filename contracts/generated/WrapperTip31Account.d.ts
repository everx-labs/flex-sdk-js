import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperTip31InitInput = {
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type WrapperTip31DeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type WrapperTip31DeployEmptyWalletOutput = {
    value0: string;
};
export declare type WrapperTip31OnAcceptTokensTransferInput = {
    tokenRoot: string;
    amount: string | number | bigint;
    sender: string;
    senderWallet: string;
    remainingGasTo: string;
    payload: string;
};
export declare type WrapperTip31BurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export declare type WrapperTip31TransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type WrapperTip31RequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type WrapperTip31RequestTotalGrantedOutput = {
    value0: string;
};
export declare type WrapperTip31ClonedInput = {
    _answer_id: number;
};
export declare type WrapperTip31ClonedOutput = {
    first?: string;
    second: string;
};
export declare type WrapperTip31SetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export declare type WrapperTip31GetDetailsOutput = {
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
export declare type WrapperTip31GetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type WrapperTip31HasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type WrapperTip31GetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type WrapperTip31GetWalletAddressOutput = {
    value0: string;
};
export declare type WrapperTip31GetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperTip31Account extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperTip31InitInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    init(input: WrapperTip31InitInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyWallet(input: WrapperTip31DeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31DeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: WrapperTip31DeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperTip31DeployEmptyWalletOutput;
    }>;
    runOnAcceptTokensTransfer(input: WrapperTip31OnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onAcceptTokensTransfer(input: WrapperTip31OnAcceptTokensTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: WrapperTip31BurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burn(input: WrapperTip31BurnInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: WrapperTip31TransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferFromReserveWallet(input: WrapperTip31TransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestTotalGranted(input: WrapperTip31RequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31RequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: WrapperTip31RequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperTip31RequestTotalGrantedOutput;
    }>;
    runCloned(input: WrapperTip31ClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31ClonedOutput;
    }>;
    cloned(input: WrapperTip31ClonedInput): Promise<{
        transaction: Transaction;
        output: WrapperTip31ClonedOutput;
    }>;
    runSetCloned(input: WrapperTip31SetClonedInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setCloned(input: WrapperTip31SetClonedInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31GetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WrapperTip31GetDetailsOutput;
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31GetTip3ConfigOutput;
    }>;
    getTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperTip31GetTip3ConfigOutput;
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31HasInternalWalletCodeOutput;
    }>;
    hasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperTip31HasInternalWalletCodeOutput;
    }>;
    runGetWalletAddress(input: WrapperTip31GetWalletAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31GetWalletAddressOutput;
    }>;
    getWalletAddress(input: WrapperTip31GetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperTip31GetWalletAddressOutput;
    }>;
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperTip31GetReserveWalletOutput;
    }>;
    getReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperTip31GetReserveWalletOutput;
    }>;
}
//# sourceMappingURL=WrapperTip31Account.d.ts.map