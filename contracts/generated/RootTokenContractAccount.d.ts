import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class RootTokenContractAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_owner?: string;
        total_supply: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWalletCode(input: {
        _answer_id: number;
        wallet_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runLocalSetWalletCode(input: {
        _answer_id: number;
        wallet_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runDeployWallet(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        owner?: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        notify?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployWallet(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        owner?: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        notify?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runDeployEmptyWallet(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        owner?: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployEmptyWallet(input: {
        _answer_id: number;
        pubkey: string | number | bigint;
        owner?: string;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGrant(input: {
        _answer_id: number;
        dest: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        notify?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalGrant(input: {
        _answer_id: number;
        dest: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        notify?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runMint(input: {
        _answer_id: number;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runLocalMint(input: {
        _answer_id: number;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runRequestTotalGranted(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalRequestTotalGranted(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetName(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetName(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetSymbol(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetSymbol(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetDecimals(): Promise<{
        transaction: Transaction;
        output: {
            value0: number;
        };
    }>;
    runLocalGetDecimals(): Promise<{
        transaction: Transaction;
        output: {
            value0: number;
        };
    }>;
    runGetRootKey(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetRootKey(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetRootOwner(): Promise<{
        transaction: Transaction;
        output: {
            value0?: string;
        };
    }>;
    runLocalGetRootOwner(): Promise<{
        transaction: Transaction;
        output: {
            value0?: string;
        };
    }>;
    runGetTotalSupply(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetTotalSupply(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetTotalGranted(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetTotalGranted(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runHasWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runLocalHasWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runGetWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetWalletAddress(input: {
        pubkey: string | number | bigint;
        owner?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetWalletAddress(input: {
        pubkey: string | number | bigint;
        owner?: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetWalletCodeHash(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetWalletCodeHash(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=RootTokenContractAccount.d.ts.map