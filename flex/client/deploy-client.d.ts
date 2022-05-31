import { Flex } from "../flex";
import { ClientDeployOptions } from "./index";
import { Signer } from "@eversdk/core";
export declare function deployClient(options: ClientDeployOptions & {
    flex?: Flex;
}): Promise<{
    address: string;
    signer: Signer;
}>;
//# sourceMappingURL=deploy-client.d.ts.map