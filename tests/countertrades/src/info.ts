import { Flex, Market, Trader, Token } from "../../../flex"

import FLEX_CONFIG from "./flex.config.json"
import TRADERS_CONFIG from "./traders.config.json"

export const info = async (options: any): Promise<void> => {
    const flex = new Flex(FLEX_CONFIG)

    if (FLEX_CONFIG && FLEX_CONFIG.market) {
        /*
        console.dir(
            {
                "Market Order Book": await Market.queryOrderBook(
                    flex,
                    FLEX_CONFIG.market,
                ),
            },
            { depth: null },
        )
       */
        console.dir(
            {
                "Market Price": await Market.queryPrice(
                    flex,
                    FLEX_CONFIG.market,
                ),
            },
            { depth: null },
        )
    }

    if (options.index >= 0 && TRADERS_CONFIG && TRADERS_CONFIG[options.index]) {
        if (options.orders) {
            console.dir(
                {
                    Orders: await Trader.queryOrders(
                        flex,
                        TRADERS_CONFIG[options.index].id,
                    ),
                },
                { depth: null },
            )
        }
        if (options.trades) {
            console.dir(
                {
                    Trades: await Trader.queryTrades(
                        flex,
                        TRADERS_CONFIG[options.index].id,
                    ),
                },
                { depth: null },
            )
        }
        if (FLEX_CONFIG && FLEX_CONFIG.client1 && FLEX_CONFIG.client1.addr) {
            if (options.wallet || !(options.orders || options.trades)) {
                console.dir(
                    {
                        Wallets: await Trader.queryWallets(flex, {
                            client: String(FLEX_CONFIG.client1.addr ?? 0),
                            trader: TRADERS_CONFIG[options.index].id,
                        }),
                    },
                    { depth: null },
                )
            }
        }
    } else {
        console.dir({ Tokens: await Token.queryTokens(flex) }, { depth: null })
        console.dir(
            { Markets: await Market.queryMarkets(flex) },
            { depth: null },
        )
    }
}
