import { Flex } from "../flex";
import { initExample } from "./examples";
import { deployExchange } from "../flex/exchange/deploy-exchange";

initExample();

(async () => {
    try {
        const flex = Flex.default;
        const superRoot = await deployExchange(flex, {
            signer: "flex-1",
            everWallet: { signer: "flex-wallet" },
            version: {
                wallet: 1,
                exchange: 1,
                user: 1,
            },
        });

        console.log(`Super Root: ${superRoot}}`);
        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
