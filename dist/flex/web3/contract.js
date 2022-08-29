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
exports.Contract = exports.ContractFunction = void 0;
class ContractFunction {
    constructor(evr, abi, fn, params) {
        this.evr = evr;
        this.abi = abi;
        this.fn = fn;
        this.params = params;
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`call ${this.fn.name}(${JSON.stringify(this.params)})`);
        });
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`process ${this.fn.name}(${JSON.stringify(this.params)})`);
        });
    }
}
exports.ContractFunction = ContractFunction;
class Contract {
    constructor(evr, abi) {
        var _a;
        this.evr = evr;
        this.abi = abi;
        this.methods = {};
        for (const fn of (_a = abi.functions) !== null && _a !== void 0 ? _a : []) {
            this.methods[fn.name] = (params) => new ContractFunction(evr, abi, fn, params);
        }
    }
}
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map