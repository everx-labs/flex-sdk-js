import { Flex, makeOrderFinalized, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;

        let result = await Trader.makeOrder(flex, {
            clientAddress: CONFIG.trader.client,
            trader: CONFIG.trader,
            sell: true,
            marketAddress: CONFIG.market.EVER_TBTC,
            price: { units: "2777771.1" },
            amount: { units: 1000 },
            waitForOrderbookUpdate: false,
        });
        flex.evr.log.info("MakeOrder Initialization result on wallet", result);

        if (!makeOrderFinalized(result)) {
            result = await Trader.waitForMakeOrder(flex, result);
            flex.evr.log.info("Finalized Make order result in orderbook", result);
        }

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
