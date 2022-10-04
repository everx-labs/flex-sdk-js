import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
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
    runOnDeploy(input: FlexOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: FlexOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runAddXchgPair(input: FlexAddXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexAddXchgPairOutput>>;
    addXchgPair(input: FlexAddXchgPairInput): Promise<RunLocalHelperResult<FlexAddXchgPairOutput>>;
    runUnlistXchgPair(input: FlexUnlistXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlistXchgPair(input: FlexUnlistXchgPairInput): Promise<RunLocalHelperResult<void>>;
    runRequestPairs(input: FlexRequestPairsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexRequestPairsOutput>>;
    requestPairs(input: FlexRequestPairsInput): Promise<RunLocalHelperResult<FlexRequestPairsOutput>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<FlexGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<FlexGetConfigOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<FlexGetDetailsOutput>>;
    runGetXchgTradingPair(input: FlexGetXchgTradingPairInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexGetXchgTradingPairOutput>>;
    getXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<RunLocalHelperResult<FlexGetXchgTradingPairOutput>>;
    runCalcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexCalcLendTokensForOrderOutput>>;
    calcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<RunLocalHelperResult<FlexCalcLendTokensForOrderOutput>>;
}
//# sourceMappingURL=FlexAccount.d.ts.map