import { abiError, AbiError, AccountClass, getAbiErrors } from "./account-ex";
import { DerivativeTransaction } from "../flex/web3/accounts";
import { ProcessingErrorCode } from "@eversdk/core";

export type ContractError = Error & {
    code?: number;
    data?: Record<string, unknown>;
};

export function errorFromExitCode(
    contract: AccountClass,
    exitCode: number,
): ContractError {
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
            exit_code?: number,
            exit_code_message?: string,
        }
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
        return Error(
            `Transaction [${id}] on ${contract}[${account_addr}] was aborted.`,
        );
    }
    const error = errorFromExitCode(contract, errorCode);
    error.data = {
        ...error.data,
        address: account_addr,
        transaction: id,
    };
    return error;
}

function findError(
    table: AbiError[] | undefined,
    exitCode: number,
): AbiError | undefined {
    return table?.find((x) => x.exitCode === exitCode);
}

function tvmError(name: string, exitCode: number, message: string): AbiError[] {
    return [
        abiError(name, exitCode, message),
        abiError(`${name}_cpp`, Math.abs(exitCode + 1), message),
    ];
}

const STD_ERRORS: AbiError[] = [
    ...tvmError(
        "stack_underflow",
        -3,
        "Not enough arguments in the stack for a primitive",
    ),
    ...tvmError(
        "stack_overflow",
        -4,
        "More values have been stored on a stack than allowed by this version of TVM",
    ),
    ...tvmError(
        "integer_overflow",
        -5,
        "Integer does not fit into expected range (by default −2256 ≤ x < 2256), or a division by zero has occurred",
    ),
    ...tvmError("range_check_error", -6, "Integer out of expected range"),
    ...tvmError(
        "invalid_opcode",
        -7,
        "Instruction or its immediate arguments cannot be decoded",
    ),
    ...tvmError(
        "type_check_error",
        -8,
        "An argument to a primitive is of incorrect value type",
    ),
    ...tvmError(
        "cell_overflow",
        -9,
        "Error in one of the serialization primitives",
    ),
    ...tvmError("cell_underflow", -10, "Deserialization error"),
    ...tvmError(
        "dictionary_error",
        -11,
        "Error while deserializing a dictionary object",
    ),
    ...tvmError(
        "unknown_error",
        -12,
        "Unknown error, may be thrown by user programs",
    ),
    ...tvmError(
        "fatal_error",
        -13,
        "Thrown by TVM in situations deemed impossible",
    ),
    ...tvmError(
        "out_of_gas",
        -14,
        "Thrown by TVM when the remaining gas (g r ) becomes negative. This exception usually cannot be caught and leads to an immediate termination of TVM",
    ),
    abiError("invalid_signature", 40, "Invalid signature"),
    abiError(
        "method_not_found",
        41,
        "Requested method was not found in the contract",
    ),
    abiError("methods_dict_not_found", 42, "Dictionary of methods was not found"),
    abiError("unsupported_abi_version", 43, "Unsupported ABI version"),
    abiError(
        "pubkey_not_found",
        44,
        "Public key was not found in persistent data",
    ),
    abiError("sign_not_found", 45, "Signature was not found in the message"),
    abiError("data_dict_invalid", 46, "Global data dictionary is invalid"),
    abiError("sc_info_not_found", 47, "Smart contract info was not found"),
    abiError("invalid_msg", 48, "Invalid inbound message"),
    abiError("invalid_data_state", 49, "Invalid state of persistent data"),
    abiError("index_out_of_range", 50, "Array index is out of range"),
    abiError("constructor_already_called", 51, "Constructor was already called"),
    abiError("replay_protection", 52, "Replay protection exception"),
    abiError("address_unpack_error", 53, "Address unpack error"),
    abiError("pop_empty_array", 54, "Pop from empty array"),
    abiError(
        "data_not_found",
        55,
        "Bad StateInit cell for tvm_insert_pubkey. Data was not found.",
    ),
    abiError("poll_empty_map", 56, "map.pollFisrt() for empty map"),
    abiError("ext_message_expired", 57, "External inbound message is expired"),
    abiError(
        "msg_has_no_sign_but_has_key",
        58,
        "External inbound message has no signature but has public key",
    ),
    abiError(
        "no_fallback",
        59,
        "Contract has no receive or no fallback functions",
    ),
    abiError(
        "no_fallback_id_wrong",
        60,
        "Contract has no fallback function but function ID is wrong",
    ),
    abiError("no_key_in_data", 61, "No public key in persistent data"),
    abiError("reserved_for_internal_usage", 62, "Reserved for internal usage"),
    abiError("see_optional_type_get", 63, "See <optional(Type)>.get()"),
    abiError(
        "tvm_build_ext_msg_call_with_wrong_parameters",
        64,
        "tvm.buildExtMSg() call with wrong parameters. See tvm.buildExtMsg()",
    ),
    abiError(
        "cant_convert_integer_to_string",
        66,
        "Convert an integer to a string with width less than number length. See format()",
    ),
    abiError(
        "see_gas_to_value_and_value_to_gas",
        67,
        "See gasToValue and valueToGas",
    ),
    abiError(
        "missing_config_parameter_20_or_21",
        68,
        "There is no config parameter 20 or 21",
    ),
    abiError(
        "zero_to_the_power_of_zero",
        69,
        "Zero to the power of zero calculation (0**0 in solidity style or 0^0)",
    ),
    abiError(
        "substr_longer_than_string",
        70,
        "string method substr was called with substr longer than the whole string",
    ),
    abiError(
        "external_message_was_called_by_internal_message",
        71,
        "Function marked by externalMsg was called by internal message",
    ),
    abiError(
        "internal_message_was_called_by_external_message",
        72,
        "Function marked by internalMsg was called by external message",
    ),
    abiError(
        "cant_converted_to_enum",
        73,
        "The value can't be converted to enum type",
    ),
    abiError(
        "await_answer_has_wrong_source",
        74,
        "Await answer message has wrong source address",
    ),
    abiError(
        "await_answer_has_wrong_function",
        75,
        "Await answer message has wrong function id",
    ),
    abiError(
        "public_function_was_called_before_constructor",
        76,
        "Public function was called before constructor",
    ),
    abiError(
        "cant_convert_variant",
        77,
        "It's impossible to convert variant type to target type. See variant.toUint()",
    ),
    abiError(
        "missing_private_function",
        78,
        "There's no private function with the function id",
    ),
    abiError(
        "deploying_contract_with_pragma_upgrade_oldsol",
        79,
        "You are deploying contract that uses pragma upgrade func/oldsol. Use the contract only for updating another contracts",
    ),
];
