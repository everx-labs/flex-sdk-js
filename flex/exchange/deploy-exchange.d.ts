import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { SuperRootAccount } from "../../contracts";
import { Signer } from "@eversdk/core";
import { TokenType } from "./add-token-type";
export declare type DeployExchangeOptions = {
    everWallet: AccountOptionsEx;
    signer: Signer | string;
    version: {
        wallet: 1;
        exchange: 1;
        user: 1;
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
    tokenTypes?: TokenType[];
};
export declare function deployExchange(flex: Flex, options: DeployExchangeOptions): Promise<SuperRootAccount>;
//# sourceMappingURL=deploy-exchange.d.ts.map