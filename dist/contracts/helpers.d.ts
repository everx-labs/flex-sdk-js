import { Account, ContractPackage } from "@eversdk/appkit";
import { ProcessingEvent, ResultOfQueryTransactionTree } from "@eversdk/core";
export declare enum LogLevel {
    NONE = 0,
    FATAL = 1,
    ERROR = 2,
    WARN = 3,
    INFO = 4,
    DEBUG = 5,
    TRACE = 6
}
export declare abstract class Log {
    level: LogLevel;
    static NULL: Log;
    static STDOUT: Log;
    static default: Log;
    abstract writeText(text: string): void;
    write(level: LogLevel, ...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    processingStart(title: string): void;
    processingDone(): void;
}
export declare type ContractPackageEx = ContractPackage & {
    code: string;
    codeHash: string;
};
export declare type Transaction = {
    id: string;
    in_msg: string;
    [name: string]: unknown;
};
export declare type RunHelperOptions = {
    skipTransactionTree?: boolean;
    onProcessing?: (event: ProcessingEvent) => void;
};
export declare type RunHelperResult<O> = {
    transaction: Transaction;
    transactionTree: ResultOfQueryTransactionTree;
    output: O;
};
export declare function runHelper<O>(account: Account & {
    log?: Log;
}, fn: string, params: object, options?: RunHelperOptions): Promise<RunHelperResult<O>>;
export declare function deployHelper(account: Account & {
    log?: Log;
}, fn: string | undefined, params: object | undefined): Promise<{
    transaction: Transaction;
}>;
export declare type RunLocalHelperResult<O> = {
    transaction: Transaction;
    output: O;
};
export declare function runLocalHelper<O>(account: Account & {
    log?: Log;
}, fn: string, params: object): Promise<RunLocalHelperResult<O>>;
//# sourceMappingURL=helpers.d.ts.map