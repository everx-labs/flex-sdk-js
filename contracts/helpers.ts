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

export async function runHelper<O>(account: Account, fn: string, params: object): Promise<{
    transaction: Transaction,
    output: O,
}> {
    const result = await account.run(fn, params);
    await account.client.net.query_transaction_tree({
        in_msg: result.transaction.in_msg,
        timeout: 60000 * 5,
    });
    return {
        transaction: result.transaction,
        output: result.decoded?.output,
    };
}

export async function deployHelper(
    account: Account,
    fn: string | undefined,
    params: object | undefined,
): Promise<{
    transaction: Transaction,
}> {
    const result = await account.deploy({
        initFunctionName: fn,
        initInput: params,
    });
    return {
        transaction: result.transaction,
    };
}

export async function runLocalHelper<O>(account: Account, fn: string, input: object): Promise<{
    transaction: Transaction,
    output: O,
}> {
    const result = await account.runLocal(fn, input);
    return {
        transaction: result.transaction,
        output: result.decoded?.output,
    };
}
