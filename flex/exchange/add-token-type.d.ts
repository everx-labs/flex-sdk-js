import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { AccountOptionsEx } from "../../contracts/account-ex";
export declare enum TokenType {
    TIP3 = 0,
    EVER = 1,
    BROXUS = 2
}
declare type BaseAddTokenTypeOptions = {
    everWallet: AccountOptionsEx;
    superRootOwner: AccountOptionsEx;
    superRoot: string;
    type: TokenType;
    wrappersConfigAddress: string;
    wrapperSigner: Signer | string;
    wrapperDeployerSigner: Signer | string;
    wrapperDeployerBalance?: number;
    wrapperDeployEvers?: number;
    wrapperKeepEvers?: number;
    reserveWalletEvers?: number;
    mainEvers?: number;
    callEvers?: number;
    keepEvers?: number;
};
declare type AddEverTokenTypeOptions = BaseAddTokenTypeOptions;
export declare function addEverTokenType(flex: Flex, options: AddEverTokenTypeOptions): Promise<void>;
declare type AddTip3TokenTypeOptions = BaseAddTokenTypeOptions & {
    extWalletEvers?: number;
};
export declare function addTip3TokenType(flex: Flex, options: AddTip3TokenTypeOptions): Promise<void>;
declare type AddBroxusTokenTypeOptions = AddTip3TokenTypeOptions & {
    outDeployEvers?: number;
};
export declare function addBroxusTokenType(flex: Flex, options: AddBroxusTokenTypeOptions): Promise<void>;
export {};
//# sourceMappingURL=add-token-type.d.ts.map