import { Account, ContractPackage } from "@eversdk/appkit";
export declare type ContractPackageEx = ContractPackage & {
    code: string;
    codeHash: string;
};
export declare type Transaction = {
    id: string;
    in_msg: string;
    [name: string]: unknown;
};
export declare function runHelper<O>(account: Account, fn: string, params: object): Promise<{
    transaction: Transaction;
    output: O;
}>;
export declare function deployHelper(account: Account, fn: string | undefined, params: object | undefined): Promise<{
    transaction: Transaction;
}>;
export declare function runLocalHelper<O>(account: Account, fn: string, input: object): Promise<{
    transaction: Transaction;
    output: O;
}>;
//# sourceMappingURL=helpers.d.ts.map