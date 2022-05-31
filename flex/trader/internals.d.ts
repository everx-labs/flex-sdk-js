import { Flex } from "../flex";
import { Signer, TonClient } from "@eversdk/core";
import { FlexWalletAccount, XchgPairAccount } from "../../contracts";
import { PriceXchgGetDetailsOutput } from "../../contracts/generated/PriceXchgAccount";
export declare function getWallet(options: {
    flex: Flex;
    market: string;
    client: string;
    trader: string;
    traderSigner: Signer | string;
    sell: boolean;
}): Promise<FlexWalletAccount>;
export declare function generateRandomOrderId(web3: TonClient): Promise<string>;
export declare function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined;
export declare function resolveError(original: Error & {
    code?: number;
    data?: {
        local_error?: {
            code: number;
        };
    };
}, context: {
    O: string;
    M: string;
    T: string;
    W: string;
}): Error;
export declare function getPriceDetails(flex: Flex, client: string, pair: XchgPairAccount, priceNum: string): Promise<PriceXchgGetDetailsOutput & {
    address: string;
}>;
//# sourceMappingURL=internals.d.ts.map