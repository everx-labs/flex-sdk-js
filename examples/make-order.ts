import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { Wallet } from "../flex/wallet";
import { Market } from "../flex/market";
import { Client } from "../flex/client";

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
    const ever = new Wallet({
        address: "0:62fe1c8d300724cb154dd54f9d498c0b8baacdc8687feabf9251716a3c2aa7a2",
        signer: "08d3c6e784a5bf44837ff58270b63797f800cecff17339671606b8100afd983c",
    });
    const flxEver = new Market({
        address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
    });
    const client = new Client({
        address: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
    });
    const order = await ever.makeOrder({
        market: flxEver,
        price: 1.23,
        amount: 1,
        client,
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
