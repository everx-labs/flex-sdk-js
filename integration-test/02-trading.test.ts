import { test as base } from "./config";
import { PriceOrder, Trading } from "./trading";

const test = base.extend<{}, { trading: Trading; orders: PriceOrder[] }>({
    trading: [
        async ({ flex, config }, use) => {
            const trading = await Trading.create(flex, {
                market: config.market.address,
                client: config.client,
                trader: config.trader,
            });
            await use(trading);
            // await trading.cancelOrders(orders);
        },
        { scope: "worker" },
    ],
    orders: [
        async ({}, use) => {
            await use([]);
        },
        { scope: "worker" },
    ],
});

test(`Sell "0.045", "5.05"`, async ({ trading, orders }) => {
    orders.push(await trading.makeSellOrder("0.045", "5.05"));
    // expecting from API: side: SELL, amount: “5.05“, price”0.0450” (priceScale=10000 должно быть 4 знака после запятой), priceNum: 450, priceScale: 10000.
});

test.skip(`Sell { tokens: "0.046" }, { tokens: "4.05" }`, async ({ trading, orders }) => {
    orders.push(await trading.makeSellOrder({ tokens: "0.046" }, { tokens: "4.05" }));
    // expecting from API to create an order: side: SELL, price: ”0.0460”  (priceScale=10000 должно быть 4 знака после запятой), amount: 4.05”, priceNum: 460, priceScale: 10000
});

test.skip(`Sell { units: "0.000047" }, { units: "3050000000" }`, async ({ trading, orders }) => {
    orders.push(await trading.makeSellOrder({ units: "0.000047" }, { units: "3050000000" }));
    // expecting from API to create an order: side: SELL, price: ”0.0470”  (priceScale=10000 должно быть 4 знака после запятой), amount: 3.05”, priceNum: 470, priceScale: 10000
});

test.skip(`Buy "0.048", "6.05"`, async ({ trading, orders }) => {
    orders.push(await trading.makeBuyOrder("0.048", "6.05"));
    // expecting from API to create an order: side: BUY, price: ”0.0480”  (priceScale=10000 должно быть 4 знака после запятой), amount: 6.05”, priceNum: 480, priceScale: 10000
});

test.skip(`Buy { tokens: "0.049" }, { tokens: "7.05" }`, async ({ trading, orders }) => {
    orders.push(await trading.makeBuyOrder({ tokens: "0.049" }, { tokens: "7.05" }));
    // expecting from API to create an order: side: BUY, price: ”0.0490”  (priceScale=10000 должно быть 4 знака после запятой), amount: 7.05”, priceNum: 490, priceScale: 10000
});

test.skip(`Buy { units: "0.000049" }, { units: "7050000000" }`, async ({ trading, orders }) => {
    orders.push(await trading.makeBuyOrder({ units: "0.000049" }, { units: "7050000000" }));
    // expecting from API to create an order: side: BUY, price: ”0.0490”  (priceScale=10000 должно быть 4 знака после запятой), amount: 7.05”, priceNum: 490, priceScale: 10000
});
