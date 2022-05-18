import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class FlexClientStubAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnused(): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnused(): Promise<{
        transaction: Transaction;
    }>;
}
//# sourceMappingURL=FlexClientStubAccount.d.ts.map