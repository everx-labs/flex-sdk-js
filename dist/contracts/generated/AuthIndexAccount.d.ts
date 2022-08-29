import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type AuthIndexRemoveInput = {
    dst: string;
};
export declare class AuthIndexAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onDeploy(): Promise<{
        transaction: Transaction;
    }>;
    runRemove(input: AuthIndexRemoveInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    remove(input: AuthIndexRemoveInput): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=AuthIndexAccount.d.ts.map