
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"flex_keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"}],"outputs":[],"id":"0x100"},{"name":"addXchgPair","inputs":[{"name":"_answer_id","type":"uint32"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x200"},{"name":"unlistXchgPair","inputs":[{"name":"pair","type":"address"}],"outputs":[]},{"name":"requestPairs","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"}],"id":"0x300"},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"xchg_pair_code","type":"cell"},{"name":"unsalted_price_code_hash","type":"uint256"},{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"},{"name":"pairs_count","type":"uint32"}],"id":"0x15"},{"name":"getXchgTradingPair","inputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x16"},{"name":"calcLendTokensForOrder","inputs":[{"name":"sell","type":"bool"},{"name":"major_tokens","type":"uint128"},{"components":[{"name":"num","type":"uint128"},{"name":"denum","type":"uint128"}],"name":"price","type":"tuple"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"exchange_version_","type":"uint32"},{"name":"workchain_id_","type":"int8"},{"name":"xchg_pair_code_","type":"optional(cell)"},{"name":"first_pair_","type":"optional(address)"},{"name":"last_pair_","type":"optional(address)"},{"name":"pairs_count_","type":"uint32"},{"name":"flex_keep_evers_","type":"uint128"},{"name":"it_","type":"optional(address)"},{"name":"prev_clone_","type":"optional(address)"},{"name":"next_","type":"optional(address)"},{"name":"notify_addr_","type":"optional(address)"},{"name":"min_amount_","type":"uint128"},{"name":"minmove_","type":"uint128"},{"name":"price_denum_","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg_","type":"optional(tuple)"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "534d5301d5281e8cbba2f60cf0443afe172857ac8e378184e88df4685feb36a7",
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

