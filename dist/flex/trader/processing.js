"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDerivativeTransaction = exports.processingError = exports.ProcessingStatus = void 0;
const contracts_1 = require("../../contracts");
var ProcessingStatus;
(function (ProcessingStatus) {
    ProcessingStatus[ProcessingStatus["STARTING"] = 0] = "STARTING";
    ProcessingStatus[ProcessingStatus["FINALIZING"] = 1] = "FINALIZING";
    ProcessingStatus[ProcessingStatus["SUCCESS"] = 2] = "SUCCESS";
    ProcessingStatus[ProcessingStatus["ERROR"] = 3] = "ERROR";
})(ProcessingStatus = exports.ProcessingStatus || (exports.ProcessingStatus = {}));
function processingError(result, error) {
    return Object.assign(Object.assign({}, result), { status: ProcessingStatus.ERROR, error: Object.assign(Object.assign({}, error), { message: error.message }) });
}
exports.processingError = processingError;
function resolveDerivativeTransaction(transactions, address, contract, result, toSuccess, toError) {
    const transaction = transactions[address];
    if (transaction) {
        const error = (0, contracts_1.findTransactionError)(transaction, contract);
        if (error) {
            return {
                result: toError(error),
                transaction: undefined,
            };
        }
        return {
            result: toSuccess(transaction),
            transaction,
        };
    }
    return { result, transaction: undefined };
}
exports.resolveDerivativeTransaction = resolveDerivativeTransaction;
//# sourceMappingURL=processing.js.map