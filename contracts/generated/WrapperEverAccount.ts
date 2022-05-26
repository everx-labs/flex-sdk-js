
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
export type WrapperEverInitInput = {
    _answer_id: number /* uint32 */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperEverInitOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperEverDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperEverOnEverTransferInput = {
    _answer_id: number /* uint32 */,
    tokens: string | number | bigint /* uint128 */,
    args: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
        keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
    answer_addr: string /* address */,
};

export type WrapperEverBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type WrapperEverTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperEverRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperEverClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverClonedOutput = {
    first?: string /* optional(address) */,
    second: string /* uint256 */,
};

export type WrapperEverSetClonedInput = {
    cloned?: string /* optional(address) */,
    cloned_pubkey: string | number | bigint /* uint256 */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperEverGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    total_granted: string /* uint128 */,
    wallet_code: string /* cell */,
    external_wallet?: string /* optional(address) */,
    reserve_wallet: string /* address */,
    super_root: string /* address */,
    cloned?: string /* optional(address) */,
};

export type WrapperEverGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperEverHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperEverGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperEverGetReserveWalletOutput = {
    value0: string /* address */,
};


export class WrapperEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onEverTransfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"name":"args","type":"tuple"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "92969bf0cfc6a1e213b0467f02e0f1082cbc9b17abba838fb34d9c1ed505f9cb",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperEverAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverInitOutput,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        output: WrapperEverInitOutput,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onEverTransfer", input);
    }

    async onEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onEverTransfer", input);
    }

    async runBurn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

