import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { SignerOption } from "../web3";
export declare type DeployTraderTip3WalletOptions = {
    client: string;
    trader: string;
    tokenRoot: AccountOptionsEx;
    tokenWrapper: string;
    tokens: number;
    externalWalletSigner: SignerOption;
    externalEvers?: number;
    internalTransferEvers?: number;
    internalEvers?: number;
    internalKeepEvers?: number;
};
export declare type Tip3WalletInfo = {
    externalAddress: string;
    address: string;
};
export declare function deployTraderTip3Wallet(flex: Flex, options: DeployTraderTip3WalletOptions): Promise<Tip3WalletInfo>;
//# sourceMappingURL=deploy-tip3-wallet.d.ts.map