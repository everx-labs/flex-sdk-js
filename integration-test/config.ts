import { defaultConfig, Flex, FlexConfig, SignerOption, Trader } from "../flex";
import * as path from "path";
import * as fs from "fs";
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { test as base } from "@playwright/test";
import { FlexClientAccount } from "../contracts";

type AccountConfig = {
    address?: string;
    signer: SignerOption;
};

export type IntegrationTestConfig = {
    flex: FlexConfig;
    everWallet: AccountConfig;
    client: AccountConfig;
    trader: {
        id: string;
        wallet: string;
        signer: string;
        EVER: {
            external: AccountConfig;
            internal: string;
        };
        TSDT: {
            external: AccountConfig;
            internal: string;
        };
    };
    market: {
        address: string;
        EVER: {
            wrapper: string;
        };
        TSDT: {
            wrapper: string;
            wrapperWallet: string;
        };
    };
};

function getPackageFolder(): string {
    let folder = path.resolve(__dirname);
    while (folder !== "/" && !fs.existsSync(path.resolve(folder, "package.json"))) {
        folder = path.resolve(folder, "..");
    }
    return folder;
}

export function integrationTestConfig(): IntegrationTestConfig {
    const configFilePath = path.resolve(
        getPackageFolder(),
        ".secret",
        "integration-test-config.json",
    );
    if (fs.existsSync(configFilePath)) {
        return JSON.parse(fs.readFileSync(configFilePath, "utf8"));
    }
    return {
        flex: defaultConfig(),
        everWallet: {
            signer: "everWallet",
        },
        client: {
            signer: "everWallet",
        },
        trader: {
            id: "",
            wallet: "",
            signer: "everWallet",
            EVER: {
                external: { signer: "everWallet" },
                internal: "",
            },
            TSDT: {
                external: { signer: "everWallet" },
                internal: "",
            },
        },
        market: {
            address: "",
            EVER: {
                wrapper: "",
            },
            TSDT: {
                wrapper: "",
                wrapperWallet: "",
            },
        },
    };
}

export type FlexFixture = {
    flex: Flex;
    config: IntegrationTestConfig;
};

export const test = base.extend<{}, FlexFixture>({
    flex: [
        async ({ config }, use) => {
            TonClient.useBinaryLibrary(libNode);
            const flex = new Flex(config.flex);
            try {
                await use(flex);
            } finally {
                await flex.close();
            }
        },
        { scope: "worker" },
    ],
    config: [
        async ({}, use) => {
            await use(integrationTestConfig());
        },
        { scope: "worker" },
    ],
});

export { expect } from "@playwright/test";

async function createTSDTInternal(flex: Flex, config: IntegrationTestConfig) {
    const client = await flex.evr.accounts.get(FlexClientAccount, config.client);
    const clientAddress = await client.getAddress();
    const wallet = await Trader.deployTip31Wallet(flex, {
        clientAddress,
        everWallet: config.everWallet,
        traderId: config.trader.id,
        tokenWalletAddress: config.trader.TSDT.external.address!,
        tokenWrapperAddress: config.market.TSDT.wrapper,
        tokenWrapperWalletAddress: config.market.TSDT.wrapperWallet,
        tokenUnits: "10000000000",
        transferEvers: 101,
        evers: 100,
        keepEvers: 15,
    });

    console.log("TSDT internal address", wallet.address);
}

async function createEVERInternal(flex: Flex, config: IntegrationTestConfig) {
    const client = await flex.evr.accounts.get(FlexClientAccount, config.client);

    let wallet = await Trader.deployEverWallet(flex, {
        clientAddress: await client.getAddress(),
        everWallet: config.everWallet,
        tokens: 1000,
        evers: 101,
        keepEvers: 50,
        traderId: config.trader.id,
        wrapperAddress: config.market.EVER.wrapper,
    });
    console.log("EVER internal address", wallet.address);
}

async function prepare(options: { TSDT?: boolean; EVER?: boolean }) {
    TonClient.useBinaryLibrary(libNode);
    const config = integrationTestConfig();
    const flex = new Flex(config.flex);
    try {
        try {
            if (options.EVER ?? false) {
                await createEVERInternal(flex, config);
            }
            if (options.TSDT ?? false) {
                await createTSDTInternal(flex, config);
            }
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    } finally {
        await flex.close();
    }
}

if (process.env.PREPARE_FLEX_TEST === "1") {
    (async () => {
        console.log("Prepare test suite");
        await prepare({ EVER: true, TSDT: true });
    })();
}
