import { expect, test as base } from "./config"
import { Client, Trader, TradeSide, MakeOrderResult, CancelOrderResult, CancelOrderStatus, MakeOrderStatus } from "../flex"

type HelperFixtures = {
    makeOrder: ( options: any ) => Promise<MakeOrderResult>
    cancelOrder: ( options: any ) => Promise<CancelOrderResult>
}

const test = base.extend<HelperFixtures>({
    makeOrder: async ({ flex, config, accounts, trading }, use) => {
        await use(async (options: any) => {
            return await Trader.makeOrder(flex, {
                clientAddress: accounts.flexClientAddress,
                marketAddress: config.market.address,
                trader: trading.trader,
                sell: options.side === TradeSide.SELL,
                amount: options.amount ?? 1,
                price: options.price ?? 0.0099,
                orderId: options.orderId,
                evers: options.evers,
                finishTime: options.finishTime,
                mode: options.mode,
                waitForOrderbookUpdate: options.waitForOrderbookUpdate ?? true,
            })
        })
        await trading.cancelAllOrders()
    },
    cancelOrder: async ({ flex, config, accounts, trading }, use) => {
        await use(async (options: any) => {
            return await Trader.cancelOrder(flex, {
                clientAddress: accounts.flexClientAddress,
                marketAddress: config.market.address,
                trader: trading.trader,
                price: options.price ?? 0.0099,
                orderId: options.orderId,
                evers: options.evers,
                waitForOrderbookUpdate: options.waitForOrderbookUpdate ?? true,
            })
        })
    },
})

test.describe('orderId', () => {
    test('number', async ({ makeOrder }) => {
        const order = await makeOrder({orderId: 256})
        expect(order.orderId).toEqual("0x100")
    })
    test('string', async ({ makeOrder }) => {
        const order = await makeOrder({orderId: "0x42"})
        expect(order.orderId).toEqual("0x42")
    })
})

test.skip('evers', async ({ flex, accounts, trading, makeOrder }) => {
    // FIXME: Account has insufficient balance for the requested operation. Send some value to account balance.
    // Possible reason: Account has insufficient balance for the requested operation. Send some value to account balance
    await Client.getClientInfo(flex, accounts.flexClientAddress)
    await Trader.getIndexInfo(flex, accounts.flexClientAddress, trading.trader.id)
    const order = await makeOrder({evers: 10})
    expect(order.orderId).toEqual(0)
})

test.describe('waitForOrderbookUpdate', () => {
    test('false', async ({ flex, makeOrder }) => {
        const order = await makeOrder({waitForOrderbookUpdate: false})
        expect(order.orderId).toBeTruthy()
        expect(order.status).toBeLessThanOrEqual(MakeOrderStatus.FINALIZING)
        const wait = await Trader.waitForMakeOrder(flex, order)
        expect(wait.orderId).toEqual(order.orderId)
        expect(wait.status).toEqual(MakeOrderStatus.SUCCESS)
    })
    test('cancel', async ({ flex, makeOrder, cancelOrder }) => {
        const order = await makeOrder({})
        expect(order.orderId).toBeTruthy()
        const cancel = await cancelOrder({orderId: order.orderId, waitForOrderbookUpdate: false})
        expect(cancel.status).toBeLessThanOrEqual(CancelOrderStatus.FINALIZING)
        const wait = await Trader.waitForCancelOrder(flex, cancel)
        expect(wait.status).toEqual(CancelOrderStatus.SUCCESS)
    })
})
