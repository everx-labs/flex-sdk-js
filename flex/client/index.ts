/**
 * @module client
 */

import { TokenInfo } from "../token";
import { Flex } from "../flex";
import { DeployClientOptions } from "./deploy-client";
import { deployClient } from "./deploy-client";

export { DeployClientOptions };

export type WalletInfo = {
    /// Flex wallet address
    address: string,

    /// Flex client account address
    clientAddress: string,

    /// User id the account owner
    traderId: string,

    /// Dapp public key
    traderPublicKey: string

    /// Wallet token
    token: TokenInfo,

    /// Balance of native currency of the wallet in EVERs
    nativeCurrencyBalance: number,

    /// Token balance of the wallet in tokens
    totalBalance: number,

    /// Available balance in tokens
    availableBalance: number,

    /// Balance in orders
    balanceInOrders: number,

    /// Unsalted price code hash
    unsaltedPriceCodeHash: string,

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
        unsaltedPriceCodeHash: result.unsaltedPriceCodeHash,
        cursor: result.cursor,
    };
}

export class Client {
    static async deploy(
        flex: Flex,
        options: DeployClientOptions,
    ): Promise<string> {
        return await deployClient(flex, options);
    }

}
