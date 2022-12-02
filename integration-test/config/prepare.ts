import { Flex, Trader } from "../../flex";
import { createConfig, TestConfig } from "./config";
import { createAccounts, TestAccounts } from "./accounts";
import { FlexClientAccount } from "../../contracts";
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";

async function createTrader(flex: Flex, config: TestConfig, accounts: TestAccounts) {
    await Trader.deploy(flex, {
        client: config.client,
        id: accounts.traderId,
        name: "Integration Test",
        pubkey: accounts.traderId,
    });
}

async function createTSDTInternal(flex: Flex, config: TestConfig, accounts: TestAccounts) {
    const client = await flex.evr.accounts.get(FlexClientAccount, config.client);
    const clientAddress = await client.getAddress();
    const wallet = await Trader.deployTip31Wallet(flex, {
        clientAddress,
        everWallet: config.everWallet,
        traderId: accounts.traderId,
        tokenUnits: "10000000000",
        transferEvers: 21,
        evers: 20,
        keepEvers: 15,
        tokenWalletAddress: await accounts.TSDT.external.getAddress(),
        tokenWrapperAddress: config.TSDT.wrapper,
        tokenWrapperWalletAddress: config.TSDT.wrapperWallet,
    });

    console.log("TSDT internal address", wallet.address);
}

async function createEVERInternal(flex: Flex, config: TestConfig, accounts: TestAccounts) {
    const client = await flex.evr.accounts.get(FlexClientAccount, config.client);

    let wallet = await Trader.deployEverWallet(flex, {
        clientAddress: await client.getAddress(),
        everWallet: config.everWallet,
        tokens: 500,
        evers: 20,
        keepEvers: 15,
        traderId: accounts.traderId,
        wrapperAddress: config.EVER.wrapper,
    });
    console.log("EVER internal address", wallet.address);
}

async function prepare(options: { trader?: boolean; TSDT?: boolean; EVER?: boolean }) {
    TonClient.useBinaryLibrary(libNode);
    const config = createConfig();
    const flex = new Flex(config.flex);
    const accounts = await createAccounts(flex, config);
    try {
        try {
            if (options.trader ?? false) {
                await createTrader(flex, config, accounts);
            }
            if (options.EVER ?? false) {
                await createEVERInternal(flex, config, accounts);
            }
            if (options.TSDT ?? false) {
                await createTSDTInternal(flex, config, accounts);
            }
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    } finally {
        await flex.close();
    }
}

void prepare({ trader: true, EVER: true, TSDT: true });

