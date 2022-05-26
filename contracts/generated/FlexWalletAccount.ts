
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
export type FlexWalletTransferInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletTransferToRecipientInput = {
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

export type FlexWalletBalanceInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletBalanceOutput = {
    value0: string /* uint128 */,
};

export type FlexWalletAcceptMintInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletAcceptTransferInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    payload?: string /* optional(cell) */,
};

export type FlexWalletBurnInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type FlexWalletUnwrapInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
};

export type FlexWalletMakeOrderInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    lend_balance: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    price_num: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    salt: string /* cell */,
    args: {
        sell: boolean /* bool */,
        immediate_client: boolean /* bool */,
        post_order: boolean /* bool */,
        amount: string | number | bigint /* uint128 */,
        client_addr: string /* address */,
        user_id: string | number | bigint /* uint256 */,
        order_id: string | number | bigint /* uint256 */,
    } /* tuple */,
};

export type FlexWalletCancelOrderInput = {
    evers: string | number | bigint /* uint128 */,
    price: string /* address */,
    sell: boolean /* bool */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletReturnOwnershipInput = {
    tokens: string | number | bigint /* uint128 */,
};

export type FlexWalletBindInput = {
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletDetailsOutput = {
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

export type FlexWalletGetDetailsOutput = {
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

export type FlexWalletGetBalanceOutput = {
    value0: string /* uint128 */,
};


export class FlexWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"burn","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xe"},{"name":"unwrap","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"makeOrder","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"price_num","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"salt","type":"cell"},{"components":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"amount","type":"uint128"},{"name":"client_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"name":"args","type":"tuple"}],"outputs":[],"id":"0x10"},{"name":"cancelOrder","inputs":[{"name":"evers","type":"uint128"},{"name":"price","type":"address"},{"name":"sell","type":"bool"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0x11"},{"name":"returnOwnership","inputs":[{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x12"},{"name":"bind","inputs":[{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x13"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"lend_pubkey_","type":"optional(uint256)"},{"name":"lend_owners_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "17b17c704aa4f787249f31fba4bdcc73457efbb5f7f7d11d5ad2c18cc98ad244",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexWalletAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletBalanceOutput,
    }> {
        return await runHelper(this, "balance", input);
    }

    async balance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: FlexWalletBalanceOutput,
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async acceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runBurn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runUnwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unwrap", input);
    }

    async unwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrap", input);
    }

    async runMakeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "makeOrder", input);
    }

    async makeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "makeOrder", input);
    }

    async runCancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cancelOrder", input);
    }

    async cancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelOrder", input);
    }

    async runReturnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "returnOwnership", input);
    }

    async returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runBind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "bind", input);
    }

    async bind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bind", input);
    }

    async runDetails(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletDetailsOutput,
    }> {
        return await runHelper(this, "details", input);
    }

    async details(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: FlexWalletDetailsOutput,
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async getBalance_(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

