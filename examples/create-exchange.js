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
const flex_1 = require("../flex");
const examples_1 = require("./examples");
const deploy_exchange_1 = require("../flex/exchange/deploy-exchange");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flex = flex_1.Flex.default;
        const superRoot = yield (0, deploy_exchange_1.deployExchange)(flex, {
            signer: "flex-1",
            everWallet: { signer: "flex-wallet" },
            version: {
                wallet: 1,
                exchange: 1,
                user: 1,
            },
        });
        console.log(`Super Root: ${superRoot}}`);
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=create-exchange.js.map