import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";
import { Client } from "../flex/client";
import { EverWallet } from "../flex/ever-wallet";

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
    const everWallet = new EverWallet({
        address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
        signer: "msig",
    });
    const client = await Client.deploy({
        everWallet,
        signer: "flex-client-1",
    });
    const userAccount = await client.deployUser({
        id: 1,
        name: "Client 1 User 1",
        signer: "flex-user-1-1",
        eversAll: 40e9,
        eversAuth: 1e9,
        refillWallet: 10e9,
        minRefill: 0.1e9,
    });

    const { account: clientAccount } = await client.getState();

    Flex.default.log.verbose(`Client: ${await clientAccount.getAddress()}\n`);
    Flex.default.log.verbose(`User: ${await userAccount.getAddress()}\n`);
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
