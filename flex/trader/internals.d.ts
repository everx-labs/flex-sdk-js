import { FlexWalletAccount } from "../../contracts";
import { Evr, SignerOption } from "../web3";
export declare function getWallet(evr: Evr, options: {
    market: string;
    client: string;
    trader: {
        id: string;
        signer: SignerOption;
    };
    sell: boolean;
}): Promise<FlexWalletAccount>;
//# sourceMappingURL=internals.d.ts.map