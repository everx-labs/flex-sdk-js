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
exports.Exchange = exports.TokenType = exports.Flex = exports.MakeOrderMode = void 0;
const deploy_exchange_1 = require("./deploy-exchange");
const add_token_type_1 = require("./add-token-type");
Object.defineProperty(exports, "TokenType", { enumerable: true, get: function () { return add_token_type_1.TokenType; } });
var config_1 = require("../config");
Object.defineProperty(exports, "MakeOrderMode", { enumerable: true, get: function () { return config_1.MakeOrderMode; } });
var flex_1 = require("../flex");
Object.defineProperty(exports, "Flex", { enumerable: true, get: function () { return flex_1.Flex; } });
class Exchange {
    static deploy(flex, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deploy_exchange_1.deployExchange)(flex, options);
        });
    }
}
exports.Exchange = Exchange;
//# sourceMappingURL=index.js.map