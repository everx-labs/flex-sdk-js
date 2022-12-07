import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type stTONsLendOwnershipInput = {
    _answer_id: number;
    answer_addr: string;
    evers: string | number | bigint;
    dest: string;
    lend_balance: string | number | bigint;
    lend_finish_time: number;
    deploy_init_cl: string;
    payload: string;
};
export type stTONsReturnOwnershipInput = {
    tokens: string | number | bigint;
};
export type stTONsReturnStakeInput = {
    dst: string;
    processing_evers: string | number | bigint;
};
export type stTONsFinalizeInput = {
    dst: string;
    ignore_errors: boolean;
};
export type stTONsReceiveStakeTransferInput = {
    source: string;
    amount: string | number | bigint;
};
export type stTONsReceiveAnswerInput = {
    errcode: number;
    comment: string | number | bigint;
};
export type stTONsGetDetailsOutput = {
    owner_pubkey: string;
    owner_address: string;
    depool: string;
    depool_pubkey: string;
    balance: string;
    lend_ownership: {
        lend_addr: string;
        lend_balance: string;
        lend_finish_time: number;
    }[];
    lend_balance: string;
    transferring_stake_back: boolean;
    last_depool_error: number;
};
export type stTONsCalcStTONsAddrInput = {
    code: string;
    owner_pubkey: string | number | bigint;
    owner_address?: string;
    depool: string;
    depool_pubkey: string | number | bigint;
};
export type stTONsCalcStTONsAddrOutput = {
    value0: string;
};
export declare class stTONsAccount extends Account {
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
    runLendOwnership(input: stTONsLendOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    lendOwnership(input: stTONsLendOwnershipInput): Promise<RunLocalHelperResult<void>>;
    runReturnOwnership(input: stTONsReturnOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    returnOwnership(input: stTONsReturnOwnershipInput): Promise<RunLocalHelperResult<void>>;
    runReturnStake(input: stTONsReturnStakeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    returnStake(input: stTONsReturnStakeInput): Promise<RunLocalHelperResult<void>>;
    runFinalize(input: stTONsFinalizeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    finalize(input: stTONsFinalizeInput): Promise<RunLocalHelperResult<void>>;
    runReceiveStakeTransfer(input: stTONsReceiveStakeTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    receiveStakeTransfer(input: stTONsReceiveStakeTransferInput): Promise<RunLocalHelperResult<void>>;
    runReceiveAnswer(input: stTONsReceiveAnswerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    receiveAnswer(input: stTONsReceiveAnswerInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<stTONsGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<stTONsGetDetailsOutput>>;
    runCalcStTONsAddr(input: stTONsCalcStTONsAddrInput, options?: RunHelperOptions): Promise<RunHelperResult<stTONsCalcStTONsAddrOutput>>;
    calcStTONsAddr(input: stTONsCalcStTONsAddrInput): Promise<RunLocalHelperResult<stTONsCalcStTONsAddrOutput>>;
}
//# sourceMappingURL=stTONsAccount.d.ts.map