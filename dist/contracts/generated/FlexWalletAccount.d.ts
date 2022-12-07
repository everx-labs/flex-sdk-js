import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type FlexWalletTransferInput = {
    _answer_id: number;
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    return_ownership: string | number | bigint;
    notify_payload?: string;
};
export type FlexWalletTransferToRecipientInput = {
    _answer_id: number;
    answer_addr?: string;
    to: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    tokens: string | number | bigint;
    evers: string | number | bigint;
    keep_evers: string | number | bigint;
    deploy: boolean;
    return_ownership: string | number | bigint;
    notify_payload?: string;
};
export type FlexWalletBalanceInput = {
    _answer_id: number;
};
export type FlexWalletBalanceOutput = {
    value0: string;
};
export type FlexWalletAcceptMintInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    notify_payload?: string;
};
export type FlexWalletAcceptTransferInput = {
    _value: string | number | bigint;
    answer_addr: string;
    keep_evers: string | number | bigint;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    payload?: string;
};
export type FlexWalletBurnInput = {
    _answer_id: number;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export type FlexWalletUnwrapInput = {
    _answer_id: number;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    tokens: string | number | bigint;
    notify?: string;
};
export type FlexWalletMakeOrderInput = {
    _answer_id: number;
    answer_addr?: string;
    evers: string | number | bigint;
    lend_balance: string | number | bigint;
    lend_finish_time: number;
    price_num: string | number | bigint;
    unsalted_price_code: string;
    salt: string;
    args: {
        sell: boolean;
        immediate_client: boolean;
        post_order: boolean;
        amount: string | number | bigint;
        client_addr: string;
        user_id: string | number | bigint;
        order_id: string | number | bigint;
    };
};
export type FlexWalletCancelOrderInput = {
    evers: string | number | bigint;
    price: string;
    sell: boolean;
    order_id?: string | number | bigint;
};
export type FlexWalletReturnOwnershipInput = {
    tokens: string | number | bigint;
};
export type FlexWalletBindInput = {
    set_binding: boolean;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    set_trader: boolean;
    trader?: string | number | bigint;
};
export type FlexWalletDetailsInput = {
    _answer_id: number;
};
export type FlexWalletDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    root_pubkey: string;
    root_address: string;
    wallet_pubkey: string;
    owner_address?: string;
    lend_pubkey?: string;
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number;
                address: string;
            };
        };
        lend_balance: string;
        lend_finish_time: number;
    }[];
    lend_balance: string;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string;
    };
    code_hash: string;
    code_depth: number;
    workchain_id: number;
};
export type FlexWalletGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    root_pubkey: string;
    root_address: string;
    wallet_pubkey: string;
    owner_address?: string;
    lend_pubkey?: string;
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number;
                address: string;
            };
        };
        lend_balance: string;
        lend_finish_time: number;
    }[];
    lend_balance: string;
    binding?: {
        flex: string;
        unsalted_price_code_hash: string;
    };
    code_hash: string;
    code_depth: number;
    workchain_id: number;
};
export type FlexWalletGetBalanceOutput = {
    value0: string;
};
export declare class FlexWalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: FlexWalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: FlexWalletTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferToRecipient(input: FlexWalletTransferToRecipientInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<RunLocalHelperResult<void>>;
    runBalance(input: FlexWalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletBalanceOutput>>;
    balance(input: FlexWalletBalanceInput): Promise<RunLocalHelperResult<FlexWalletBalanceOutput>>;
    runAcceptMint(input: FlexWalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptMint(input: FlexWalletAcceptMintInput): Promise<RunLocalHelperResult<void>>;
    runAcceptTransfer(input: FlexWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>>;
    runBurn(input: FlexWalletBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burn(input: FlexWalletBurnInput): Promise<RunLocalHelperResult<void>>;
    runUnwrap(input: FlexWalletUnwrapInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unwrap(input: FlexWalletUnwrapInput): Promise<RunLocalHelperResult<void>>;
    runMakeOrder(input: FlexWalletMakeOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    makeOrder(input: FlexWalletMakeOrderInput): Promise<RunLocalHelperResult<void>>;
    runCancelOrder(input: FlexWalletCancelOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cancelOrder(input: FlexWalletCancelOrderInput): Promise<RunLocalHelperResult<void>>;
    runReturnOwnership(input: FlexWalletReturnOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<RunLocalHelperResult<void>>;
    runBind(input: FlexWalletBindInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    bind(input: FlexWalletBindInput): Promise<RunLocalHelperResult<void>>;
    runDetails(input: FlexWalletDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletDetailsOutput>>;
    details(input: FlexWalletDetailsInput): Promise<RunLocalHelperResult<FlexWalletDetailsOutput>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<FlexWalletGetDetailsOutput>>;
    runGetBalance(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetBalanceOutput>>;
    getBalance_(): Promise<RunLocalHelperResult<FlexWalletGetBalanceOutput>>;
}
//# sourceMappingURL=FlexWalletAccount.d.ts.map