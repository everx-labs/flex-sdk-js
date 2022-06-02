import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Signer } from "@eversdk/core";
export declare type DeployClientOptions = {
    everWallet: AccountOptionsEx;
    signer: Signer | string;
};
export declare function deployClient(flex: Flex, options: DeployClientOptions): Promise<{
    address: string;
    signer: Signer;
}>;
//# sourceMappingURL=deploy-client.d.ts.map