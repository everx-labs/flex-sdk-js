
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
export type FlexClientDeployPriceXchgInput = {
    sell: boolean /* bool */,
    immediate_client: boolean /* bool */,
    post_order: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    amount: string | number | bigint /* uint128 */,
    lend_amount: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    evers: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    price_salt: string /* cell */,
    my_tip3_addr: string /* address */,
    user_id: string | number | bigint /* uint256 */,
    order_id: string | number | bigint /* uint256 */,
};

export type FlexClientDeployPriceXchgOutput = {
    value0: string /* address */,
};

export type FlexClientCancelXchgOrderInput = {
    sell: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    value: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
    user_id?: string | number | bigint /* optional(uint256) */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientTransferInput = {
    dest: string /* address */,
    value: string | number | bigint /* uint128 */,
    bounce: boolean /* bool */,
};

export type FlexClientTransferTokensInput = {
    src: string /* address */,
    dst: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientDeployEmptyFlexWalletInput = {
    pubkey: string | number | bigint /* uint256 */,
    evers_to_wallet: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    trader: string | number | bigint /* uint256 */,
    flex_wallet_code: string /* cell */,
};

export type FlexClientDeployEmptyFlexWalletOutput = {
    value0: string /* address */,
};

export type FlexClientDeployIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    lend_pubkey: string | number | bigint /* uint256 */,
    name: string /* string */,
    evers_all: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
    refill_wallet: string | number | bigint /* uint128 */,
    min_refill: string | number | bigint /* uint128 */,
};

export type FlexClientReBindWalletsInput = {
    user_id: string | number | bigint /* uint256 */,
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
    wallets: string[] /* address[] */,
    evers_relend_call: string | number | bigint /* uint128 */,
    evers_each_wallet_call: string | number | bigint /* uint128 */,
    evers_to_remove: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
};

export type FlexClientDestroyIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    evers: string | number | bigint /* uint128 */,
};

export type FlexClientBurnWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
};

export type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type FlexClientBindWalletInput = {
    evers: string | number | bigint /* uint128 */,
    my_tip3_addr: string /* address */,
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientOnTip3TransferInput = {
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

export type FlexClientUpgradeInput = {
    request_evers: string | number | bigint /* uint128 */,
    user_data_cfg: string /* address */,
};

export type FlexClientGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint /* uint256 */,
    owner_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientGetPayloadForDeployInternalWalletOutput = {
    value0: string /* cell */,
};

export type FlexClientGetPriceXchgAddressInput = {
    price_num: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
};

export type FlexClientGetPriceXchgAddressOutput = {
    value0: string /* address */,
};

export type FlexClientGetUserIdIndexInput = {
    user_id: string | number | bigint /* uint256 */,
};

export type FlexClientGetUserIdIndexOutput = {
    value0: string /* address */,
};

export type FlexClientGetDetailsOutput = {
    owner: string /* uint256 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    ex_triplet?: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* optional(tuple) */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};


export class FlexClientAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"deployPriceXchg","inputs":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"lend_amount","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"evers","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"price_salt","type":"cell"},{"name":"my_tip3_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xa"},{"name":"cancelXchgOrder","inputs":[{"name":"sell","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"value","type":"uint128"},{"name":"salted_price_code","type":"cell"},{"name":"user_id","type":"optional(uint256)"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0xb"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xc"},{"name":"transferTokens","inputs":[{"name":"src","type":"address"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"dst","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"deployEmptyFlexWallet","inputs":[{"name":"pubkey","type":"uint256"},{"name":"evers_to_wallet","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"name":"trader","type":"uint256"},{"name":"flex_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xe"},{"name":"deployIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_all","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"reBindWallets","inputs":[{"name":"user_id","type":"uint256"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"},{"name":"wallets","type":"address[]"},{"name":"evers_relend_call","type":"uint128"},{"name":"evers_each_wallet_call","type":"uint128"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0x10"},{"name":"destroyIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x11"},{"name":"burnWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"}],"outputs":[],"id":"0x12"},{"name":"unwrapWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"bindWallet","inputs":[{"name":"evers","type":"uint128"},{"name":"my_tip3_addr","type":"address"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x14"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"upgrade","inputs":[{"name":"request_evers","type":"uint128"},{"name":"user_data_cfg","type":"address"}],"outputs":[],"id":"0x15"},{"name":"getPayloadForDeployInternalWallet","inputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x16"},{"name":"getPriceXchgAddress","inputs":[{"name":"price_num","type":"uint128"},{"name":"salted_price_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x17"},{"name":"getUserIdIndex","inputs":[{"name":"user_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet","type":"optional(tuple)"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"id":"0x19"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "4f6aeaa8cf22dac558f535589c529d3eb1e715b88bebbe8fad3aba49b640eb27",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexClientAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runDeployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runHelper(this, "deployPriceXchg", input);
    }

    async deployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runLocalHelper(this, "deployPriceXchg", input);
    }

    async runCancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cancelXchgOrder", input);
    }

    async cancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelXchgOrder", input);
    }

    async runTransfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferTokens", input);
    }

    async transferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferTokens", input);
    }

    async runDeployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyFlexWallet", input);
    }

    async deployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyFlexWallet", input);
    }

    async runDeployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "deployIndex", input);
    }

    async deployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "deployIndex", input);
    }

    async runReBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "reBindWallets", input);
    }

    async reBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "reBindWallets", input);
    }

    async runDestroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "destroyIndex", input);
    }

    async destroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroyIndex", input);
    }

    async runBurnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burnWallet", input);
    }

    async burnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnWallet", input);
    }

    async runUnwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unwrapWallet", input);
    }

    async unwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrapWallet", input);
    }

    async runBindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "bindWallet", input);
    }

    async bindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bindWallet", input);
    }

    async runOnTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runUpgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "upgrade", input);
    }

    async upgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "upgrade", input);
    }

    async runGetPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async getPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runLocalHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async runGetPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runHelper(this, "getPriceXchgAddress", input);
    }

    async getPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runLocalHelper(this, "getPriceXchgAddress", input);
    }

    async runGetUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runHelper(this, "getUserIdIndex", input);
    }

    async getUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runLocalHelper(this, "getUserIdIndex", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

