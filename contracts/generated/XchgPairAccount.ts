
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
        codeHash: "7f6c1c40bf736e02e37e5b2a516331c485b02222603b2c44cccaa68964e3ba9b",
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

