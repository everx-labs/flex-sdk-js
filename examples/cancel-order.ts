import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;
        const marketAddress = CONFIG.market;

        let orderInfo = await Trader.cancelOrder(
            flex,
            {
                clientAddress: clientAddress,
                trader: {
                    id: traderId,
                    signer: "trader_1",
                },
                marketAddress: marketAddress,
                price: { units: 250000 },
                orderId: "0x5349f298365e28d2",
                // waitForOrderbookUpdate: true
            },
        );

        flex.evr.log.info("Order info", orderInfo);


        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
