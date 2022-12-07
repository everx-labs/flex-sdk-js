import { Log, SignerOption } from "../flex";
import { Account, AccountOptions } from "@eversdk/appkit";
import { ContractPackageEx } from "./helpers";
export type AccountOptionsEx = {
    useCachedState?: boolean;
} & ({
    address: string;
    signer?: SignerOption;
} | {
    signer: SignerOption;
});
export type AbiError = {
    name: string;
    exitCode: number;
    message: string;
};
export interface AccountClass {
    package: ContractPackageEx;
    new (options: AccountOptions & {
        log?: Log;
    }): Account;
}
export declare function abiError(name: string, exitCode: number, message: string): AbiError;
export declare function getAbiErrors(accountClass: AccountClass): AbiError[];
export declare const FLEX_WALLET_ERROR: {
    message_sender_is_not_my_owner: {
        exitCode: number;
        message: string;
    };
    not_enough_balance: {
        exitCode: number;
        message: string;
    };
    message_sender_is_not_my_root: {
        exitCode: number;
        message: string;
    };
    message_sender_is_not_good_wallet: {
        exitCode: number;
        message: string;
    };
    wrong_bounced_header: {
        exitCode: number;
        message: string;
    };
    wrong_bounced_args: {
        exitCode: number;
        message: string;
    };
    destroy_non_empty_wallet: {
        exitCode: number;
        message: string;
    };
    wallet_in_lend_ownership: {
        exitCode: number;
        message: string;
    };
    finish_time_must_be_greater_than_now: {
        exitCode: number;
        message: string;
    };
    not_enough_evers_to_process: {
        exitCode: number;
        message: string;
    };
    transfer_to_zero_address: {
        exitCode: number;
        message: string;
    };
    lend_owner_not_found: {
        exitCode: number;
        message: string;
    };
    finish_time_is_out_of_lend_time: {
        exitCode: number;
        message: string;
    };
    lend_owners_over_limit: {
        exitCode: number;
        message: string;
    };
    zero_lend_balance: {
        exitCode: number;
        message: string;
    };
    wrong_user_id: {
        exitCode: number;
        message: string;
    };
    wrong_client_addr: {
        exitCode: number;
        message: string;
    };
    internal_owner_unset: {
        exitCode: number;
        message: string;
    };
    binding_not_set: {
        exitCode: number;
        message: string;
    };
    wrong_flex_address: {
        exitCode: number;
        message: string;
    };
    wrong_price_xchg_code: {
        exitCode: number;
        message: string;
    };
};
export declare const flexWalletErrors: AbiError[];
export declare const PRICE_XCHG_ERROR: {
    out_of_native_currency: {
        exitCode: number;
        message: string;
    };
    deals_limit: {
        exitCode: number;
        message: string;
    };
    not_enough_native_currency_to_process: {
        exitCode: number;
        message: string;
    };
    not_enough_tokens_amount: {
        exitCode: number;
        message: string;
    };
    too_big_tokens_amount: {
        exitCode: number;
        message: string;
    };
    unverified_tip3_wallet: {
        exitCode: number;
        message: string;
    };
    canceled: {
        exitCode: number;
        message: string;
    };
    expired: {
        exitCode: number;
        message: string;
    };
    no_post_order_partially_done: {
        exitCode: number;
        message: string;
    };
    incorrect_price: {
        exitCode: number;
        message: string;
    };
    have_other_side_with_non_immediate_client: {
        exitCode: number;
        message: string;
    };
    have_this_side_with_non_post_order: {
        exitCode: number;
        message: string;
    };
    amount_is_less_then_market_min_amount: {
        exitCode: number;
        message: string;
    };
};
export declare const priceXchgErrors: AbiError[];
//# sourceMappingURL=account-ex.d.ts.map