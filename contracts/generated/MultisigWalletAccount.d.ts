import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type MultisigWalletAcceptTransferInput = {
    payload: string;
};
export declare type MultisigWalletSendTransactionInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
    flags: number;
    payload: string;
};
export declare type MultisigWalletSubmitTransactionInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
    allBalance: boolean;
    payload: string;
};
export declare type MultisigWalletSubmitTransactionOutput = {
    transId: string;
};
export declare type MultisigWalletConfirmTransactionInput = {
    transactionId: string | number | bigint;
};
export declare type MultisigWalletIsConfirmedInput = {
    mask: number;
    index: number;
};
export declare type MultisigWalletIsConfirmedOutput = {
    confirmed: boolean;
};
export declare type MultisigWalletGetParametersOutput = {
    maxQueuedTransactions: number;
    maxQueuedLimits: number;
    maxCustodianCount: number;
    maxLimitPeriod: number;
    expirationTime: string;
    minValue: string;
    requiredTxnConfirms: number;
    requiredLimConfirms: number;
    requiredUpdConfirms: number;
};
export declare type MultisigWalletGetTransactionInput = {
    transactionId: string | number | bigint;
};
export declare type MultisigWalletGetTransactionOutput = {
    trans: {
        id: string;
        confirmationsMask: number;
        signsRequired: number;
        signsReceived: number;
        creator: string;
        index: number;
        dest: string;
        value: string;
        sendFlags: number;
        payload: string;
        bounce: boolean;
    };
};
export declare type MultisigWalletGetTransactionsOutput = {
    transactions: {
        id: string;
        confirmationsMask: number;
        signsRequired: number;
        signsReceived: number;
        creator: string;
        index: number;
        dest: string;
        value: string;
        sendFlags: number;
        payload: string;
        bounce: boolean;
    }[];
};
export declare type MultisigWalletGetTransactionIdsOutput = {
    ids: string[];
};
export declare type MultisigWalletGetCustodiansOutput = {
    custodians: {
        index: number;
        pubkey: string;
    }[];
};
export declare type MultisigWalletCreateLimitInput = {
    value: string | number | bigint;
    period: number;
    required: number;
};
export declare type MultisigWalletCreateLimitOutput = {
    limitId: string;
};
export declare type MultisigWalletConfirmLimitInput = {
    limitId: string | number | bigint;
};
export declare type MultisigWalletChangeLimitInput = {
    limitId: string | number | bigint;
    value: string | number | bigint;
    period: number;
    required: number;
};
export declare type MultisigWalletChangeLimitOutput = {
    newLimitId: string;
};
export declare type MultisigWalletDeleteLimitInput = {
    limitId: string | number | bigint;
};
export declare type MultisigWalletGetLimitsOutput = {
    limits: {
        id: string;
        value: string;
        period: number;
        required: number;
        spent: string;
        start: number;
        votes: number;
        deletionMask: number;
    }[];
};
export declare type MultisigWalletGetPendingLimitInput = {
    limitId: string | number | bigint;
};
export declare type MultisigWalletGetPendingLimitOutput = {
    limit: {
        creator: string;
        index: number;
        confirmationsMask: number;
        signs: number;
        parentId: string;
        limit: {
            id: string;
            value: string;
            period: number;
            required: number;
            spent: string;
            start: number;
            votes: number;
            deletionMask: number;
        };
    };
};
export declare type MultisigWalletGetPendingLimitsOutput = {
    pendingLimits: {
        id: string;
        info: {
            creator: string;
            index: number;
            confirmationsMask: number;
            signs: number;
            parentId: string;
            limit: {
                id: string;
                value: string;
                period: number;
                required: number;
                spent: string;
                start: number;
                votes: number;
                deletionMask: number;
            };
        };
    }[];
};
export declare type MultisigWalletGetLimitInput = {
    limitId: string | number | bigint;
};
export declare type MultisigWalletGetLimitOutput = {
    limit: {
        id: string;
        value: string;
        period: number;
        required: number;
        spent: string;
        start: number;
        votes: number;
        deletionMask: number;
    };
};
export declare type MultisigWalletSubmitUpdateInput = {
    codeHash: string | number | bigint;
    owners: string | number | bigint[];
    reqConfirms: number;
};
export declare type MultisigWalletSubmitUpdateOutput = {
    updateId: string;
};
export declare type MultisigWalletConfirmUpdateInput = {
    updateId: string | number | bigint;
};
export declare type MultisigWalletExecuteUpdateInput = {
    updateId: string | number | bigint;
    code: string;
};
export declare type MultisigWalletGetUpdateRequestsOutput = {
    updates: {
        id: string;
        index: number;
        signs: number;
        confirmationsMask: number;
        creator: string;
        codeHash: string;
        custodians: string[];
        reqConfirms: number;
    }[];
};
export declare class MultisigWalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owners: string | number | bigint[];
        reqConfirms: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: MultisigWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    acceptTransfer(input: MultisigWalletAcceptTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runSendTransaction(input: MultisigWalletSendTransactionInput): Promise<{
        transaction: Transaction;
    }>;
    sendTransaction(input: MultisigWalletSendTransactionInput): Promise<{
        transaction: Transaction;
    }>;
    runSubmitTransaction(input: MultisigWalletSubmitTransactionInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletSubmitTransactionOutput;
    }>;
    submitTransaction(input: MultisigWalletSubmitTransactionInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletSubmitTransactionOutput;
    }>;
    runConfirmTransaction(input: MultisigWalletConfirmTransactionInput): Promise<{
        transaction: Transaction;
    }>;
    confirmTransaction(input: MultisigWalletConfirmTransactionInput): Promise<{
        transaction: Transaction;
    }>;
    runIsConfirmed(input: MultisigWalletIsConfirmedInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletIsConfirmedOutput;
    }>;
    isConfirmed(input: MultisigWalletIsConfirmedInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletIsConfirmedOutput;
    }>;
    runGetParameters(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetParametersOutput;
    }>;
    getParameters(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetParametersOutput;
    }>;
    runGetTransaction(input: MultisigWalletGetTransactionInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionOutput;
    }>;
    getTransaction(input: MultisigWalletGetTransactionInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionOutput;
    }>;
    runGetTransactions(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionsOutput;
    }>;
    getTransactions(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionsOutput;
    }>;
    runGetTransactionIds(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionIdsOutput;
    }>;
    getTransactionIds(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetTransactionIdsOutput;
    }>;
    runGetCustodians(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetCustodiansOutput;
    }>;
    getCustodians(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetCustodiansOutput;
    }>;
    runCreateLimit(input: MultisigWalletCreateLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletCreateLimitOutput;
    }>;
    createLimit(input: MultisigWalletCreateLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletCreateLimitOutput;
    }>;
    runConfirmLimit(input: MultisigWalletConfirmLimitInput): Promise<{
        transaction: Transaction;
    }>;
    confirmLimit(input: MultisigWalletConfirmLimitInput): Promise<{
        transaction: Transaction;
    }>;
    runChangeLimit(input: MultisigWalletChangeLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletChangeLimitOutput;
    }>;
    changeLimit(input: MultisigWalletChangeLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletChangeLimitOutput;
    }>;
    runDeleteLimit(input: MultisigWalletDeleteLimitInput): Promise<{
        transaction: Transaction;
    }>;
    deleteLimit(input: MultisigWalletDeleteLimitInput): Promise<{
        transaction: Transaction;
    }>;
    runGetLimits(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetLimitsOutput;
    }>;
    getLimits(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetLimitsOutput;
    }>;
    runGetPendingLimit(input: MultisigWalletGetPendingLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetPendingLimitOutput;
    }>;
    getPendingLimit(input: MultisigWalletGetPendingLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetPendingLimitOutput;
    }>;
    runGetPendingLimits(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetPendingLimitsOutput;
    }>;
    getPendingLimits(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetPendingLimitsOutput;
    }>;
    runGetLimit(input: MultisigWalletGetLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetLimitOutput;
    }>;
    getLimit(input: MultisigWalletGetLimitInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetLimitOutput;
    }>;
    runSubmitUpdate(input: MultisigWalletSubmitUpdateInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletSubmitUpdateOutput;
    }>;
    submitUpdate(input: MultisigWalletSubmitUpdateInput): Promise<{
        transaction: Transaction;
        output: MultisigWalletSubmitUpdateOutput;
    }>;
    runConfirmUpdate(input: MultisigWalletConfirmUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    confirmUpdate(input: MultisigWalletConfirmUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    runExecuteUpdate(input: MultisigWalletExecuteUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    executeUpdate(input: MultisigWalletExecuteUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    runGetUpdateRequests(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetUpdateRequestsOutput;
    }>;
    getUpdateRequests(): Promise<{
        transaction: Transaction;
        output: MultisigWalletGetUpdateRequestsOutput;
    }>;
}
//# sourceMappingURL=MultisigWalletAccount.d.ts.map