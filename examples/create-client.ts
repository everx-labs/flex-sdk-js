import { Client, Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const clientAddress = await Client.deploy(flex, {
            everWallet: {
                address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
                signer: "msig",
            },
            signer: "flex-client-1",
        });
        await Trader.deploy(flex, {
            client: {
                address: clientAddress,
                signer: "flex-client-2",
            },
            id: CONFIG.trader.id,
            name: "Trader 1",
            pubkey: await flex.evr.signers.resolvePublicKey(CONFIG.trader.signer),
        });

        console.log(`Client: ${clientAddress}}`);
        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
