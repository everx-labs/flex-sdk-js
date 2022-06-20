import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
export declare type DeployTraderEverWalletOptions = {
    everWallet: AccountOptionsEx;
    client: string;
    trader: string;
    wrapper: string;
    tokens: number;
    evers?: number;
    keepEvers?: number;
};
export declare type EverWalletInfo = {
    address: string;
};
export declare function deployTraderEverWallet(flex: Flex, options: DeployTraderEverWalletOptions): Promise<EverWalletInfo>;
//# sourceMappingURL=deploy-ever-wallet.d.ts.map