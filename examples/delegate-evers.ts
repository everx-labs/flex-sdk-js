import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;
        
        let trader_ever_wallet =  await Trader.deployEverWallet(flex, {
            clientAddress: clientAddress,
            everWallet: {
                address: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526",
                signer: "everWallet",
            },
            tokens: 100,
            evers: 20,
            keepEvers: 15,
            traderId: traderId,
            wrapperAddress: "0:c072805ae38d548d4abbaddf929659d37584117b63b0969eb3f812c6252b12fb",
        });

        console.log(`Trader EVER wallet address: ${trader_ever_wallet} has beed topped-up.`);
        console.log(`Trader balances: ${JSON.stringify(await Trader.queryWallets(flex, {clientAddress: clientAddress, traderId: traderId}), null, 2)}`);

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
