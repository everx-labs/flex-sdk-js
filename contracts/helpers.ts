import { Account, ContractPackage } from "@eversdk/appkit";

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

export async function runHelper<O>(account: Account, fn: string, params: object): Promise<{
    transaction: Transaction,
    output: O,
}> {
    process.stdout.write(`Running ${account.constructor.name}.${fn}...`)
    try {
        const result = await account.run(fn, params);
        await account.client.net.query_transaction_tree({
            in_msg: result.transaction.in_msg,
            timeout: 60000 * 5,
        });
        process.stdout.write(" ok\n");
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        };
    } catch (err: any) {
        throw errorWith(err, "run", account, fn, params);
    }
}

export async function deployHelper(
    account: Account,
    fn: string | undefined,
    params: object | undefined,
): Promise<{
    transaction: Transaction,
}> {
    process.stdout.write(`Deploying ${account.constructor.name}.${fn ?? ""}...`)
    try {
        const result = await account.deploy({
            initFunctionName: fn,
            initInput: params,
        });
        process.stdout.write(" ok\n");
        return {
            transaction: result.transaction,
        };
    } catch (err: any) {
        throw errorWith(err, "deploy", account, fn ?? "", params ?? {});
    }
}

export async function runLocalHelper<O>(account: Account, fn: string, params: object): Promise<{
    transaction: Transaction,
    output: O,
}> {
    try {
        const result = await account.runLocal(fn, params);
        process.stdout.write(`Run local ${account.constructor.name}.${fn}... ok\n`)
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        };
    } catch (err: any) {
        throw errorWith(err, "run", account, fn, params);
    }
}
