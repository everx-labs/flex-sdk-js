import { Flex } from "../flex";
import {
    CONFIG, EXAMPLES_FLEX_CONFIG
} from "./examples";
import { Trader } from "../flex";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const traderId = CONFIG.trader.id;
        console.log(`Trader Orders`, JSON.stringify(await Trader.queryOrders(flex, traderId), undefined, "   "));
        console.log(`Trader Trades`, JSON.stringify(await Trader.queryTrades(flex, traderId), undefined, "   "));

        console.log(
            `Trader Wallets`, JSON.stringify(
                await Trader.queryWallets(flex,
                    {
                        clientAddress: CONFIG.trader.client,
                        traderId: CONFIG.trader.id,
                    },
                ),
                undefined, "   "));

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
