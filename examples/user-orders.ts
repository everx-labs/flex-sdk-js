import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { Trader } from "../flex/trader";
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

(async () => {
    try {
        const trader = new Trader({
            client: new Client({
                address: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
            }),
            userId: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
            walletSigner: "flex-wallet-1",
        });

        const orders = await trader.getOrders();
        console.log("User orders:", orders);

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
