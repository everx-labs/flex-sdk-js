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
};

async function main() {
    const wallet = new Wallet({
        address: "123",
        signer: "123",
    });
    const market = new Market({
        address: "1",
    });
    await wallet.makeOrder({
        market,
        sell: true,
        price: 1.23,
        amount: 10000,
        clientAddress: "1",
        userId: "1",
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
