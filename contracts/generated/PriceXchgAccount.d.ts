import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class PriceXchgAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnTip3LendOwnership(input: {
        _answer_id: number;
        balance: string | number | bigint;
        lend_finish_time: number;
        creds: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        payload: string;
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            err_code: number;
            processed: string;
            enqueued: string;
            price_num: string;
            price_denum: string;
            user_id: string;
            order_id: string;
            pair: string;
            major_decimals: number;
            minor_decimals: number;
            sell: boolean;
        };
    }>;
    runLocalOnTip3LendOwnership(input: {
        _answer_id: number;
        balance: string | number | bigint;
        lend_finish_time: number;
        creds: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        payload: string;
        answer_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            err_code: number;
            processed: string;
            enqueued: string;
            price_num: string;
            price_denum: string;
            user_id: string;
            order_id: string;
            pair: string;
            major_decimals: number;
            minor_decimals: number;
            sell: boolean;
        };
    }>;
    runProcessQueue(): Promise<{
        transaction: Transaction;
    }>;
    runLocalProcessQueue(): Promise<{
        transaction: Transaction;
    }>;
    runCancelOrder(input: {
        sell: boolean;
        user_id?: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCancelOrder(input: {
        sell: boolean;
        user_id?: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runCancelWalletOrder(input: {
        sell: boolean;
        owner: string;
        user_id: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCancelWalletOrder(input: {
        sell: boolean;
        owner: string;
        user_id: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            sells: {
                immediate_client: boolean;
                post_order: boolean;
                original_amount: string;
                amount: string;
                account: string;
                lend_amount: string;
                tip3_wallet_provide: {
                    workchain_id: number;
                    address: string;
                };
                client_addr: {
                    workchain_id: number;
                    address: string;
                };
                order_finish_time: number;
                user_id: string;
                order_id: string;
                ltime: string;
            }[];
            buys: {
                immediate_client: boolean;
                post_order: boolean;
                original_amount: string;
                amount: string;
                account: string;
                lend_amount: string;
                tip3_wallet_provide: {
                    workchain_id: number;
                    address: string;
                };
                client_addr: {
                    workchain_id: number;
                    address: string;
                };
                order_finish_time: number;
                user_id: string;
                order_id: string;
                ltime: string;
            }[];
            salt: {
                flex: string;
                pair: string;
                notify_addr: string;
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
                major_reserve_wallet: string;
                minor_reserve_wallet: string;
                ev_cfg: {
                    transfer_tip3: string;
                    return_ownership: string;
                    order_answer: string;
                    process_queue: string;
                    send_notify: string;
                    dest_wallet_keep_evers: string;
                };
                min_amount: string;
                minmove: string;
                price_denum: string;
                deals_limit: number;
                workchain_id: number;
            };
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            sells: {
                immediate_client: boolean;
                post_order: boolean;
                original_amount: string;
                amount: string;
                account: string;
                lend_amount: string;
                tip3_wallet_provide: {
                    workchain_id: number;
                    address: string;
                };
                client_addr: {
                    workchain_id: number;
                    address: string;
                };
                order_finish_time: number;
                user_id: string;
                order_id: string;
                ltime: string;
            }[];
            buys: {
                immediate_client: boolean;
                post_order: boolean;
                original_amount: string;
                amount: string;
                account: string;
                lend_amount: string;
                tip3_wallet_provide: {
                    workchain_id: number;
                    address: string;
                };
                client_addr: {
                    workchain_id: number;
                    address: string;
                };
                order_finish_time: number;
                user_id: string;
                order_id: string;
                ltime: string;
            }[];
            salt: {
                flex: string;
                pair: string;
                notify_addr: string;
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
                major_reserve_wallet: string;
                minor_reserve_wallet: string;
                ev_cfg: {
                    transfer_tip3: string;
                    return_ownership: string;
                    order_answer: string;
                    process_queue: string;
                    send_notify: string;
                    dest_wallet_keep_evers: string;
                };
                min_amount: string;
                minmove: string;
                price_denum: string;
                deals_limit: number;
                workchain_id: number;
            };
        };
    }>;
}
//# sourceMappingURL=PriceXchgAccount.d.ts.map