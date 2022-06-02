import { Flex } from "../flex";
import { SuperRootAccount } from "../../contracts";
import { DeployExchangeOptions } from "./deploy-exchange";
import { TokenType } from "./add-token-type";
export { MakeOrderMode, FlexConfig } from "../config";
export { Flex } from "../flex";
export { DeployExchangeOptions, TokenType };
export declare class Exchange {
    static deploy(flex: Flex, options: DeployExchangeOptions): Promise<SuperRootAccount>;
}
//# sourceMappingURL=index.d.ts.map