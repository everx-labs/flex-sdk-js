import { cancelOrderFinalized, Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;
        const marketAddress = CONFIG.market;

        let result = await Trader.cancelOrder(flex, {
            clientAddress: clientAddress,
            trader: {
                id: traderId,
                signer: "traderSigner",
            },
            marketAddress: marketAddress,
            price: { tokens: 0.2 },
            orderId: "0xb1482121e43efae",
            // waitForOrderbookUpdate: true
        });

        flex.evr.log.info("Cancel Initialization result on wallet", result);

        if (!cancelOrderFinalized(result)) {
            result = await Trader.waitForCancelOrder(flex, result);
            flex.evr.log.info("Finalized cancel result in orderbook", result);
        }
        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
