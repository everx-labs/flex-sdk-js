import { concurrent } from "fasy"
import { topup } from "./topup"
import { RateLimiter } from "./utils"
import { TraderConfig } from "./types"
import { Flex } from "../../../flex"

import FLEX_CONFIG from "./flex.config.json"
import TRADERS_CONFIG from "./traders.config.json"

export const airdrop = async (options: any): Promise<void> => {
    const flex = new Flex(FLEX_CONFIG)

    if (!FLEX_CONFIG?.client1?.addr) {
        throw Error("FLEX_CONFIG.client1.addr required")
    }

    const limiter = RateLimiter.getLimiter(options.maxReqPerSecond)
    await concurrent(options.maxConcurrency).map(
        (trader: TraderConfig, i: number) =>
            limiter(
                {
                    fn: topup,
                    args: [
                        {
                            flex,
                            client: FLEX_CONFIG.client1.addr ?? "0",
                            traderId: trader.id,
                            value: options.value,
                        },
                    ],
                },
                i,
            ),
        TRADERS_CONFIG,
    )
    await flex.close()
}
