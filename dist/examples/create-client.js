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
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
        const clientAddress = yield flex_1.Client.deploy(flex, {
            everWallet: {
                address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
                signer: "everWallet",
            },
            signer: "everWallet",
        });
        console.log(`Client: ${clientAddress}}`);
        yield flex_1.Trader.deploy(flex, {
            client: {
                address: clientAddress,
                signer: "everWallet",
            },
            id: examples_1.CONFIG.trader.id,
            name: "trader_1",
            pubkey: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b"
        });
        console.log(`Trader wallets: ${JSON.stringify(flex_1.Trader.queryWallets(flex, { clientAddress: clientAddress, traderId: examples_1.CONFIG.trader.id }))}`);
        yield flex.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=create-client.js.map