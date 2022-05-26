
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
export type WrapperInitInput = {
    external_wallet: string /* address */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperOnTip3TransferInput = {
    _answer_id: number /* uint32 */,
    balance: string | number | bigint /* uint128 */,
    new_tokens: string | number | bigint /* uint128 */,
    evers_balance: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    sender?: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* optional(tuple) */,
    receiver: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    payload: string /* cell */,
    answer_addr: string /* address */,
};

export type WrapperOnTip3TransferOutput = {
    err_code: number /* uint32 */,
    flex_wallet: string /* address */,
};

export type WrapperBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type WrapperTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperClonedOutput = {
    first?: string /* optional(address) */,
    second: string /* uint256 */,
};

export type WrapperSetClonedInput = {
    cloned?: string /* optional(address) */,
    cloned_pubkey: string | number | bigint /* uint256 */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperGetDetailsOutput = {
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

export type WrapperGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperGetReserveWalletOutput = {
    value0: string /* address */,
};

export type WrapperGetTestValueOutput = {
    value0: number /* uint32 */,
};


export class WrapperAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[{"name":"err_code","type":"uint32"},{"name":"flex_wallet","type":"address"}],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"},{"name":"getTestValue","inputs":[],"outputs":[{"name":"value0","type":"uint32"}],"id":"0x13"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "329c2560076f6afc15342398bf64dc66dd000886e835a07b16e727870202941b",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperInitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperInitInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runBurn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

    async runGetTestValue(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetTestValueOutput,
    }> {
        return await runHelper(this, "getTestValue", {});
    }

    async getTestValue(): Promise<{
        transaction: Transaction,
        output: WrapperGetTestValueOutput,
    }> {
        return await runLocalHelper(this, "getTestValue", {});
    }

}

