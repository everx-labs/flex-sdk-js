import { expect, test as base } from "./config"
import { Token, EverWallet, Market, SignerOption, Trader, TradeSide, TokenValue } from "../flex"

type HelperFixtures = {
    makeOrder: ( side: TradeSide, price: TokenValue, amount: TokenValue ) => Promise<void>
}

type PreparedClient = {
    everWallet: { address: string; signer: SignerOption }
    client: { address: string; signer: SignerOption }
    traderId: string
}

const test = base.extend<HelperFixtures, PreparedClient>({
    makeOrder: async ({ trading }, use) => {
        await use(async (side: TradeSide, price: TokenValue, amount: TokenValue) => {
            await trading.makeOrderWithRequiredSuccess({
                side,
                price,
                amount,
                waitForOrderbookUpdate: true,
            })
        })
        await trading.cancelAllOrders()
    },
    everWallet: [
        async ({ flex, config }, use) => {
            const everWallet = new EverWallet(flex.evr, {
                signer: config.everWallet.signer,
            })
            await use({
                address: await everWallet.getAddress(),
                signer: config.everWallet.signer,
            })
        },
        { scope: "worker" },
    ],
    traderId: [
        async ({ flex, config }, use) => {
            await use(await flex.evr.signers.resolvePublicKey(config.trader.signer))
        },
        { scope: "worker" },
    ],
    client: [
        async ({ flex, config }, use) => {
            const signer = await flex.evr.signers.resolve(config.client.signer)
            const publicKey = await flex.evr.signers.publicKey(signer)
            const userConfig = await flex.getUserConfigAccount()
            const pubkey = `0x${publicKey}`
            await use({
                address: (
                    await userConfig.getFlexClientAddr({
                        pubkey,
                    })
                ).output.value0,
                signer: config.client.signer,
            })
        },
        { scope: "worker" },
    ],
})

test.describe('Market', () => {
    test.describe('queryOrderBook', () => {
        test('empty', async ({ flex, config, trading }) => {
            await trading.cancelAllOrders()
            const info = await Market.queryOrderBook(flex, config.market)
            expect(info).toHaveProperty('asks')
            expect(info).toHaveProperty('bids')
            expect(info.asks).toHaveLength(0)
            expect(info.bids).toHaveLength(0)
        })

        test('buy bids', async ({ flex, config, makeOrder }) => {
            const price = "0.07"
            const amount = "7"
            await makeOrder(TradeSide.BUY, price, amount)
            const info = await Market.queryOrderBook(flex, config.market)
            expect(info).toHaveProperty('bids')
            expect(info.bids).toHaveLength(1)
            expect(info.bids[0]).toHaveProperty('amount')
            expect(info.bids[0]).toHaveProperty('price')
            expect(info.bids[0].amount).toEqual(amount)
            expect(info.bids[0].price).toEqual(price)
        })

        test('sell asks', async ({ flex, config, makeOrder }) => {
            const price = "0.08"
            const amount = "8"
            await makeOrder(TradeSide.SELL, 0.08, 8)
            const info = await Market.queryOrderBook(flex, config.market)
            expect(info).toHaveProperty('asks')
            expect(info.asks).toHaveLength(1)
            expect(info.asks[0]).toHaveProperty('amount')
            expect(info.asks[0]).toHaveProperty('price')
            expect(info.asks[0].amount).toEqual(amount)
            expect(info.asks[0].price).toEqual(price)
        })
    })
    test.describe('queryPrice', () => {
        test('null', async ({ flex, config, trading }) => {
            await trading.cancelAllOrders()
            const info = await Market.queryPrice(flex, config.market)
            expect(info).toBeNull()
        })
        test('with one order', async ({ flex, config, makeOrder }) => {
            const price = "0.09"
            const amount = "9"
            await makeOrder(TradeSide.BUY, price, amount)
            const info = await Market.queryPrice(flex, config.market)
            expect(info).not.toBeNull()
        })
    })
    test('queryMarkets', async ({ flex, config }) => {
        const info = await Market.queryMarkets(flex)
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'ticker': 'EVER/TSDT',
                    'address': config.market
                })
            ])
        )
    })
})

test.describe('Trader', () => {
    test('getTopUpInfo', async ({ flex, everWallet, traderId, client }) => {
        const info = await Trader.getTopUpInfo(flex, {
            client: client.address,
            id: traderId,
            everWallet: everWallet,
            minBalance: 80,
            value: 10,
        })
        expect(info).toHaveProperty('accounts')
        expect(info.accounts).toHaveLength(1)
        expect(info.accounts[0]).toHaveProperty('address')
        expect(info.accounts[0]).toHaveProperty('balanceBefore')
        expect(info.accounts[0]).toHaveProperty('topUpValue')
        expect(info).toHaveProperty('everWalletBalanceBefore')
        expect(info).toHaveProperty('totalTopUpValue')
    })

    test('queryOrders', async ({ flex, trading, traderId, makeOrder }) => {
        await trading.cancelAllOrders()
        const price = "0.1"
        const amount = "10"
        await makeOrder(TradeSide.BUY, price, amount)
        const info = await Trader.queryOrders(flex, traderId)
        expect(info).toEqual(expect)
    })

    test('queryTrades', async ({ flex, trading, traderId, makeOrder }) => {
        await trading.cancelAllOrders()
        const price = "0.11"
        const amount = "11"
        await makeOrder(TradeSide.BUY, price, amount)
        await makeOrder(TradeSide.SELL, price, amount)
        const info = await Trader.queryTrades(flex, traderId)
        expect(info).toHaveLength(1)
    })

    test('queryWallets', async ({ flex, traderId, client }) => {
        const info = await Trader.queryWallets(flex, {
            clientAddress: client.address,
            traderId
        })
        console.log(traderId)
        expect(info).toHaveProperty('accounts')
    })

    test('getIndexInfo', async ({ flex, traderId, client }) => {
        const info = await Trader.getIndexInfo(flex, client.address, traderId)
        expect(info).toHaveProperty('address')
        expect(info).toHaveProperty('nativeCurrencyBalance')
        //expect(info.address).toEqual(accounts.flexClient.)
        expect(Number(info.nativeCurrencyBalance)).toBeGreaterThan(0)
    })
})

test.describe('Token', () => {
    test('queryTokens', async ({ flex, config }) => {
        const info = await Token.queryTokens(flex)
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'ticker': 'TSDT',
                    'address': config.TSDT.wrapper,
                    // ??? 'reserveWallet': config.TSDT.wallet.address,
                    'externalAddress': config.TSDT.wrapperWallet,
                })
            ])
        )
    })
})
