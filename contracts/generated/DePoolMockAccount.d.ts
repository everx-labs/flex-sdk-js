import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type DePoolMockSendOnTransferInput = {
    dst: string;
    src: string;
    amount: string | number | bigint;
};
export declare type DePoolMockTransferStakeInput = {
    destination: string;
    amount: string | number | bigint;
};
export declare type DePoolMockGetDetailsOutput = {
    owner_pubkey: string;
    fwd_records: {
        dst: string;
        src: string;
        amount: string;
        timestamp: string;
    }[];
    bck_records: {
        dst: string;
        src: string;
        amount: string;
        timestamp: string;
    }[];
};
export declare class DePoolMockAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owner_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSendOnTransfer(input: DePoolMockSendOnTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    sendOnTransfer(input: DePoolMockSendOnTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferStake(input: DePoolMockTransferStakeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferStake(input: DePoolMockTransferStakeInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: DePoolMockGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: DePoolMockGetDetailsOutput;
    }>;
}
//# sourceMappingURL=DePoolMockAccount.d.ts.map