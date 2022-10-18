
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
    notify?: string /* optional(cell) */,
};

export type FlexWalletUnwrapInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"burn","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"unwrap","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xf"},{"name":"makeOrder","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"price_num","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"salt","type":"cell"},{"components":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"amount","type":"uint128"},{"name":"client_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"name":"args","type":"tuple"}],"outputs":[],"id":"0x10"},{"name":"cancelOrder","inputs":[{"name":"evers","type":"uint128"},{"name":"price","type":"address"},{"name":"sell","type":"bool"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0x11"},{"name":"returnOwnership","inputs":[{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x12"},{"name":"bind","inputs":[{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x13"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"lend_pubkey_","type":"optional(uint256)"},{"name":"lend_owners_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "b6dcd679c9d56c71420668cca7eb6e331137bbb2f00b4967aa621ba330fd7cb0",
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

    async runTransfer(input: FlexWalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: FlexWalletTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: FlexWalletTransferToRecipientInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferToRecipient", input, options);
    }

    async transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: FlexWalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletBalanceOutput>> {
        return await runHelper(this, "balance", input, options);
    }

    async balance(input: FlexWalletBalanceInput): Promise<RunLocalHelperResult<FlexWalletBalanceOutput>> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: FlexWalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptMint", input, options);
    }

    async acceptMint(input: FlexWalletAcceptMintInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: FlexWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptTransfer", input, options);
    }

    async acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runBurn(input: FlexWalletBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "burn", input, options);
    }

    async burn(input: FlexWalletBurnInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "burn", input);
    }

    async runUnwrap(input: FlexWalletUnwrapInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unwrap", input, options);
    }

    async unwrap(input: FlexWalletUnwrapInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unwrap", input);
    }

    async runMakeOrder(input: FlexWalletMakeOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "makeOrder", input, options);
    }

    async makeOrder(input: FlexWalletMakeOrderInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "makeOrder", input);
    }

    async runCancelOrder(input: FlexWalletCancelOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "cancelOrder", input, options);
    }

    async cancelOrder(input: FlexWalletCancelOrderInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "cancelOrder", input);
    }

    async runReturnOwnership(input: FlexWalletReturnOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "returnOwnership", input, options);
    }

    async returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runBind(input: FlexWalletBindInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "bind", input, options);
    }

    async bind(input: FlexWalletBindInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "bind", input);
    }

    async runDetails(input: FlexWalletDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletDetailsOutput>> {
        return await runHelper(this, "details", input, options);
    }

    async details(input: FlexWalletDetailsInput): Promise<RunLocalHelperResult<FlexWalletDetailsOutput>> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<FlexWalletGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetBalanceOutput>> {
        return await runHelper(this, "getBalance", {}, options);
    }

    async getBalance_(): Promise<RunLocalHelperResult<FlexWalletGetBalanceOutput>> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

