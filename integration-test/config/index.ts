import { Evr, Flex, Trader, PriceOrder } from "../../flex";
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { test as base } from "@playwright/test";
import { Trading } from "./trading";
import { createConfig, TestConfig } from "./config";
import { createAccounts, TestAccounts } from "./accounts";
import { toUnits } from "../../flex/web3/utils";

export { expect } from "@playwright/test";

export type FlexFixture = {
    flex: Flex;
    config: TestConfig;
    accounts: TestAccounts;
    trading: Trading;
    orders: PriceOrder[];
};

export const test = base.extend<
    {
        nativeBalances: { get: (address: string) => bigint | undefined };
    },
    FlexFixture
>({
    nativeBalances: async ({ flex, accounts }, use) => {
        const res = await flex.evr.accounts.getBalancesUnits([
            accounts.flexClientAddress,
            accounts.everWalletAddress,
            accounts.TSDT.internalAddress,
            accounts.EVER.internalAddress,
        ]);
        // 450 = 100x2 (wrappedWallets) + 100 (userIndex) + 50 (flexClient) + 100 (everWallet)
        if (Number(res.get(accounts.everWalletAddress) ?? 0) < toUnits(450, Evr)) {
            console.log("topup 450 everWallet");
            await accounts.giver.sendTo(accounts.everWalletAddress, Number(toUnits(450, Evr)));
        }
        if (Number(res.get(accounts.flexClientAddress) ?? 0) < toUnits(50, Evr)) {
            console.log("topup 50 flexClient");
            await accounts.everWallet.topUp(accounts.flexClientAddress, 50);
        }
        await Trader.topUp(flex, {
            client: accounts.flexClientAddress,
            id: accounts.traderId,
            everWallet: accounts.everWallet.options,
            minBalance: 100,
            value: 1,
        });
        await use(res);
    },
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
        market: config.market.address,
        client: config.client,
        trader: {
            id: accounts.traderId,
            signer: config.trader.signer,
        },
    });
}
