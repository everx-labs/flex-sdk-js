import { Account, ContractPackage } from '@eversdk/appkit'
import { ResultOfQueryTransactionTree } from '@eversdk/core'

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
    level = LogLevel.INFO
    static NULL: Log = new (class NullLog extends Log {
        writeText(_text: string) {}
    })()
    static STDOUT: Log = new (class StdOutLog extends Log {
        writeText(text: string) {
            process.stdout.write(text)
        }
    })()

    static default = this.STDOUT

    abstract writeText(text: string): void

    write(level: LogLevel, text: string) {
        if (level <= this.level) {
            this.writeText(text)
        }
    }

    debug(text: string): void {
        this.write(LogLevel.DEBUG, text)
    }

    info(text: string): void {
        this.write(LogLevel.INFO, text)
    }

    processingStart(title: string): void {
        this.info(`${title}...`)
    }

    processingDone(): void {
        this.info(' ✓\n')
    }
}

export type ContractPackageEx = ContractPackage & {
    code: string
    codeHash: string
}

export type Transaction = {
    id: string
    in_msg: string
    [name: string]: unknown
}

function errorWith(err: any, method: string, account: Account, fn: string, params: object): any {
    err.data = {
        ...err.data,
        [method]: {
            fn: `${account.constructor.name}.${fn}`,
            params,
        },
    }
    return err
}

export async function runHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
): Promise<{
    transaction: Transaction
    transactionTree: ResultOfQueryTransactionTree,
    output: O
}> {
    account.log?.processingStart(`Run ${account.constructor.name}.${fn}`)
    try {
        const result = await account.run(fn, params)
        const transactionTree = await account.client.net.query_transaction_tree({
            in_msg: result.transaction.in_msg,
            timeout: 60000 * 5,
        })
        account.log?.info(` TX: ${result.transaction.id}`)
        account.log?.processingDone()
        return {
            transaction: result.transaction,
            transactionTree,
            output: result.decoded?.output,
        }
    } catch (err: any) {
        throw errorWith(err, 'run', account, fn, params)
    }
}

export async function deployHelper(
    account: Account & { log?: Log },
    fn: string | undefined,
    params: object | undefined,
): Promise<{
    transaction: Transaction
}> {
    account.log?.processingStart(`Deploy ${account.constructor.name}.${fn ?? ''}`)
    try {
        const result = await account.deploy({
            initFunctionName: fn,
            initInput: params,
        })
        account.log?.processingDone()
        return {
            transaction: result.transaction,
        }
    } catch (err: any) {
        throw errorWith(err, 'deploy', account, fn ?? '', params ?? {})
    }
}

export async function runLocalHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
): Promise<{
    transaction: Transaction
    output: O
}> {
    try {
        account.log?.processingStart(`RunLocal ${account.constructor.name}.${fn}`)
        const result = await account.runLocal(fn, params)
        account.log?.processingDone()
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        }
    } catch (err: any) {
        throw errorWith(err, 'runLocal', account, fn, params)
    }
}
