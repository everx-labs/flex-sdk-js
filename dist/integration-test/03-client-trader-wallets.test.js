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
const config_1 = require("./config");
const core_1 = require("@eversdk/core");
const flex_1 = require("../flex");
const test_1 = require("@playwright/test");
function createSigner(flex) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, core_1.signerKeys)(yield flex.evr.sdk.crypto.generate_random_sign_keys());
    });
}
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, ms));
    });
}
function findWallet(flex, client, trader, address) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield flex_1.Trader.queryWallets(flex, {
            clientAddress: client,
            traderId: trader,
        })).find(x => x.address === address);
    });
}
const test = config_1.test.extend({
    signers: [
        ({ flex }, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use({
                everWallet: yield createSigner(flex),
                flexClient: yield createSigner(flex),
                trader: yield createSigner(flex),
            });
        }),
        { scope: "worker" },
    ],
    everWallet: [
        ({ flex, signers }, use) => __awaiter(void 0, void 0, void 0, function* () {
            const everWallet = new flex_1.EverWallet(flex.evr, {
                signer: signers.everWallet,
            });
            yield use({
                address: yield everWallet.getAddress(),
                signer: signers.everWallet,
            });
        }),
        { scope: "worker" },
    ],
    traderId: [
        ({ flex, signers }, use) => __awaiter(void 0, void 0, void 0, function* () {
            yield use(yield flex.evr.signers.resolvePublicKey(signers.trader));
        }),
        { scope: "worker" },
    ],
    client: [
        ({ flex, signers }, use) => __awaiter(void 0, void 0, void 0, function* () {
            const signer = yield flex.evr.signers.resolve(signers.flexClient);
            const publicKey = yield flex.evr.signers.publicKey(signer);
            const userConfig = yield flex.getUserConfigAccount();
            const pubkey = `0x${publicKey}`;
            yield use({
                address: (yield userConfig.getFlexClientAddr({
                    pubkey,
                })).output.value0,
                signer: signers.flexClient,
            });
        }),
        { scope: "worker" },
    ],
});
test("Deploy Ever Wallet", ({ flex, accounts, everWallet }) => __awaiter(void 0, void 0, void 0, function* () {
    yield accounts.everWallet.topUp(everWallet.address, 150);
    const everWalletAccount = yield new flex_1.EverWallet(flex.evr, everWallet).getAccount();
    const pubkey = yield flex.evr.signers.resolvePublicKey(everWallet.signer);
    yield everWalletAccount.deployContract({
        owners: [`0x${pubkey}`],
        reqConfirms: 1,
    });
    console.log("Ever Wallet Address", everWallet.address);
}));
test("Create Client", ({ flex, client, everWallet, signers }) => __awaiter(void 0, void 0, void 0, function* () {
    const clientAddress = yield flex_1.Client.deploy(flex, {
        everWallet,
        signer: signers.flexClient,
    });
    console.log("Client Address", clientAddress);
    (0, test_1.expect)(clientAddress).toBe(client.address);
    yield sleep(5000);
}));
test("Create Trader", ({ flex, client, traderId }) => __awaiter(void 0, void 0, void 0, function* () {
    yield flex_1.Trader.deploy(flex, {
        client,
        id: traderId,
        name: "Integration Test Trader",
        pubkey: traderId,
    });
    console.log("Trader Id", traderId);
    yield sleep(5000);
}));
test("Create EVER Wallet", ({ flex, config, traderId, client, everWallet }) => __awaiter(void 0, void 0, void 0, function* () {
    let internalEVERAddress = (yield flex_1.Trader.deployEverWallet(flex, {
        clientAddress: client.address,
        everWallet,
        tokens: 50,
        evers: 20,
        keepEvers: 15,
        traderId: traderId,
        wrapperAddress: config.EVER.wrapper,
    })).address;
    console.log("EVER Wallet Address", internalEVERAddress);
    const internalEVER = yield findWallet(flex, client.address, traderId, internalEVERAddress);
    (0, test_1.expect)(internalEVER).toBeDefined();
}));
test("Create TSDT Wallet", ({ flex, config, client, traderId, accounts }) => __awaiter(void 0, void 0, void 0, function* () {
    const internalTSDTAddress = (yield flex_1.Trader.deployTip31Wallet(flex, {
        clientAddress: client.address,
        everWallet: {
            address: accounts.everWalletAddress,
            signer: (yield accounts.everWallet.getAccount()).signer,
        },
        traderId,
        tokenUnits: "10000000",
        transferEvers: 21,
        evers: 20,
        keepEvers: 15,
        tokenWalletAddress: yield accounts.TSDT.external.getAddress(),
        tokenWrapperAddress: config.TSDT.wrapper,
        tokenWrapperWalletAddress: config.TSDT.wrapperWallet,
    })).address;
    console.log("TSDT Wallet Address", internalTSDTAddress);
    const internalTSDT = yield findWallet(flex, client.address, traderId, internalTSDTAddress);
    (0, test_1.expect)(internalTSDT).toBeDefined();
}));
//# sourceMappingURL=03-client-trader-wallets.test.js.map