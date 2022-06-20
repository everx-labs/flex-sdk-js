import { Flex } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG, examplesLog } from "./examples";
import { Token } from "../flex";
import { Market } from "../flex";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        examplesLog("Tokens", await Token.queryTokens(flex));
        examplesLog("Markets", await Market.queryMarkets(flex));
        examplesLog("Market Order Book", await Market.queryOrderBook(flex, CONFIG.market));
        examplesLog("Market Price", await Market.queryPrice(flex, CONFIG.market));

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
