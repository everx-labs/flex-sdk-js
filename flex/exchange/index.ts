/**
 * @module exchange
 */
import { deployExchange, DeployExchangeOptions, ExchangeInfo } from "./deploy-exchange";
import {
    addEverTokenType,
    AddEverTokenTypeOptions,
    TokenTypeInfo,
    EverTokenTypeOptions,
} from "./ever-token-type";
import { addTip3TokenType, AddTip3TokenTypeOptions, Tip3TokenTypeOptions } from "./tip3-token-type";
import { Web3Evr } from "../web3";

export { MakeOrderMode, FlexConfig } from "../config";
export { Flex } from "../flex";

export {
    DeployExchangeOptions,
    AddEverTokenTypeOptions,
    ExchangeInfo,
    AddTip3TokenTypeOptions,
    EverTokenTypeOptions,
    Tip3TokenTypeOptions,
    TokenTypeInfo,
};


export class Exchange {
    static async deploy(
        web3: Web3Evr,
        options: DeployExchangeOptions,
    ): Promise<ExchangeInfo> {
        return await deployExchange(web3, options);
    }

    static async addEverTokenType(
        web3: Web3Evr,
        options: AddEverTokenTypeOptions,
    ): Promise<TokenTypeInfo> {
        return await addEverTokenType(web3, options);
    }

    static async addTip3TokenType(
        web3: Web3Evr,
        options: AddTip3TokenTypeOptions,
    ): Promise<TokenTypeInfo> {
        return await addTip3TokenType(web3, options);
    }
}
