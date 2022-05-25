import { Flex } from "../flex";
import { Client } from "../flex/client";
import { EverWallet } from "../flex/ever-wallet";
import { CONFIG, initExample } from "./examples";

initExample();

(async () => {
    try {
        const everWallet = new EverWallet({
            address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
            signer: "msig",
        });
        const client = await Client.deploy({
            everWallet,
            signer: "flex-client-1",
        });
        await client.deployTrader({
            id: CONFIG.trader1.id,
            name: "Trader 1",
            pubkey: await Flex.default.signers.resolvePublicKey(CONFIG.trader1.signer),
            eversAll: 40e9,
            eversAuth: 1e9,
            refillWallet: 10e9,
            minRefill: 0.1e9,
        });

        console.log(`Client: ${await (await client.getState()).account.getAddress()}`);
        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
