import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../../contracts";
export declare function getWallet(flex: Flex, options: {
    market: string;
    client: string;
    trader: {
        id: string;
        signer: Signer | string;
    };
    sell: boolean;
}): Promise<FlexWalletAccount>;
//# sourceMappingURL=internals.d.ts.map