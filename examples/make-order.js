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
const client_1 = require("../flex/client");
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
        const ever = new wallet_1.Wallet({
            address: "0:62fe1c8d300724cb154dd54f9d498c0b8baacdc8687feabf9251716a3c2aa7a2",
            signer: "flex-wallet-1",
        });
        const flxEver = new market_1.Market({
            address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
        });
        const client = new client_1.Client({
            address: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
        });
        const order = yield ever.makeOrder({
            market: flxEver,
            price: 1.23,
            amount: 1,
            client,
            userId: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
        });
        flex_1.Flex.default.log.verbose(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);
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