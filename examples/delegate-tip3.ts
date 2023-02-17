import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;

        let trader_tip3_wallet = await Trader.deployTip31Wallet(flex, {
                clientAddress: clientAddress,
                everWallet: CONFIG.everWallet,
                traderId,
                tokenUnits: "10000000000",
                transferEvers: 21,
                evers: 20,
                keepEvers: 15,
                ...CONFIG.tip3.TBTC
            },
        );

        flex.evr.log.info("Trader Tip3 wallet address:", trader_tip3_wallet, "has been topped-up.");
        flex.evr.log.info(
            "Trader balances:",
            await Trader.queryWallets(
                flex,
                {
                    clientAddress: clientAddress,
                    traderId,
                },
            ),
        );

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
