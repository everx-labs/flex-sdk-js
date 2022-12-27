import { expect, test as base } from "./config"
import { Evr, Token, EverWallet, Market, SignerOption, Trader, TradeSide, TokenValue, PriceOrder, MakeOrderResult } from "../flex"
import { signerKeys } from "@eversdk/core";
import { execFileSync } from "child_process"
import { assert } from "console";

type HelperFixtures = {
    takeOrder: ( side: TradeSide, price: TokenValue, amount: TokenValue ) => Promise<MakeOrderResult>
    makeOrder: ( side: TradeSide, price: TokenValue, amount: TokenValue ) => Promise<PriceOrder>
}

type PreparedClient = {
    everWallet: { address: string; signer: SignerOption }
    client: { address: string; signer: SignerOption }
    traderId: string
    taker: { id: string; signer: SignerOption}
}

async function sleep(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
}

const test = base.extend<HelperFixtures, PreparedClient>({
    takeOrder: async ({ flex, taker, config, accounts }, use) => {
        await use(async (side: TradeSide, price: TokenValue, amount: TokenValue) => {
            if (side === TradeSide.BUY) {
                const tokenUnits = (Number(amount) * Number(price) * 1e9).toString()
                console.log({tokenUnits})
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
                console.log({internalTip31Wallet})
            } else {
                const tokens = Number(amount) * (1 / Number(price))
                console.log({tokens})
                const internalEverWallet = await Trader.deployEverWallet(flex, {
                    clientAddress: accounts.flexClientAddress,
                    everWallet: config.everWallet,
                    tokens,
                    evers: 20,
                    keepEvers: 15,
                    traderId: taker.id,
                    wrapperAddress: config.EVER.wrapper,
                })
                console.log({internalEverWallet})
            }
            await sleep(5000);
            const info = await Trader.queryWallets(flex, {
                clientAddress: accounts.flexClientAddress,
                traderId: taker.id
            })
            assert(info.length > 0, 'Problem with wallet deploy')
            console.log({info})
            const order = await Trader.makeOrder(flex, {
                    marketAddress: config.market,
                    clientAddress: accounts.flexClientAddress,
                    trader: taker,
                    sell: side === TradeSide.SELL,
                    price,
                    amount,
                    waitForOrderbookUpdate: true,
            })
            console.log('order book', await Market.queryOrderBook(flex, config.market))
            console.log('my orders', await Trader.queryOrders(flex, taker.id))
            return order
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
    taker: [
        async ({ flex, config, accounts }, use) => {
            const takerSigner = signerKeys(await flex.evr.sdk.crypto.generate_random_sign_keys())
            const takerId = await flex.evr.signers.resolvePublicKey(takerSigner)
            const nativeBalances = await flex.evr.accounts.getBalancesUnits([
                accounts.flexClientAddress,
                accounts.everWalletAddress,
            ])
            if ( Number(nativeBalances.get(accounts.everWalletAddress) ?? 0) < Evr.toUnits(100) ) {
                console.log(execFileSync("everdev", [
                    "contract",
                    "topup",
                    "-a", accounts.everWalletAddress,
                    "-v", Evr.toUnits(200).toString()
                ]).toString('utf8'))
            }
            if ( Number(nativeBalances.get(accounts.flexClientAddress) ?? 0) < Evr.toUnits(50) ) {
                console.log(await accounts.everWallet.topUp(accounts.flexClientAddress, 50))
            }
            await Trader.topUp(flex, {
                client: accounts.flexClientAddress,
                id: takerId,
                everWallet: accounts.everWallet.options,
                minBalance: 100,
                value: 0,
            })
            await Trader.deploy(flex, {
                client: config.client,
                id: takerId,
                name: "Integration Test Taker",
                pubkey: takerId,
            });
            //await sleep(5000);
            await use({id: takerId, signer: takerSigner})
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
                    'amountLeft': '10',
                    'price': '0.1',
                    'side': TradeSide.BUY,
                    'orderId': order.orderId,
                    'traderId': traderId
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
        test('taker first', async ({ flex, trading, taker, makeOrder, takeOrder }) => {
            await trading.cancelAllOrders()
            const price = "0.01"
            const amount = "1"
            const orderTaker = await takeOrder(TradeSide.SELL, price, amount) // SELL 1 EVER(major) for price 0.01 TSDT(minor)
            const orderMaker = await makeOrder(TradeSide.BUY, price, amount)
            console.log('orderTaker', orderTaker.orderId)
            console.log('orderMaker', orderMaker.orderId)
            const info = await Trader.queryTrades(flex, taker.id)
            expect(info).toHaveLength(1)
            expect(info).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        amount,
                        price,
                        liquidity: 'MAKER',
                        'side': TradeSide.SELL,
                        'userOrderId': orderTaker.orderId
                    })
                ])
            )
            expect(info[0]).toHaveProperty('cursor')
            expect(info[0]).toHaveProperty('fees')
            expect(info[0]).toHaveProperty('feesToken')
            expect(info[0]).toHaveProperty('pair')
            expect(info[0]).toHaveProperty('time')
        })
        test('taker last', async ({ flex, trading, taker, makeOrder, takeOrder }) => {
            await trading.cancelAllOrders()
            const price = "0.01"
            const amount = "1"
            const orderMaker = await makeOrder(TradeSide.BUY, price, amount) // BUY 1 EVER(major) for price 0.01 TSDT(minor)
            const orderTaker = await takeOrder(TradeSide.SELL, price, amount)
            console.log('orderMaker', orderMaker.orderId)
            console.log('orderTaker', orderTaker.orderId)
            const info = await Trader.queryTrades(flex, taker.id)
            expect(info).toHaveLength(1)
            expect(info).toEqual(
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
            expect(info[0]).toHaveProperty('cursor')
            expect(info[0]).toHaveProperty('fees')
            expect(info[0]).toHaveProperty('feesToken')
            expect(info[0]).toHaveProperty('pair')
            expect(info[0]).toHaveProperty('time')
        })
    })

    test('queryWallets', async ({ flex, trading, traderId, client, accounts }) => {
        await trading.cancelAllOrders()
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
                        ticker: 'TSDT',
                    }),
                    traderId: `0x${traderId}`
                }),
                expect.objectContaining({
                    address: accounts.EVER.internalAddress,
                    clientAddress: client.address,
                    balanceInOrders: '0',
                    balanceInOrdersUnits: '0',
                    token: expect.objectContaining({
                        ticker: 'EVER'
                    }),
                    traderId: `0x${traderId}`
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
                    'ticker': 'TSDT',
                    'address': config.TSDT.wrapper,
                    'externalAddress': config.TSDT.wrapperWallet,
                })
            ])
        )
    })
})
