import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class UserDataConfigAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        binding: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        flex_client_stub: string;
        flex_client_code: string;
        auth_index_code: string;
        user_id_index_code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        binding: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        flex_client_stub: string;
        flex_client_code: string;
        auth_index_code: string;
        user_id_index_code: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployFlexClient(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        deploy_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployFlexClient(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        deploy_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runRequestDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            triplet: {
                wallet: number;
                exchange: number;
                user: number;
            };
            binding: {
                flex: string;
                unsalted_price_code_hash: string;
            };
            flex_client_stub: string;
            flex_client_code: string;
            auth_index_code: string;
            user_id_index_code: string;
        };
    }>;
    runLocalRequestDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            triplet: {
                wallet: number;
                exchange: number;
                user: number;
            };
            binding: {
                flex: string;
                unsalted_price_code_hash: string;
            };
            flex_client_stub: string;
            flex_client_code: string;
            auth_index_code: string;
            user_id_index_code: string;
        };
    }>;
    runGetFlexClientAddr(input: {
        pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetFlexClientAddr(input: {
        pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            triplet: {
                wallet: number;
                exchange: number;
                user: number;
            };
            binding: {
                flex: string;
                unsalted_price_code_hash: string;
            };
            flex_client_stub: string;
            flex_client_code: string;
            auth_index_code: string;
            user_id_index_code: string;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            triplet: {
                wallet: number;
                exchange: number;
                user: number;
            };
            binding: {
                flex: string;
                unsalted_price_code_hash: string;
            };
            flex_client_stub: string;
            flex_client_code: string;
            auth_index_code: string;
            user_id_index_code: string;
        };
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
        };
    }>;
}
//# sourceMappingURL=UserDataConfigAccount.d.ts.map