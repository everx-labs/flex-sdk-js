import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class WrapperAccount extends Account {
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
        external_wallet: string;
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
        external_wallet: string;
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
    runOnTip3Transfer(input: {
        _answer_id: number;
        balance: string | number | bigint;
        new_tokens: string | number | bigint;
        evers_balance: string | number | bigint;
        tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        sender?: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        receiver: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        payload: string;
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            err_code: number;
            flex_wallet: string;
        };
    }>;
    runLocalOnTip3Transfer(input: {
        _answer_id: number;
        balance: string | number | bigint;
        new_tokens: string | number | bigint;
        evers_balance: string | number | bigint;
        tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        sender?: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        receiver: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        payload: string;
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            err_code: number;
            flex_wallet: string;
        };
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
//# sourceMappingURL=WrapperAccount.d.ts.map