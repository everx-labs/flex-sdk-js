import { test, expect, FlexFixture } from "./config";
import { EverWallet, Evr } from "../flex";
import {
    FlexClientAccount,
    FlexWalletAccount,
    MultisigWalletAccount,
    Tip31WalletAccount,
} from "../contracts";

type TestAccounts = {
    everWallet: EverWallet;
    flexClient: FlexClientAccount;
    EVER: {
        external: MultisigWalletAccount;
        internal: FlexWalletAccount;
    };
    TSDT: {
        external: Tip31WalletAccount;
        internal: FlexWalletAccount;
    };
};

async function getAccounts({ flex, config }: FlexFixture): Promise<TestAccounts> {
    const accounts = flex.evr.accounts;
    return {
        everWallet: new EverWallet(flex.evr, config.everWallet),
        flexClient: await accounts.get(FlexClientAccount, config.client),
        EVER: {
            external: await accounts.get(MultisigWalletAccount, config.trader.EVER.external),
            internal: await accounts.get(FlexWalletAccount, config.trader.EVER.internal),
        },
        TSDT: {
            external: await accounts.get(Tip31WalletAccount, config.trader.TSDT.external),
            internal: await accounts.get(FlexWalletAccount, config.trader.TSDT.internal),
        },
    };
}

async function getAddresses(accounts: TestAccounts) {
    return {
        everWallet: await accounts.everWallet.getAddress(),
        flexClient: await accounts.flexClient.getAddress(),
        EVER: {
            external: await accounts.EVER.external.getAddress(),
            internal: await accounts.EVER.internal.getAddress(),
        },
        TSDT: {
            external: await accounts.TSDT.external.getAddress(),
            internal: await accounts.TSDT.internal.getAddress(),
        },
    };
}

test("Check balances", async ({ flex, config }) => {
    const accounts = await getAccounts({
        flex,
        config,
    });
    const addresses = await getAddresses(accounts);

    const balances = await flex.evr.accounts.getBalancesUnits([
        addresses.flexClient,
        addresses.everWallet,
        addresses.TSDT.internal,
        addresses.EVER.internal,
    ]);

    expect(
        balances.get(addresses.flexClient),
        `Natives on FlexClient ${addresses.flexClient}`,
    ).toBeGreaterThan(Evr.toUnits(40));
    expect(
        balances.get(addresses.everWallet),
        `Natives on EverWallet ${addresses.everWallet}`,
    ).toBeGreaterThan(Evr.toUnits(100));
    expect(
        balances.get(addresses.EVER.internal),
        `Natives on internal EVER ${addresses.EVER.internal}`,
    ).toBeGreaterThan(Evr.toUnits(100));
    expect(
        balances.get(addresses.TSDT.internal),
        `Natives on internal TSDT ${addresses.TSDT.internal}`,
    ).toBeGreaterThan(Evr.toUnits(100));
    expect(
        await flex.getFlexTokenBalance(accounts.EVER.internal),
        `Tokens on internal EVER ${addresses.EVER.internal}`,
    ).toBeGreaterThan(50);
    expect(
        await flex.getTip3TokenBalance(accounts.TSDT.external),
        `Tokens on external TSDT ${addresses.TSDT.external}`,
    ).toBeGreaterThan(100);
    expect(
        await flex.getFlexTokenBalance(accounts.TSDT.internal),
        `Tokens on internal TSDT ${addresses.TSDT.internal}`,
    ).toBeGreaterThan(50);
});
