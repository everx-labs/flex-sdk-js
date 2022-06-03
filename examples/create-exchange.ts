import { Exchange, Flex } from "../flex";
import { EXAMPLES_FLEX_CONFIG, examplesLog } from "./examples";
import { LogLevel } from "../contracts/helpers";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        flex.evr.log.level = LogLevel.DEBUG;
        const signer = "flex-exchange";
        const info = await Exchange.deploy(flex.evr, {
            signer,
            everWallet: { signer: "msig" },
            tokenTypes: {
                tip3: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                },
                ever: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                }
            }
        });

        examplesLog("Exchange", info);
        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
