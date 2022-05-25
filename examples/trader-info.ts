import { Flex } from "../flex";
import { Trader } from "../flex/trader";
import {
    CONFIG,
    initExample,
    log,
} from "./examples";

initExample();


(async () => {
    try {
        const trader = new Trader({
            client: CONFIG.trader1.client,
            id: CONFIG.trader1.id,
            signer: CONFIG.trader1.signer,
        });

        log("Orders", await trader.queryOrders());
        log("Trades", await trader.queryTrades());
        log("Wallets", await trader.queryWallets());

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
