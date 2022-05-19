import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    runAcceptTransfer(input: {
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAcceptTransfer(input: {
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSendTransaction(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
        flags: number;
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSendTransaction(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
        flags: number;
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSubmitTransaction(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
        allBalance: boolean;
        payload: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            transId: string;
        };
    }>;
    runLocalSubmitTransaction(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
        allBalance: boolean;
        payload: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            transId: string;
        };
    }>;
    runConfirmTransaction(input: {
        transactionId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalConfirmTransaction(input: {
        transactionId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runIsConfirmed(input: {
        mask: number;
        index: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            confirmed: boolean;
        };
    }>;
    runLocalIsConfirmed(input: {
        mask: number;
        index: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            confirmed: boolean;
        };
    }>;
    runGetParameters(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetParameters(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetTransaction(input: {
        transactionId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetTransaction(input: {
        transactionId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetTransactions(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetTransactions(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetTransactionIds(): Promise<{
        transaction: Transaction;
        output: {
            ids: string[];
        };
    }>;
    runLocalGetTransactionIds(): Promise<{
        transaction: Transaction;
        output: {
            ids: string[];
        };
    }>;
    runGetCustodians(): Promise<{
        transaction: Transaction;
        output: {
            custodians: {
                index: number;
                pubkey: string;
            }[];
        };
    }>;
    runLocalGetCustodians(): Promise<{
        transaction: Transaction;
        output: {
            custodians: {
                index: number;
                pubkey: string;
            }[];
        };
    }>;
    runCreateLimit(input: {
        value: string | number | bigint;
        period: number;
        required: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            limitId: string;
        };
    }>;
    runLocalCreateLimit(input: {
        value: string | number | bigint;
        period: number;
        required: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            limitId: string;
        };
    }>;
    runConfirmLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalConfirmLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runChangeLimit(input: {
        limitId: string | number | bigint;
        value: string | number | bigint;
        period: number;
        required: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            newLimitId: string;
        };
    }>;
    runLocalChangeLimit(input: {
        limitId: string | number | bigint;
        value: string | number | bigint;
        period: number;
        required: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            newLimitId: string;
        };
    }>;
    runDeleteLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalDeleteLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetLimits(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetLimits(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetPendingLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetPendingLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetPendingLimits(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetPendingLimits(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetLimit(input: {
        limitId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runSubmitUpdate(input: {
        codeHash: string | number | bigint;
        owners: string | number | bigint[];
        reqConfirms: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            updateId: string;
        };
    }>;
    runLocalSubmitUpdate(input: {
        codeHash: string | number | bigint;
        owners: string | number | bigint[];
        reqConfirms: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            updateId: string;
        };
    }>;
    runConfirmUpdate(input: {
        updateId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalConfirmUpdate(input: {
        updateId: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runExecuteUpdate(input: {
        updateId: string | number | bigint;
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalExecuteUpdate(input: {
        updateId: string | number | bigint;
        code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetUpdateRequests(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetUpdateRequests(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
}
//# sourceMappingURL=MultisigWalletAccount.d.ts.map