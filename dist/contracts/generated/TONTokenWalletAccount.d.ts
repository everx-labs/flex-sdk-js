import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type TONTokenWalletTransferInput = {
    _answer_id: number;
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    return_ownership: string | number | bigint;
    notify_payload?: string;
};
export declare type TONTokenWalletTransferToRecipientInput = {
    _answer_id: number;
    answer_addr?: string;
    to: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    tokens: string | number | bigint;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
    deploy: boolean;
    return_ownership: string | number | bigint;
    notify_payload?: string;
};
export declare type TONTokenWalletBalanceInput = {
    _answer_id: number;
};
export declare type TONTokenWalletBalanceOutput = {
    value0: string;
};
export declare type TONTokenWalletAcceptMintInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    notify_payload?: string;
};
export declare type TONTokenWalletAcceptTransferInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    payload?: string;
};
export declare type TONTokenWalletDestroyInput = {
    dest: string;
};
export declare type TONTokenWalletDetailsInput = {
    _answer_id: number;
};
export declare type TONTokenWalletDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    root_pubkey: string;
    root_address: string;
    wallet_pubkey: string;
    owner_address?: string;
    lend_pubkey?: string;
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number;
                address: string;
            };
        };
        lend_balance: string;
        lend_finish_time: number;
    }[];
    lend_balance: string;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string;
    };
    code_hash: string;
    code_depth: number;
    workchain_id: number;
};
export declare type TONTokenWalletGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    root_pubkey: string;
    root_address: string;
    wallet_pubkey: string;
    owner_address?: string;
    lend_pubkey?: string;
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number;
                address: string;
            };
        };
        lend_balance: string;
        lend_finish_time: number;
    }[];
    lend_balance: string;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string;
    };
    code_hash: string;
    code_depth: number;
    workchain_id: number;
};
export declare type TONTokenWalletGetBalanceOutput = {
    value0: string;
};
export declare class TONTokenWalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: TONTokenWalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: TONTokenWalletTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferToRecipient(input: TONTokenWalletTransferToRecipientInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<RunLocalHelperResult<void>>;
    runBalance(input: TONTokenWalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletBalanceOutput>>;
    balance(input: TONTokenWalletBalanceInput): Promise<RunLocalHelperResult<TONTokenWalletBalanceOutput>>;
    runAcceptMint(input: TONTokenWalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptMint(input: TONTokenWalletAcceptMintInput): Promise<RunLocalHelperResult<void>>;
    runAcceptTransfer(input: TONTokenWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>>;
    runDestroy(input: TONTokenWalletDestroyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    destroy(input: TONTokenWalletDestroyInput): Promise<RunLocalHelperResult<void>>;
    runDetails(input: TONTokenWalletDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletDetailsOutput>>;
    details(input: TONTokenWalletDetailsInput): Promise<RunLocalHelperResult<TONTokenWalletDetailsOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<TONTokenWalletGetDetailsOutput>>;
    runGetBalance(options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletGetBalanceOutput>>;
    getBalance_(): Promise<RunLocalHelperResult<TONTokenWalletGetBalanceOutput>>;
}
//# sourceMappingURL=TONTokenWalletAccount.d.ts.map