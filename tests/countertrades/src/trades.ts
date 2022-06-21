import assert from "assert"
import { Flex, Trader } from "../../../flex"
import { subscribeOnMessages } from "./metrics"
import { sleep, time } from "./utils"

import FLEX_CONFIG from "./flex.config.json"
import TRADERS_CONFIG from "./traders.config.json"
import PRICE_RANGE from "./prices3600.json"

const MILLIS_TO_WAIT_BEFORE_EXIT = 120000

type TTestOpts = {
    numTraders?: number
    msBetweenOrders?: number
    numCycles?: number
}

export const trades = async (opts: TTestOpts): Promise<void> => {
    assert.ok(
        opts.numTraders > 1,
        "--num-traders should be greater than one and even",
    )
    // Subscribe and send metrics to stastsd
    subscribeOnMessages(
        "0:25e39eeeda69f35e97324bf224a2cac0d4338fcdfe0add3e1ab4ba8c4e2dc6f2",
    )

    let numCycles = 0
    const iterable = {
        [Symbol.iterator]: function* () {
            const half = Math.floor(opts.numTraders / 2)
            for (;;) {
                for (let i = 0; i < half; i++) {
                    // each trader has specific price
                    yield [
                        {
                            i: i,
                            trader: TRADERS_CONFIG[i],
                            sell: numCycles % 2 === 0,
                            price: PRICE_RANGE[i],
                        },
                        {
                            i: i + half,
                            trader: TRADERS_CONFIG[i + half],
                            sell: numCycles % 2 !== 0,
                            price: PRICE_RANGE[i],
                        },
                    ]
                }
                numCycles++
                if (numCycles === opts.numCycles) {
                    break
                }
            }
        },
    }

    const flex = new Flex(FLEX_CONFIG)

    for (const dataForTwoOrders of iterable) {
        // Here we have data for two orders
        for (const { i, trader, sell, price } of dataForTwoOrders) {
            const context = [i, trader.id, sell, price]
            console.log(time(), "MAKE_ORDER_START", ...context)

            Trader.makeOrder(flex, {
                client: FLEX_CONFIG.client1.addr,
                market: FLEX_CONFIG.market,
                trader,
                sell,
                price,
                amount: 1,
            })
                .then(() => {
                    console.log(time(), "MAKE_ORDER_RESULT", ...context)
                })
                .catch(err => {
                    console.log(time(), "MAKE_ORDER_ERROR", ...context, err)
                })
        }
        await sleep(opts.msBetweenOrders / (opts.numTraders / 2))
    }

    console.log(time(), `Waiting ${MILLIS_TO_WAIT_BEFORE_EXIT} for clean exit`)
    await sleep(MILLIS_TO_WAIT_BEFORE_EXIT)
    await flex.close()
}
