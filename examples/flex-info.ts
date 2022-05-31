import { Flex, Market, Token } from "../flex";
import { CONFIG, initExample, log } from "./examples";

initExample();

(async () => {
    try {
        log("Tokens", await Token.queryTokens());
        log("Markets", await Market.queryMarkets());

        const market = new Market(CONFIG.market);
        log("Market Order Book", await market.queryOrderBook());
        log("Market Price", await market.queryPrice());

        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
