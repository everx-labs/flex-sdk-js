import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
export declare type DeployTraderTip31WalletOptions = {
    client: string;
    trader: string;
    tokenWallet: string;
    tokenWrapper: string;
    tokenWrapperWallet: string;
    tokens: number;
    everWallet: AccountOptionsEx;
    transferEvers?: number;
    evers?: number;
    keepEvers?: number;
};
export declare function deployTraderTip31Wallet(flex: Flex, options: DeployTraderTip31WalletOptions): Promise<string>;
//# sourceMappingURL=deploy-tip31-wallet.d.ts.map