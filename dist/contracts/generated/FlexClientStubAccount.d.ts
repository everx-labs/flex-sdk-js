import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type FlexClientStubOnDeployInput = {
    triplet: {
        wallet: number;
        exchange: number;
        user: number;
    };
    binding: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    flex_client_code: string;
    auth_index_code: string;
    user_id_index_code: string;
    signature: string;
};
export declare class FlexClientStubAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: FlexClientStubOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: FlexClientStubOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runUnused(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unused(): Promise<RunLocalHelperResult<void>>;
}
//# sourceMappingURL=FlexClientStubAccount.d.ts.map