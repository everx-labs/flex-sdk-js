import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type stTONsClientMockDeployStTONsInput = {
    evers: string | number | bigint;
    code: string;
    owner_pubkey: string | number | bigint;
    owner_address?: string;
    depool: string;
    depool_pubkey: string | number | bigint;
};
export declare type stTONsClientMockDeployStTONsOutput = {
    value0: string;
};
export declare type stTONsClientMockReturnStakeInput = {
    stTONsAddr: string;
    dst: string;
    processing_evers: string | number | bigint;
    depool_processing_evers: string | number | bigint;
};
export declare type stTONsClientMockFinalizeInput = {
    stTONsAddr: string;
    dst: string;
    processing_evers: string | number | bigint;
    ignore_errors: boolean;
};
export declare type stTONsClientMockGetOwnerPubkeyOutput = {
    value0: string;
};
export declare class stTONsClientMockAccount extends Account {
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
    runDeployStTONs(input: stTONsClientMockDeployStTONsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: stTONsClientMockDeployStTONsOutput;
    }>;
    deployStTONs(input: stTONsClientMockDeployStTONsInput): Promise<{
        transaction: Transaction;
        output: stTONsClientMockDeployStTONsOutput;
    }>;
    runReturnStake(input: stTONsClientMockReturnStakeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    returnStake(input: stTONsClientMockReturnStakeInput): Promise<{
        transaction: Transaction;
    }>;
    runFinalize(input: stTONsClientMockFinalizeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    finalize(input: stTONsClientMockFinalizeInput): Promise<{
        transaction: Transaction;
    }>;
    runGetOwnerPubkey(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: stTONsClientMockGetOwnerPubkeyOutput;
    }>;
    getOwnerPubkey(): Promise<{
        transaction: Transaction;
        output: stTONsClientMockGetOwnerPubkeyOutput;
    }>;
}
//# sourceMappingURL=stTONsClientMockAccount.d.ts.map