import { Client, Flex, Trader } from "../flex";
import { CONFIG, initExample } from "./examples";

initExample();

(async () => {
    try {
        const flex = Flex.default;
        const client = await Client.deploy(flex, {
            everWallet: {
                address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
                signer: "msig",
            },
            signer: "flex-client-1",
        });
        await Trader.deploy(flex, {
            client,
            id: CONFIG.trader.id,
            name: "Trader 1",
            pubkey: await Flex.default.signers.resolvePublicKey(CONFIG.trader.signer),
        });

        console.log(`Client: ${client.address}}`);
        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
