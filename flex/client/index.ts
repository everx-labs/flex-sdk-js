/**
 * @module client
 */

import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
import { deployClient } from "./deploy-client";

export { DeployClientOptions };

export type WalletInfo = {
    /**
     * Flex wallet address
     */
    address: string,

    /**
     * Flex client account address
     */
    clientAddress: string,

    /**
    Trader ID uint256 hex string
     */

    traderId: string,

    /**
    Trader public key uint256 hex string
     */
    traderPublicKey: string

    /**
     * Token DEX Wrapper address
     */
    token: TokenInfo,

    /**
     * Balance of wallet account in native currency (EVERs)
     */
    nativeCurrencyBalance: number,

    /**
     * Token balance on the wallet (in tokens)
     */

    totalBalance: number,

    /**
     * Available balance in tokens
     */
    availableBalance: number,

    /**
     * Balance in orders
     */
    balanceInOrders: number,

    cursor: string,
}

/** @internal */
export function walletInfoFromApi(result: any): WalletInfo {
    return {
        address: result.address,
        clientAddress: result.clientAddress,
        traderId: result.userId,
        traderPublicKey: result.dappPubkey,
        token: result.token,
        nativeCurrencyBalance: result.nativeCurrencyBalance,
        totalBalance: result.totalBalance,
        availableBalance: result.availableBalance,
        balanceInOrders: result.balanceInOrders,
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
    static async deploy(
        flex: Flex,
        options: DeployClientOptions,
    ): Promise<string> {
        return await deployClient(flex, options);
    }

}
