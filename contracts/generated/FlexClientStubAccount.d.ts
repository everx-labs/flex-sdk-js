import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexClientStubOnDeployInput = {
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
    runOnDeploy(input: FlexClientStubOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(input: FlexClientStubOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runUnused(): Promise<{
        transaction: Transaction;
    }>;
    unused(): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=FlexClientStubAccount.d.ts.map