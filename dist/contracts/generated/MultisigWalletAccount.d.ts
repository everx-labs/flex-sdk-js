import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type MultisigWalletAcceptTransferInput = {
    payload: string;
};
export type MultisigWalletSendTransactionInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
    flags: number;
    payload: string;
};
export type MultisigWalletSubmitTransactionInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
    allBalance: boolean;
    payload: string;
};
export type MultisigWalletSubmitTransactionOutput = {
    transId: string;
};
export type MultisigWalletConfirmTransactionInput = {
    transactionId: string | number | bigint;
};
export type MultisigWalletIsConfirmedInput = {
    mask: number;
    index: number;
};
export type MultisigWalletIsConfirmedOutput = {
    confirmed: boolean;
};
export type MultisigWalletGetParametersOutput = {
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
export type MultisigWalletGetTransactionInput = {
    transactionId: string | number | bigint;
};
export type MultisigWalletGetTransactionOutput = {
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
export type MultisigWalletGetTransactionsOutput = {
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
export type MultisigWalletGetTransactionIdsOutput = {
    ids: string[];
};
export type MultisigWalletGetCustodiansOutput = {
    custodians: {
        index: number;
        pubkey: string;
    }[];
};
export type MultisigWalletCreateLimitInput = {
    value: string | number | bigint;
    period: number;
    required: number;
};
export type MultisigWalletCreateLimitOutput = {
    limitId: string;
};
export type MultisigWalletConfirmLimitInput = {
    limitId: string | number | bigint;
};
export type MultisigWalletChangeLimitInput = {
    limitId: string | number | bigint;
    value: string | number | bigint;
    period: number;
    required: number;
};
export type MultisigWalletChangeLimitOutput = {
    newLimitId: string;
};
export type MultisigWalletDeleteLimitInput = {
    limitId: string | number | bigint;
};
export type MultisigWalletGetLimitsOutput = {
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
export type MultisigWalletGetPendingLimitInput = {
    limitId: string | number | bigint;
};
export type MultisigWalletGetPendingLimitOutput = {
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
export type MultisigWalletGetPendingLimitsOutput = {
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
export type MultisigWalletGetLimitInput = {
    limitId: string | number | bigint;
};
export type MultisigWalletGetLimitOutput = {
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
export type MultisigWalletSubmitUpdateInput = {
    codeHash: string | number | bigint;
    owners: string | number | bigint[];
    reqConfirms: number;
};
export type MultisigWalletSubmitUpdateOutput = {
    updateId: string;
};
export type MultisigWalletConfirmUpdateInput = {
    updateId: string | number | bigint;
};
export type MultisigWalletExecuteUpdateInput = {
    updateId: string | number | bigint;
    code: string;
};
export type MultisigWalletGetUpdateRequestsOutput = {
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
        owners: (string | number | bigint)[];
        reqConfirms: number;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: MultisigWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptTransfer(input: MultisigWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>>;
    runSendTransaction(input: MultisigWalletSendTransactionInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    sendTransaction(input: MultisigWalletSendTransactionInput): Promise<RunLocalHelperResult<void>>;
    runSubmitTransaction(input: MultisigWalletSubmitTransactionInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletSubmitTransactionOutput>>;
    submitTransaction(input: MultisigWalletSubmitTransactionInput): Promise<RunLocalHelperResult<MultisigWalletSubmitTransactionOutput>>;
    runConfirmTransaction(input: MultisigWalletConfirmTransactionInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    confirmTransaction(input: MultisigWalletConfirmTransactionInput): Promise<RunLocalHelperResult<void>>;
    runIsConfirmed(input: MultisigWalletIsConfirmedInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletIsConfirmedOutput>>;
    isConfirmed(input: MultisigWalletIsConfirmedInput): Promise<RunLocalHelperResult<MultisigWalletIsConfirmedOutput>>;
    runGetParameters(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetParametersOutput>>;
    getParameters(): Promise<RunLocalHelperResult<MultisigWalletGetParametersOutput>>;
    runGetTransaction(input: MultisigWalletGetTransactionInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetTransactionOutput>>;
    getTransaction(input: MultisigWalletGetTransactionInput): Promise<RunLocalHelperResult<MultisigWalletGetTransactionOutput>>;
    runGetTransactions(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetTransactionsOutput>>;
    getTransactions(): Promise<RunLocalHelperResult<MultisigWalletGetTransactionsOutput>>;
    runGetTransactionIds(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetTransactionIdsOutput>>;
    getTransactionIds(): Promise<RunLocalHelperResult<MultisigWalletGetTransactionIdsOutput>>;
    runGetCustodians(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetCustodiansOutput>>;
    getCustodians(): Promise<RunLocalHelperResult<MultisigWalletGetCustodiansOutput>>;
    runCreateLimit(input: MultisigWalletCreateLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletCreateLimitOutput>>;
    createLimit(input: MultisigWalletCreateLimitInput): Promise<RunLocalHelperResult<MultisigWalletCreateLimitOutput>>;
    runConfirmLimit(input: MultisigWalletConfirmLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    confirmLimit(input: MultisigWalletConfirmLimitInput): Promise<RunLocalHelperResult<void>>;
    runChangeLimit(input: MultisigWalletChangeLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletChangeLimitOutput>>;
    changeLimit(input: MultisigWalletChangeLimitInput): Promise<RunLocalHelperResult<MultisigWalletChangeLimitOutput>>;
    runDeleteLimit(input: MultisigWalletDeleteLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    deleteLimit(input: MultisigWalletDeleteLimitInput): Promise<RunLocalHelperResult<void>>;
    runGetLimits(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetLimitsOutput>>;
    getLimits(): Promise<RunLocalHelperResult<MultisigWalletGetLimitsOutput>>;
    runGetPendingLimit(input: MultisigWalletGetPendingLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetPendingLimitOutput>>;
    getPendingLimit(input: MultisigWalletGetPendingLimitInput): Promise<RunLocalHelperResult<MultisigWalletGetPendingLimitOutput>>;
    runGetPendingLimits(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetPendingLimitsOutput>>;
    getPendingLimits(): Promise<RunLocalHelperResult<MultisigWalletGetPendingLimitsOutput>>;
    runGetLimit(input: MultisigWalletGetLimitInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetLimitOutput>>;
    getLimit(input: MultisigWalletGetLimitInput): Promise<RunLocalHelperResult<MultisigWalletGetLimitOutput>>;
    runSubmitUpdate(input: MultisigWalletSubmitUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletSubmitUpdateOutput>>;
    submitUpdate(input: MultisigWalletSubmitUpdateInput): Promise<RunLocalHelperResult<MultisigWalletSubmitUpdateOutput>>;
    runConfirmUpdate(input: MultisigWalletConfirmUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    confirmUpdate(input: MultisigWalletConfirmUpdateInput): Promise<RunLocalHelperResult<void>>;
    runExecuteUpdate(input: MultisigWalletExecuteUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    executeUpdate(input: MultisigWalletExecuteUpdateInput): Promise<RunLocalHelperResult<void>>;
    runGetUpdateRequests(options?: RunHelperOptions): Promise<RunHelperResult<MultisigWalletGetUpdateRequestsOutput>>;
    getUpdateRequests(): Promise<RunLocalHelperResult<MultisigWalletGetUpdateRequestsOutput>>;
}
//# sourceMappingURL=MultisigWalletAccount.d.ts.map