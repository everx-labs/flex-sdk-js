import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";


(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const clientAddress = CONFIG.trader.client;
        
        await Trader.deploy(flex, {
            client: {
                address: clientAddress,
                signer: "everWallet",
            },
            id: CONFIG.trader.id,
            name: "trader_1",
            pubkey: "162c6c708018da073729dd4a60118425dd917e44653383f1faed4d16b94af30b" //await flex.evr.signers.resolvePublicKey(CONFIG.trader.signer),
        });

        let trader_ever_wallet =  await Trader.deployEverWallet(flex, {
            clientAddress: clientAddress,
            everWallet: {
                address: clientAddress,
                signer: "everWallet",
            },
            tokens: 100,
            traderId: CONFIG.trader.id,
            wrapperAddress: "0:c072805ae38d548d4abbaddf929659d37584117b63b0969eb3f812c6252b12fb",
        });

        console.log(`Trader EVER wallet address: ${trader_ever_wallet}`);
        console.log(`Trader wallets: ${JSON.stringify(Trader.queryWallets(flex, {clientAddress: clientAddress, traderId: CONFIG.trader.id}))}`);

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
