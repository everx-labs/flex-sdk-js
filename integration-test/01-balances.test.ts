import { test, expect } from "./config"
import { Evr } from "../flex"
import { toUnits } from "../flex/web3/utils";

test.describe('Balances', () => {
    test("natives", async ({ nativeBalances, accounts }) => {
        expect(
            nativeBalances.get(accounts.everWalletAddress),
            `Natives on EverWallet ${accounts.everWalletAddress}`,
        ).toBeGreaterThan(toUnits(100, Evr))
        expect(
            nativeBalances.get(accounts.flexClientAddress),
            `Natives on FlexClient ${accounts.flexClientAddress}`,
        ).toBeGreaterThan(toUnits(40, Evr))
        expect(
            nativeBalances.get(accounts.EVER.internalAddress),
            `Natives on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(toUnits(100, Evr))
        expect(
            nativeBalances.get(accounts.TSDT.internalAddress),
            `Natives on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(toUnits(100, Evr))
    })

    test("tokens", async ({ flex, accounts }) => {
        expect(
            Number(await flex.getFlexTokenBalance(accounts.EVER.internal)),
            `Tokens on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(50)
        expect(
            Number(await flex.getTip3TokenBalance(accounts.TSDT.external)),
            `Tokens on external TSDT ${accounts.TSDT.externalAddress}`,
        ).toBeGreaterThan(100)
        expect(
            Number(await flex.getFlexTokenBalance(accounts.TSDT.internal)),
            `Tokens on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(50)
    })
})
