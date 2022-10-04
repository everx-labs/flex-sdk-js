
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type FlexOnDeployInput = {
    flex_keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
};

export type FlexAddXchgPairInput = {
    _answer_id: number /* uint32 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    min_amount: string | number | bigint /* uint128 */,
    minmove: string | number | bigint /* uint128 */,
    price_denum: string | number | bigint /* uint128 */,
    notify_addr: string /* address */,
};

export type FlexAddXchgPairOutput = {
    value0: string /* address */,
};

export type FlexUnlistXchgPairInput = {
    pair: string /* address */,
};

export type FlexRequestPairsInput = {
    _answer_id: number /* uint32 */,
};

export type FlexRequestPairsOutput = {
    first_pair?: string /* optional(address) */,
    last_pair?: string /* optional(address) */,
};

export type FlexGetConfigOutput = {
    super_root: string /* address */,
    ev_cfg: {
        transfer_tip3: string /* uint128 */,
        return_ownership: string /* uint128 */,
        order_answer: string /* uint128 */,
        process_queue: string /* uint128 */,
        send_notify: string /* uint128 */,
        dest_wallet_keep_evers: string /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
    xchg_pair_code: string /* cell */,
    xchg_price_code: string /* cell */,
};

export type FlexGetDetailsOutput = {
    xchg_pair_code: string /* cell */,
    unsalted_price_code_hash: string /* uint256 */,
    first_pair?: string /* optional(address) */,
    last_pair?: string /* optional(address) */,
    pairs_count: number /* uint32 */,
};

export type FlexGetXchgTradingPairInput = {
    tip3_major_root: string /* address */,
    tip3_minor_root: string /* address */,
};

export type FlexGetXchgTradingPairOutput = {
    value0: string /* address */,
};

export type FlexCalcLendTokensForOrderInput = {
    sell: boolean /* bool */,
    major_tokens: string | number | bigint /* uint128 */,
    price: {
        num: string | number | bigint /* uint128 */,
        denum: string | number | bigint /* uint128 */,
    } /* tuple */,
};

export type FlexCalcLendTokensForOrderOutput = {
    value0: string /* uint128 */,
};


export class FlexAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"flex_keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"}],"outputs":[],"id":"0x100"},{"name":"addXchgPair","inputs":[{"name":"_answer_id","type":"uint32"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x200"},{"name":"unlistXchgPair","inputs":[{"name":"pair","type":"address"}],"outputs":[]},{"name":"requestPairs","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"}],"id":"0x300"},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"xchg_pair_code","type":"cell"},{"name":"unsalted_price_code_hash","type":"uint256"},{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"},{"name":"pairs_count","type":"uint32"}],"id":"0x15"},{"name":"getXchgTradingPair","inputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x16"},{"name":"calcLendTokensForOrder","inputs":[{"name":"sell","type":"bool"},{"name":"major_tokens","type":"uint128"},{"components":[{"name":"num","type":"uint128"},{"name":"denum","type":"uint128"}],"name":"price","type":"tuple"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"exchange_version_","type":"uint32"},{"name":"workchain_id_","type":"int8"},{"name":"xchg_pair_code_","type":"optional(cell)"},{"name":"first_pair_","type":"optional(address)"},{"name":"last_pair_","type":"optional(address)"},{"name":"pairs_count_","type":"uint32"},{"name":"flex_keep_evers_","type":"uint128"},{"name":"it_","type":"optional(address)"},{"name":"prev_clone_","type":"optional(address)"},{"name":"next_","type":"optional(address)"},{"name":"notify_addr_","type":"optional(address)"},{"name":"min_amount_","type":"uint128"},{"name":"minmove_","type":"uint128"},{"name":"price_denum_","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg_","type":"optional(tuple)"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "cd0d0207ecf68062f89963b9d7e2d289111c6dbf80524fba2275daee18934aec",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: FlexOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: FlexOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runAddXchgPair(input: FlexAddXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexAddXchgPairOutput>> {
        return await runHelper(this, "addXchgPair", input, options);
    }

    async addXchgPair(input: FlexAddXchgPairInput): Promise<RunLocalHelperResult<FlexAddXchgPairOutput>> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistXchgPair(input: FlexUnlistXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistXchgPair", input, options);
    }

    async unlistXchgPair(input: FlexUnlistXchgPairInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runRequestPairs(input: FlexRequestPairsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexRequestPairsOutput>> {
        return await runHelper(this, "requestPairs", input, options);
    }

    async requestPairs(input: FlexRequestPairsInput): Promise<RunLocalHelperResult<FlexRequestPairsOutput>> {
        return await runLocalHelper(this, "requestPairs", input);
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<FlexGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<FlexGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<FlexGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetXchgTradingPair(input: FlexGetXchgTradingPairInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexGetXchgTradingPairOutput>> {
        return await runHelper(this, "getXchgTradingPair", input, options);
    }

    async getXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<RunLocalHelperResult<FlexGetXchgTradingPairOutput>> {
        return await runLocalHelper(this, "getXchgTradingPair", input);
    }

    async runCalcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexCalcLendTokensForOrderOutput>> {
        return await runHelper(this, "calcLendTokensForOrder", input, options);
    }

    async calcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<RunLocalHelperResult<FlexCalcLendTokensForOrderOutput>> {
        return await runLocalHelper(this, "calcLendTokensForOrder", input);
    }

}

