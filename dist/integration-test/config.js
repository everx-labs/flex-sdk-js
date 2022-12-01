"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.expect = exports.test = exports.createConfig = void 0;
const flex_1 = require("../flex");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const test_1 = require("@playwright/test");
const contracts_1 = require("../contracts");
function getPackageFolder() {
    let folder = path.resolve(__dirname);
    while (folder !== "/" && !fs.existsSync(path.resolve(folder, "package.json"))) {
        folder = path.resolve(folder, "..");
    }
    return folder;
}
function createConfig() {
    const configFilePath = path.resolve(getPackageFolder(), ".secret", "integration-test-config.json");
    if (fs.existsSync(configFilePath)) {
        return JSON.parse(fs.readFileSync(configFilePath, "utf8"));
    }
    return {
        flex: (0, flex_1.defaultConfig)(),
        everWallet: {
            signer: "everWallet",
        },
        client: {
            signer: "everWallet",
        },
        trader: {
            signer: "everWallet",
        },
        market: "",
        EVER: {
            wrapper: "",
            wallet: { signer: "everWallet" },
        },
        TSDT: {
            wrapper: "",
            wrapperWallet: "",
            wallet: { signer: "everWallet" },
        },
    };
}
exports.createConfig = createConfig;
function resolveTraderId(flex, config) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield flex.evr.signers.resolvePublicKey(config.trader.signer);
    });
}
function createAccounts(flex, config, traderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const everWallet = new flex_1.EverWallet(flex.evr, config.everWallet);
        const flexClient = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        const everTokenWallet = yield flex.evr.accounts.get(contracts_1.MultisigWalletAccount, config.EVER.wallet);
        const pubkey = (0, flex_1.uint256)(traderId);
        const everWrapper = yield flex.evr.accounts.get(contracts_1.WrapperEverAccount, config.EVER.wrapper);
        const everInternalAddress = (yield everWrapper.getWalletAddress({
            owner: yield flexClient.getAddress(),
            pubkey,
        })).output.value0;
        const tsdtTokenWallet = yield flex.evr.accounts.get(contracts_1.Tip31WalletAccount, config.TSDT.wallet);
        const wrapper = yield flex.evr.accounts.get(contracts_1.WrapperAccount, config.TSDT.wrapper);
        const tsdtInternalAddress = (yield wrapper.getWalletAddress({
            pubkey,
            owner: yield flexClient.getAddress(),
        })).output.value0;
        return {
            everWallet,
            flexClient,
            EVER: {
                external: everTokenWallet,
                internal: yield flex.evr.accounts.get(contracts_1.FlexWalletAccount, everInternalAddress),
            },
            TSDT: {
                external: tsdtTokenWallet,
                internal: yield flex.evr.accounts.get(contracts_1.FlexWalletAccount, tsdtInternalAddress),
            },
        };
    });
}
exports.test = test_1.test.extend({
    flex: [
        ({ config }, use) => __awaiter(void 0, void 0, void 0, function* () {
            core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
            const flex = new flex_1.Flex(config.flex);
            try {
                yield use(flex);
            }
            finally {
                yield flex.close();
            }
        }),
        { scope: "worker" },
    ],
    config: [
        ({}, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use(createConfig());
        }),
        { scope: "worker" },
    ],
    traderId: [
        ({ flex, config }, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use(yield resolveTraderId(flex, config));
        }),
        { scope: "worker" },
    ],
    accounts: [
        ({ flex, config, traderId }, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use(yield createAccounts(flex, config, traderId));
        }),
        { scope: "worker" },
    ],
    addresses: [
        ({ accounts }, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use({
                everWallet: yield accounts.everWallet.getAddress(),
                flexClient: yield accounts.flexClient.getAddress(),
                EVER: {
                    external: yield accounts.EVER.external.getAddress(),
                    internal: yield accounts.EVER.internal.getAddress(),
                },
                TSDT: {
                    external: yield accounts.TSDT.external.getAddress(),
                    internal: yield accounts.TSDT.internal.getAddress(),
                },
            });
        }),
        { scope: "worker" },
    ],
});
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
function createTrader(flex, config, traderId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield flex_1.Trader.deploy(flex, {
            client: config.client,
            id: traderId,
            name: "Integration Test",
            pubkey: traderId,
        });
    });
}
function createTSDTInternal(flex, config, traderId, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        const clientAddress = yield client.getAddress();
        const wallet = yield flex_1.Trader.deployTip31Wallet(flex, {
            clientAddress,
            everWallet: config.everWallet,
            traderId: traderId,
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
function createEVERInternal(flex, config, traderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield flex.evr.accounts.get(contracts_1.FlexClientAccount, config.client);
        let wallet = yield flex_1.Trader.deployEverWallet(flex, {
            clientAddress: yield client.getAddress(),
            everWallet: config.everWallet,
            tokens: 500,
            evers: 20,
            keepEvers: 15,
            traderId: traderId,
            wrapperAddress: config.EVER.wrapper,
        });
        console.log("EVER internal address", wallet.address);
    });
}
function prepare(options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
        const config = createConfig();
        const flex = new flex_1.Flex(config.flex);
        const traderId = yield resolveTraderId(flex, config);
        const accounts = yield createAccounts(flex, config, traderId);
        try {
            try {
                if ((_a = options.trader) !== null && _a !== void 0 ? _a : false) {
                    yield createTrader(flex, config, traderId);
                }
                if ((_b = options.EVER) !== null && _b !== void 0 ? _b : false) {
                    yield createEVERInternal(flex, config, traderId);
                }
                if ((_c = options.TSDT) !== null && _c !== void 0 ? _c : false) {
                    yield createTSDTInternal(flex, config, traderId, accounts);
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
    (() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Prepare test suite");
        yield prepare({ trader: true, EVER: true, TSDT: true });
    }))();
}
//# sourceMappingURL=config.js.map