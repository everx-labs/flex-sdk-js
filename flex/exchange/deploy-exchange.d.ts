import { AccountOptionsEx } from "../../contracts/account-ex";
import { EverTokenTypeOptions, TokenTypeInfo } from "./ever-token-type";
import { Tip3TokenTypeOptions } from "./tip3-token-type";
import { SignerOption, Web3Evr } from "../web3";
export declare type DeployExchangeOptions = {
    everWallet: AccountOptionsEx;
    signer: SignerOption;
    version?: {
        wallet: number;
        exchange: number;
        user: number;
    };
    superRootOwnerEvers?: number;
    superRootEvers?: number;
    prevSuperRoot?: string;
    wrappers?: {
        mainEvers?: number;
        deployEvers?: number;
        keepEvers?: number;
        version?: number;
    };
    flex?: {
        mainEvers?: number;
        deployEvers?: number;
        keepEvers?: number;
        evers?: {
            deploy?: number;
            setNext?: number;
            pairKeep?: number;
        };
        oldFlex?: string;
        version?: number;
        fees?: {
            transferTip3?: number;
            returnOwnership?: number;
            orderAnswer?: number;
            processQueue?: number;
            sendNotify?: number;
            destWalletKeepEvers: number;
        };
        dealsLimit: number;
    };
    tokenTypes?: {
        ever?: EverTokenTypeOptions;
        tip3?: Tip3TokenTypeOptions;
    };
};
export declare type ExchangeInfo = {
    superRootOwner: string;
    superRoot: string;
    wrappersConfig: string;
    flex: string;
    tokenTypes: {
        ever?: TokenTypeInfo;
        tip3?: TokenTypeInfo;
    };
};
export declare function deployExchange(web3: Web3Evr, options: DeployExchangeOptions): Promise<ExchangeInfo>;
//# sourceMappingURL=deploy-exchange.d.ts.map