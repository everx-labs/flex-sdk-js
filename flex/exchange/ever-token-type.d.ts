import { AccountOptionsEx } from "../../contracts/account-ex";
import { Evr, SignerOption } from "../web3";
export declare const EVER_TOKEN_TYPE = 1;
export declare type EverTokenTypeOptions = {
    wrapperSigner: SignerOption;
    wrapperDeployerSigner: SignerOption;
    wrapperDeployerBalance?: number;
    wrapperDeployEvers?: number;
    wrapperKeepEvers?: number;
    reserveWalletEvers?: number;
    mainEvers?: number;
    callEvers?: number;
    keepEvers?: number;
};
export declare type AddEverTokenTypeOptions = {
    everWallet: AccountOptionsEx;
    superRootOwner: AccountOptionsEx;
    superRoot: string;
    wrappersConfigAddress: string;
} & EverTokenTypeOptions;
export declare type TokenTypeInfo = {
    deployer: string;
};
export declare function addEverTokenType(web3: Evr, options: AddEverTokenTypeOptions): Promise<TokenTypeInfo>;
//# sourceMappingURL=ever-token-type.d.ts.map