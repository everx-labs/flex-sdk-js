import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
       // flex.evr.log.level = LogLevel.DEBUG;

        await Trader.makeOrder(
            flex,
            {
                clientAddress: CONFIG.trader.client,
                trader: CONFIG.trader,
                sell: true,
                marketAddress: CONFIG.market,
                price: 2.6,
                amount: 18,
            },
        );

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
