import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare class FlexWalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: {
        _answer_id: number;
        answer_addr?: string;
        to: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        return_ownership: string | number | bigint;
        notify_payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransfer(input: {
        _answer_id: number;
        answer_addr?: string;
        to: string;
        tokens: string | number | bigint;
        evers: string | number | bigint;
        return_ownership: string | number | bigint;
        notify_payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runTransferToRecipient(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalTransferToRecipient(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runBalance(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalBalance(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runAcceptMint(input: {
        _value: string | number | bigint;
        answer_addr: string;
        keep_evers: string | number | bigint;
        notify_payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAcceptMint(input: {
        _value: string | number | bigint;
        answer_addr: string;
        keep_evers: string | number | bigint;
        notify_payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runAcceptTransfer(input: {
        _value: string | number | bigint;
        answer_addr: string;
        keep_evers: string | number | bigint;
        sender_pubkey: string | number | bigint;
        sender_owner?: string;
        payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalAcceptTransfer(input: {
        _value: string | number | bigint;
        answer_addr: string;
        keep_evers: string | number | bigint;
        sender_pubkey: string | number | bigint;
        sender_owner?: string;
        payload?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: {
        _answer_id: number;
        out_pubkey: string | number | bigint;
        out_owner?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalBurn(input: {
        _answer_id: number;
        out_pubkey: string | number | bigint;
        out_owner?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runUnwrap(input: {
        _answer_id: number;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalUnwrap(input: {
        _answer_id: number;
        out_pubkey: string | number | bigint;
        out_owner?: string;
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runMakeOrder(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalMakeOrder(input: {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runCancelOrder(input: {
        evers: string | number | bigint;
        price: string;
        sell: boolean;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalCancelOrder(input: {
        evers: string | number | bigint;
        price: string;
        sell: boolean;
        order_id?: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runReturnOwnership(input: {
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runLocalReturnOwnership(input: {
        tokens: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runBind(input: {
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
    runLocalBind(input: {
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
    runDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalDetails(input: {
        _answer_id: number;
    }): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runLocalGetDetails(): Promise<{
        transaction: Transaction;
        output: {
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
    }>;
    runGetBalance(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
    runLocalGetBalance(): Promise<{
        transaction: Transaction;
        output: {
            value0: string;
        };
    }>;
}
//# sourceMappingURL=FlexWalletAccount.d.ts.map