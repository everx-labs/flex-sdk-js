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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLocalHelper = exports.deployHelper = exports.runHelper = exports.Log = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["FATAL"] = 1] = "FATAL";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 6] = "TRACE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Log {
    constructor() {
        this.level = LogLevel.INFO;
    }
    write(level, ...args) {
        if (level <= this.level) {
            const text = [];
            for (const arg of args) {
                if (typeof arg === "string") {
                    text.push(arg);
                }
                else {
                    text.push(JSON.stringify(arg, undefined, "    "));
                }
            }
            this.writeText(text.join(" "));
        }
    }
    debug(...args) {
        this.write(LogLevel.DEBUG, ...args);
    }
    info(...args) {
        this.write(LogLevel.INFO, ...args);
    }
    error(...args) {
        this.write(LogLevel.ERROR, ...args);
    }
    processingStart(title) {
        this.info(`${title}...`);
    }
    processingDone() {
        this.info(" ✓\n");
    }
}
exports.Log = Log;
_a = Log;
Log.NULL = new class NullLog extends Log {
    writeText(_text) {
    }
};
Log.STDOUT = new class StdOutLog extends Log {
    writeText(text) {
        process.stdout.write(text);
    }
}();
Log.default = _a.STDOUT;
function errorWith(err, method, account, fn, params) {
    err.data = Object.assign(Object.assign({}, err.data), { [method]: {
            fn: `${account.constructor.name}.${fn}`,
            params,
        } });
    return err;
}
function runHelper(account, fn, params, options) {
    var _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        (_b = account.log) === null || _b === void 0 ? void 0 : _b.processingStart(`Run ${account.constructor.name}.${fn}`);
        try {
            const runResult = yield account.run(fn, params);
            const result = {
                transaction: runResult.transaction,
                transactionTree: {
                    transactions: [],
                    messages: [],
                },
                output: (_c = runResult.decoded) === null || _c === void 0 ? void 0 : _c.output,
            };
            if (!((_d = options === null || options === void 0 ? void 0 : options.skipTransactionTree) !== null && _d !== void 0 ? _d : false)) {
                result.transactionTree =
                    yield account.client.net.query_transaction_tree({
                        in_msg: runResult.transaction.in_msg,
                        timeout: 60000 * 5,
                    });
            }
            (_e = account.log) === null || _e === void 0 ? void 0 : _e.info(` TX: ${runResult.transaction.id}`);
            (_f = account.log) === null || _f === void 0 ? void 0 : _f.processingDone();
            return result;
        }
        catch (err) {
            throw errorWith(err, "run", account, fn, params);
        }
    });
}
exports.runHelper = runHelper;
function deployHelper(account, fn, params) {
    var _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        (_b = account.log) === null || _b === void 0 ? void 0 : _b.processingStart(`Deploy ${account.constructor.name}.${fn !== null && fn !== void 0 ? fn : ""}`);
        try {
            const result = yield account.deploy({
                initFunctionName: fn,
                initInput: params,
            });
            (_c = account.log) === null || _c === void 0 ? void 0 : _c.processingDone();
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
    var _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (_b = account.log) === null || _b === void 0 ? void 0 : _b.processingStart(`RunLocal ${account.constructor.name}.${fn}`);
            const result = yield account.runLocal(fn, params);
            (_c = account.log) === null || _c === void 0 ? void 0 : _c.processingDone();
            return {
                transaction: result.transaction,
                output: (_d = result.decoded) === null || _d === void 0 ? void 0 : _d.output,
            };
        }
        catch (err) {
            throw errorWith(err, "runLocal", account, fn, params);
        }
    });
}
exports.runLocalHelper = runLocalHelper;
//# sourceMappingURL=helpers.js.map