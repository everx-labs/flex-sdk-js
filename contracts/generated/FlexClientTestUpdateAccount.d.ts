import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexClientTestUpdateDeployPriceXchgInput = {
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
export declare type FlexClientTestUpdateDeployPriceXchgOutput = {
    value0: string;
};
export declare type FlexClientTestUpdateCancelXchgOrderInput = {
    sell: boolean;
    price_num: string | number | bigint;
    value: string | number | bigint;
    salted_price_code: string;
    user_id?: string | number | bigint;
    order_id?: string | number | bigint;
};
export declare type FlexClientTestUpdateTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export declare type FlexClientTestUpdateTransferTokensInput = {
    src: string;
    dst: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
};
export declare type FlexClientTestUpdateDeployEmptyFlexWalletInput = {
    pubkey: string | number | bigint;
    evers_to_wallet: string | number | bigint;
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    binding?: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    trader?: string | number | bigint;
    flex_wallet_code: string;
};
export declare type FlexClientTestUpdateDeployEmptyFlexWalletOutput = {
    value0: string;
};
export declare type FlexClientTestUpdateDeployIndexInput = {
    user_id: string | number | bigint;
    lend_pubkey: string | number | bigint;
    name: string;
    evers_all: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export declare type FlexClientTestUpdateReLendIndexInput = {
    user_id: string | number | bigint;
    new_lend_pubkey: string | number | bigint;
    wallets: string[];
    evers_relend_call: string | number | bigint;
    evers_each_wallet_call: string | number | bigint;
    evers_to_remove: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
};
export declare type FlexClientTestUpdateDestroyIndexInput = {
    user_id: string | number | bigint;
    evers: string | number | bigint;
};
export declare type FlexClientTestUpdateBurnWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
};
export declare type FlexClientTestUpdateUnwrapWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    tokens: string | number | bigint;
};
export declare type FlexClientTestUpdateBindWalletInput = {
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
export declare type FlexClientTestUpdateOnTip3TransferInput = {
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
export declare type FlexClientTestUpdateUpgradeInput = {
    request_evers: string | number | bigint;
    user_data_cfg: string;
};
export declare type FlexClientTestUpdateGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint;
    owner_addr?: string;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export declare type FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput = {
    value0: string;
};
export declare type FlexClientTestUpdateGetPriceXchgAddressInput = {
    price_num: string | number | bigint;
    salted_price_code: string;
};
export declare type FlexClientTestUpdateGetPriceXchgAddressOutput = {
    value0: string;
};
export declare type FlexClientTestUpdateGetUserIdIndexInput = {
    user_id: string | number | bigint;
};
export declare type FlexClientTestUpdateGetUserIdIndexOutput = {
    value0: string;
};
export declare type FlexClientTestUpdateGetDetailsOutput = {
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
export declare type FlexClientTestUpdateGetTestValueOutput = {
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
    runDeployPriceXchg(input: FlexClientTestUpdateDeployPriceXchgInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateDeployPriceXchgOutput;
    }>;
    deployPriceXchg(input: FlexClientTestUpdateDeployPriceXchgInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateDeployPriceXchgOutput;
    }>;
    runCancelXchgOrder(input: FlexClientTestUpdateCancelXchgOrderInput): Promise<{
        transaction: Transaction;
    }>;
    cancelXchgOrder(input: FlexClientTestUpdateCancelXchgOrderInput): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: FlexClientTestUpdateTransferInput): Promise<{
        transaction: Transaction;
    }>;
    transfer(input: FlexClientTestUpdateTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferTokens(input: FlexClientTestUpdateTransferTokensInput): Promise<{
        transaction: Transaction;
    }>;
    transferTokens(input: FlexClientTestUpdateTransferTokensInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyFlexWallet(input: FlexClientTestUpdateDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateDeployEmptyFlexWalletOutput;
    }>;
    deployEmptyFlexWallet(input: FlexClientTestUpdateDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateDeployEmptyFlexWalletOutput;
    }>;
    runDeployIndex(input: FlexClientTestUpdateDeployIndexInput): Promise<{
        transaction: Transaction;
    }>;
    deployIndex(input: FlexClientTestUpdateDeployIndexInput): Promise<{
        transaction: Transaction;
    }>;
    runReLendIndex(input: FlexClientTestUpdateReLendIndexInput): Promise<{
        transaction: Transaction;
    }>;
    reLendIndex(input: FlexClientTestUpdateReLendIndexInput): Promise<{
        transaction: Transaction;
    }>;
    runDestroyIndex(input: FlexClientTestUpdateDestroyIndexInput): Promise<{
        transaction: Transaction;
    }>;
    destroyIndex(input: FlexClientTestUpdateDestroyIndexInput): Promise<{
        transaction: Transaction;
    }>;
    runBurnWallet(input: FlexClientTestUpdateBurnWalletInput): Promise<{
        transaction: Transaction;
    }>;
    burnWallet(input: FlexClientTestUpdateBurnWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runUnwrapWallet(input: FlexClientTestUpdateUnwrapWalletInput): Promise<{
        transaction: Transaction;
    }>;
    unwrapWallet(input: FlexClientTestUpdateUnwrapWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runBindWallet(input: FlexClientTestUpdateBindWalletInput): Promise<{
        transaction: Transaction;
    }>;
    bindWallet(input: FlexClientTestUpdateBindWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runOnTip3Transfer(input: FlexClientTestUpdateOnTip3TransferInput): Promise<{
        transaction: Transaction;
    }>;
    onTip3Transfer(input: FlexClientTestUpdateOnTip3TransferInput): Promise<{
        transaction: Transaction;
    }>;
    runUpgrade(input: FlexClientTestUpdateUpgradeInput): Promise<{
        transaction: Transaction;
    }>;
    upgrade(input: FlexClientTestUpdateUpgradeInput): Promise<{
        transaction: Transaction;
    }>;
    runGetPayloadForDeployInternalWallet(input: FlexClientTestUpdateGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput;
    }>;
    getPayloadForDeployInternalWallet(input: FlexClientTestUpdateGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetPayloadForDeployInternalWalletOutput;
    }>;
    runGetPriceXchgAddress(input: FlexClientTestUpdateGetPriceXchgAddressInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetPriceXchgAddressOutput;
    }>;
    getPriceXchgAddress(input: FlexClientTestUpdateGetPriceXchgAddressInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetPriceXchgAddressOutput;
    }>;
    runGetUserIdIndex(input: FlexClientTestUpdateGetUserIdIndexInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetUserIdIndexOutput;
    }>;
    getUserIdIndex(input: FlexClientTestUpdateGetUserIdIndexInput): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetUserIdIndexOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetDetailsOutput;
    }>;
    runGetTestValue(): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetTestValueOutput;
    }>;
    getTestValue(): Promise<{
        transaction: Transaction;
        output: FlexClientTestUpdateGetTestValueOutput;
    }>;
}
//# sourceMappingURL=FlexClientTestUpdateAccount.d.ts.map