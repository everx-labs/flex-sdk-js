import { Flex } from "../flex";
import {
    CONFIG, EXAMPLES_FLEX_CONFIG,
    examplesLog,
} from "./examples";
import { Trader } from "../flex";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);

        examplesLog("Trader Orders", await Trader.queryOrders(flex, CONFIG.trader.id));
        examplesLog("Trader Trades", await Trader.queryTrades(flex, CONFIG.trader.id));
        examplesLog(
            "Trader Wallets",
            await Trader.queryWallets(flex,
                {
                    client: CONFIG.trader.client,
                    trader: CONFIG.trader.id,
                },
            ),
        );
        examplesLog("Client Wallets", await Trader.queryWallets(flex, { client: CONFIG.trader.client }));

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
