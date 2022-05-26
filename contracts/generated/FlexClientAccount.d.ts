import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type FlexClientDeployPriceXchgInput = {
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
export declare type FlexClientDeployPriceXchgOutput = {
    value0: string;
};
export declare type FlexClientCancelXchgOrderInput = {
    sell: boolean;
    price_num: string | number | bigint;
    value: string | number | bigint;
    salted_price_code: string;
    user_id?: string | number | bigint;
    order_id?: string | number | bigint;
};
export declare type FlexClientTransferInput = {
    dest: string;
    value: string | number | bigint;
    bounce: boolean;
};
export declare type FlexClientTransferTokensInput = {
    src: string;
    dst: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    tokens: string | number | bigint;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export declare type FlexClientDeployEmptyFlexWalletInput = {
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
export declare type FlexClientDeployEmptyFlexWalletOutput = {
    value0: string;
};
export declare type FlexClientDeployIndexInput = {
    user_id: string | number | bigint;
    lend_pubkey: string | number | bigint;
    name: string;
    evers_all: string | number | bigint;
    evers_to_auth_idx: string | number | bigint;
    refill_wallet: string | number | bigint;
    min_refill: string | number | bigint;
};
export declare type FlexClientReBindWalletsInput = {
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
export declare type FlexClientDestroyIndexInput = {
    user_id: string | number | bigint;
    evers: string | number | bigint;
};
export declare type FlexClientBurnWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
};
export declare type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    my_tip3_addr: string;
    tokens: string | number | bigint;
};
export declare type FlexClientBindWalletInput = {
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
export declare type FlexClientOnTip3TransferInput = {
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
export declare type FlexClientUpgradeInput = {
    request_evers: string | number | bigint;
    user_data_cfg: string;
};
export declare type FlexClientGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint;
    owner_addr?: string;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
};
export declare type FlexClientGetPayloadForDeployInternalWalletOutput = {
    value0: string;
};
export declare type FlexClientGetPriceXchgAddressInput = {
    price_num: string | number | bigint;
    salted_price_code: string;
};
export declare type FlexClientGetPriceXchgAddressOutput = {
    value0: string;
};
export declare type FlexClientGetUserIdIndexInput = {
    user_id: string | number | bigint;
};
export declare type FlexClientGetUserIdIndexOutput = {
    value0: string;
};
export declare type FlexClientGetDetailsOutput = {
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
    runDeployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientDeployPriceXchgOutput;
    }>;
    deployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction;
        output: FlexClientDeployPriceXchgOutput;
    }>;
    runCancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    cancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientDeployEmptyFlexWalletOutput;
    }>;
    deployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientDeployEmptyFlexWalletOutput;
    }>;
    runDeployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    deployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction;
    }>;
    runReBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    reBindWallets(input: FlexClientReBindWalletsInput): Promise<{
        transaction: Transaction;
    }>;
    runDestroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    destroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction;
    }>;
    runBurnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    burnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runUnwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runBindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    bindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runOnTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    onTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction;
    }>;
    runUpgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    upgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction;
    }>;
    runGetPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientGetPayloadForDeployInternalWalletOutput;
    }>;
    getPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction;
        output: FlexClientGetPayloadForDeployInternalWalletOutput;
    }>;
    runGetPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientGetPriceXchgAddressOutput;
    }>;
    getPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction;
        output: FlexClientGetPriceXchgAddressOutput;
    }>;
    runGetUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientGetUserIdIndexOutput;
    }>;
    getUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction;
        output: FlexClientGetUserIdIndexOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: FlexClientGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: FlexClientGetDetailsOutput;
    }>;
}
//# sourceMappingURL=FlexClientAccount.d.ts.map