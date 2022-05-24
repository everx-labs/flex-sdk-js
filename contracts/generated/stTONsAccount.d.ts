import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type stTONsLendOwnershipInput = {
    _answer_id: number;
    answer_addr: string;
    evers: string | number | bigint;
    dest: string;
    lend_balance: string | number | bigint;
    lend_finish_time: number;
    deploy_init_cl: string;
    payload: string;
};
export declare type stTONsReturnOwnershipInput = {
    tokens: string | number | bigint;
};
export declare type stTONsReturnStakeInput = {
    dst: string;
    processing_evers: string | number | bigint;
};
export declare type stTONsFinalizeInput = {
    dst: string;
    ignore_errors: boolean;
};
export declare type stTONsReceiveStakeTransferInput = {
    source: string;
    amount: string | number | bigint;
};
export declare type stTONsReceiveAnswerInput = {
    errcode: number;
    comment: string | number | bigint;
};
export declare type stTONsGetDetailsOutput = {
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
export declare type stTONsCalcStTONsAddrInput = {
    code: string;
    owner_pubkey: string | number | bigint;
    owner_address?: string;
    depool: string;
    depool_pubkey: string | number | bigint;
};
export declare type stTONsCalcStTONsAddrOutput = {
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
    runOnDeploy(): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(): Promise<{
        transaction: Transaction;
    }>;
    runLendOwnership(input: stTONsLendOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    lendOwnership(input: stTONsLendOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    runReturnOwnership(input: stTONsReturnOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    returnOwnership(input: stTONsReturnOwnershipInput): Promise<{
        transaction: Transaction;
    }>;
    runReturnStake(input: stTONsReturnStakeInput): Promise<{
        transaction: Transaction;
    }>;
    returnStake(input: stTONsReturnStakeInput): Promise<{
        transaction: Transaction;
    }>;
    runFinalize(input: stTONsFinalizeInput): Promise<{
        transaction: Transaction;
    }>;
    finalize(input: stTONsFinalizeInput): Promise<{
        transaction: Transaction;
    }>;
    runReceiveStakeTransfer(input: stTONsReceiveStakeTransferInput): Promise<{
        transaction: Transaction;
    }>;
    receiveStakeTransfer(input: stTONsReceiveStakeTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runReceiveAnswer(input: stTONsReceiveAnswerInput): Promise<{
        transaction: Transaction;
    }>;
    receiveAnswer(input: stTONsReceiveAnswerInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: stTONsGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: stTONsGetDetailsOutput;
    }>;
    runCalcStTONsAddr(input: stTONsCalcStTONsAddrInput): Promise<{
        transaction: Transaction;
        output: stTONsCalcStTONsAddrOutput;
    }>;
    calcStTONsAddr(input: stTONsCalcStTONsAddrInput): Promise<{
        transaction: Transaction;
        output: stTONsCalcStTONsAddrOutput;
    }>;
}
//# sourceMappingURL=stTONsAccount.d.ts.map