import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class stTONsAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(): Promise<{
        transaction: Transaction;
    }>;
    runLendOwnership(input: {
        _answer_id: number;
        answer_addr: string;
        evers: string | number | bigint;
        dest: string;
        lend_balance: string | number | bigint;
        lend_finish_time: number;
        deploy_init_cl: string;
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalLendOwnership(input: {
        _answer_id: number;
        answer_addr: string;
        evers: string | number | bigint;
        dest: string;
        lend_balance: string | number | bigint;
        lend_finish_time: number;
        deploy_init_cl: string;
        payload: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReturnOwnership(input: {
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReturnOwnership(input: {
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReturnStake(input: {
        dst: string;
        processing_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReturnStake(input: {
        dst: string;
        processing_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runFinalize(input: {
        dst: string;
        ignore_errors: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalFinalize(input: {
        dst: string;
        ignore_errors: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReceiveStakeTransfer(input: {
        source: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReceiveStakeTransfer(input: {
        source: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReceiveAnswer(input: {
        errcode: number;
        comment: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReceiveAnswer(input: {
        errcode: number;
        comment: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            owner_pubkey: string;
            owner_address: string;
            depool: string;
            depool_pubkey: string;
            balance: string;
            lend_ownership: {
                lend_addr: string;
                lend_balance: string;
                lend_finish_time: number;
            };
            lend_balance: string;
            transferring_stake_back: boolean;
            last_depool_error: number;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            owner_pubkey: string;
            owner_address: string;
            depool: string;
            depool_pubkey: string;
            balance: string;
            lend_ownership: {
                lend_addr: string;
                lend_balance: string;
                lend_finish_time: number;
            };
            lend_balance: string;
            transferring_stake_back: boolean;
            last_depool_error: number;
        };
    }>;
    runCalcStTONsAddr(input: {
        code: string;
        owner_pubkey: string | number | bigint;
        owner_address?: string;
        depool: string;
        depool_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalCalcStTONsAddr(input: {
        code: string;
        owner_pubkey: string | number | bigint;
        owner_address?: string;
        depool: string;
        depool_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=stTONsAccount.d.ts.map