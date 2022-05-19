import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class FlexClientAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runDeployPriceXchg(input: {
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
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployPriceXchg(input: {
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
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runCancelXchgOrder(input: {
        sell: boolean;
        price_num: string | number | bigint;
        value: string | number | bigint;
        salted_price_code: string;
        user_id?: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCancelXchgOrder(input: {
        sell: boolean;
        price_num: string | number | bigint;
        value: string | number | bigint;
        salted_price_code: string;
        user_id?: string | number | bigint;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransfer(input: {
        dest: string;
        value: string | number | bigint;
        bounce: boolean;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransferTokens(input: {
        src: string;
        dst: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        tokens: string | number | bigint;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransferTokens(input: {
        src: string;
        dst: {
            pubkey: string | number | bigint;
            owner?: string;
        };
        tokens: string | number | bigint;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployEmptyFlexWallet(input: {
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
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalDeployEmptyFlexWallet(input: {
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
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runDeployIndex(input: {
        user_id: string | number | bigint;
        lend_pubkey: string | number | bigint;
        name: string;
        evers_all: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalDeployIndex(input: {
        user_id: string | number | bigint;
        lend_pubkey: string | number | bigint;
        name: string;
        evers_all: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
        refill_wallet: string | number | bigint;
        min_refill: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReLendIndex(input: {
        user_id: string | number | bigint;
        new_lend_pubkey: string | number | bigint;
        wallets: string[];
        evers_relend_call: string | number | bigint;
        evers_each_wallet_call: string | number | bigint;
        evers_to_remove: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReLendIndex(input: {
        user_id: string | number | bigint;
        new_lend_pubkey: string | number | bigint;
        wallets: string[];
        evers_relend_call: string | number | bigint;
        evers_each_wallet_call: string | number | bigint;
        evers_to_remove: string | number | bigint;
        evers_to_auth_idx: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDestroyIndex(input: {
        user_id: string | number | bigint;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalDestroyIndex(input: {
        user_id: string | number | bigint;
        evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runBurnWallet(input: {
        evers_value: string | number | bigint;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        my_tip3_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalBurnWallet(input: {
        evers_value: string | number | bigint;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        my_tip3_addr: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnwrapWallet(input: {
        evers_value: string | number | bigint;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        my_tip3_addr: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnwrapWallet(input: {
        evers_value: string | number | bigint;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        my_tip3_addr: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runBindWallet(input: {
        evers: string | number | bigint;
        my_tip3_addr: string;
        set_binding: boolean;
        binding?: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        set_trader: boolean;
        trader?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalBindWallet(input: {
        evers: string | number | bigint;
        my_tip3_addr: string;
        set_binding: boolean;
        binding?: {
            flex: string;
            unsalted_price_code_hash: string | number | bigint;
        };
        set_trader: boolean;
        trader?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runOnTip3Transfer(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalOnTip3Transfer(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runUpgrade(input: {
        request_evers: string | number | bigint;
        user_data_cfg: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUpgrade(input: {
        request_evers: string | number | bigint;
        user_data_cfg: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runGetPayloadForDeployInternalWallet(input: {
        owner_pubkey: string | number | bigint;
        owner_addr?: string;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetPayloadForDeployInternalWallet(input: {
        owner_pubkey: string | number | bigint;
        owner_addr?: string;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetPriceXchgAddress(input: {
        price_num: string | number | bigint;
        salted_price_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetPriceXchgAddress(input: {
        price_num: string | number | bigint;
        salted_price_code: string;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetUserIdIndex(input: {
        user_id: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetUserIdIndex(input: {
        user_id: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
}
//# sourceMappingURL=FlexClientAccount.d.ts.map