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

        //{ pubkey: "0xa51a2ccb21eddfda9069aabc76faba5840f361b7a0c6eb51c925af44156a2802", owner: "0:d807caf6df3a7c2bb0b64915613eca9d8f17ca1de0b938dfdcbb9b4ff30c4526", evers: 15000000000, keepEvers: 12000000000 }

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
