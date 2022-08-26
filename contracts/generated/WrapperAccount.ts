
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
    notify?: string /* optional(cell) */,
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
    type_id: number /* uint8 */,
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


export class WrapperAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[{"name":"err_code","type":"uint32"},{"name":"flex_wallet","type":"address"}],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"},{"name":"type_id","type":"uint8"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"},{"name":"type_id_","type":"uint8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "35e11a6fa6b9d68522dfc7d60e025305c899ae5d2d1b63b1be3ed34b73466045",
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

}

