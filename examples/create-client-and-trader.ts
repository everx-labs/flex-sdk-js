import { Client, Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = await Client.deploy(flex, {
            everWallet: CONFIG.everWallet,
            signer: CONFIG.everWallet.signer,

        });
        flex.evr.log.info("Client:", clientAddress);


        const traderId = CONFIG.trader.id;
        await Trader.deploy(flex, {
            client: {
                address: clientAddress,
                signer: CONFIG.everWallet.signer,
            },
            id: traderId,
            name: "trader_1",
            pubkey: CONFIG.trader.id // Trader's pubkey
        });

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
