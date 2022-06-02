import { Flex } from "../flex";
import {
    CONFIG,
    initExample,
    log,
} from "./examples";
import { Trader } from "../flex";

initExample();


(async () => {
    try {
        const flex = Flex.default;

        log("Trader Orders", await Trader.queryOrders(flex, CONFIG.trader.id));
        log("Trader Trades", await Trader.queryTrades(flex, CONFIG.trader.id));
        log(
            "Trader Wallets",
            await Trader.queryWallets(flex,
                {
                    client: CONFIG.trader.client,
                    trader: CONFIG.trader.id,
                },
            ),
        );
        log("Client Wallets", await Trader.queryWallets(flex, { client: CONFIG.trader.client }));

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
