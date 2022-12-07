import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type UserDataConfigOnDeployInput = {
    binding: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    flex_client_stub: string;
    flex_client_code: string;
    auth_index_code: string;
    user_id_index_code: string;
};
export type UserDataConfigDeployFlexClientInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    deploy_evers: string | number | bigint;
    signature: string;
};
export type UserDataConfigDeployFlexClientOutput = {
    value0: string;
};
export type UserDataConfigRequestDetailsInput = {
    _answer_id: number;
};
export type UserDataConfigRequestDetailsOutput = {
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
export type UserDataConfigGetFlexClientAddrInput = {
    pubkey: string | number | bigint;
};
export type UserDataConfigGetFlexClientAddrOutput = {
    value0: string;
};
export type UserDataConfigGetDetailsOutput = {
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
export type UserDataConfigGetConfigOutput = {
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
    runOnDeploy(input: UserDataConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: UserDataConfigOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runDeployFlexClient(input: UserDataConfigDeployFlexClientInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigDeployFlexClientOutput>>;
    deployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<RunLocalHelperResult<UserDataConfigDeployFlexClientOutput>>;
    runRequestDetails(input: UserDataConfigRequestDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigRequestDetailsOutput>>;
    requestDetails(input: UserDataConfigRequestDetailsInput): Promise<RunLocalHelperResult<UserDataConfigRequestDetailsOutput>>;
    runGetFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetFlexClientAddrOutput>>;
    getFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<RunLocalHelperResult<UserDataConfigGetFlexClientAddrOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<UserDataConfigGetDetailsOutput>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<UserDataConfigGetConfigOutput>>;
}
//# sourceMappingURL=UserDataConfigAccount.d.ts.map