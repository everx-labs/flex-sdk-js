import { abiError, AbiError, AccountClass, getAbiErrors } from "./account-ex";
import { DerivativeTransaction } from "../flex/web3/accounts";
import { ProcessingErrorCode } from "@eversdk/core";

export type ContractError = Error & {
    code?: number;
    data?: Record<string, unknown>;
};

export function errorFromExitCode(contract: AccountClass, exitCode: number): ContractError {
    const contractError = findError(getAbiErrors(contract), exitCode) ??
        findError(STD_ERRORS, exitCode) ?? {
            name: `${contract.name}_${
                exitCode < 0 ? `_cpp_${Math.abs(exitCode)}` : exitCode.toString()
            }`,
            exitCode,
            message: `${contract.name} failed with exit code ${exitCode}. See contract documentation or contact contract developers for details.`,
        };
    const error: ContractError = new Error(contractError.message);
    error.code = ProcessingErrorCode.MessageRejected;
    error.data = {
        ...error.data,
        exitCode,
        contract: contract.name,
    };
    return error;
}

export function resolveContractError(
    originalError: ContractError,
    contract: AccountClass,
): ContractError {
    type LocalError = {
        data?: {
            exit_code?: number;
            exit_code_message?: string;
        };
    };
    const localError = originalError.data?.local_error as LocalError;
    const localExitCode = localError?.data?.exit_code;
    if (localError !== undefined && localExitCode !== undefined) {
        const exitCodeMessage = errorFromExitCode(contract, localExitCode).message;
        localError.data = {
            ...localError.data,
            exit_code_message: exitCodeMessage,
        };
        if (originalError.code === ProcessingErrorCode.MessageExpired) {
            return {
                ...originalError,
                message: `Message expired, possible reason: ${exitCodeMessage}.`,
            };
        }
    }
    return originalError;
}

export function findTransactionError(
    transaction: DerivativeTransaction,
    contract: AccountClass,
    altErrorCode: number = 0,
): Error | undefined {
    const {
        id,
        aborted,
        compute: { exit_code },
        account_addr,
    } = transaction;
    const errorCode = exit_code !== 0 ? exit_code : altErrorCode;
    if (!aborted && errorCode === 0) {
        return undefined;
    }
    if (errorCode === 0) {
        return Error(`Transaction [${id}] on ${contract}[${account_addr}] was aborted.`);
    }
    const error = errorFromExitCode(contract, errorCode);
    error.data = {
        ...error.data,
        address: account_addr,
        transaction: id,
    };
    return error;
}

function findError(table: AbiError[] | undefined, exitCode: number): AbiError | undefined {
    return table?.find(x => x.exitCode === exitCode);
}

export const STD_ERROR = {
    stack_underflow: {
        exitCode: -3,
        message: "Not enough arguments in the stack for a primitive",
    },
    stack_overflow: {
        exitCode: -4,
        message: "More values have been stored on a stack than allowed by this version of TVM",
    },
    integer_overflow: {
        exitCode: -5,
        message:
            "Integer does not fit into expected range (by default −2256 ≤ x < 2256), or a division by zero has occurred",
    },
    range_check_error: {
        exitCode: -6,
        message: "Integer out of expected range",
    },
    invalid_opcode: {
        exitCode: -7,
        message: "Instruction or its immediate arguments cannot be decoded",
    },
    type_check_error: {
        exitCode: -8,
        message: "An argument to a primitive is of incorrect value type",
    },
    cell_overflow: {
        exitCode: -9,
        message: "Error in one of the serialization primitives",
    },
    cell_underflow: {
        exitCode: -10,
        message: "Deserialization error",
    },
    dictionary_error: {
        exitCode: -11,
        message: "Error while deserializing a dictionary object",
    },
    unknown_error: {
        exitCode: -12,
        message: "Unknown error, may be thrown by user programs",
    },
    fatal_error: {
        exitCode: -13,
        message: "Thrown by TVM in situations deemed impossible",
    },
    out_of_gas: {
        exitCode: -14,
        message:
            "Thrown by TVM when the remaining gas (g r ) becomes negative. This exception usually cannot be caught and leads to an immediate termination of TVM",
    },
    invalid_signature: {
        exitCode: 40,
        message: "Invalid signature",
    },
    method_not_found: {
        exitCode: 41,
        message: "Requested method was not found in the contract",
    },
    methods_dict_not_found: {
        exitCode: 42,
        message: "Dictionary of methods was not found",
    },
    unsupported_abi_version: {
        exitCode: 43,
        message: "Unsupported ABI version",
    },
    pubkey_not_found: {
        exitCode: 44,
        message: "Public key was not found in persistent data",
    },
    sign_not_found: {
        exitCode: 45,
        message: "Signature was not found in the message",
    },
    data_dict_invalid: {
        exitCode: 46,
        message: "Global data dictionary is invalid",
    },
    sc_info_not_found: {
        exitCode: 47,
        message: "Smart contract info was not found",
    },
    invalid_msg: {
        exitCode: 48,
        message: "Invalid inbound message",
    },
    invalid_data_state: {
        exitCode: 49,
        message: "Invalid state of persistent data",
    },
    index_out_of_range: {
        exitCode: 50,
        message: "Array index is out of range",
    },
    constructor_already_called: {
        exitCode: 51,
        message: "Constructor was already called",
    },
    replay_protection: {
        exitCode: 52,
        message: "Replay protection exception",
    },
    address_unpack_error: {
        exitCode: 53,
        message: "Address unpack error",
    },
    pop_empty_array: {
        exitCode: 54,
        message: "Pop from empty array",
    },
    data_not_found: {
        exitCode: 55,
        message: "Bad StateInit cell for tvm_insert_pubkey. Data was not found.",
    },
    poll_empty_map: {
        exitCode: 56,
        message: "map.pollFisrt() for empty map",
    },
    ext_message_expired: {
        exitCode: 57,
        message: "External inbound message is expired",
    },
    msg_has_no_sign_but_has_key: {
        exitCode: 58,
        message: "External inbound message has no signature but has public key",
    },
    no_fallback: {
        exitCode: 59,
        message: "Contract has no receive or no fallback functions",
    },
    no_fallback_id_wrong: {
        exitCode: 60,
        message: "Contract has no fallback function but function ID is wrong",
    },
    no_key_in_data: {
        exitCode: 61,
        message: "No public key in persistent data",
    },
    reserved_for_internal_usage: {
        exitCode: 62,
        message: "Reserved for internal usage",
    },
    see_optional_type_get: {
        exitCode: 63,
        message: "See <optional(Type)>.get()",
    },
    tvm_build_ext_msg_call_with_wrong_parameters: {
        exitCode: 64,
        message: "tvm.buildExtMSg() call with wrong parameters. See tvm.buildExtMsg()",
    },
    cant_convert_integer_to_string: {
        exitCode: 66,
        message: "Convert an integer to a string with width less than number length. See format()",
    },
    see_gas_to_value_and_value_to_gas: {
        exitCode: 67,
        message: "See gasToValue and valueToGas",
    },
    missing_config_parameter_20_or_21: {
        exitCode: 68,
        message: "There is no config parameter 20 or 21",
    },
    zero_to_the_power_of_zero: {
        exitCode: 69,
        message: "Zero to the power of zero calculation (0**0 in solidity style or 0^0)",
    },
    substr_longer_than_string: {
        exitCode: 70,
        message: "string method substr was called with substr longer than the whole string",
    },
    external_message_was_called_by_internal_message: {
        exitCode: 71,
        message: "Function marked by externalMsg was called by internal message",
    },
    internal_message_was_called_by_external_message: {
        exitCode: 72,
        message: "Function marked by internalMsg was called by external message",
    },
    cant_converted_to_enum: {
        exitCode: 73,
        message: "The value can't be converted to enum type",
    },
    await_answer_has_wrong_source: {
        exitCode: 74,
        message: "Await answer message has wrong source address",
    },
    await_answer_has_wrong_function: {
        exitCode: 75,
        message: "Await answer message has wrong function id",
    },
    public_function_was_called_before_constructor: {
        exitCode: 76,
        message: "Public function was called before constructor",
    },
    cant_convert_variant: {
        exitCode: 77,
        message: "It's impossible to convert variant type to target type. See variant.toUint()",
    },
    missing_private_function: {
        exitCode: 78,
        message: "There's no private function with the function id",
    },
    deploying_contract_with_pragma_upgrade_oldsol: {
        exitCode: 79,
        message:
            "You are deploying contract that uses pragma upgrade func/oldsol. Use the contract only for updating another contracts",
    },
};

const STD_ERRORS: AbiError[] = (() => {
    const errors: AbiError[] = [];
    for (const [name, { exitCode, message }] of Object.entries(STD_ERROR)) {
        errors.push(abiError(name, exitCode, message));
        if (exitCode < 0) {
            errors.push(abiError(`${name}_cpp`, Math.abs(exitCode + 1), message));
        }
    }
    return errors;
})();
