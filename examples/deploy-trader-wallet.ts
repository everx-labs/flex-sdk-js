import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);

        await Trader.deployTip31Wallet(flex, {
            client: CONFIG.trader.client,
            trader: CONFIG.trader.id,
            tokenWrapper: "token-wrapper-address",
            tokenWrapperWallet: "token-wrapper-wallet",
            tokenWallet: "token-wallet",
            tokenUnits: "100000",
            everWallet: { signer: "msig " },
        });

        await Trader.deployEverWallet(flex, {
            client: CONFIG.trader.client,
            trader: CONFIG.trader.id,
            tokens: 100000,
            wrapper: "wrapper-address",
            everWallet: { signer: "msig " },
        });

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
