/**
 * @module client
 */

import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
import { deployClient } from "./deploy-client";
import { getClientInfo, GetClientInfoResult } from "./client-info";

export { DeployClientOptions };

export type WalletInfo = {
    /**
     * Flex wallet address
     */
    address: string;

    /**
     * Flex client account address
     */
    clientAddress: string;

    /**
    Trader ID uint256 hex string
     */

    traderId: string;

    /**
    Trader public key uint256 hex string
     */
    traderPublicKey: string;

    /**
     * Token DEX Wrapper address
     */
    token: TokenInfo;

    /**
     * Balance of wallet account in native currency (EVERs)
     */
    nativeCurrencyBalance: string;
    nativeCurrencyBalanceUnits: string;

    /**
     * Token balance on the wallet (in tokens)
     */

    totalBalance: string;
    totalBalanceUnits: string;

    /**
     * Available balance in tokens
     */
    availableBalance: string;
    availableBalanceUnits: string;

    /**
     * Balance in orders
     */
    balanceInOrders: string;
    balanceInOrdersUnits: string;

    cursor: string;
};

/** @internal */
export function walletInfoFromApi(result: any): WalletInfo {
    return {
        address: result.address,
        clientAddress: result.clientAddress,
        traderId: result.userId,
        traderPublicKey: result.dappPubkey,
        token: result.token,
        nativeCurrencyBalance: result.nativeCurrencyBalance,
        nativeCurrencyBalanceUnits: result.nativeCurrencyBalanceUnits,
        totalBalance: result.totalBalance,
        totalBalanceUnits: result.totalBalanceUnits,
        availableBalance: result.availableBalance,
        availableBalanceUnits: result.availableBalanceUnits,
        balanceInOrders: result.balanceInOrders,
        balanceInOrdersUnits: result.balanceInOrdersUnits,
        cursor: result.cursor,
    };
}

export class Client {
    /**
     * Deploys Flex Client contract that is used to manage funds on DEX.
     * @param flex
     * DEX instance
     * @param options
     * Deploy options
     * @returns
     * Address of the Flex Client contract
     */
    static async deploy(flex: Flex, options: DeployClientOptions): Promise<string> {
        return await deployClient(flex, options);
    }

    /**
     * Returns Flex Client account information.
     * @param flex
     * DEX instance
     * @param clientAddress
     * Flex Client
     * @returns
     * Information about the Flex Client account
     */
    static async getClientInfo(flex: Flex, clientAddress: string): Promise<GetClientInfoResult> {
        return getClientInfo(flex.evr.accounts, clientAddress);
    }
}
