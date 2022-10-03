import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
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
    runOnDeploy(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(): Promise<RunLocalHelperResult<void>>;
    runRemove(input: AuthIndexRemoveInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    remove(input: AuthIndexRemoveInput): Promise<RunLocalHelperResult<void>>;
}
//# sourceMappingURL=AuthIndexAccount.d.ts.map