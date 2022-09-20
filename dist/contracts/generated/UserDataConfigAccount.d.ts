import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type UserDataConfigOnDeployInput = {
    binding: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    flex_client_stub: string;
    flex_client_code: string;
    auth_index_code: string;
    user_id_index_code: string;
};
export declare type UserDataConfigDeployFlexClientInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    deploy_evers: string | number | bigint;
};
export declare type UserDataConfigDeployFlexClientOutput = {
    value0: string;
};
export declare type UserDataConfigRequestDetailsInput = {
    _answer_id: number;
};
export declare type UserDataConfigRequestDetailsOutput = {
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
export declare type UserDataConfigGetFlexClientAddrInput = {
    pubkey: string | number | bigint;
};
export declare type UserDataConfigGetFlexClientAddrOutput = {
    value0: string;
};
export declare type UserDataConfigGetDetailsOutput = {
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
export declare type UserDataConfigGetConfigOutput = {
    super_root: string;
};
export declare class UserDataConfigAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: UserDataConfigOnDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onDeploy(input: UserDataConfigOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserDataConfigDeployFlexClientOutput;
    }>;
    deployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<{
        transaction: Transaction;
        output: UserDataConfigDeployFlexClientOutput;
    }>;
    runRequestDetails(input: UserDataConfigRequestDetailsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserDataConfigRequestDetailsOutput;
    }>;
    requestDetails(input: UserDataConfigRequestDetailsInput): Promise<{
        transaction: Transaction;
        output: UserDataConfigRequestDetailsOutput;
    }>;
    runGetFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserDataConfigGetFlexClientAddrOutput;
    }>;
    getFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<{
        transaction: Transaction;
        output: UserDataConfigGetFlexClientAddrOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserDataConfigGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: UserDataConfigGetDetailsOutput;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: UserDataConfigGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: UserDataConfigGetConfigOutput;
    }>;
}
//# sourceMappingURL=UserDataConfigAccount.d.ts.map