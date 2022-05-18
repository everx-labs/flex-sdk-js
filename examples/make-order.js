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
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const flex_1 = require("../flex");
const wallet_1 = require("../flex/wallet");
const market_1 = require("../flex/market");
core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
flex_1.Flex.config = {
    client: {
        network: {
            endpoints: ["https://flex2.dev.tonlabs.io"],
        },
    },
    globalConfig: "0:402f14b65b6b7af9752910e77eabf8f71240f6c190b5e4f1ab4d56c09954b723",
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const wallet = new wallet_1.Wallet({
            address: "0:b87de6635e37b4569c25c87a9bd1a7a312b083b8dd0ad2ec48270e6fe4d8804d",
            signer: "583085240bd1f44917e2b4708b3173352872c1f521e7bd16ea97b39d2d66a98b",
        });
        const market = new market_1.Market({
            address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
        });
        yield wallet.makeOrder({
            market,
            sell: true,
            price: 1.23,
            amount: 10000,
            clientAddress: "0:c34ec7bfae799c69479d50db89d3744e0175d8ab571e2c65bd78b0f70dc48e95",
            userId: "e890f897ddda3f49f35e65e95074ca31f29d8874785d7898691c005170ac548f",
        });
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield main();
        yield flex_1.Flex.default.close();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=make-order.js.map