import { Flex } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
import { Trader } from "../flex";
import { TopUpOptions } from "../flex/trader/top-up";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    const log = flex.evr.log;
    try {
        const traderId = CONFIG.trader.id;
        const topUpOptions: TopUpOptions = {
            client: CONFIG.trader.client,
            id: traderId,
            everWallet: { 
                address: "0:d727caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526" , 
                signer: "everWallet" },
            minBalance: 80,
            value: 10,
        };
        await Trader.getTopUpInfo(flex, topUpOptions);
        const start = Date.now();
        log.info(await Trader.getTopUpInfo(flex, topUpOptions));
        log.info("Time spent: ", (Date.now() - start) / 1000);
        await Trader.topUp(flex, topUpOptions);
        await flex.close();
    } catch (err) {
        log.error(err);
        process.exit(1);
    }
})();
