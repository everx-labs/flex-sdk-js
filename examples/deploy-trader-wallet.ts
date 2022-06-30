import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);

        await Trader.deployTip31Wallet(flex, {
            clientAddress: CONFIG.trader.client,
            traderId: CONFIG.trader.id,
            tokenWrapperAddress: "token-wrapper-address",
            tokenWrapperWalletAddress: "token-wrapper-wallet",
            tokenWalletAddress: "token-wallet",
            tokenUnits: "100000",
            everWallet: { signer: "msig " },
        });

        await Trader.deployEverWallet(flex, {
            clientAddress: CONFIG.trader.client,
            traderId: CONFIG.trader.id,
            tokens: 100000,
            wrapperAddress: "wrapper-address",
            everWallet: { signer: "msig " },
        });

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
