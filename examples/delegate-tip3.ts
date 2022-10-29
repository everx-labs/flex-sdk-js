import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;

        let trader_tip3_wallet = await Trader.deployTip31Wallet(flex, {
                clientAddress: clientAddress,
                everWallet: {
                    address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
                    signer: "everWallet",
                },
                traderId: traderId,
                tokenWalletAddress: "0:d4208262595226ac069b94d716ec6339882ec93a0e7e254186f3eb77b7d34c4b",
                tokenWrapperAddress: "0:b10af0f3b17440d3a152e78b7dd971be7d47bc3299aa465bf7ceddb79660b948",
                tokenWrapperWalletAddress: "0:69d1ab51377f2fa29fc121b956b96f01f9234b9a3579552d0ec526c1d6e66613",
                tokenUnits: "10000000000",
                transferEvers: 21,
                evers: 20,
                keepEvers: 15,
            },
        );

        flex.evr.log.info("Trader Tip3 wallet address:", trader_tip3_wallet, "has been topped-up.");
        flex.evr.log.info(
            "Trader balances:",
            await Trader.queryWallets(
                flex,
                {
                    clientAddress: clientAddress,
                    traderId: traderId,
                },
            ),
        );

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
