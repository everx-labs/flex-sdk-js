import { test as base, expect } from "./config"
import { Evr, Trader } from "../flex"
import { execFileSync } from "child_process"

const test = base.extend<{
    nativeBalances: { get: (address: string) => bigint | undefined}
}>({
    nativeBalances: async({flex, accounts}, use) => {
        const res = await flex.evr.accounts.getBalancesUnits([
            accounts.flexClientAddress,
            accounts.everWalletAddress,
            accounts.TSDT.internalAddress,
            accounts.EVER.internalAddress,
        ])
        if ( Number(res.get(accounts.everWalletAddress) ?? 0) < Evr.toUnits(300) ) {
            console.log(execFileSync("everdev", [
                "contract",
                "topup",
                "-a", accounts.everWalletAddress,
                "-v", Evr.toUnits(300).toString()
            ]).toString('utf8'))
        }
        if ( Number(res.get(accounts.flexClientAddress) ?? 0) < Evr.toUnits(50) ) {
            console.log(await accounts.everWallet.topUp(accounts.flexClientAddress, 50))
        }
        console.log(await Trader.topUp(flex, {
            client: accounts.flexClientAddress,
            id: accounts.traderId,
            everWallet: accounts.everWallet.options,
            minBalance: 100,
            value: 0,
        }))
        await use(res)
    }
})

test.describe('Balances', () => {
    test("natives", async ({ nativeBalances, accounts }) => {
        expect(
            nativeBalances.get(accounts.everWalletAddress),
            `Natives on EverWallet ${accounts.everWalletAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
        expect(
            nativeBalances.get(accounts.flexClientAddress),
            `Natives on FlexClient ${accounts.flexClientAddress}`,
        ).toBeGreaterThan(Evr.toUnits(40))
        expect(
            nativeBalances.get(accounts.EVER.internalAddress),
            `Natives on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
        expect(
            nativeBalances.get(accounts.TSDT.internalAddress),
            `Natives on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
    })

    test("tokens", async ({ flex, accounts }) => {
        expect(
            await flex.getFlexTokenBalance(accounts.EVER.internal),
            `Tokens on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(50)
        expect(
            await flex.getTip3TokenBalance(accounts.TSDT.external),
            `Tokens on external TSDT ${accounts.TSDT.externalAddress}`,
        ).toBeGreaterThan(100)
        expect(
            await flex.getFlexTokenBalance(accounts.TSDT.internal),
            `Tokens on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(50)
    })
})
