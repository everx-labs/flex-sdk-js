
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"destroy","inputs":[{"name":"dest","type":"address"}],"outputs":[],"id":"0xd"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "2c932da753bba7e9d89efea63b2f61b8e21301b6d84fda737fbcf6bb7b35a131",
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

    async runTransfer(input: TONTokenWalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: TONTokenWalletTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: TONTokenWalletTransferToRecipientInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferToRecipient", input, options);
    }

    async transferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: TONTokenWalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletBalanceOutput>> {
        return await runHelper(this, "balance", input, options);
    }

    async balance(input: TONTokenWalletBalanceInput): Promise<RunLocalHelperResult<TONTokenWalletBalanceOutput>> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: TONTokenWalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptMint", input, options);
    }

    async acceptMint(input: TONTokenWalletAcceptMintInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: TONTokenWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptTransfer", input, options);
    }

    async acceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runDestroy(input: TONTokenWalletDestroyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "destroy", input, options);
    }

    async destroy(input: TONTokenWalletDestroyInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "destroy", input);
    }

    async runDetails(input: TONTokenWalletDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletDetailsOutput>> {
        return await runHelper(this, "details", input, options);
    }

    async details(input: TONTokenWalletDetailsInput): Promise<RunLocalHelperResult<TONTokenWalletDetailsOutput>> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<TONTokenWalletGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(options?: RunHelperOptions): Promise<RunHelperResult<TONTokenWalletGetBalanceOutput>> {
        return await runHelper(this, "getBalance", {}, options);
    }

    async getBalance_(): Promise<RunLocalHelperResult<TONTokenWalletGetBalanceOutput>> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

