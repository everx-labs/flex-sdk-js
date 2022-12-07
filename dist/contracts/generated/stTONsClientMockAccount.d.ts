import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type stTONsClientMockDeployStTONsInput = {
    evers: string | number | bigint;
    code: string;
    owner_pubkey: string | number | bigint;
    owner_address?: string;
    depool: string;
    depool_pubkey: string | number | bigint;
};
export type stTONsClientMockDeployStTONsOutput = {
    value0: string;
};
export type stTONsClientMockReturnStakeInput = {
    stTONsAddr: string;
    dst: string;
    processing_evers: string | number | bigint;
    depool_processing_evers: string | number | bigint;
};
export type stTONsClientMockFinalizeInput = {
    stTONsAddr: string;
    dst: string;
    processing_evers: string | number | bigint;
    ignore_errors: boolean;
};
export type stTONsClientMockGetOwnerPubkeyOutput = {
    value0: string;
};
export declare class stTONsClientMockAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owner_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployStTONs(input: stTONsClientMockDeployStTONsInput, options?: RunHelperOptions): Promise<RunHelperResult<stTONsClientMockDeployStTONsOutput>>;
    deployStTONs(input: stTONsClientMockDeployStTONsInput): Promise<RunLocalHelperResult<stTONsClientMockDeployStTONsOutput>>;
    runReturnStake(input: stTONsClientMockReturnStakeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    returnStake(input: stTONsClientMockReturnStakeInput): Promise<RunLocalHelperResult<void>>;
    runFinalize(input: stTONsClientMockFinalizeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    finalize(input: stTONsClientMockFinalizeInput): Promise<RunLocalHelperResult<void>>;
    runGetOwnerPubkey(options?: RunHelperOptions): Promise<RunHelperResult<stTONsClientMockGetOwnerPubkeyOutput>>;
    getOwnerPubkey(): Promise<RunLocalHelperResult<stTONsClientMockGetOwnerPubkeyOutput>>;
}
//# sourceMappingURL=stTONsClientMockAccount.d.ts.map