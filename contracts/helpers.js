"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLocalHelper = exports.deployHelper = exports.runHelper = void 0;
function runHelper(account, fn, params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield account.run(fn, params);
        yield account.client.net.query_transaction_tree({
            in_msg: result.transaction.in_msg,
            timeout: 60000 * 5,
        });
        return {
            transaction: result.transaction,
            output: (_a = result.decoded) === null || _a === void 0 ? void 0 : _a.output,
        };
    });
}
exports.runHelper = runHelper;
function deployHelper(account, fn, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield account.deploy({
            initFunctionName: fn,
            initInput: params,
        });
        return {
            transaction: result.transaction,
        };
    });
}
exports.deployHelper = deployHelper;
function runLocalHelper(account, fn, input) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield account.runLocal(fn, input);
        return {
            transaction: result.transaction,
            output: (_a = result.decoded) === null || _a === void 0 ? void 0 : _a.output,
        };
    });
}
exports.runLocalHelper = runLocalHelper;
//# sourceMappingURL=helpers.js.map