import { cancelOrderFinalized, Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;

        let result = await Trader.cancelOrder(flex, {
            clientAddress: CONFIG.trader.client,
            trader: CONFIG.trader,
            marketAddress: CONFIG.market.EVER_TBTC,
            // price: { tokens: 0.2 },
            price: { units: "2777771.1" },
            orderId: "0xd5ec99b62fdd7523",
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
