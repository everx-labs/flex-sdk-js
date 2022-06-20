
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
    notify?: string /* optional(cell) */,
};

export type FlexClientBurnThemAllInput = {
    burn_ev: string | number | bigint /* uint128 */,
    burns: {
        out_pubkey: string | number | bigint /* uint256 */,
        out_owner?: string /* optional(address) */,
        wallet: string /* address */,
        notify?: string /* optional(cell) */,
    }[] /* tuple[] */,
};

export type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
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

export type FlexClientGetPayloadForEverReTransferArgsInput = {
    wallet_deploy_evers: string | number | bigint /* uint128 */,
    wallet_keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientGetPayloadForEverReTransferArgsOutput = {
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
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"deployPriceXchg","inputs":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"lend_amount","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"evers","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"price_salt","type":"cell"},{"name":"my_tip3_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xa"},{"name":"cancelXchgOrder","inputs":[{"name":"sell","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"value","type":"uint128"},{"name":"salted_price_code","type":"cell"},{"name":"user_id","type":"optional(uint256)"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0xb"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xc"},{"name":"transferTokens","inputs":[{"name":"src","type":"address"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"dst","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"deployEmptyFlexWallet","inputs":[{"name":"pubkey","type":"uint256"},{"name":"evers_to_wallet","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"name":"trader","type":"uint256"},{"name":"flex_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xe"},{"name":"deployIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_all","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"reBindWallets","inputs":[{"name":"user_id","type":"uint256"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"},{"name":"wallets","type":"address[]"},{"name":"evers_relend_call","type":"uint128"},{"name":"evers_each_wallet_call","type":"uint128"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0x10"},{"name":"destroyIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x11"},{"name":"burnWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0x12"},{"name":"burnThemAll","inputs":[{"name":"burn_ev","type":"uint128"},{"components":[{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"wallet","type":"address"},{"name":"notify","type":"optional(cell)"}],"name":"burns","type":"tuple[]"}],"outputs":[],"id":"0x13"},{"name":"continueBurnThemAll","inputs":[],"outputs":[]},{"name":"unwrapWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"tokens","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0x14"},{"name":"bindWallet","inputs":[{"name":"evers","type":"uint128"},{"name":"my_tip3_addr","type":"address"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x15"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"upgrade","inputs":[{"name":"request_evers","type":"uint128"},{"name":"user_data_cfg","type":"address"}],"outputs":[],"id":"0x16"},{"name":"getPayloadForDeployInternalWallet","inputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x17"},{"name":"getPayloadForEverReTransferArgs","inputs":[{"name":"wallet_deploy_evers","type":"uint128"},{"name":"wallet_keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x18"},{"name":"getPriceXchgAddress","inputs":[{"name":"price_num","type":"uint128"},{"name":"salted_price_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x19"},{"name":"getUserIdIndex","inputs":[{"name":"user_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet","type":"optional(tuple)"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"packet_burning_","type":"bool"},{"name":"burn_ev_","type":"uint128"},{"components":[{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"wallet","type":"address"},{"name":"notify","type":"optional(cell)"}],"name":"burns_","type":"tuple[]"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "f13a8560b975851cb115a7e59147a454c5070641d3e74e1f2cea57c19121ab65",
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

    async runBurnThemAll(input: FlexClientBurnThemAllInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burnThemAll", input);
    }

    async burnThemAll(input: FlexClientBurnThemAllInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnThemAll", input);
    }

    async runContinueBurnThemAll(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "continueBurnThemAll", {});
    }

    async continueBurnThemAll(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "continueBurnThemAll", {});
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

    async runGetPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexClientGetPayloadForEverReTransferArgsOutput,
    }> {
        return await runHelper(this, "getPayloadForEverReTransferArgs", input);
    }

    async getPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForEverReTransferArgsOutput,
    }> {
        return await runLocalHelper(this, "getPayloadForEverReTransferArgs", input);
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

