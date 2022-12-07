import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts";
export type DeployTraderTip31WalletOptions = {
    clientAddress: string;
    everWallet: AccountOptionsEx;
    traderId: string;
    tokenWalletAddress: string;
    tokenWrapperAddress: string;
    tokenWrapperWalletAddress: string;
    tokenUnits: string;
    transferEvers?: number;
    evers?: number;
    keepEvers?: number;
};
export type DeployTraderTip31WalletResult = {
    address: string;
};
export declare function deployTraderTip31Wallet(flex: Flex, options: DeployTraderTip31WalletOptions): Promise<DeployTraderTip31WalletResult>;
//# sourceMappingURL=deploy-tip31-wallet.d.ts.map