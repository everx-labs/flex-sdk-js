import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class UserIdIndexAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        lend_pubkey: string | number | bigint;
        name: string;
        evers_to_auth_idx: string | number | bigint;
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        lend_pubkey: string | number | bigint;
        name: string;
        evers_to_auth_idx: string | number | bigint;
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReLendPubkey(input: {
        new_lend_pubkey: string | number | bigint;
        evers_to_remove: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReLendPubkey(input: {
        new_lend_pubkey: string | number | bigint;
        evers_to_remove: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runRemove(): Promise<{
        transaction: Transaction;
    }>;
    runLocalRemove(): Promise<{
        transaction: Transaction;
    }>;
    runRequestLendPubkey(input: {
        _answer_id: number;
        evers_balance: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalRequestLendPubkey(input: {
        _answer_id: number;
        evers_balance: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runTransfer(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransfer(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetRefillWallet(input: {
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetRefillWallet(input: {
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            owner: string;
            auth_index_code: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            owner: string;
            auth_index_code: string;
        };
    }>;
}
//# sourceMappingURL=UserIdIndexAccount.d.ts.map