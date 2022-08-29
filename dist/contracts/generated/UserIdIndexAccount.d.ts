import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type UserIdIndexOnDeployInput = {
    lend_pubkey: string | number | bigint;
    name: string;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export declare type UserIdIndexReLendPubkeyInput = {
    new_lend_pubkey: string | number | bigint;
    evers_to_remove: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
};
export declare type UserIdIndexRequestLendPubkeyInput = {
    _answer_id: number;
    evers_balance: string | number | bigint;
};
export declare type UserIdIndexRequestLendPubkeyOutput = {
    value0: string;
};
export declare type UserIdIndexTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export declare type UserIdIndexSetRefillWalletInput = {
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export declare type UserIdIndexGetConfigOutput = {
    owner: string;
    auth_index_code: string;
};
export declare class UserIdIndexAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: UserIdIndexOnDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onDeploy(input: UserIdIndexOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runReLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    reLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<{
        transaction: Transaction;
    }>;
    runRemove(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    remove(): Promise<{
        transaction: Transaction;
    }>;
    runRequestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserIdIndexRequestLendPubkeyOutput;
    }>;
    requestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<{
        transaction: Transaction;
        output: UserIdIndexRequestLendPubkeyOutput;
    }>;
    runTransfer(input: UserIdIndexTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transfer(input: UserIdIndexTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runSetRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserIdIndexGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: UserIdIndexGetConfigOutput;
    }>;
}
//# sourceMappingURL=UserIdIndexAccount.d.ts.map