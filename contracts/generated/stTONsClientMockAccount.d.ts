import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    runDeployStTONs(input: {
        evers: string | number | bigint;
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
    runLocalDeployStTONs(input: {
        evers: string | number | bigint;
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
    runReturnStake(input: {
        stTONsAddr: string;
        dst: string;
        processing_evers: string | number | bigint;
        depool_processing_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReturnStake(input: {
        stTONsAddr: string;
        dst: string;
        processing_evers: string | number | bigint;
        depool_processing_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runFinalize(input: {
        stTONsAddr: string;
        dst: string;
        processing_evers: string | number | bigint;
        ignore_errors: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalFinalize(input: {
        stTONsAddr: string;
        dst: string;
        processing_evers: string | number | bigint;
        ignore_errors: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetOwnerPubkey(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetOwnerPubkey(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=stTONsClientMockAccount.d.ts.map