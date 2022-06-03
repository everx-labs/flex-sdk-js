import { FlexWalletAccount } from "../../contracts";
import { Web3Evr } from "../web3";
import { SignerOption } from "../web3/signers";
export declare function getWallet(evr: Web3Evr, options: {
    market: string;
    client: string;
    trader: {
        id: string;
        signer: SignerOption;
    };
    sell: boolean;
}): Promise<FlexWalletAccount>;
//# sourceMappingURL=internals.d.ts.map