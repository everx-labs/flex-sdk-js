import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    runTransfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction;
    }>;
    transfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction;
    }>;
    transferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction;
    }>;
    runBalance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction;
        output: TONTokenWalletBalanceOutput;
    }>;
    balance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction;
        output: TONTokenWalletBalanceOutput;
    }>;
    runAcceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction;
    }>;
    acceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    acceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runDestroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction;
    }>;
    destroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction;
    }>;
    runDetails(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction;
        output: TONTokenWalletDetailsOutput;
    }>;
    details(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction;
        output: TONTokenWalletDetailsOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: TONTokenWalletGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: TONTokenWalletGetDetailsOutput;
    }>;
    runGetBalance(): Promise<{
        transaction: Transaction;
        output: TONTokenWalletGetBalanceOutput;
    }>;
    getBalance_(): Promise<{
        transaction: Transaction;
        output: TONTokenWalletGetBalanceOutput;
    }>;
}
//# sourceMappingURL=TONTokenWalletAccount.d.ts.map