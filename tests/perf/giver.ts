import { abiContract, signerKeys } from "@eversdk/core"
import { Flex } from "../../flex"

const giver = {
    addr: "0:2bb4a0e8391e7ea8877f4825064924bd41ce110fce97e939d3323999e1efbb13",
    keys: {
        public: "95c06aa743d1f9000dd64b75498f106af4b7e7444234d7de67ea26988f6181df",
        secret: "6e9ca582df77a86da93c0668d7f6fbb010459156b434d3059005ef396c825f59"
    }
}

const giverAbi = {
    "ABI version": 2,
    "header": ["time", "expire"],
    "functions": [
        {
            "name": "sendTransaction",
            "inputs": [
                { "name": "dest", "type": "address" },
                { "name": "value", "type": "uint128" },
                { "name": "bounce", "type": "bool" }
            ],
            "outputs": []
        },
        {
            "name": "getMessages",
            "inputs": [],
            "outputs": [
                {
                    "components": [{ "name": "hash", "type": "uint256" }, { "name": "expireAt", "type": "uint64" }],
                    "name": "messages",
                    "type": "tuple[]"
                }
            ]
        },
        {
            "name": "upgrade",
            "inputs": [
                { "name": "newcode", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "constructor",
            "inputs": [],
            "outputs": []
        }
    ],
    "data": [],
    "events": []
}

export async function topUp(flex: Flex, dst: string, balance: number) {
    await flex.evr.sdk.processing.process_message({
        send_events: false,
        message_encode_params: {
            address: giver.addr,
            abi: abiContract(giverAbi),
            call_set: {
                function_name: 'sendTransaction',
                input: { dest: dst, value: balance * 1e9, bounce: false, flags: 0, payload: "" }
            },
            signer: signerKeys(giver.keys)
        }
    })
}
