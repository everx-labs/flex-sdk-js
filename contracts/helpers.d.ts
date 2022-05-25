import { Account, ContractPackage } from "@eversdk/appkit";
export declare abstract class Log {
    static NULL: Log;
    static STDOUT: Log;
    static default: Log;
    abstract verbose(text: string): void;
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
export declare function runHelper<O>(account: Account & {
    log?: Log;
}, fn: string, params: object): Promise<{
    transaction: Transaction;
    output: O;
}>;
export declare function deployHelper(account: Account & {
    log?: Log;
}, fn: string | undefined, params: object | undefined): Promise<{
    transaction: Transaction;
}>;
export declare function runLocalHelper<O>(account: Account & {
    log?: Log;
}, fn: string, params: object): Promise<{
    transaction: Transaction;
    output: O;
}>;
export declare function amountToUnits(tokens: number, decimals: string | number): string;
export declare function priceToUnits(price: number, denominator: string | number): {
    num: string;
    denum: string;
};
//# sourceMappingURL=helpers.d.ts.map