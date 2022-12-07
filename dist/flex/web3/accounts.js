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
exports.EvrAccounts = void 0;
const core_1 = require("@eversdk/core");
const appkit_1 = require("@eversdk/appkit");
const utils_1 = require("./utils");
const evr_1 = require("./evr");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Internal"] = 0] = "Internal";
    MessageType[MessageType["ExtIn"] = 1] = "ExtIn";
    MessageType[MessageType["ExtOut"] = 2] = "ExtOut";
})(MessageType || (MessageType = {}));
function derivativeTransactionFields(id) {
    return `
        ${id}
        out_messages { ${id} dst msg_type created_lt }
        account_addr 
        aborted
        compute { 
            exit_code 
        }
        lt
    `;
}
class EvrAccounts {
    constructor(sdk, signers, log) {
        this.sdk = sdk;
        this.signers = signers;
        this.log = log;
    }
    get(accountClass, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let address = undefined;
            let signer = undefined;
            if (typeof options === "string") {
                address = options;
            }
            else {
                if ("address" in options) {
                    address = options.address;
                }
                signer = options.signer;
            }
            return new accountClass({
                address,
                client: this.sdk,
                log: this.log,
                signer: yield this.signers.resolve(signer),
            });
        });
    }
    isActive(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = (yield this.sdk.net.query_collection({
                collection: "accounts",
                filter: { id: { eq: address } },
                result: "acc_type",
                limit: 1,
            })).result;
            return accounts.length > 0 && accounts[0].acc_type === appkit_1.AccountType.active;
        });
    }
    getBalancesUnits(addresses) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = (yield this.sdk.net.query_collection({
                collection: "accounts",
                filter: { id: { in: addresses } },
                result: "id acc_type balance",
            })).result;
            const balances = new Map();
            for (const acc of accounts) {
                if (acc.balance !== undefined && acc.balance !== null) {
                    balances.set(acc.id, BigInt(acc.balance));
                }
            }
            for (const address of addresses) {
                if (!balances.has(address)) {
                    balances.set(address, BigInt(0));
                }
            }
            return balances;
        });
    }
    getDecimalBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = (yield this.getBalancesUnits([address])).get(address);
            if (balance === undefined || balance === null) {
                return "0";
            }
            return (0, utils_1.decimalFromNumAndDenomAsPowerOf10)(balance.toString(), evr_1.Evr.NATIVE_DECIMALS);
        });
    }
    waitForFinalExternalAnswer(transaction, abi) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let orig_addr = transaction.account_addr;
            let externalMessages = [];
            const tree = yield this.sdk.net.query_transaction_tree({
                in_msg: transaction.in_msg,
                abi_registry: [(0, core_1.abiContract)(abi)],
                timeout: 60000 * 5,
            });
            for (const msg of tree.messages) {
                if (msg.src == orig_addr && ((_a = msg.dst) !== null && _a !== void 0 ? _a : "") === "") {
                    externalMessages.push(msg);
                }
            }
            return (_b = externalMessages[0].decoded_body) === null || _b === void 0 ? void 0 : _b.value;
        });
    }
    waitForInternalAnswer(transaction, abi) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let orig_addr = transaction.account_addr;
            let answerMessages = [];
            const tree = yield this.sdk.net.query_transaction_tree({
                in_msg: transaction.in_msg,
                abi_registry: abi.map(x => (0, core_1.abiContract)(x)),
                timeout: 60000 * 5,
            });
            for (const msg of tree.messages) {
                if (msg.dst == orig_addr && ((_a = msg.src) !== null && _a !== void 0 ? _a : "") !== "") {
                    answerMessages.push(msg);
                }
            }
            return answerMessages[0];
        });
    }
    waitForDerivativeTransactions(originTransactionId, accounts) {
        return __awaiter(this, void 0, void 0, function* () {
            const originTransaction = yield this.queryDerivativeTransaction(originTransactionId);
            if (!originTransaction) {
                throw new Error(`Can not wait for derivative transaction: origin transaction ${originTransactionId} is missing on the blockchain.`);
            }
            const result = {};
            let uncheckedMessages = [];
            function checkTransaction(transaction) {
                const address = transaction.account_addr;
                const contract = accounts[address];
                if (contract) {
                    if (!(address in result)) {
                        result[address] = transaction;
                    }
                }
                for (const message of transaction.out_messages) {
                    if (message.msg_type === MessageType.Internal) {
                        uncheckedMessages.push(message.id);
                    }
                }
            }
            checkTransaction(originTransaction);
            const waitTimeout = new WaitTimeout();
            while (uncheckedMessages.length > 0) {
                const checkingMessages = uncheckedMessages;
                uncheckedMessages = [];
                let hasCheckedMessages = false;
                for (const checkingMessage of checkingMessages) {
                    const transaction = yield this.queryDerivativeTransactionForMessage(checkingMessage, true);
                    if (transaction) {
                        hasCheckedMessages = true;
                        checkTransaction(transaction);
                        if (Object.keys(result).length >= Object.keys(accounts).length) {
                            return result;
                        }
                    }
                    else {
                        uncheckedMessages.push(checkingMessage);
                    }
                }
                if (hasCheckedMessages) {
                    waitTimeout.reset();
                }
                else {
                    yield waitTimeout.sleep();
                }
            }
            return result;
        });
    }
    queryDerivativeTransaction(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.queryBlockchain(`transaction(hash:$transactionId) { ${derivativeTransactionFields("id:hash")} }`, {
                transactionId,
            })).transaction;
        });
    }
    queryDerivativeTransactionForMessage(messageId, waitForAccountUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = (yield this.sdk.net.query_collection({
                collection: "transactions",
                filter: {
                    in_msg: { eq: messageId },
                },
                result: derivativeTransactionFields("id"),
            })).result[0];
            if (transaction && waitForAccountUpdate) {
                const timeLimit = Date.now() + 60000;
                const transactionLt = Number(transaction.lt);
                while (true) {
                    const account = (yield this.sdk.net.query_collection({
                        collection: "accounts",
                        filter: {
                            id: { eq: transaction.account_addr },
                        },
                        result: "last_trans_lt acc_type",
                    })).result[0];
                    if (!account) {
                        this.log.info(`Waiting for derivative transaction was stopped: account ${transaction.account_addr} is missing on the blockchain.`);
                        break;
                    }
                    if (account.acc_type !== appkit_1.AccountType.active) {
                        this.log.info(`Waiting for derivative transaction was stopped: account ${transaction.account_addr} has inactive state ${account.acc_type}.`);
                        break;
                    }
                    if (Number(account.last_trans_lt) > transactionLt) {
                        break;
                    }
                    if (Date.now() > timeLimit) {
                        this.log.info(`Can not wait for derivative transaction: account ${transaction.account_addr} has not been changed during 1 minute.`);
                        break;
                    }
                    yield new Promise(resolve => setTimeout(resolve, 500));
                }
            }
            return transaction;
        });
    }
    waitForMessageBody(messageId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const waitTimeout = new WaitTimeout();
            while (true) {
                const body = (_a = (yield this.queryBlockchain(`message(hash:$messageId) { body }`, {
                    messageId,
                })).message) === null || _a === void 0 ? void 0 : _a.body;
                if (body) {
                    return body;
                }
                yield waitTimeout.sleep();
            }
        });
    }
    queryBlockchain(text, variables) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = Object.keys(variables)
                .map(x => `$${x}: String!`)
                .join(", ");
            return (yield this.sdk.net.query({
                query: `query q(${args}) { blockchain { ${text} } }`,
                variables,
            })).result.data.blockchain;
        });
    }
}
exports.EvrAccounts = EvrAccounts;
class WaitTimeout {
    constructor() {
        this.delay = 2000;
        this.timeout = 40 * 1000;
        this.start = 0;
        this.limit = 0;
        this.reset();
    }
    reset() {
        this.start = Date.now();
        this.limit = this.start + this.timeout;
    }
    sleep() {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            if (now > this.limit) {
                const error = new Error(`Blockchain shard experiences degradation. Blocks generation is slow or stopped. Client hasn't received a new block within timeout.`);
                error.code = core_1.ProcessingErrorCode.TransactionWaitTimeout;
                throw error;
            }
            yield new Promise(resolve => setTimeout(resolve, this.delay));
        });
    }
}
//# sourceMappingURL=accounts.js.map