import { Flex } from "../flex";
import { EXAMPLES_FLEX_CONFIG } from "./examples";
import { MultisigWalletAccount } from "../contracts";
import { Contract } from "../flex/web3/contract";


(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
        const acc = new Contract(flex.evr, MultisigWalletAccount.package.abi);
        await acc.methods.acceptTransfer(1).call();
        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
