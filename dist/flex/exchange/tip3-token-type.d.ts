import { AccountOptionsEx } from "../../contracts/account-ex";
import { TokenTypeInfo } from "./ever-token-type";
import { SignerOption, Evr } from "../web3";
export declare const TIP3_TOKEN_TYPE = 0;
export declare type Tip3TokenTypeOptions = {
    wrapperSigner: SignerOption;
    wrapperDeployerSigner: SignerOption;
    wrapperDeployerBalance?: number;
    wrapperDeployEvers?: number;
    wrapperKeepEvers?: number;
    reserveWalletEvers?: number;
    mainEvers?: number;
    callEvers?: number;
    keepEvers?: number;
    extWalletEvers?: number;
};
export declare type AddTip3TokenTypeOptions = {
    everWallet: AccountOptionsEx;
    superRootOwner: AccountOptionsEx;
    superRoot: string;
    wrappersConfigAddress: string;
} & Tip3TokenTypeOptions;
export declare function addTip3TokenType(web3: Evr, options: AddTip3TokenTypeOptions): Promise<TokenTypeInfo>;
//# sourceMappingURL=tip3-token-type.d.ts.map