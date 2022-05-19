import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class WrapperEverAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: {
        _answer_id: number;
        reserve_wallet_evers: string | number | bigint;
        internal_wallet_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runLocalInit(input: {
        _answer_id: number;
        reserve_wallet_evers: string | number | bigint;
        internal_wallet_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
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
    runOnEverTransfer(input: {
        _answer_id: number;
        tokens: string | number | bigint;
        args: {
            pubkey: string | number | bigint;
            owner?: string;
            evers: string | number | bigint;
            keep_evers: string | number | bigint;
        };
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnEverTransfer(input: {
        _answer_id: number;
        tokens: string | number | bigint;
        args: {
            pubkey: string | number | bigint;
            owner?: string;
            evers: string | number | bigint;
            keep_evers: string | number | bigint;
        };
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: {
        tokens: string | number | bigint;
        answer_addr: string;
        sender_pubkey: string | number | bigint;
        sender_owner?: string;
        out_pubkey: string | number | bigint;
        out_owner?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalBurn(input: {
        tokens: string | number | bigint;
        answer_addr: string;
        sender_pubkey: string | number | bigint;
        sender_owner?: string;
        out_pubkey: string | number | bigint;
        out_owner?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: {
        answer_addr?: string;
        to: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransferFromReserveWallet(input: {
        answer_addr?: string;
        to: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
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
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string;
            total_granted: string;
            wallet_code: string;
            external_wallet?: string;
            reserve_wallet: string;
            super_root: string;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string;
            total_granted: string;
            wallet_code: string;
            external_wallet?: string;
            reserve_wallet: string;
            super_root: string;
        };
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        output: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string;
            root_address: string;
        };
    }>;
    runLocalGetTip3Config(): Promise<{
        transaction: Transaction;
        output: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string;
            root_address: string;
        };
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
        };
    }>;
    runLocalHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: {
            value0: boolean;
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
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetReserveWallet(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=WrapperEverAccount.d.ts.map