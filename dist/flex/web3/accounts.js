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
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Internal"] = 0] = "Internal";
    MessageType[MessageType["ExtIn"] = 1] = "ExtIn";
    MessageType[MessageType["ExtOut"] = 2] = "ExtOut";
})(MessageType || (MessageType = {}));
function derivativeTransactionFields(id) {
    return `
        ${id}
        in_msg
        out_msgs
        out_messages { ${id} dst msg_type }
        account_addr 
        total_fees
        aborted
        compute { 
            exit_code 
        }
        lt
    `;
}
class EvrAccounts {
    constructor(everos, signers, log) {
        this.everos = everos;
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
                client: this.everos,
                log: this.log,
                signer: yield this.signers.resolve(signer),
            });
        });
    }
    isActive(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = (yield this.everos.net.query_collection({
                collection: "accounts",
                filter: { id: { eq: address } },
                result: "acc_type",
                limit: 1,
            })).result;
            return accounts.length > 0 && accounts[0].acc_type === appkit_1.AccountType.active;
        });
    }
    waitForFinalExternalAnswer(transaction, abi) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let orig_addr = transaction.account_addr;
            let externalMessages = [];
            const tree = yield this.everos.net.query_transaction_tree({
                in_msg: transaction.in_msg,
                abi_registry: [(0, core_1.abiContract)(abi)],
                timeout: 60000 * 5,
            });
            for (const msg of tree.messages) {
                if ((msg.src == orig_addr) && ((_a = msg.dst) !== null && _a !== void 0 ? _a : "") === "") {
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
            const tree = yield this.everos.net.query_transaction_tree({
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
            const originTransaction = (yield this.everos.net.query({
                query: `
            query tr($transactionId: String!) {
                blockchain {
                    transaction(hash:$transactionId) { ${derivativeTransactionFields("id:hash")} }
                }
            }
            `,
                variables: {
                    transactionId: originTransactionId,
                },
            })).result.data.blockchain.transaction;
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
            while (uncheckedMessages.length > 0) {
                const checkingMessages = uncheckedMessages;
                uncheckedMessages = [];
                for (const checkingMessage of checkingMessages) {
                    let transaction = undefined;
                    while (!transaction) {
                        transaction = (yield this.everos.net.query_collection({
                            collection: "transactions",
                            filter: {
                                in_msg: { eq: checkingMessage },
                            },
                            result: derivativeTransactionFields("id"),
                        })).result[0];
                        if (!transaction) {
                            yield new Promise(resolve => setTimeout(resolve, 2000));
                        }
                    }
                    const timeLimit = Date.now() + 60000;
                    const transactionLt = Number(transaction.lt);
                    while (true) {
                        const account = (yield this.everos.net.query_collection({
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
                        yield new Promise(resolve => setTimeout(resolve, 2000));
                    }
                    checkTransaction(transaction);
                    if (Object.keys(result).length >= Object.keys(accounts).length) {
                        break;
                    }
                }
            }
            return result;
        });
    }
}
exports.EvrAccounts = EvrAccounts;
//# sourceMappingURL=accounts.js.map