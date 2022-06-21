import { abiContract, signerKeys } from "@eversdk/core"

const giverAddr =
    "0:2bb4a0e8391e7ea8877f4825064924bd41ce110fce97e939d3323999e1efbb13"
const giverKeys = {
    public: "95c06aa743d1f9000dd64b75498f106af4b7e7444234d7de67ea26988f6181df",
    secret: "---",
}

import { Trader, Flex } from "../../../flex"
import { TraderConfig } from "./types"
import GIVER_ABI from "./giver.abi.json"

type Context = {
    flex: Flex
    client: string
    traderId: TraderConfig["id"]
    value: number
}

export const topup = async (context: Context) => {
    const { flex, client, traderId, value } = context

    const wallets = await Trader.queryWallets(flex, {
        client,
        trader: traderId,
    })

    for (const wallet of wallets) {
        console.log(
            `Account ${wallet.address} has balance ${wallet.nativeCurrencyBalance}`,
        )

        if (wallet.nativeCurrencyBalance < 900) {
            console.log(`Topping-up account ${wallet.address}`)
            await flex.evr.sdk.processing
                .process_message({
                    send_events: false,
                    message_encode_params: {
                        address: giverAddr,
                        abi: abiContract(GIVER_ABI),
                        call_set: {
                            function_name: "sendTransaction",
                            input: {
                                dest: wallet.address,
                                value,
                                bounce: false,
                            },
                        },
                        signer: signerKeys(giverKeys),
                    },
                })
                .then(() => {
                    console.log("OK.", wallet.address + " + " + value)
                })
                .catch(err => {
                    console.log("Err: Can not top-up" + wallet.address)
                    console.log(err)
                })
        }
    }
}
