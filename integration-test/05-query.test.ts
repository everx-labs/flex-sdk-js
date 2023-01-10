import { expect, test as base } from "./config"
import { Token, Client, EverWallet, Market, SignerOption, Trader, TradeSide, TokenValue, PriceOrder, MakeOrderResult } from "../flex"
import { signerKeys } from "@eversdk/core";

type HelperFixtures = {
    takeOrder: ( side: TradeSide, price: TokenValue, amount: TokenValue ) => Promise<MakeOrderResult>
    makeOrder: ( side: TradeSide, price: TokenValue, amount: TokenValue ) => Promise<PriceOrder>
    taker: { id: string; signer: SignerOption}
}

type PreparedClient = {
    everWallet: { address: string; signer: SignerOption }
    client: { address: string; signer: SignerOption }
    traderId: string
}

async function sleep(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
}

const test = base.extend<HelperFixtures, PreparedClient>({
    takeOrder: async ({ flex, taker, config, accounts }, use) => {
        await use(async (side: TradeSide, price: TokenValue, amount: TokenValue) => {
            if (side === TradeSide.BUY) {
                const tokenUnits = (Number(amount) * Number(price) * 1e9).toString()
                const internalTip31Wallet = await Trader.deployTip31Wallet(flex, {
                    clientAddress: accounts.flexClientAddress,
                    everWallet: config.everWallet,
                    traderId: taker.id,
                    tokenUnits,
                    transferEvers: 21,
                    evers: 20,
                    keepEvers: 15,
                    tokenWalletAddress: await accounts.TSDT.external.getAddress(),
                    tokenWrapperAddress: config.TSDT.wrapper,
                    tokenWrapperWalletAddress: config.TSDT.wrapperWallet,
                })
                expect(internalTip31Wallet.address, 'Problem with internalTip31Wallet deploy').toBeTruthy()
            } else {
                const tokens = Number(amount) * (1 / Number(price))
                const internalEverWallet = await Trader.deployEverWallet(flex, {
                    clientAddress: accounts.flexClientAddress,
                    everWallet: config.everWallet,
                    tokens,
                    evers: 20,
                    keepEvers: 15,
                    traderId: taker.id,
                    wrapperAddress: config.EVER.wrapper,
                })
                expect(internalEverWallet.address, 'Problem with internalEverWallet deploy').toBeTruthy()
            }
            await sleep(5000);
            const wallets = await Trader.queryWallets(flex, {
                clientAddress: accounts.flexClientAddress,
                traderId: taker.id
            })
            expect(wallets.length, 'Problem with wallet deploy').toBeGreaterThan(0)
            const order = await Trader.makeOrder(flex, {
                    marketAddress: config.market.address,
                    clientAddress: accounts.flexClientAddress,
                    trader: taker,
                    sell: side === TradeSide.SELL,
                    price,
                    amount,
                    waitForOrderbookUpdate: true,
            })
            return order
        })
    },
    taker: async ({ flex, accounts, nativeBalances }, use) => {
        nativeBalances.get
        const signer = signerKeys(await flex.evr.sdk.crypto.generate_random_sign_keys())
        const id = await flex.evr.signers.resolvePublicKey(signer)
        await Trader.deploy(flex, {
            client: accounts.flexClient,
            id,
            name: "Integration Test Taker",
            pubkey: id,
        });
        await sleep(5000);
        const taker = { id, signer }
        await use(taker)
        await Trader.cancelAllOrders(flex, {
            clientAddress: accounts.flexClientAddress,
            trader: taker,
        })
    },
    makeOrder: async ({ trading }, use) => {
        await use(async (side: TradeSide, price: TokenValue, amount: TokenValue) => {
            return await trading.makeOrderWithRequiredSuccess({
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
        test.skip('empty', async ({ flex, config, trading }) => {
            // can't rely on empty because this is dev
            await trading.cancelAllOrders()
            const info = await Market.queryOrderBook(flex, config.market.address)
            expect(info).toHaveProperty('asks')
            expect(info).toHaveProperty('bids')
            expect(info.asks).toHaveLength(0)
            expect(info.bids).toHaveLength(0)
        })

        test('buy bids', async ({ flex, config, makeOrder }) => {
            const price = "0.07"
            const amount = "7"
            await makeOrder(TradeSide.BUY, price, amount)
            const info = await Market.queryOrderBook(flex, config.market.address)
            expect(info).toHaveProperty('bids')
            expect(info.bids[0]).toHaveProperty('amount')
            expect(info.bids[0]).toHaveProperty('price')
            expect(info.bids[0].amount).toEqual(amount)
            expect(info.bids[0].price).toEqual(price)
        })

        test('sell asks', async ({ flex, config, makeOrder }) => {
            const price = "0.08"
            const amount = "8"
            await makeOrder(TradeSide.SELL, 0.08, 8)
            const info = await Market.queryOrderBook(flex, config.market.address)
            expect(info).toHaveProperty('asks')
            expect(info.asks[0]).toHaveProperty('amount')
            expect(info.asks[0]).toHaveProperty('price')
            expect(info.asks[0].amount).toEqual(amount)
            expect(info.asks[0].price).toEqual(price)
        })
    })
    test.describe('queryPrice', () => {
        test.skip('null', async ({ flex, config, trading }) => {
            // we can check `null` only if no trades at all on this market
            await trading.cancelAllOrders()
            const info = await Market.queryPrice(flex, config.market.address)
            expect(info).toBeNull()
        })
        test('after trade', async ({ flex, config, makeOrder, takeOrder }) => {
            const price = "0.019"
            const amount = "9"
            await makeOrder(TradeSide.BUY, price, amount)
            await takeOrder(TradeSide.SELL, price, amount)
            const info = await Market.queryPrice(flex, config.market.address)
            expect(info).toEqual(price)
        })
    })
    test('queryMarkets', async ({ flex, config }) => {
        const info = await Market.queryMarkets(flex)
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'ticker': config.market.ticker,
                    'address': config.market.address
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
            minBalance: Number.MAX_VALUE,
            value: Number.MAX_VALUE,
        })
        expect(info).toHaveProperty('accounts')
        expect(info.accounts).toHaveLength(3) // 2 Wrapped Wallets + 1 UserIdIndex
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
        const order = await makeOrder(TradeSide.BUY, price, amount)
        const info = await Trader.queryOrders(flex, traderId)
        expect(info).toHaveLength(1)
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    amountLeft: amount,
                    amountProcessed: '0',
                    price,
                    pair: expect.objectContaining({
                        address: trading.marketAddress
                    }),
                    side: TradeSide.BUY,
                    orderId: order.orderId,
                    traderId: `0x${traderId}` // FIXME: 0x should be by default for all traderId returned values
                })
            ])
        )
        expect(info[0]).toHaveProperty('amountProcessed')
        expect(info[0]).toHaveProperty('finishTime')
        expect(info[0]).toHaveProperty('pair')
        expect(info[0]).toHaveProperty('priceNum')
        expect(info[0]).toHaveProperty('priceScale')
        expect(info[0]).toHaveProperty('priceScale')
    })

    test.describe('queryTrades', () => {
        test('taker first', async ({ flex, trading, traderId, makeOrder, taker, takeOrder }) => {
            await trading.cancelAllOrders()
            const price = "0.0101"
            const amount = "1"
            const orderMaker = await takeOrder(TradeSide.SELL, price, amount) // SELL 1 EVER(major) for price 0.01 TSDT(minor)
            const orderTaker = await makeOrder(TradeSide.BUY, price, amount)

            const takerTrades = await Trader.queryTrades(flex, taker.id)
            expect(takerTrades).toHaveLength(1)
            expect(takerTrades).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        amount,
                        price,
                        liquidity: 'MAKER',
                        'side': TradeSide.SELL,
                        'userOrderId': orderMaker.orderId
                    })
                ])
            )
            expect(takerTrades[0]).toHaveProperty('cursor')
            expect(takerTrades[0]).toHaveProperty('fees')
            expect(takerTrades[0]).toHaveProperty('feesToken')
            expect(takerTrades[0]).toHaveProperty('pair')
            expect(takerTrades[0]).toHaveProperty('time')

            const trades = await Trader.queryTrades(flex, traderId)
            expect(trades).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        amount,
                        price,
                        liquidity: 'TAKER',
                        'side': TradeSide.BUY,
                        'userOrderId': orderTaker.orderId
                    })
                ])
            )
        })
        test('taker last', async ({ flex, trading, traderId, makeOrder, taker, takeOrder }) => {
            await trading.cancelAllOrders()
            const price = "0.0102"
            const amount = "1"
            const orderMaker = await makeOrder(TradeSide.BUY, price, amount) // BUY 1 EVER(major) for price 0.01 TSDT(minor)
            const orderTaker = await takeOrder(TradeSide.SELL, price, amount)

            const takerTrades = await Trader.queryTrades(flex, taker.id)
            expect(takerTrades).toHaveLength(1)
            expect(takerTrades).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        amount,
                        price,
                        liquidity: 'TAKER',
                        'side': TradeSide.SELL,
                        'userOrderId': orderTaker.orderId
                    })
                ])
            )
            expect(takerTrades[0]).toHaveProperty('cursor')
            expect(takerTrades[0]).toHaveProperty('fees')
            expect(takerTrades[0]).toHaveProperty('feesToken')
            expect(takerTrades[0]).toHaveProperty('pair')
            expect(takerTrades[0]).toHaveProperty('time')

            const trades = await Trader.queryTrades(flex, traderId)
            expect(trades).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        amount,
                        price,
                        liquidity: 'MAKER',
                        'side': TradeSide.BUY,
                        'userOrderId': orderMaker.orderId
                    })
                ])
            )
        })
    })

    test('queryWallets', async ({ config, flex, trading, traderId, client, accounts }) => {
        await trading.cancelAllOrders()
        await sleep(8000) // FIXME: need to wait for all orders are canceled
        const info = await Trader.queryWallets(flex, {
            clientAddress: client.address,
            traderId
        })
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    address: accounts.TSDT.internalAddress,
                    clientAddress: client.address,
                    balanceInOrders: '0',
                    balanceInOrdersUnits: '0',
                    token: expect.objectContaining({
                        ticker: config.TSDT.ticker,
                    }),
                    traderId: `0x${traderId}` // FIXME
                }),
                expect.objectContaining({
                    address: accounts.EVER.internalAddress,
                    clientAddress: client.address,
                    balanceInOrders: '0',
                    balanceInOrdersUnits: '0',
                    token: expect.objectContaining({
                        ticker: config.EVER.ticker
                    }),
                    traderId: `0x${traderId}` // FIXME
                })
            ])
        )
        expect(info[0]).toHaveProperty('availableBalance')
        expect(info[0]).toHaveProperty('availableBalanceUnits')
        expect(info[0]).toHaveProperty('cursor')
        expect(info[0]).toHaveProperty('nativeCurrencyBalance')
        expect(info[0]).toHaveProperty('nativeCurrencyBalanceUnits')
        expect(info[0]).toHaveProperty('totalBalance')
        expect(info[0]).toHaveProperty('totalBalanceUnits')
        expect(info[0]).toHaveProperty('traderPublicKey')
    })

    test('getIndexInfo', async ({ flex, traderId, client }) => {
        const info = await Trader.getIndexInfo(flex, client.address, traderId)
        expect(info).toHaveProperty('address')
        expect(info).toHaveProperty('nativeCurrencyBalance')
        expect(Number(info.nativeCurrencyBalance)).toBeGreaterThan(0)
    })
})

test.describe('Token', () => {
    test('queryTokens', async ({ flex, config }) => {
        const info = await Token.queryTokens(flex)
        expect(info).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'ticker': config.TSDT.ticker,
                    'address': config.TSDT.wrapper,
                    'externalAddress': config.TSDT.wrapperWallet,
                })
            ])
        )
    })
})

test.describe('Client', () => {
    test('getClientInfo', async ({ flex, accounts }) => {
        const info = await Client.getClientInfo(flex, accounts.flexClientAddress)
        expect(info).toHaveProperty('nativeCurrencyBalance')
        expect(Number(info.nativeCurrencyBalance)).toBeGreaterThan(0)
    })
})
