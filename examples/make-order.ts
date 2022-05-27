import { Flex, Trader } from "../flex";
import { CONFIG, initExample } from "./examples";
import { LogLevel } from "../contracts/helpers";

initExample();

(async () => {
    try {
        const trader = new Trader({
            client: CONFIG.trader1.client,
            id: CONFIG.trader1.id,
            signer: CONFIG.trader1.signer,
        });

        trader.flex.log.level = LogLevel.DEBUG;
        const order = await trader.makeOrder({
            sell: true,
            market: CONFIG.market1,
            price: 40,
            amount: 0.5,
        });

        console.log(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
