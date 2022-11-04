"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successRequired = exports.resolveContractError = exports.errorFromExitCode = void 0;
const account_ex_1 = require("./account-ex");
const core_1 = require("@eversdk/core");
function errorFromExitCode(contract, exitCode) {
    var _a, _b;
    const contractError = (_b = (_a = findError((0, account_ex_1.getAbiErrors)(contract), exitCode)) !== null && _a !== void 0 ? _a : findError(STD_ERRORS, exitCode)) !== null && _b !== void 0 ? _b : {
        name: `${contract.name}_${exitCode < 0 ? `_cpp_${Math.abs(exitCode)}` : exitCode.toString()}`,
        exitCode,
        message: `${contract.name} failed with exit code ${exitCode}. See contract documentation or contact contract developers for details.`,
    };
    const error = new Error(contractError.message);
    error.code = core_1.ProcessingErrorCode.MessageRejected;
    error.data = Object.assign(Object.assign({}, error.data), { exitCode, contract: contract.name });
    return error;
}
exports.errorFromExitCode = errorFromExitCode;
function resolveContractError(originalError, contract) {
    var _a, _b;
    const localError = (_a = originalError.data) === null || _a === void 0 ? void 0 : _a.local_error;
    const localExitCode = (_b = localError === null || localError === void 0 ? void 0 : localError.data) === null || _b === void 0 ? void 0 : _b.exit_code;
    if (localError !== undefined && localExitCode !== undefined) {
        const exitCodeMessage = errorFromExitCode(contract, localExitCode).message;
        localError.data = Object.assign(Object.assign({}, localError.data), { exit_code_message: exitCodeMessage });
        if (originalError.code === core_1.ProcessingErrorCode.MessageExpired) {
            return Object.assign(Object.assign({}, originalError), { message: `Message expired, possible reason: ${exitCodeMessage}.` });
        }
    }
    return originalError;
}
exports.resolveContractError = resolveContractError;
function successRequired(transactions, address, contract) {
    const transaction = transactions[address];
    if (!transaction) {
        throw new Error(`Missing required derivative transaction on ${contract.name}[${address}]`);
    }
    const { id, aborted, compute: { exit_code }, account_addr, } = transaction;
    if (!aborted && exit_code === 0) {
        return;
    }
    if (exit_code === 0) {
        throw Error(`Transaction [${id}] on ${contract}[${account_addr}] was aborted.`);
    }
    const error = errorFromExitCode(contract, exit_code);
    error.data = Object.assign(Object.assign({}, error.data), { address: account_addr, transaction: id });
    throw error;
}
exports.successRequired = successRequired;
function findError(table, exitCode) {
    return table === null || table === void 0 ? void 0 : table.find((x) => x.exitCode === exitCode);
}
function tvmError(name, exitCode, message) {
    return [
        (0, account_ex_1.abiError)(name, exitCode, message),
        (0, account_ex_1.abiError)(`${name}_cpp`, Math.abs(exitCode + 1), message),
    ];
}
const STD_ERRORS = [
    ...tvmError("stack_underflow", -3, "Not enough arguments in the stack for a primitive"),
    ...tvmError("stack_overflow", -4, "More values have been stored on a stack than allowed by this version of TVM"),
    ...tvmError("integer_overflow", -5, "Integer does not fit into expected range (by default −2256 ≤ x < 2256), or a division by zero has occurred"),
    ...tvmError("range_check_error", -6, "Integer out of expected range"),
    ...tvmError("invalid_opcode", -7, "Instruction or its immediate arguments cannot be decoded"),
    ...tvmError("type_check_error", -8, "An argument to a primitive is of incorrect value type"),
    ...tvmError("cell_overflow", -9, "Error in one of the serialization primitives"),
    ...tvmError("cell_underflow", -10, "Deserialization error"),
    ...tvmError("dictionary_error", -11, "Error while deserializing a dictionary object"),
    ...tvmError("unknown_error", -12, "Unknown error, may be thrown by user programs"),
    ...tvmError("fatal_error", -13, "Thrown by TVM in situations deemed impossible"),
    ...tvmError("out_of_gas", -14, "Thrown by TVM when the remaining gas (g r ) becomes negative. This exception usually cannot be caught and leads to an immediate termination of TVM"),
    (0, account_ex_1.abiError)("invalid_signature", 40, "Invalid signature"),
    (0, account_ex_1.abiError)("method_not_found", 41, "Requested method was not found in the contract"),
    (0, account_ex_1.abiError)("methods_dict_not_found", 42, "Dictionary of methods was not found"),
    (0, account_ex_1.abiError)("unsupported_abi_version", 43, "Unsupported ABI version"),
    (0, account_ex_1.abiError)("pubkey_not_found", 44, "Public key was not found in persistent data"),
    (0, account_ex_1.abiError)("sign_not_found", 45, "Signature was not found in the message"),
    (0, account_ex_1.abiError)("data_dict_invalid", 46, "Global data dictionary is invalid"),
    (0, account_ex_1.abiError)("sc_info_not_found", 47, "Smart contract info was not found"),
    (0, account_ex_1.abiError)("invalid_msg", 48, "Invalid inbound message"),
    (0, account_ex_1.abiError)("invalid_data_state", 49, "Invalid state of persistent data"),
    (0, account_ex_1.abiError)("index_out_of_range", 50, "Array index is out of range"),
    (0, account_ex_1.abiError)("constructor_already_called", 51, "Constructor was already called"),
    (0, account_ex_1.abiError)("replay_protection", 52, "Replay protection exception"),
    (0, account_ex_1.abiError)("address_unpack_error", 53, "Address unpack error"),
    (0, account_ex_1.abiError)("pop_empty_array", 54, "Pop from empty array"),
    (0, account_ex_1.abiError)("data_not_found", 55, "Bad StateInit cell for tvm_insert_pubkey. Data was not found."),
    (0, account_ex_1.abiError)("poll_empty_map", 56, "map.pollFisrt() for empty map"),
    (0, account_ex_1.abiError)("ext_message_expired", 57, "External inbound message is expired"),
    (0, account_ex_1.abiError)("msg_has_no_sign_but_has_key", 58, "External inbound message has no signature but has public key"),
    (0, account_ex_1.abiError)("no_fallback", 59, "Contract has no receive or no fallback functions"),
    (0, account_ex_1.abiError)("no_fallback_id_wrong", 60, "Contract has no fallback function but function ID is wrong"),
    (0, account_ex_1.abiError)("no_key_in_data", 61, "No public key in persistent data"),
    (0, account_ex_1.abiError)("reserved_for_internal_usage", 62, "Reserved for internal usage"),
    (0, account_ex_1.abiError)("see_optional_type_get", 63, "See <optional(Type)>.get()"),
    (0, account_ex_1.abiError)("tvm_build_ext_msg_call_with_wrong_parameters", 64, "tvm.buildExtMSg() call with wrong parameters. See tvm.buildExtMsg()"),
    (0, account_ex_1.abiError)("cant_convert_integer_to_string", 66, "Convert an integer to a string with width less than number length. See format()"),
    (0, account_ex_1.abiError)("see_gas_to_value_and_value_to_gas", 67, "See gasToValue and valueToGas"),
    (0, account_ex_1.abiError)("missing_config_parameter_20_or_21", 68, "There is no config parameter 20 or 21"),
    (0, account_ex_1.abiError)("zero_to_the_power_of_zero", 69, "Zero to the power of zero calculation (0**0 in solidity style or 0^0)"),
    (0, account_ex_1.abiError)("substr_longer_than_string", 70, "string method substr was called with substr longer than the whole string"),
    (0, account_ex_1.abiError)("external_message_was_called_by_internal_message", 71, "Function marked by externalMsg was called by internal message"),
    (0, account_ex_1.abiError)("internal_message_was_called_by_external_message", 72, "Function marked by internalMsg was called by external message"),
    (0, account_ex_1.abiError)("cant_converted_to_enum", 73, "The value can't be converted to enum type"),
    (0, account_ex_1.abiError)("await_answer_has_wrong_source", 74, "Await answer message has wrong source address"),
    (0, account_ex_1.abiError)("await_answer_has_wrong_function", 75, "Await answer message has wrong function id"),
    (0, account_ex_1.abiError)("public_function_was_called_before_constructor", 76, "Public function was called before constructor"),
    (0, account_ex_1.abiError)("cant_convert_variant", 77, "It's impossible to convert variant type to target type. See variant.toUint()"),
    (0, account_ex_1.abiError)("missing_private_function", 78, "There's no private function with the function id"),
    (0, account_ex_1.abiError)("deploying_contract_with_pragma_upgrade_oldsol", 79, "You are deploying contract that uses pragma upgrade func/oldsol. Use the contract only for updating another contracts"),
];
//# sourceMappingURL=errors.js.map