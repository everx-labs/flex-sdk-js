import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type FlexClientDeployPriceXchgInput = {
    sell: boolean;
    immediate_client: boolean;
    post_order: boolean;
    price_num: string | number | bigint;
    amount: string | number | bigint;
    lend_amount: string | number | bigint;
    lend_finish_time: number;
    evers: string | number | bigint;
    unsalted_price_code: string;
    price_salt: string;
    my_tip3_addr: string;
    user_id: string | number | bigint;
    order_id: string | number | bigint;
};
export type FlexClientDeployPriceXchgOutput = {
    value0: string;
};
export type FlexClientCancelXchgOrderInput = {
    sell: boolean;
    price_num: string | number | bigint;
    value: string | number | bigint;
    salted_price_code: string;
    user_id?: string | number | bigint;
    order_id?: string | number | bigint;
};
export type FlexClientTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export type FlexClientTransferTokensInput = {
    src: string;
    dst: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    tokens: string | number | bigint;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export type FlexClientDeployEmptyFlexWalletInput = {
    pubkey: string | number | bigint;
    evers_to_wallet: string | number | bigint;
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    trader: string | number | bigint;
    flex_wallet_code: string;
};
export type FlexClientDeployEmptyFlexWalletOutput = {
    value0: string;
};
export type FlexClientDeployIndexInput = {
    user_id: string | number | bigint;
    lend_pubkey: string | number | bigint;
    name: string;
    evers_all: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export type FlexClientReBindWalletsInput = {
    user_id: string | number | bigint;
    set_binding: boolean;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    set_trader: boolean;
    trader?: string | number | bigint;
    wallets: string[];
    evers_relend_call: string | number | bigint;
    evers_each_wallet_call: string | number | bigint;
    evers_to_remove: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
};
export type FlexClientDestroyIndexInput = {
    user_id: string | number | bigint;
    evers: string | number | bigint;
};
export type FlexClientBurnWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    notify?: string;
};
export type FlexClientBurnThemAllInput = {
    burn_ev: string | number | bigint;
    burns: {
        out_pubkey: string | number | bigint;
        out_owner?: string;
        wallet: string;
        notify?: string;
    }[];
};
export type FlexClientCancelThemAllInput = {
    cancel_ev: string | number | bigint;
    prices: string[];
};
export type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    tokens: string | number | bigint;
    notify?: string;
};
export type FlexClientBindWalletInput = {
    evers: string | number | bigint;
    my_tip3_addr: string;
    set_binding: boolean;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    set_trader: boolean;
    trader?: string | number | bigint;
};
export type FlexClientOnTip3TransferInput = {
    _answer_id: number;
    balance: string | number | bigint;
    new_tokens: string | number | bigint;
    evers_balance: string | number | bigint;
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    sender?: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    receiver: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    payload: string;
    answer_addr: string;
};
export type FlexClientUpgradeInput = {
    request_evers: string | number | bigint;
    user_data_cfg: string;
};
export type FlexClientGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint;
    owner_addr?: string;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export type FlexClientGetPayloadForDeployInternalWalletOutput = {
    value0: string;
};
export type FlexClientGetPayloadForEverReTransferArgsInput = {
    wallet_deploy_evers: string | number | bigint;
    wallet_keep_evers: string | number | bigint;
};
export type FlexClientGetPayloadForEverReTransferArgsOutput = {
    value0: string;
};
export type FlexClientGetPriceXchgAddressInput = {
    price_num: string | number | bigint;
    salted_price_code: string;
};
export type FlexClientGetPriceXchgAddressOutput = {
    value0: string;
};
export type FlexClientGetUserIdIndexInput = {
    user_id: string | number | bigint;
};
export type FlexClientGetUserIdIndexOutput = {
    value0: string;
};
export type FlexClientGetDetailsOutput = {
    owner: string;
    triplet: {
        wallet: number;
        exchange: number;
        user: number;
    };
    ex_triplet?: {
        wallet: number;
        exchange: number;
        user: number;
    };
    auth_index_code: string;
    user_id_index_code: string;
};
export declare class FlexClientAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runDeployPriceXchg(input: FlexClientDeployPriceXchgInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientDeployPriceXchgOutput>>;
    deployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<RunLocalHelperResult<FlexClientDeployPriceXchgOutput>>;
    runCancelXchgOrder(input: FlexClientCancelXchgOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<RunLocalHelperResult<void>>;
    runTransfer(input: FlexClientTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: FlexClientTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferTokens(input: FlexClientTransferTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferTokens(input: FlexClientTransferTokensInput): Promise<RunLocalHelperResult<void>>;
    runDeployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientDeployEmptyFlexWalletOutput>>;
    deployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<RunLocalHelperResult<FlexClientDeployEmptyFlexWalletOutput>>;
    runDeployIndex(input: FlexClientDeployIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    deployIndex(input: FlexClientDeployIndexInput): Promise<RunLocalHelperResult<void>>;
    runReBindWallets(input: FlexClientReBindWalletsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    reBindWallets(input: FlexClientReBindWalletsInput): Promise<RunLocalHelperResult<void>>;
    runDestroyIndex(input: FlexClientDestroyIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    destroyIndex(input: FlexClientDestroyIndexInput): Promise<RunLocalHelperResult<void>>;
    runBurnWallet(input: FlexClientBurnWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnWallet(input: FlexClientBurnWalletInput): Promise<RunLocalHelperResult<void>>;
    runBurnThemAll(input: FlexClientBurnThemAllInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnThemAll(input: FlexClientBurnThemAllInput): Promise<RunLocalHelperResult<void>>;
    runContinueBurnThemAll(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    continueBurnThemAll(): Promise<RunLocalHelperResult<void>>;
    runCancelThemAll(input: FlexClientCancelThemAllInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cancelThemAll(input: FlexClientCancelThemAllInput): Promise<RunLocalHelperResult<void>>;
    runContinueCancelThemAll(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    continueCancelThemAll(): Promise<RunLocalHelperResult<void>>;
    runUnwrapWallet(input: FlexClientUnwrapWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unwrapWallet(input: FlexClientUnwrapWalletInput): Promise<RunLocalHelperResult<void>>;
    runBindWallet(input: FlexClientBindWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    bindWallet(input: FlexClientBindWalletInput): Promise<RunLocalHelperResult<void>>;
    runOnTip3Transfer(input: FlexClientOnTip3TransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<RunLocalHelperResult<void>>;
    runUpgrade(input: FlexClientUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    upgrade(input: FlexClientUpgradeInput): Promise<RunLocalHelperResult<void>>;
    runGetPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientGetPayloadForDeployInternalWalletOutput>>;
    getPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<RunLocalHelperResult<FlexClientGetPayloadForDeployInternalWalletOutput>>;
    runGetPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientGetPayloadForEverReTransferArgsOutput>>;
    getPayloadForEverReTransferArgs(input: FlexClientGetPayloadForEverReTransferArgsInput): Promise<RunLocalHelperResult<FlexClientGetPayloadForEverReTransferArgsOutput>>;
    runGetPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientGetPriceXchgAddressOutput>>;
    getPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<RunLocalHelperResult<FlexClientGetPriceXchgAddressOutput>>;
    runGetUserIdIndex(input: FlexClientGetUserIdIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientGetUserIdIndexOutput>>;
    getUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<RunLocalHelperResult<FlexClientGetUserIdIndexOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexClientGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<FlexClientGetDetailsOutput>>;
}
//# sourceMappingURL=FlexClientAccount.d.ts.map