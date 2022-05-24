import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperInitInput = {
    _answer_id: number;
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type WrapperInitOutput = {
    value0: boolean;
};
export declare type WrapperDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type WrapperDeployEmptyWalletOutput = {
    value0: string;
};
export declare type WrapperOnTip3TransferInput = {
    _answer_id: number;
    balance: string | number | bigint;
    new_tokens: string | number | bigint;
    evers_balance: string | number | bigint;
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    sender?: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    receiver: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    payload: string;
    answer_addr: string;
};
export declare type WrapperOnTip3TransferOutput = {
    err_code: number;
    flex_wallet: string;
};
export declare type WrapperBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
};
export declare type WrapperTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type WrapperRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type WrapperRequestTotalGrantedOutput = {
    value0: string;
};
export declare type WrapperGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    total_granted: string;
    wallet_code: string;
    external_wallet?: string;
    reserve_wallet: string;
    super_root: string;
};
export declare type WrapperGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type WrapperHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type WrapperGetWalletAddressOutput = {
    value0: string;
};
export declare type WrapperGetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperInitInput): Promise<{
        transaction: Transaction;
        output: WrapperInitOutput;
    }>;
    init(input: WrapperInitInput): Promise<{
        transaction: Transaction;
        output: WrapperInitOutput;
    }>;
    runDeployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployEmptyWalletOutput;
    }>;
    runOnTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction;
        output: WrapperOnTip3TransferOutput;
    }>;
    onTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction;
        output: WrapperOnTip3TransferOutput;
    }>;
    runBurn(input: WrapperBurnInput): Promise<{
        transaction: Transaction;
    }>;
    burn(input: WrapperBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    transferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperRequestTotalGrantedOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: WrapperGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WrapperGetDetailsOutput;
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperGetTip3ConfigOutput;
    }>;
    getTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperGetTip3ConfigOutput;
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperHasInternalWalletCodeOutput;
    }>;
    hasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperHasInternalWalletCodeOutput;
    }>;
    runGetWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperGetWalletAddressOutput;
    }>;
    getWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperGetWalletAddressOutput;
    }>;
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperGetReserveWalletOutput;
    }>;
    getReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperGetReserveWalletOutput;
    }>;
}
//# sourceMappingURL=WrapperAccount.d.ts.map