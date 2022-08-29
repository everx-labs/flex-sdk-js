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
        const clientAddress = examples_1.CONFIG.trader.client;
        const traderId = examples_1.CONFIG.trader.id;
        let trader_tip3_wallet = yield flex_1.Trader.deployTip31Wallet(flex, {
            clientAddress: clientAddress,
            everWallet: {
                address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
                signer: "everWallet",
            },
            traderId: traderId,
            tokenWalletAddress: "0:d4208262595226ac069b94d716ec6339882ec93a0e7e254186f3eb77b7d34c4b",
            tokenWrapperAddress: "0:d51c96406f74e4a1168f5ca3a936330beb7653782743cdce23c11d285c92f9ca",
            tokenWrapperWalletAddress: "0:ca4a6787b720f38745ec2a13f997061a7ba3dfa2e9b4432771a9cf61ea6ac984",
            tokenUnits: "100000000000",
            transferEvers: 21,
            evers: 20,
            keepEvers: 15
        });
        console.log(`Trader EVER wallet address: ${trader_tip3_wallet} has beed topped-up.`);
        console.log(`Trader balances: ${JSON.stringify(yield flex_1.Trader.queryWallets(flex, { clientAddress: clientAddress, traderId: traderId }), null, 2)}`);
        yield flex.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=delegate-tip3.js.map