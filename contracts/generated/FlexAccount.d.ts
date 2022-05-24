import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexOnDeployInput = {
    flex_keep_evers: string | number | bigint;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        pair_keep: string | number | bigint;
    };
    old_flex?: string;
};
export declare type FlexAddXchgPairInput = {
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
};
export declare type FlexAddXchgPairOutput = {
    value0: string;
};
export declare type FlexUnlistXchgPairInput = {
    pair: string;
};
export declare type FlexRequestPairsInput = {
    _answer_id: number;
};
export declare type FlexRequestPairsOutput = {
    first_pair?: string;
    last_pair?: string;
};
export declare type FlexGetConfigOutput = {
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
export declare type FlexGetDetailsOutput = {
    xchg_pair_code: string;
    unsalted_price_code_hash: string;
    first_pair?: string;
    last_pair?: string;
    pairs_count: number;
};
export declare type FlexGetXchgTradingPairInput = {
    tip3_major_root: string;
    tip3_minor_root: string;
};
export declare type FlexGetXchgTradingPairOutput = {
    value0: string;
};
export declare type FlexCalcLendTokensForOrderInput = {
    sell: boolean;
    major_tokens: string | number | bigint;
    price: {
        num: string | number | bigint;
        denum: string | number | bigint;
    };
};
export declare type FlexCalcLendTokensForOrderOutput = {
    value0: string;
};
export declare class FlexAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: FlexOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(input: FlexOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runAddXchgPair(input: FlexAddXchgPairInput): Promise<{
        transaction: Transaction;
        output: FlexAddXchgPairOutput;
    }>;
    addXchgPair(input: FlexAddXchgPairInput): Promise<{
        transaction: Transaction;
        output: FlexAddXchgPairOutput;
    }>;
    runUnlistXchgPair(input: FlexUnlistXchgPairInput): Promise<{
        transaction: Transaction;
    }>;
    unlistXchgPair(input: FlexUnlistXchgPairInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestPairs(input: FlexRequestPairsInput): Promise<{
        transaction: Transaction;
        output: FlexRequestPairsOutput;
    }>;
    requestPairs(input: FlexRequestPairsInput): Promise<{
        transaction: Transaction;
        output: FlexRequestPairsOutput;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: FlexGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: FlexGetConfigOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: FlexGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: FlexGetDetailsOutput;
    }>;
    runGetXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<{
        transaction: Transaction;
        output: FlexGetXchgTradingPairOutput;
    }>;
    getXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<{
        transaction: Transaction;
        output: FlexGetXchgTradingPairOutput;
    }>;
    runCalcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<{
        transaction: Transaction;
        output: FlexCalcLendTokensForOrderOutput;
    }>;
    calcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<{
        transaction: Transaction;
        output: FlexCalcLendTokensForOrderOutput;
    }>;
}
//# sourceMappingURL=FlexAccount.d.ts.map