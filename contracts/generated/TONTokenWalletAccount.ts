
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
export type TONTokenWalletTransferInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletTransferToRecipientInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    deploy: boolean /* bool */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletBalanceInput = {
    _answer_id: number /* uint32 */,
};

export type TONTokenWalletBalanceOutput = {
    value0: string /* uint128 */,
};

export type TONTokenWalletAcceptMintInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletAcceptTransferInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    payload?: string /* optional(cell) */,
};

export type TONTokenWalletDestroyInput = {
    dest: string /* address */,
};

export type TONTokenWalletDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type TONTokenWalletDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type TONTokenWalletGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type TONTokenWalletGetBalanceOutput = {
    value0: string /* uint128 */,
};


export class TONTokenWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"destroy","inputs":[{"name":"dest","type":"address"}],"outputs":[],"id":"0xd"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "258a6a88cc043ba945e1d44650d0a27ee366cf0f76ca6750573cb3ba1f2b10e1",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(TONTokenWalletAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async transferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletBalanceOutput,
    }> {
        return await runHelper(this, "balance", input);
    }

    async balance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: TONTokenWalletBalanceOutput,
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async acceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async acceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runDestroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "destroy", input);
    }

    async destroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroy", input);
    }

    async runDetails(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletDetailsOutput,
    }> {
        return await runHelper(this, "details", input);
    }

    async details(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: TONTokenWalletDetailsOutput,
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: TONTokenWalletGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletGetBalanceOutput,
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async getBalance_(): Promise<{
        transaction: Transaction,
        output: TONTokenWalletGetBalanceOutput,
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

