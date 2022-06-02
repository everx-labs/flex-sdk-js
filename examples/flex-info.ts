import { Flex } from "../flex";
import { CONFIG, initExample, log } from "./examples";
import { Token } from "../flex";
import { Market } from "../flex";

initExample();

(async () => {
    try {
        const flex = Flex.default;
        log("Tokens", await Token.queryTokens(flex));
        log("Markets", await Market.queryMarkets(flex));
        log("Market Order Book", await Market.queryOrderBook(flex, CONFIG.market));
        log("Market Price", await Market.queryPrice(flex, CONFIG.market));

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
