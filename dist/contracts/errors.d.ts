import { AccountClass } from "./account-ex";
import { DerivativeTransaction } from "../flex/web3/accounts";
export type ContractError = Error & {
    code?: number;
    data?: Record<string, unknown>;
};
export declare function errorFromExitCode(contract: AccountClass, exitCode: number): ContractError;
export declare function resolveContractError(originalError: ContractError, contract: AccountClass): ContractError;
export declare function findTransactionError(transaction: DerivativeTransaction, contract: AccountClass, altErrorCode?: number): Error | undefined;
export declare const STD_ERROR: {
    stack_underflow: {
        exitCode: number;
        message: string;
    };
    stack_overflow: {
        exitCode: number;
        message: string;
    };
    integer_overflow: {
        exitCode: number;
        message: string;
    };
    range_check_error: {
        exitCode: number;
        message: string;
    };
    invalid_opcode: {
        exitCode: number;
        message: string;
    };
    type_check_error: {
        exitCode: number;
        message: string;
    };
    cell_overflow: {
        exitCode: number;
        message: string;
    };
    cell_underflow: {
        exitCode: number;
        message: string;
    };
    dictionary_error: {
        exitCode: number;
        message: string;
    };
    unknown_error: {
        exitCode: number;
        message: string;
    };
    fatal_error: {
        exitCode: number;
        message: string;
    };
    out_of_gas: {
        exitCode: number;
        message: string;
    };
    invalid_signature: {
        exitCode: number;
        message: string;
    };
    method_not_found: {
        exitCode: number;
        message: string;
    };
    methods_dict_not_found: {
        exitCode: number;
        message: string;
    };
    unsupported_abi_version: {
        exitCode: number;
        message: string;
    };
    pubkey_not_found: {
        exitCode: number;
        message: string;
    };
    sign_not_found: {
        exitCode: number;
        message: string;
    };
    data_dict_invalid: {
        exitCode: number;
        message: string;
    };
    sc_info_not_found: {
        exitCode: number;
        message: string;
    };
    invalid_msg: {
        exitCode: number;
        message: string;
    };
    invalid_data_state: {
        exitCode: number;
        message: string;
    };
    index_out_of_range: {
        exitCode: number;
        message: string;
    };
    constructor_already_called: {
        exitCode: number;
        message: string;
    };
    replay_protection: {
        exitCode: number;
        message: string;
    };
    address_unpack_error: {
        exitCode: number;
        message: string;
    };
    pop_empty_array: {
        exitCode: number;
        message: string;
    };
    data_not_found: {
        exitCode: number;
        message: string;
    };
    poll_empty_map: {
        exitCode: number;
        message: string;
    };
    ext_message_expired: {
        exitCode: number;
        message: string;
    };
    msg_has_no_sign_but_has_key: {
        exitCode: number;
        message: string;
    };
    no_fallback: {
        exitCode: number;
        message: string;
    };
    no_fallback_id_wrong: {
        exitCode: number;
        message: string;
    };
    no_key_in_data: {
        exitCode: number;
        message: string;
    };
    reserved_for_internal_usage: {
        exitCode: number;
        message: string;
    };
    see_optional_type_get: {
        exitCode: number;
        message: string;
    };
    tvm_build_ext_msg_call_with_wrong_parameters: {
        exitCode: number;
        message: string;
    };
    cant_convert_integer_to_string: {
        exitCode: number;
        message: string;
    };
    see_gas_to_value_and_value_to_gas: {
        exitCode: number;
        message: string;
    };
    missing_config_parameter_20_or_21: {
        exitCode: number;
        message: string;
    };
    zero_to_the_power_of_zero: {
        exitCode: number;
        message: string;
    };
    substr_longer_than_string: {
        exitCode: number;
        message: string;
    };
    external_message_was_called_by_internal_message: {
        exitCode: number;
        message: string;
    };
    internal_message_was_called_by_external_message: {
        exitCode: number;
        message: string;
    };
    cant_converted_to_enum: {
        exitCode: number;
        message: string;
    };
    await_answer_has_wrong_source: {
        exitCode: number;
        message: string;
    };
    await_answer_has_wrong_function: {
        exitCode: number;
        message: string;
    };
    public_function_was_called_before_constructor: {
        exitCode: number;
        message: string;
    };
    cant_convert_variant: {
        exitCode: number;
        message: string;
    };
    missing_private_function: {
        exitCode: number;
        message: string;
    };
    deploying_contract_with_pragma_upgrade_oldsol: {
        exitCode: number;
        message: string;
    };
};
//# sourceMappingURL=errors.d.ts.map