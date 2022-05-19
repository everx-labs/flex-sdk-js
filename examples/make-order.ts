import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { Wallet } from "../flex/wallet";
import { Market } from "../flex/market";

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
        address: "0:b87de6635e37b4569c25c87a9bd1a7a312b083b8dd0ad2ec48270e6fe4d8804d",
        signer: "583085240bd1f44917e2b4708b3173352872c1f521e7bd16ea97b39d2d66a98b",
    });
    const flxEver = new Market({
        address: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4", // FLX/EVER
    });
    await ever.makeOrder({
        market: flxEver,
        price: 1.23,
        amount: 10,
        clientAddress: "0:c34ec7bfae799c69479d50db89d3744e0175d8ab571e2c65bd78b0f70dc48e95",
        userId: "e890f897ddda3f49f35e65e95074ca31f29d8874785d7898691c005170ac548f",
    });
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
