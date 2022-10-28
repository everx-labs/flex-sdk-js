import { Flex } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
import { Token } from "../flex";
import { Market } from "../flex";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        flex.evr.log.info("Tokens", await Token.queryTokens(flex));
        flex.evr.log.info("Markets", await Market.queryMarkets(flex));
        flex.evr.log.info("Market Order Book", await Market.queryOrderBook(flex, CONFIG.market));
        flex.evr.log.info("Market Price", await Market.queryPrice(flex, CONFIG.market));

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
