import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class DePoolMockAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(input: {
        owner_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSendOnTransfer(input: {
        dst: string;
        src: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSendOnTransfer(input: {
        dst: string;
        src: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransferStake(input: {
        destination: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransferStake(input: {
        destination: string;
        amount: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            owner_pubkey: string;
            fwd_records: {
                dst: string;
                src: string;
                amount: string;
                timestamp: string;
            };
            bck_records: {
                dst: string;
                src: string;
                amount: string;
                timestamp: string;
            };
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            owner_pubkey: string;
            fwd_records: {
                dst: string;
                src: string;
                amount: string;
                timestamp: string;
            };
            bck_records: {
                dst: string;
                src: string;
                amount: string;
                timestamp: string;
            };
        };
    }>;
}
//# sourceMappingURL=DePoolMockAccount.d.ts.map