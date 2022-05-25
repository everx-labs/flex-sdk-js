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
const client_1 = require("../flex/client");
const ever_wallet_1 = require("../flex/ever-wallet");
const examples_1 = require("./examples");
(0, examples_1.initExample)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const everWallet = new ever_wallet_1.EverWallet({
            address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
            signer: "msig",
        });
        const client = yield client_1.Client.deploy({
            everWallet,
            signer: "flex-client-1",
        });
        yield client.deployTrader({
            id: examples_1.CONFIG.trader1.id,
            name: "Trader 1",
            pubkey: yield flex_1.Flex.default.resolvePublicKey(examples_1.CONFIG.trader1.signer),
            eversAll: 40e9,
            eversAuth: 1e9,
            refillWallet: 10e9,
            minRefill: 0.1e9,
        });
        console.log(`Client: ${yield (yield client.getState()).account.getAddress()}`);
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=create-client.js.map