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
        yield flex_1.Trader.deployTip31Wallet(flex, {
            clientAddress: examples_1.CONFIG.trader.client,
            traderId: examples_1.CONFIG.trader.id,
            tokenWrapperAddress: "token-wrapper-address",
            tokenWrapperWalletAddress: "token-wrapper-wallet",
            tokenWalletAddress: "token-wallet",
            tokenUnits: "100000",
            everWallet: { signer: "msig " },
        });
        yield flex_1.Trader.deployEverWallet(flex, {
            clientAddress: examples_1.CONFIG.trader.client,
            traderId: examples_1.CONFIG.trader.id,
            tokens: 100000,
            wrapperAddress: "wrapper-address",
            everWallet: { signer: "msig " },
        });
        yield flex.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=deploy-trader-wallet.js.map