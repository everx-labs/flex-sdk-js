import { Flex } from "../flex";
import { SuperRootAccount } from "../../contracts";
import { deployExchange, DeployExchangeOptions } from "./deploy-exchange";
import { TokenType } from "./add-token-type";

export { MakeOrderMode, FlexConfig } from "../config";
export { Flex } from "../flex";

export { DeployExchangeOptions, TokenType };


export class Exchange {
    static async deploy(
        flex: Flex,
        options: DeployExchangeOptions,
    ): Promise<SuperRootAccount> {
        return await deployExchange(flex, options);
    }
}
