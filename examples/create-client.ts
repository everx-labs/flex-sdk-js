import { Client, Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const traderId = CONFIG.trader.id;
        const clientAddress = await Client.deploy(flex, {
            everWallet: {
                address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
                signer: "everWallet",
            },
            signer: "everWallet",
            
        });
        console.log(`Client: ${clientAddress}}`);
        
        await Trader.deploy(flex, {
            client: {
                address: clientAddress,
                signer: "everWallet",
            },
            id: traderId,
            name: "trader_1",
            pubkey: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b" // Trader's pubkey
        });

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
