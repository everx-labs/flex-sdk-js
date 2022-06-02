import { Flex, Trader } from "../flex";
import { CONFIG, initExample } from "./examples";
import { LogLevel } from "../contracts/helpers";

initExample();

(async () => {
    try {
        const flex = Flex.default;
        flex.log.level = LogLevel.DEBUG;

        await Trader.makeOrder(
            flex,
            {
                client: CONFIG.trader.client,
                trader: CONFIG.trader,
                sell: false,
                market: CONFIG.market,
                price: 2.6,
                amount: 18,
            },
        );

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
