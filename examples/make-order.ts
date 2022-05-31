import { Flex, Trader } from "../flex";
import { CONFIG, initExample } from "./examples";
import { LogLevel } from "../contracts/helpers";

initExample();

(async () => {
    try {
        const trader = new Trader({
            client: CONFIG.trader.client,
            id: CONFIG.trader.id,
            signer: CONFIG.trader.signer,
        });

        trader.flex.log.level = LogLevel.DEBUG;

        await trader.makeOrder({
            sell: false,
            market: CONFIG.market,
            price: 2.6,
            amount: 18,
        });

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
