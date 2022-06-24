import StatsD from "hot-shots"
import { TonClient } from "@eversdk/core"
import { libNode } from "@eversdk/lib-node"

import FLEX_CONFIG from "./config"
import XchgPairAbi from "./XchgPair.abi.json"

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
            result: "id body",
        },
        (params, code: number) => {
            if (code === 100) {
                tonClient.abi
                    .decode_message_body({
                        abi: {
                            type: "Contract",
                            value: XchgPairAbi,
                        },
                        body: params.result.body,
                        is_internal: true,
                    })
                    .then(decoded => {
                        if (decoded.name === "onXchgDealCompleted") {
                            console.log(
                                `Got onXchgDealCompleted message on ${address}`,
                            )
                            statsd.increment(FLEX_CONFIG.metrics.trades)
                        }
                    })
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    .catch(() => {})
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
