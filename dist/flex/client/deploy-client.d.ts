import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { SignerOption } from "../web3";
export declare type DeployClientOptions = {
    everWallet: AccountOptionsEx;
    signer: SignerOption;
    transferEvers?: number;
    deployEvers?: number;
};
export declare function deployClient(flex: Flex, options: DeployClientOptions): Promise<string>;
//# sourceMappingURL=deploy-client.d.ts.map