import { Client, Flex } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
import { Trader } from "../flex";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    const log = flex.evr.log;
    try {
        const traderId = CONFIG.trader.id;
        log.info(await Client.getClientInfo(flex, CONFIG.trader.client));
        log.info(await Trader.getIndexInfo(flex, CONFIG.trader.client, traderId));
        log.info("Trader Orders", await Trader.queryOrders(flex, traderId));
        log.info("Trader Trades", await Trader.queryTrades(flex, traderId));

        log.info(
            "Trader Wallets",
            await Trader.queryWallets(flex, {
                clientAddress: CONFIG.trader.client,
                traderId: CONFIG.trader.id,
            }),
        );

        await flex.close();
    } catch (err) {
        log.error(err);
        process.exit(1);
    }
})();
