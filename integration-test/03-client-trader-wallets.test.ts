import { test as base } from "./config";
import { Signer, signerKeys } from "@eversdk/core";
import { Client, EverWallet, Flex, SignerOption, Trader, WalletInfo } from "../flex";
import { expect } from "@playwright/test";

type NewClient = {
    signers: {
        everWallet: Signer;
        flexClient: Signer;
        trader: Signer;
    };
    everWallet: { address: string; signer: SignerOption };
    client: { address: string; signer: SignerOption };
    traderId: string;
};

async function createSigner(flex: Flex): Promise<Signer> {
    return signerKeys(await flex.evr.sdk.crypto.generate_random_sign_keys());
}

async function sleep(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function findWallet(
    flex: Flex,
    client: string,
    trader: string,
    address: string,
): Promise<WalletInfo | undefined> {
    return (
        await Trader.queryWallets(flex, {
            clientAddress: client,
            traderId: trader,
        })
    ).find(x => x.address === address);
}

const test = base.extend<{}, NewClient>({
    signers: [
        async ({ flex }, use) => {
            await use({
                everWallet: await createSigner(flex),
                flexClient: await createSigner(flex),
                trader: await createSigner(flex),
            });
        },
        { scope: "worker" },
    ],
    everWallet: [
        async ({ flex, signers }, use) => {
            const everWallet = new EverWallet(flex.evr, {
                signer: signers.everWallet,
            });
            await use({
                address: await everWallet.getAddress(),
                signer: signers.everWallet,
            });
        },
        { scope: "worker" },
    ],
    traderId: [
        async ({ flex, signers }, use) => {
            await use(await flex.evr.signers.resolvePublicKey(signers.trader));
        },
        { scope: "worker" },
    ],
    client: [
        async ({ flex, signers }, use) => {
            const signer = await flex.evr.signers.resolve(signers.flexClient);
            const publicKey = await flex.evr.signers.publicKey(signer);
            const userConfig = await flex.getUserConfigAccount();
            const pubkey = `0x${publicKey}`;
            await use({
                address: (
                    await userConfig.getFlexClientAddr({
                        pubkey,
                    })
                ).output.value0,
                signer: signers.flexClient,
            });
        },
        { scope: "worker" },
    ],
});

test("Deploy Ever Wallet", async ({ flex, accounts, everWallet }) => {
    await accounts.everWallet.topUp(everWallet.address, 150);
    const everWalletAccount = await new EverWallet(flex.evr, everWallet).getAccount();
    const pubkey = await flex.evr.signers.resolvePublicKey(everWallet.signer);
    await everWalletAccount.deployContract({
        owners: [`0x${pubkey}`],
        reqConfirms: 1,
    });
    console.log("Ever Wallet Address", everWallet.address);
});

test("Create Client", async ({ flex, client, everWallet, signers }) => {
    const clientAddress = await Client.deploy(flex, {
        everWallet,
        signer: signers.flexClient,
    });
    console.log("Client Address", clientAddress);
    expect(clientAddress).toBe(client.address);
    await sleep(5000);
});

test("Create Trader", async ({ flex, client, traderId }) => {
    await Trader.deploy(flex, {
        client,
        id: traderId,
        name: "Integration Test Trader",
        pubkey: traderId,
    });
    console.log("Trader Id", traderId);
    await sleep(5000);
});

test("Create EVER Wallet", async ({ flex, config, traderId, client, everWallet }) => {
    let internalEVERAddress = (
        await Trader.deployEverWallet(flex, {
            clientAddress: client.address,
            everWallet,
            tokens: 50,
            evers: 20,
            keepEvers: 15,
            traderId: traderId,
            wrapperAddress: config.EVER.wrapper,
        })
    ).address;
    console.log("EVER Wallet Address", internalEVERAddress);
    const internalEVER = await findWallet(flex, client.address, traderId, internalEVERAddress);
    expect(internalEVER).toBeDefined();
});

test("Create TSDT Wallet", async ({ flex, config, client, traderId, accounts }) => {
    const internalTSDTAddress = (
        await Trader.deployTip31Wallet(flex, {
            clientAddress: client.address,
            everWallet: {
                address: accounts.everWalletAddress,
                signer: (await accounts.everWallet.getAccount()).signer,
            },
            traderId,
            tokenUnits: "100000000",
            transferEvers: 21,
            evers: 20,
            keepEvers: 15,
            tokenWalletAddress: await accounts.TSDT.external.getAddress(),
            tokenWrapperAddress: config.TSDT.wrapper,
            tokenWrapperWalletAddress: config.TSDT.wrapperWallet,
        })
    ).address;
    console.log("TSDT Wallet Address", internalTSDTAddress);
    const internalTSDT = await findWallet(flex, client.address, traderId, internalTSDTAddress);
    expect(internalTSDT).toBeDefined();
});
