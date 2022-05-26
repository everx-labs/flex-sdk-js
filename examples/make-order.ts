import { Flex, Trader } from "../flex";
import { CONFIG, initExample } from "./examples";

initExample();

(async () => {
    try {
        const trader = new Trader({
            client: CONFIG.trader2.client,
            id: CONFIG.trader2.id,
            signer: CONFIG.trader2.signer,
        });

        const order = await trader.makeOrder({
            sell: false,
            market: CONFIG.market1,
            price: 40,
            amount: 1,
        });

        console.log(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
