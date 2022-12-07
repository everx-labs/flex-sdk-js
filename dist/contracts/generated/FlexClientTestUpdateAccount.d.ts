import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type FlexClientTestUpdateDeployPriceXchgInput = {
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
export type FlexClientTestUpdateDeployPriceXchgOutput = {
    value0: string;
};
export type FlexClientTestUpdateCancelXchgOrderInput = {
    sell: boolean;
    price_num: string | number | bigint;
    value: string | number | bigint;
    salted_price_code: string;
    user_id?: string | number | bigint;
    order_id?: string | number | bigint;
};
export type FlexClientTestUpdateTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export type FlexClientTestUpdateTransferTokensInput = {
    src: string;
    dst: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    tokens: string | number | bigint;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export type FlexClientTestUpdateDeployEmptyFlexWalletInput = {
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
export type FlexClientTestUpdateDeployEmptyFlexWalletOutput = {
    value0: string;
};
export type FlexClientTestUpdateDeployIndexInput = {
    user_id: string | number | bigint;
    lend_pubkey: string | number | bigint;
    name: string;
    evers_all: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export type FlexClientTestUpdateReBindWalletsInput = {
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
export type FlexClientTestUpdateDestroyIndexInput = {
    user_id: string | number | bigint;
    evers: string | number | bigint;
};
export type FlexClientTestUpdateBurnWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    notify?: string;
};
export type FlexClientTestUpdateBurnThemAllInput = {
    burn_ev: string | number | bigint;
    burns: {
        out_pubkey: string | number | bigint;
        out_owner?: string;
        wallet: string;
        notify?: string;
    }[];
};
export type FlexClientTestUpdateUnwrapWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    tokens: string | number | bigint;
    notify?: string;
};
export type FlexClientTestUpdateBindWalletInput = {
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
export type FlexClientTestUpdateOnTip3TransferInput = {
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
export type FlexClientTestUpdateUpgradeInput = {
    request_evers: string | number | bigint;
    user_data_cfg: string;
};
export type FlexClientTestUpdateGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint;
    owner_addr?: string;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export type FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput = {
    value0: string;
};
export type FlexClientTestUpdateGetPayloadForEverReTransferArgsInput = {
    wallet_deploy_evers: string | number | bigint;
    wallet_keep_evers: string | number | bigint;
};
export type FlexClientTestUpdateGetPayloadForEverReTransferArgsOutput = {
    value0: string;
};
export type FlexClientTestUpdateGetPriceXchgAddressInput = {
    price_num: string | number | bigint;
    salted_price_code: string;
};
export type FlexClientTestUpdateGetPriceXchgAddressOutput = {
    value0: string;
};
export type FlexClientTestUpdateGetUserIdIndexInput = {
    user_id: string | number | bigint;
};
export type FlexClientTestUpdateGetUserIdIndexOutput = {
    value0: string;
};
export type FlexClientTestUpdateGetDetailsOutput = {
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
export type FlexClientTestUpdateGetTestValueOutput = {
    value0: number;
};
export declare class FlexClientTestUpdateAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runDeployPriceXchg(input: FlexClientTestUpdateDeployPriceXchgInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateDeployPriceXchgOutput>>;
    deployPriceXchg(input: FlexClientTestUpdateDeployPriceXchgInput): Promise<RunLocalHelperResult<FlexClientTestUpdateDeployPriceXchgOutput>>;
    runCancelXchgOrder(input: FlexClientTestUpdateCancelXchgOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cancelXchgOrder(input: FlexClientTestUpdateCancelXchgOrderInput): Promise<RunLocalHelperResult<void>>;
    runTransfer(input: FlexClientTestUpdateTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: FlexClientTestUpdateTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferTokens(input: FlexClientTestUpdateTransferTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferTokens(input: FlexClientTestUpdateTransferTokensInput): Promise<RunLocalHelperResult<void>>;
    runDeployEmptyFlexWallet(input: FlexClientTestUpdateDeployEmptyFlexWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateDeployEmptyFlexWalletOutput>>;
    deployEmptyFlexWallet(input: FlexClientTestUpdateDeployEmptyFlexWalletInput): Promise<RunLocalHelperResult<FlexClientTestUpdateDeployEmptyFlexWalletOutput>>;
    runDeployIndex(input: FlexClientTestUpdateDeployIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    deployIndex(input: FlexClientTestUpdateDeployIndexInput): Promise<RunLocalHelperResult<void>>;
    runReBindWallets(input: FlexClientTestUpdateReBindWalletsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    reBindWallets(input: FlexClientTestUpdateReBindWalletsInput): Promise<RunLocalHelperResult<void>>;
    runDestroyIndex(input: FlexClientTestUpdateDestroyIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    destroyIndex(input: FlexClientTestUpdateDestroyIndexInput): Promise<RunLocalHelperResult<void>>;
    runBurnWallet(input: FlexClientTestUpdateBurnWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnWallet(input: FlexClientTestUpdateBurnWalletInput): Promise<RunLocalHelperResult<void>>;
    runBurnThemAll(input: FlexClientTestUpdateBurnThemAllInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnThemAll(input: FlexClientTestUpdateBurnThemAllInput): Promise<RunLocalHelperResult<void>>;
    runContinueBurnThemAll(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    continueBurnThemAll(): Promise<RunLocalHelperResult<void>>;
    runUnwrapWallet(input: FlexClientTestUpdateUnwrapWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unwrapWallet(input: FlexClientTestUpdateUnwrapWalletInput): Promise<RunLocalHelperResult<void>>;
    runBindWallet(input: FlexClientTestUpdateBindWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    bindWallet(input: FlexClientTestUpdateBindWalletInput): Promise<RunLocalHelperResult<void>>;
    runOnTip3Transfer(input: FlexClientTestUpdateOnTip3TransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onTip3Transfer(input: FlexClientTestUpdateOnTip3TransferInput): Promise<RunLocalHelperResult<void>>;
    runUpgrade(input: FlexClientTestUpdateUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    upgrade(input: FlexClientTestUpdateUpgradeInput): Promise<RunLocalHelperResult<void>>;
    runGetPayloadForDeployInternalWallet(input: FlexClientTestUpdateGetPayloadForDeployInternalWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput>>;
    getPayloadForDeployInternalWallet(input: FlexClientTestUpdateGetPayloadForDeployInternalWalletInput): Promise<RunLocalHelperResult<FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput>>;
    runGetPayloadForEverReTransferArgs(input: FlexClientTestUpdateGetPayloadForEverReTransferArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetPayloadForEverReTransferArgsOutput>>;
    getPayloadForEverReTransferArgs(input: FlexClientTestUpdateGetPayloadForEverReTransferArgsInput): Promise<RunLocalHelperResult<FlexClientTestUpdateGetPayloadForEverReTransferArgsOutput>>;
    runGetPriceXchgAddress(input: FlexClientTestUpdateGetPriceXchgAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetPriceXchgAddressOutput>>;
    getPriceXchgAddress(input: FlexClientTestUpdateGetPriceXchgAddressInput): Promise<RunLocalHelperResult<FlexClientTestUpdateGetPriceXchgAddressOutput>>;
    runGetUserIdIndex(input: FlexClientTestUpdateGetUserIdIndexInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetUserIdIndexOutput>>;
    getUserIdIndex(input: FlexClientTestUpdateGetUserIdIndexInput): Promise<RunLocalHelperResult<FlexClientTestUpdateGetUserIdIndexOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<FlexClientTestUpdateGetDetailsOutput>>;
    runGetTestValue(options?: RunHelperOptions): Promise<RunHelperResult<FlexClientTestUpdateGetTestValueOutput>>;
    getTestValue(): Promise<RunLocalHelperResult<FlexClientTestUpdateGetTestValueOutput>>;
}
//# sourceMappingURL=FlexClientTestUpdateAccount.d.ts.map