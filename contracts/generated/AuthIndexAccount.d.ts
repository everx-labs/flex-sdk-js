import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    }>;
    runLocalOnDeploy(): Promise<{
        transaction: Transaction;
    }>;
    runRemove(input: {
        dst: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalRemove(input: {
        dst: string;
    }): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=AuthIndexAccount.d.ts.map