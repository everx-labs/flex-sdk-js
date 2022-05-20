import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { Trading } from "../flex/trading";

TonClient.useBinaryLibrary(libNode);
Flex.config = {
    client: {
        network: {
            endpoints: ["https://flex2.dev.tonlabs.io"],
        },
    },
    globalConfig: "0:402f14b65b6b7af9752910e77eabf8f71240f6c190b5e4f1ab4d56c09954b723",
};

async function main() {
    const order = await Trading.makeOrder({
        client: {
            address: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
        },
        wallet: {
            address: "0:62fe1c8d300724cb154dd54f9d498c0b8baacdc8687feabf9251716a3c2aa7a2",
            signer: "flex-wallet-1",

        },
        market: {
            address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
        },
        price: 1.23,
        amount: 1,
        userId: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
    });
    Flex.default.log.verbose(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);
}

(async () => {
    try {
        await main();
        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
