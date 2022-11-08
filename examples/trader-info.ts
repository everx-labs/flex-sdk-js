import { Flex } from "../flex";
import {
    CONFIG, EXAMPLES_FLEX_CONFIG,
} from "./examples";
import { Trader } from "../flex";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        const traderId = CONFIG.trader.id;
        flex.evr.log.info("Trader Orders", await Trader.queryOrders(flex, traderId));
        flex.evr.log.info("Trader Trades", await Trader.queryTrades(flex, traderId));

        flex.evr.log.info(
            "Trader Wallets",
            await Trader.queryWallets(
                flex,
                {
                    clientAddress: CONFIG.trader.client,
                    traderId: CONFIG.trader.id,
                },
            ),
        );

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
