import { Log, SignerOption } from "../flex";
import { Account, AccountOptions } from "@eversdk/appkit";
import { FlexWalletAccount, PriceXchgAccount, TONTokenWalletAccount } from "./generated";
import { ContractPackageEx } from "./helpers";

export type AccountOptionsEx = {
    address: string,
    signer?: SignerOption,
} | {
    signer: SignerOption,
}

export type AbiError = {
    name: string,
    exitCode: number,
    message: string,
};

export interface AccountClass {
    package: ContractPackageEx,

    new(options: AccountOptions & { log?: Log }): Account,
}

export function abiError(name: string, exitCode: number, message: string): AbiError {
    return {
        name,
        exitCode,
        message,
    };
}

export function getAbiErrors(accountClass: AccountClass): AbiError[] {
    switch (accountClass) {
    case TONTokenWalletAccount:
    case FlexWalletAccount:
        return flexWalletErrors;
    case PriceXchgAccount:
        return priceXchgErrors;
    default:
        return [];
    }
}

export const flexWalletErrors: AbiError[] = [
    abiError("message_sender_is_not_my_owner", 100, "Authorization error"),
    abiError("not_enough_balance", 101, "Not enough token balance to proceed"),
    abiError(
        "message_sender_is_not_my_root",
        102,
        "Message sender is not RootTokenContract address",
    ),
    abiError("message_sender_is_not_good_wallet", 103, "Message sender is not a good wallet"),
    abiError("wrong_bounced_header", 104, "Wrong header of bounced message"),
    abiError("wrong_bounced_args", 105, "Wrong arguments in bounced message"),
    abiError(
        "destroy_non_empty_wallet",
        106,
        "Wallet with non-zero token balance can't be destroyed",
    ),
    abiError("wallet_in_lend_ownership", 107, "Wallet in lend ownership state"),
    abiError("finish_time_must_be_greater_than_now", 108, "Lend finish time must be in future"),
    abiError("not_enough_evers_to_process", 109, "Not enough evers to process"),
    abiError("transfer_to_zero_address", 110, "Transfer to zero address"),
    abiError("lend_owner_not_found", 111, "Lend owner not found"),
    abiError("finish_time_is_out_of_lend_time", 112, "Finish time is out of lend time"),
    abiError("lend_owners_over_limit", 113, "Lend owners over limit"),
    abiError("zero_lend_balance", 114, "Zero lend balance"),
    abiError("wrong_user_id", 115, "Wrong user id (differ from wallet's pubkey)"),
    abiError("wrong_client_addr", 116, "Wrong client address (differ from wallet's owner)"),
    abiError("internal_owner_unset", 117, "Internal (contract) owner is not set"),
    abiError("binding_not_set", 118, "Binding not set (call `bind` before)"),
    abiError("wrong_flex_address", 119, "Wrong flex address"),
    abiError("wrong_price_xchg_code", 120, "Wrong PriceXchg code"),
];

export const priceXchgErrors: AbiError[] = [
    abiError(
        "out_of_native_currency",
        100,
        "Partially processed because out of native currency",
    ),
    abiError("deals_limit", 101, "Partially processed because deals limit"),
    abiError(
        "not_enough_native_currency_to_process",
        102,
        "Not enough native currency to process",
    ),
    abiError("not_enough_tokens_amount", 103, "Not enough tokens amount"),
    abiError("too_big_tokens_amount", 104, "Too big calculated tokens amount"),
    abiError("unverified_tip3_wallet", 105, "Unverified tip3 token wallet"),
    abiError("canceled", 106, "Order is canceled"),
    abiError("expired", 107, "Order is expired"),
    abiError(
        "no_post_order_partially_done",
        108,
        "Order without post-order flag is partially done",
    ),
    abiError("incorrect_price", 109, "Incorrect price"),
    abiError(
        "have_other_side_with_non_immediate_client",
        110,
        "When an order without 'immediate_client' flag comes to a PriceXchg with enqueued orders of other side. " + "New sell order comes to a PriceXchg with enqueued buy orders. " + "Or new buy order comes to a PriceXchg with enqueued sell orders.",
    ),
    abiError(
        "have_this_side_with_non_post_order",
        111,
        "When an order without 'post_order' flag comes to a PriceXchg with enqueued orders of this side. " + "New sell order comes to a PriceXchg with enqueued sell orders. " + "Or new buy order comes to a PriceXchg with enqueued buy orders.",
    ),
];

