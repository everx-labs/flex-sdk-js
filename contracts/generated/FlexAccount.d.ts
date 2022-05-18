import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx } from "../helpers";
export declare class FlexAccount extends Account {
    static package: ContractPackageEx;
    constructor(options: AccountOptions);
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: {
        flex_keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnDeploy(input: {
        flex_keep_evers: string | number | bigint;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
        old_flex?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAddXchgPair(input: {
        _answer_id: number;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
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
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        notify_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalAddXchgPair(input: {
        _answer_id: number;
        evers: {
            deploy: string | number | bigint;
            setnext: string | number | bigint;
            pair_keep: string | number | bigint;
        };
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
        min_amount: string | number | bigint;
        minmove: string | number | bigint;
        price_denum: string | number | bigint;
        notify_addr: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runUnlistXchgPair(input: {
        pair: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnlistXchgPair(input: {
        pair: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runRequestPairs(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            first_pair?: string;
            last_pair?: string;
        };
    }>;
    runLocalRequestPairs(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            first_pair?: string;
            last_pair?: string;
        };
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
            ev_cfg: {
                transfer_tip3: string;
                return_ownership: string;
                order_answer: string;
                process_queue: string;
                send_notify: string;
                dest_wallet_keep_evers: string;
            };
            deals_limit: number;
            xchg_pair_code: string;
            xchg_price_code: string;
        };
    }>;
    runLocalGetConfig(): Promise<{
        transaction: Transaction;
        output: {
            super_root: string;
            ev_cfg: {
                transfer_tip3: string;
                return_ownership: string;
                order_answer: string;
                process_queue: string;
                send_notify: string;
                dest_wallet_keep_evers: string;
            };
            deals_limit: number;
            xchg_pair_code: string;
            xchg_price_code: string;
        };
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            xchg_pair_code: string;
            unsalted_price_code_hash: string;
            first_pair?: string;
            last_pair?: string;
            pairs_count: number;
        };
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
            xchg_pair_code: string;
            unsalted_price_code_hash: string;
            first_pair?: string;
            last_pair?: string;
            pairs_count: number;
        };
    }>;
    runGetXchgTradingPair(input: {
        tip3_major_root: string;
        tip3_minor_root: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetXchgTradingPair(input: {
        tip3_major_root: string;
        tip3_minor_root: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runCalcLendTokensForOrder(input: {
        sell: boolean;
        major_tokens: string | number | bigint;
        price: {
            num: string | number | bigint;
            denum: string | number | bigint;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalCalcLendTokensForOrder(input: {
        sell: boolean;
        major_tokens: string | number | bigint;
        price: {
            num: string | number | bigint;
            denum: string | number | bigint;
        };
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=FlexAccount.d.ts.map