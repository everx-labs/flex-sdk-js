import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts";
export type DeployTraderEverWalletOptions = {
    everWallet: AccountOptionsEx;
    clientAddress: string;
    traderId: string;
    wrapperAddress: string;
    tokens: number;
    evers?: number;
    keepEvers?: number;
};
export type EverWalletInfo = {
    address: string;
};
export declare function deployTraderEverWallet(flex: Flex, options: DeployTraderEverWalletOptions): Promise<EverWalletInfo>;
//# sourceMappingURL=deploy-ever-wallet.d.ts.map