import { Flex, PriceOrder } from "../../flex";
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { test as base } from "@playwright/test";
import { Trading } from "./trading";
import { createConfig, TestConfig } from "./config";
import { createAccounts, TestAccounts } from "./accounts";

export { expect } from "@playwright/test";

export type FlexFixture = {
    flex: Flex;
    config: TestConfig;
    accounts: TestAccounts;
    trading: Trading;
    orders: PriceOrder[];
};

export const test = base.extend<{}, FlexFixture>({
    config: [async ({}, use) => await use(createConfig()), { scope: "worker" }],
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
    accounts: [
        async ({ flex, config }, use) => await use(await createAccounts(flex, config)),
        { scope: "worker" },
    ],
    trading: [
        async ({ flex, config, accounts }, use) =>
            await use(await createTrading(flex, config, accounts)),
        { scope: "worker" },
    ],
    orders: [async ({}, use) => await use([]), { scope: "worker" }],
});

async function createTrading(
    flex: Flex,
    config: TestConfig,
    accounts: TestAccounts,
): Promise<Trading> {
    return await Trading.create(flex, {
        market: config.market,
        client: config.client,
        trader: {
            id: accounts.traderId,
            signer: config.trader.signer,
        },
    });
}
