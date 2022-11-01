import { Account, ContractPackage } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";

export enum LogLevel {
    NONE,
    FATAL,
    ERROR,
    WARN,
    INFO,
    DEBUG,
    TRACE,
}

export abstract class Log {
    level = LogLevel.INFO;
    static NULL: Log = new class NullLog extends Log {
        writeText(_text: string) {
        }
    };
    static STDOUT: Log = new class StdOutLog extends Log {
        writeText(text: string) {
            process.stdout.write(text);
        }
    }();

    static default = this.STDOUT;

    abstract writeText(text: string): void;

    write(level: LogLevel, ...args: any[]) {
        if (level <= this.level) {
            const text = [];
            for (const arg of args) {
                if (typeof arg === "string") {
                    text.push(arg);
                } else if (arg instanceof Error) {
                    text.push(arg.message);
                    if (Object.keys(arg).length > 0) {
                        text.push(JSON.stringify(arg, undefined, "    "));
                    }
                } else if (arg instanceof Error) {
                    text.push(JSON.stringify(arg, undefined, "    "));
                }
            }
            this.writeText(text.join(" "));
        }
    }

    debug(...args: any[]): void {
        this.write(LogLevel.DEBUG, ...args);
        this.write(LogLevel.DEBUG, "\n");
    }

    info(...args: any[]): void {
        this.write(LogLevel.INFO, ...args);
        this.write(LogLevel.INFO, "\n");
    }

    error(...args: any[]): void {
        this.write(LogLevel.ERROR, ...args);
        this.write(LogLevel.ERROR, "\n");
    }

    processingStart(title: string): void {
        this.write(LogLevel.INFO, `${title}...`);
    }

    processingDone(): void {
        this.info(" ✓");
    }
}

export type ContractPackageEx = ContractPackage & {
    code: string,
    codeHash: string,
}

export type Transaction = {
    id: string,
    in_msg: string,
    [name: string]: unknown,
};

function errorWith(
    err: any,
    method: string,
    account: Account,
    fn: string,
    params: object,
): any {
    err.data = {
        ...err.data,
        [method]: {
            fn: `${account.constructor.name}.${fn}`,
            params,
        },
    };
    return err;
}

export type RunHelperOptions = {
    skipTransactionTree?: boolean,
};

export type RunHelperResult<O> = {
    transaction: Transaction,
    transactionTree: ResultOfQueryTransactionTree,
    output: O,
};

export async function runHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
    options?: RunHelperOptions,
): Promise<RunHelperResult<O>> {
    account.log?.processingStart(`Run ${account.constructor.name}.${fn}`);
    try {
        const runResult = await account.run(fn, params);
        const result: RunHelperResult<O> = {
            transaction: runResult.transaction,
            transactionTree: {
                transactions: [],
                messages: [],
            },
            output: runResult.decoded?.output,
        };

        if (!(options?.skipTransactionTree ?? false)) {
            result.transactionTree =
                await account.client.net.query_transaction_tree({
                    in_msg: runResult.transaction.in_msg,
                    timeout: 60000 * 5,
                });
        }
        account.log?.info(` TX: ${runResult.transaction.id}`);
        account.log?.processingDone();
        return result;
    } catch (err: any) {
        throw errorWith(err, "run", account, fn, params);
    }
}

export async function deployHelper(
    account: Account & { log?: Log },
    fn: string | undefined,
    params: object | undefined,
): Promise<{
    transaction: Transaction,
}> {
    account.log?.processingStart(`Deploy ${account.constructor.name}.${fn ?? ""}`);
    try {
        const result = await account.deploy({
            initFunctionName: fn,
            initInput: params,
        });
        account.log?.processingDone();
        return {
            transaction: result.transaction,
        };
    } catch (err: any) {
        throw errorWith(err, "deploy", account, fn ?? "", params ?? {});
    }
}

export type RunLocalHelperResult<O> = {
    transaction: Transaction,
    output: O,
};

export async function runLocalHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
): Promise<RunLocalHelperResult<O>> {
    try {
        account.log?.processingStart(`RunLocal ${account.constructor.name}.${fn}`);
        const result = await account.runLocal(fn, params);
        account.log?.processingDone();
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        };
    } catch (err: any) {
        throw errorWith(err, "runLocal", account, fn, params);
    }
}


