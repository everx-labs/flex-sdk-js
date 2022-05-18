import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class AuthIndexAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
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