import { DeployExchangeOptions, ExchangeInfo } from "./deploy-exchange";
import { AddEverTokenTypeOptions, TokenTypeInfo, EverTokenTypeOptions } from "./ever-token-type";
import { AddTip3TokenTypeOptions, Tip3TokenTypeOptions } from "./tip3-token-type";
import { Evr } from "../web3";
export { MakeOrderMode, FlexConfig } from "../config";
export { Flex } from "../flex";
export { DeployExchangeOptions, AddEverTokenTypeOptions, ExchangeInfo, AddTip3TokenTypeOptions, EverTokenTypeOptions, Tip3TokenTypeOptions, TokenTypeInfo, };
export declare class Exchange {
    static deploy(web3: Evr, options: DeployExchangeOptions): Promise<ExchangeInfo>;
    static addEverTokenType(web3: Evr, options: AddEverTokenTypeOptions): Promise<TokenTypeInfo>;
    static addTip3TokenType(web3: Evr, options: AddTip3TokenTypeOptions): Promise<TokenTypeInfo>;
}
//# sourceMappingURL=index.d.ts.map