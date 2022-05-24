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
exports.Market = void 0;
const flex_1 = require("./flex");
const contracts_1 = require("../contracts");
class Market extends flex_1.FlexBoundLazy {
    createState(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                pair: new contracts_1.XchgPairAccount({
                    client: this.flex.client,
                    address: options.address,
                }),
            };
        });
    }
    getPair() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getState()).pair;
        });
    }
    getPairDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (yield this.getPair()).getDetails()).output;
        });
    }
}
exports.Market = Market;
//# sourceMappingURL=market.js.map