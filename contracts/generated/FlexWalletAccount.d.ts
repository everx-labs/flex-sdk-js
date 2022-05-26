import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexWalletTransferInput = {
    _answer_id: number;
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    return_ownership: string | number | bigint;
    notify_payload?: string;
};
export declare type FlexWalletTransferToRecipientInput = {
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
export declare type FlexWalletBalanceInput = {
    _answer_id: number;
};
export declare type FlexWalletBalanceOutput = {
    value0: string;
};
export declare type FlexWalletAcceptMintInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    notify_payload?: string;
};
export declare type FlexWalletAcceptTransferInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    payload?: string;
};
export declare type FlexWalletBurnInput = {
    _answer_id: number;
    out_pubkey: string | number | bigint;
    out_owner?: string;
};
export declare type FlexWalletUnwrapInput = {
    _answer_id: number;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    tokens: string | number | bigint;
};
export declare type FlexWalletMakeOrderInput = {
    _answer_id: number;
    answer_addr?: string;
    evers: string | number | bigint;
    lend_balance: string | number | bigint;
    lend_finish_time: number;
    price_num: string | number | bigint;
    unsalted_price_code: string;
    salt: string;
    args: {
        sell: boolean;
        immediate_client: boolean;
        post_order: boolean;
        amount: string | number | bigint;
        client_addr: string;
        user_id: string | number | bigint;
        order_id: string | number | bigint;
    };
};
export declare type FlexWalletCancelOrderInput = {
    evers: string | number | bigint;
    price: string;
    sell: boolean;
    order_id?: string | number | bigint;
};
export declare type FlexWalletReturnOwnershipInput = {
    tokens: string | number | bigint;
};
export declare type FlexWalletBindInput = {
    set_binding: boolean;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    set_trader: boolean;
    trader?: string | number | bigint;
};
export declare type FlexWalletDetailsInput = {
    _answer_id: number;
};
export declare type FlexWalletDetailsOutput = {
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
export declare type FlexWalletGetDetailsOutput = {
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
export declare type FlexWalletGetBalanceOutput = {
    value0: string;
};
export declare class FlexWalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction;
    }>;
    runBalance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexWalletBalanceOutput;
    }>;
    balance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction;
        output: FlexWalletBalanceOutput;
    }>;
    runAcceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runUnwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction;
    }>;
    runMakeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    makeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction;
    }>;
    runCancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    cancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction;
    }>;
    runReturnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    runBind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    bind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction;
    }>;
    runDetails(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexWalletDetailsOutput;
    }>;
    details(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction;
        output: FlexWalletDetailsOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexWalletGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: FlexWalletGetDetailsOutput;
    }>;
    runGetBalance(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexWalletGetBalanceOutput;
    }>;
    getBalance_(): Promise<{
        transaction: Transaction;
        output: FlexWalletGetBalanceOutput;
    }>;
}
//# sourceMappingURL=FlexWalletAccount.d.ts.map