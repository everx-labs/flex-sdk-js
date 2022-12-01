import { expect, test } from "./config";
import { OrderInfo, PriceOrder, TokenValue, Trader, TradeSide } from "../flex";
import { Trading } from "./config/trading";

type MakeOrderTest = {
    title: string;
    side: TradeSide;
    price: TokenValue;
    amount: TokenValue;
    expected: Partial<OrderInfo>;
};

const makeOrderTests: MakeOrderTest[] = [
    sell("0.045", "5.05", {
        priceNum: "450",
        priceScale: "10000",
        price: "0.045",
        amountLeft: "5.05",
    }),
    sell(
        { tokens: "0.046" },
        { tokens: "4.05" },
        {
            priceNum: "460",
            priceScale: "10000",
            price: "0.046",
            amountLeft: "4.05",
        },
    ),
    sell(
        { units: "0.000047" },
        { units: "3050000000" },
        {
            priceNum: "470",
            priceScale: "10000",
            price: "0.047",
            amountLeft: "3.05",
        },
    ),
    buy("0.148", "6.05", {
        priceNum: "1480",
        priceScale: "10000",
        price: "0.148",
        amountLeft: "6.05",
    }),
    buy(
        { tokens: "0.149" },
        { tokens: "7.05" },
        {
            priceNum: "1490",
            priceScale: "10000",
            price: "0.149",
            amountLeft: "7.05",
        },
    ),
    buy(
        { units: "0.000149" },
        { units: "7050000000" },
        {
            priceNum: "1490",
            priceScale: "10000",
            price: "0.149",
            amountLeft: "7.05",
        },
    ),
];

function makeOrderTest(
    side: TradeSide,
    price: TokenValue,
    amount: TokenValue,
    expected: Partial<OrderInfo>,
): MakeOrderTest {
    return {
        title: `${side} ${JSON.stringify(amount)} for ${JSON.stringify(price)}`,
        side,
        price,
        amount,
        expected: {
            ...expected,
            side,
        },
    };
}

function sell(price: TokenValue, amount: TokenValue, expected: Partial<OrderInfo>): MakeOrderTest {
    return makeOrderTest(TradeSide.SELL, price, amount, expected);
}

function buy(price: TokenValue, amount: TokenValue, expected: Partial<OrderInfo>): MakeOrderTest {
    return makeOrderTest(TradeSide.BUY, price, amount, expected);
}

function title(i: number): string {
    return makeOrderTests[i].title;
}

async function runMakeOrder(i: number, trading: Trading, orders: PriceOrder[]): Promise<OrderInfo> {
    const { side, price, amount } = makeOrderTests[i];
    const newOrder = await trading.makeOrder(side, price, amount);
    orders.push(newOrder);
    const order = (await Trader.queryOrders(trading.flex, trading.trader.id)).find(
        x => x.orderId === newOrder.orderId,
    );
    if (!order) {
        throw new Error(`Order [${newOrder.orderId}] does not found on API.`);
    }
    return order;
}

test(title(0), async ({ trading, orders }) => {
    expect(await runMakeOrder(0, trading, orders)).toMatchObject(makeOrderTests[0].expected);
});

test(title(1), async ({ trading, orders }) => {
    expect(await runMakeOrder(1, trading, orders)).toMatchObject(makeOrderTests[1].expected);
});

test(title(2), async ({ trading, orders }) => {
    expect(await runMakeOrder(2, trading, orders)).toMatchObject(makeOrderTests[2].expected);
});

test(title(3), async ({ trading, orders }) => {
    expect(await runMakeOrder(3, trading, orders)).toMatchObject(makeOrderTests[3].expected);
});

test(title(4), async ({ trading, orders }) => {
    expect(await runMakeOrder(4, trading, orders)).toMatchObject(makeOrderTests[4].expected);
});

test(title(5), async ({ trading, orders }) => {
    expect(await runMakeOrder(5, trading, orders)).toMatchObject(makeOrderTests[5].expected);
});

test(`Cancel All Orders`, async ({ trading }) => {
    await trading.cancelAllOrders();
});
