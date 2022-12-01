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
const flex_1 = require("../../flex");
const config_1 = require("./config");
const accounts_1 = require("./accounts");
const contracts_1 = require("../../contracts");
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
function createTrader(flex, config, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        yield flex_1.Trader.deploy(flex, {
            client: config.client,
            id: accounts.traderId,
            name: "Integration Test",
            pubkey: accounts.traderId,
        });
    });
}
function createTSDTInternal(flex, config, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        const clientAddress = yield client.getAddress();
        const wallet = yield flex_1.Trader.deployTip31Wallet(flex, {
            clientAddress,
            everWallet: config.everWallet,
            traderId: accounts.traderId,
            tokenUnits: "10000000000",
            transferEvers: 21,
            evers: 20,
            keepEvers: 15,
            tokenWalletAddress: yield accounts.TSDT.external.getAddress(),
            tokenWrapperAddress: config.TSDT.wrapper,
            tokenWrapperWalletAddress: config.TSDT.wrapperWallet,
        });
        console.log("TSDT internal address", wallet.address);
    });
}
function createEVERInternal(flex, config, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        let wallet = yield flex_1.Trader.deployEverWallet(flex, {
            clientAddress: yield client.getAddress(),
            everWallet: config.everWallet,
            tokens: 500,
            evers: 20,
            keepEvers: 15,
            traderId: accounts.traderId,
            wrapperAddress: config.EVER.wrapper,
        });
        console.log("EVER internal address", wallet.address);
    });
}
function prepare(options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
        const config = (0, config_1.createConfig)();
        const flex = new flex_1.Flex(config.flex);
        const accounts = yield (0, accounts_1.createAccounts)(flex, config);
        try {
            try {
                if ((_a = options.trader) !== null && _a !== void 0 ? _a : false) {
                    yield createTrader(flex, config, accounts);
                }
                if ((_b = options.EVER) !== null && _b !== void 0 ? _b : false) {
                    yield createEVERInternal(flex, config, accounts);
                }
                if ((_c = options.TSDT) !== null && _c !== void 0 ? _c : false) {
                    yield createTSDTInternal(flex, config, accounts);
                }
            }
            catch (err) {
                console.error(err);
                process.exit(1);
            }
        }
        finally {
            yield flex.close();
        }
    });
}
if (process.env.PREPARE_FLEX_TEST === "1") {
    void prepare({ trader: true, EVER: true, TSDT: true });
}
//# sourceMappingURL=prepare.js.map