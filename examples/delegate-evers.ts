import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;

        let trader_ever_wallet = await Trader.deployEverWallet(flex, {
            clientAddress: clientAddress,
            everWallet: CONFIG.everWallet,
            tokens: 100,
            evers: 20,
            keepEvers: 15,
            traderId: traderId,
            ...CONFIG.tip3.EVER,
        });

        flex.evr.log.info("Trader EVER wallet address:", trader_ever_wallet, "has been topped-up.");
        flex.evr.log.info(
            "Trader balances:",
            await Trader.queryWallets(
                flex,
                {
                    clientAddress: clientAddress,
                    traderId: traderId,
                },
            ),
        );

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
