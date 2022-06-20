import StatsD from "hot-shots"
import { TonClient } from "@eversdk/core"
import { libNode } from "@eversdk/lib-node"

import FLEX_CONFIG from "./flex.config.json"

TonClient.useBinaryLibrary(libNode)

const statsd = new StatsD(FLEX_CONFIG.statsd)

export function subscribeOnMessages(address: string) {
    const tonClient = new TonClient({
        network: { endpoints: FLEX_CONFIG.evr.sdk.network.endpoints },
    })
    tonClient.net.subscribe_collection(
        {
            collection: "messages",
            filter: { dst: { eq: address } },
            result: "id",
        },
        (params, code: number) => {
            if (code === 100) {
                console.log(`Got message on ${address}`, params)
                statsd.increment(FLEX_CONFIG.metrics.trades)
            } else {
                console.log(
                    "Abort the test because of subscription error, code=",
                    code,
                    params,
                )
                process.exit(1)
            }
        },
    )
}
