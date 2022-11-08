import { Evr, Exchange } from "../flex";
import { LogLevel } from "../contracts/helpers";

(async () => {
    const evr = new Evr({
        sdk: {
            network: { endpoints: ["http://localhost"] },
        },
    });
    try {
        evr.log.level = LogLevel.DEBUG;
        const signer = "flex-exchange";
        const info = await Exchange.deploy(evr, {
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
                },
            },
        });

        evr.log.info("Exchange", info);
        await evr.close();
    } catch (err) {
        evr.log.error(err);
        process.exit(1);
    }
})();
