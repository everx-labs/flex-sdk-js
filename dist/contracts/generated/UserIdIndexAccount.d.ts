import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type UserIdIndexOnDeployInput = {
    lend_pubkey: string | number | bigint;
    name: string;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export type UserIdIndexReLendPubkeyInput = {
    new_lend_pubkey: string | number | bigint;
    evers_to_remove: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
};
export type UserIdIndexRequestLendPubkeyInput = {
    _answer_id: number;
    evers_balance: string | number | bigint;
};
export type UserIdIndexRequestLendPubkeyOutput = {
    value0: string;
};
export type UserIdIndexTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export type UserIdIndexSetRefillWalletInput = {
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export type UserIdIndexGetConfigOutput = {
    owner: string;
    auth_index_code: string;
};
export declare class UserIdIndexAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: UserIdIndexOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: UserIdIndexOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runReLendPubkey(input: UserIdIndexReLendPubkeyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    reLendPubkey(input: UserIdIndexReLendPubkeyInput): Promise<RunLocalHelperResult<void>>;
    runRemove(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    remove(): Promise<RunLocalHelperResult<void>>;
    runRequestLendPubkey(input: UserIdIndexRequestLendPubkeyInput, options?: RunHelperOptions): Promise<RunHelperResult<UserIdIndexRequestLendPubkeyOutput>>;
    requestLendPubkey(input: UserIdIndexRequestLendPubkeyInput): Promise<RunLocalHelperResult<UserIdIndexRequestLendPubkeyOutput>>;
    runTransfer(input: UserIdIndexTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: UserIdIndexTransferInput): Promise<RunLocalHelperResult<void>>;
    runSetRefillWallet(input: UserIdIndexSetRefillWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setRefillWallet(input: UserIdIndexSetRefillWalletInput): Promise<RunLocalHelperResult<void>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<UserIdIndexGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<UserIdIndexGetConfigOutput>>;
}
//# sourceMappingURL=UserIdIndexAccount.d.ts.map