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
function errorWith(err, method, account, fn, params) {
    err.data = Object.assign(Object.assign({}, err.data), { [method]: {
            fn: `${account.constructor.name}.${fn}`,
            params,
        } });
    return err;
}
function runHelper(account, fn, params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write(`Running ${account.constructor.name}.${fn}...`);
        try {
            const result = yield account.run(fn, params);
            yield account.client.net.query_transaction_tree({
                in_msg: result.transaction.in_msg,
                timeout: 60000 * 5,
            });
            process.stdout.write(" ok\n");
            return {
                transaction: result.transaction,
                output: (_a = result.decoded) === null || _a === void 0 ? void 0 : _a.output,
            };
        }
        catch (err) {
            throw errorWith(err, "run", account, fn, params);
        }
    });
}
exports.runHelper = runHelper;
function deployHelper(account, fn, params) {
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write(`Deploying ${account.constructor.name}.${fn !== null && fn !== void 0 ? fn : ""}...`);
        try {
            const result = yield account.deploy({
                initFunctionName: fn,
                initInput: params,
            });
            process.stdout.write(" ok\n");
            return {
                transaction: result.transaction,
            };
        }
        catch (err) {
            throw errorWith(err, "deploy", account, fn !== null && fn !== void 0 ? fn : "", params !== null && params !== void 0 ? params : {});
        }
    });
}
exports.deployHelper = deployHelper;
function runLocalHelper(account, fn, params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield account.runLocal(fn, params);
            process.stdout.write(`Run local ${account.constructor.name}.${fn}... ok\n`);
            return {
                transaction: result.transaction,
                output: (_a = result.decoded) === null || _a === void 0 ? void 0 : _a.output,
            };
        }
        catch (err) {
            throw errorWith(err, "run", account, fn, params);
        }
    });
}
exports.runLocalHelper = runLocalHelper;
//# sourceMappingURL=helpers.js.map