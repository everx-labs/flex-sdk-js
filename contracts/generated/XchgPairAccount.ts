
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type XchgPairOnDeployInput = {
    min_amount: string | number | bigint /* uint128 */,
    minmove: string | number | bigint /* uint128 */,
    price_denum: string | number | bigint /* uint128 */,
    deploy_value: string | number | bigint /* uint128 */,
    notify_addr: string /* address */,
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
};

export type XchgPairRequestDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type XchgPairRequestDetailsOutput = {
    tip3_major_root: string /* address */,
    tip3_minor_root: string /* address */,
    min_amount: string /* uint128 */,
    minmove: string /* uint128 */,
    price_denum: string /* uint128 */,
    notify_addr: string /* address */,
    major_reserve_wallet: string /* address */,
    minor_reserve_wallet: string /* address */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    next?: string /* optional(address) */,
    unlisted: boolean /* bool */,
};

export type XchgPairSetNextInput = {
    next: string /* address */,
};

export type XchgPairGetDetailsOutput = {
    tip3_major_root: string /* address */,
    tip3_minor_root: string /* address */,
    min_amount: string /* uint128 */,
    minmove: string /* uint128 */,
    price_denum: string /* uint128 */,
    notify_addr: string /* address */,
    major_reserve_wallet: string /* address */,
    minor_reserve_wallet: string /* address */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    next?: string /* optional(address) */,
    unlisted: boolean /* bool */,
};

export type XchgPairGetConfigOutput = {
    flex: string /* address */,
    ev_cfg: {
        transfer_tip3: string /* uint128 */,
        return_ownership: string /* uint128 */,
        order_answer: string /* uint128 */,
        process_queue: string /* uint128 */,
        send_notify: string /* uint128 */,
        dest_wallet_keep_evers: string /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
    xchg_price_code: string /* cell */,
};

export type XchgPairGetPriceXchgCodeInput = {
    salted: boolean /* bool */,
};

export type XchgPairGetPriceXchgCodeOutput = {
    value0: string /* cell */,
};

export type XchgPairGetPriceXchgSaltOutput = {
    value0: string /* cell */,
};


export class XchgPairAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"deploy_value","type":"uint128"},{"name":"notify_addr","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"}],"outputs":[],"id":"0xa"},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0xb"},{"name":"setNext","inputs":[{"name":"next","type":"address"}],"outputs":[],"id":"0xc"},{"name":"unlist","inputs":[],"outputs":[],"id":"0xd"},{"name":"getDetails","inputs":[],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0x100"},{"name":"getConfig","inputs":[],"outputs":[{"name":"flex","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_price_code","type":"cell"}],"id":"0xe"},{"name":"getPriceXchgCode","inputs":[{"name":"salted","type":"bool"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x200"},{"name":"getPriceXchgSalt","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0xf"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"tip3_major_root_","type":"address"},{"name":"tip3_minor_root_","type":"address"},{"name":"min_amount_","type":"uint128"},{"name":"minmove_","type":"uint128"},{"name":"price_denum_","type":"uint128"},{"name":"notify_addr_","type":"address"},{"name":"major_reserve_wallet_","type":"address"},{"name":"minor_reserve_wallet_","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg_","type":"optional(tuple)"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg_","type":"optional(tuple)"},{"name":"next_","type":"optional(address)"},{"name":"unlisted_","type":"bool"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "f3392e81c3b90c3595d63c7e0a8f9b290010a2a367fb0d047eff5fbb7c08ede4",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(XchgPairAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: XchgPairOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: XchgPairOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runRequestDetails(input: XchgPairRequestDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: XchgPairRequestDetailsOutput,
    }> {
        return await runHelper(this, "requestDetails", input);
    }

    async requestDetails(input: XchgPairRequestDetailsInput): Promise<{
        transaction: Transaction,
        output: XchgPairRequestDetailsOutput,
    }> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runSetNext(input: XchgPairSetNextInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setNext", input);
    }

    async setNext(input: XchgPairSetNextInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNext", input);
    }

    async runUnlist(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unlist", {});
    }

    async unlist(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlist", {});
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: XchgPairGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: XchgPairGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: XchgPairGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: XchgPairGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetPriceXchgCode(input: XchgPairGetPriceXchgCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: XchgPairGetPriceXchgCodeOutput,
    }> {
        return await runHelper(this, "getPriceXchgCode", input);
    }

    async getPriceXchgCode(input: XchgPairGetPriceXchgCodeInput): Promise<{
        transaction: Transaction,
        output: XchgPairGetPriceXchgCodeOutput,
    }> {
        return await runLocalHelper(this, "getPriceXchgCode", input);
    }

    async runGetPriceXchgSalt(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: XchgPairGetPriceXchgSaltOutput,
    }> {
        return await runHelper(this, "getPriceXchgSalt", {});
    }

    async getPriceXchgSalt(): Promise<{
        transaction: Transaction,
        output: XchgPairGetPriceXchgSaltOutput,
    }> {
        return await runLocalHelper(this, "getPriceXchgSalt", {});
    }

}

