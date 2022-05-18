import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class XchgPairAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        deploy_value: string | number | bigint;
        notify_addr: string;
        major_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        minor_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        deploy_value: string | number | bigint;
        notify_addr: string;
        major_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
        minor_tip3cfg: {
            name: string;
            symbol: string;
            decimals: number;
            root_pubkey: string | number | bigint;
            root_address: string;
        };
    }): Promise<{
        transaction: Transaction;
    }>;
    runRequestDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            tip3_major_root: string;
            tip3_minor_root: string;
            min_amount: string;
            minmove: string;
            price_denum: string;
            notify_addr: string;
            major_reserve_wallet: string;
            minor_reserve_wallet: string;
            major_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            minor_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            next?: string;
            unlisted: boolean;
        };
    }>;
    runLocalRequestDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            tip3_major_root: string;
            tip3_minor_root: string;
            min_amount: string;
            minmove: string;
            price_denum: string;
            notify_addr: string;
            major_reserve_wallet: string;
            minor_reserve_wallet: string;
            major_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            minor_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            next?: string;
            unlisted: boolean;
        };
    }>;
    runSetNext(input: {
        next: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalSetNext(input: {
        next: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnlist(): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlist(): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            tip3_major_root: string;
            tip3_minor_root: string;
            min_amount: string;
            minmove: string;
            price_denum: string;
            notify_addr: string;
            major_reserve_wallet: string;
            minor_reserve_wallet: string;
            major_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            minor_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            next?: string;
            unlisted: boolean;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            tip3_major_root: string;
            tip3_minor_root: string;
            min_amount: string;
            minmove: string;
            price_denum: string;
            notify_addr: string;
            major_reserve_wallet: string;
            minor_reserve_wallet: string;
            major_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            minor_tip3cfg: {
                name: string;
                symbol: string;
                decimals: number;
                root_pubkey: string;
                root_address: string;
            };
            next?: string;
            unlisted: boolean;
        };
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            flex: string;
            ev_cfg: {
                transfer_tip3: string;
                return_ownership: string;
                order_answer: string;
                process_queue: string;
                send_notify: string;
                dest_wallet_keep_evers: string;
            };
            deals_limit: number;
            xchg_price_code: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            flex: string;
            ev_cfg: {
                transfer_tip3: string;
                return_ownership: string;
                order_answer: string;
                process_queue: string;
                send_notify: string;
                dest_wallet_keep_evers: string;
            };
            deals_limit: number;
            xchg_price_code: string;
        };
    }>;
    runGetPriceXchgCode(input: {
        salted: boolean;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetPriceXchgCode(input: {
        salted: boolean;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetPriceXchgSalt(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetPriceXchgSalt(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=XchgPairAccount.d.ts.map