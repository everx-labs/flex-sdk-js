"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceXchgErrors = exports.PRICE_XCHG_ERROR = exports.flexWalletErrors = exports.FLEX_WALLET_ERROR = exports.getAbiErrors = exports.abiError = void 0;
const generated_1 = require("./generated");
function abiError(name, exitCode, message) {
    return {
        name,
        exitCode,
        message,
    };
}
exports.abiError = abiError;
function getAbiErrors(accountClass) {
    switch (accountClass) {
        case generated_1.TONTokenWalletAccount:
        case generated_1.FlexWalletAccount:
            return exports.flexWalletErrors;
        case generated_1.PriceXchgAccount:
            return exports.priceXchgErrors;
        default:
            return [];
    }
}
exports.getAbiErrors = getAbiErrors;
exports.FLEX_WALLET_ERROR = {
    message_sender_is_not_my_owner: { exitCode: 100, message: "Authorization error" },
    not_enough_balance: { exitCode: 101, message: "Not enough token balance to proceed" },
    message_sender_is_not_my_root: {
        exitCode: 102,
        message: "Message sender is not RootTokenContract address",
    },
    message_sender_is_not_good_wallet: {
        exitCode: 103,
        message: "Message sender is not a good wallet",
    },
    wrong_bounced_header: { exitCode: 104, message: "Wrong header of bounced message" },
    wrong_bounced_args: { exitCode: 105, message: "Wrong arguments in bounced message" },
    destroy_non_empty_wallet: {
        exitCode: 106,
        message: "Wallet with non-zero token balance can't be destroyed",
    },
    wallet_in_lend_ownership: { exitCode: 107, message: "Wallet in lend ownership state" },
    finish_time_must_be_greater_than_now: {
        exitCode: 108,
        message: "Lend finish time must be in future",
    },
    not_enough_evers_to_process: { exitCode: 109, message: "Not enough evers to process" },
    transfer_to_zero_address: { exitCode: 110, message: "Transfer to zero address" },
    lend_owner_not_found: { exitCode: 111, message: "Lend owner not found" },
    finish_time_is_out_of_lend_time: { exitCode: 112, message: "Finish time is out of lend time" },
    lend_owners_over_limit: { exitCode: 113, message: "Lend owners over limit" },
    zero_lend_balance: { exitCode: 114, message: "Zero lend balance" },
    wrong_user_id: { exitCode: 115, message: "Wrong user id (differ from wallet's pubkey)" },
    wrong_client_addr: {
        exitCode: 116,
        message: "Wrong client address (differ from wallet's owner)",
    },
    internal_owner_unset: { exitCode: 117, message: "Internal (contract) owner is not set" },
    binding_not_set: { exitCode: 118, message: "Binding not set (call `bind` before)" },
    wrong_flex_address: { exitCode: 119, message: "Wrong flex address" },
    wrong_price_xchg_code: { exitCode: 120, message: "Wrong PriceXchg code" },
};
exports.flexWalletErrors = Object.entries(exports.FLEX_WALLET_ERROR).map(([name, { exitCode, message }]) => abiError(name, exitCode, message));
exports.PRICE_XCHG_ERROR = {
    out_of_native_currency: {
        exitCode: 100,
        message: "Partially processed because out of native currency",
    },
    deals_limit: { exitCode: 101, message: "Partially processed because deals limit" },
    not_enough_native_currency_to_process: {
        exitCode: 102,
        message: "Not enough native currency to process",
    },
    not_enough_tokens_amount: { exitCode: 103, message: "Not enough tokens amount" },
    too_big_tokens_amount: { exitCode: 104, message: "Too big calculated tokens amount" },
    unverified_tip3_wallet: { exitCode: 105, message: "Unverified tip3 token wallet" },
    canceled: { exitCode: 106, message: "Order is canceled" },
    expired: { exitCode: 107, message: "Order is expired" },
    no_post_order_partially_done: {
        exitCode: 108,
        message: "Order without post-order flag is partially done",
    },
    incorrect_price: { exitCode: 109, message: "Incorrect price" },
    have_other_side_with_non_immediate_client: {
        exitCode: 110,
        message: "When an order without 'immediate_client' flag comes to a PriceXchg with enqueued orders of other side. " +
            "New sell order comes to a PriceXchg with enqueued buy orders. " +
            "Or new buy order comes to a PriceXchg with enqueued sell orders.",
    },
    have_this_side_with_non_post_order: {
        exitCode: 111,
        message: "When an order without 'post_order' flag comes to a PriceXchg with enqueued orders of this side. " +
            "New sell order comes to a PriceXchg with enqueued sell orders. " +
            "Or new buy order comes to a PriceXchg with enqueued buy orders.",
    },
    amount_is_less_then_market_min_amount: {
        exitCode: 200,
        message: `Specified amount is less then market min amount`,
    },
};
exports.priceXchgErrors = Object.entries(exports.PRICE_XCHG_ERROR).map(([name, { exitCode, message }]) => abiError(name, exitCode, message));
//# sourceMappingURL=account-ex.js.map