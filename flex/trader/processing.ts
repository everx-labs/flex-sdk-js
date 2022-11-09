import { DerivativeTransaction } from "../web3/accounts";
import { AccountClass } from "../../contracts/account-ex";
import { findTransactionError } from "../../contracts";

export enum ProcessingStatus {
    /**
     * Initialization message was sent to the blockchain.
     * Now waiting for the initialization transaction.
     */
    STARTING,
    /**
     * Initialization transaction was received.
     * Now waiting for finalizing flow.
     */
    FINALIZING,
    /**
     * Processing was successfully finished.
     */
    SUCCESS,
    /**
     * Processing failed.
     */
    ERROR,
}

type StartingState<P> = {
    status: ProcessingStatus.STARTING;
    params: P;
    message: string;
    shard_block_id: string;
};

type FinalizingState<P> = {
    status: ProcessingStatus.FINALIZING;
    params: P;
    startingTransactionId: string;
};

type SuccessState = {
    status: ProcessingStatus.SUCCESS;
    startingTransactionId: string;
    finalizingTransactions: string[];
};

type ErrorState = {
    status: ProcessingStatus.ERROR;
    error: ErrorInfo;
};

type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};

export type SdkError = Error & {
    code?: number;
    data?: {
        local_error?: {
            code: number;
            data?: {
                exit_code?: number;
            };
        };
    };
};


export type ProcessingResult<R, P> = R &
    (StartingState<P> | FinalizingState<P> | SuccessState | ErrorState);

export function processingError<R>(result: R, error: Error): ProcessingResult<R, any> {
    return {
        ...result,
        status: ProcessingStatus.ERROR,
        error: {
            ...error,
            message: error.message,
        },
    };
}

export function resolveDerivativeTransaction<R>(
    transactions: { [address: string]: DerivativeTransaction },
    address: string,
    contract: AccountClass,
    result: R,
    toSuccess: (transaction: DerivativeTransaction) => R,
    toError: (error: Error) => R,
): { result: R; transaction: DerivativeTransaction | undefined } {
    const transaction = transactions[address];
    if (transaction) {
        const error = findTransactionError(transaction, contract);
        if (error) {
            return {
                result: toError(error),
                transaction: undefined,
            };
        }
        return {
            result: toSuccess(transaction),
            transaction,
        };
    }
    return { result, transaction: undefined };
}

