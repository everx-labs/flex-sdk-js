import { Flex } from "../flex";
import { Trader } from "../flex/trader";
import {
    CONFIG,
    initExample,
    log,
} from "./examples";
import { Client } from "../flex/client";

initExample();


(async () => {
    try {
        const client = new Client({ address: CONFIG.trader1.client });
        const trader = new Trader({
            client,
            id: CONFIG.trader1.id,
            signer: CONFIG.trader1.signer,
        });

        log("Trader Orders", await trader.queryOrders());
        log("Trader Trades", await trader.queryTrades());
        log("Trader Wallets", await trader.queryWallets());
        log("Client Wallets", await client.queryWallets());

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
