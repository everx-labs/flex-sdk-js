/**
 * @module trader
 */
import { Flex } from "../flex";
import {
    makeOrder,
    MakeOrderOptions,
    MakeOrderResult,
    MakeOrderStatus,
    waitForMakeOrder,
} from "./make-order";
import {
    cancelOrder,
    CancelOrderOptions,
    CancelOrderResult,
    CancelOrderStatus,
    waitForCancelOrder,
} from "./cancel-order";
import { OrderInfo, TradeInfo } from "./types";
import { queryOrders, queryTrades, queryWallets, QueryWalletsOptions } from "./query";
import { WalletInfo } from "../client";
import { deployTrader, DeployTraderOptions } from "./deploy-trader";
import {
    deployTraderEverWallet,
    DeployTraderEverWalletOptions,
    EverWalletInfo,
} from "./deploy-ever-wallet";
import {
    deployTraderTip31Wallet,
    DeployTraderTip31WalletOptions,
    DeployTraderTip31WalletResult,
} from "./deploy-tip31-wallet";
import { getIndexInfo, GetIndexInfoResult } from "./get-index-info";

export * from "./types";
export {
    DeployTraderOptions,
    MakeOrderOptions,
    MakeOrderResult,
    MakeOrderStatus,
    CancelOrderStatus,
    CancelOrderOptions,
    CancelOrderResult,
    QueryWalletsOptions,
    DeployTraderTip31WalletOptions,
    DeployTraderEverWalletOptions,
    WalletInfo,
    EverWalletInfo,
    DeployTraderTip31WalletResult,
};

export class Trader {
    /**
     * Deploys Trader's Index contract, that is used to pay gas
     * @param flex
     * DEX instance
     * @param options
     * Deploy parameters
     * @returns
     */
    static async deploy(flex: Flex, options: DeployTraderOptions): Promise<void> {
        return await deployTrader(flex, options);
    }

    /**
     * Deposits EVERs on DEX Trader's wallet.
     * Transfers EVERs from Client's Ever Wallet to a Trader's wallet on DEX.
     *
     * @param flex
     * DEX instance
     * @param options
     * Deposit parameters
     * @returns
     * Address of the DEX Trader's wallet
     */
    static async deployEverWallet(
        flex: Flex,
        options: DeployTraderEverWalletOptions,
    ): Promise<EverWalletInfo> {
        return await deployTraderEverWallet(flex, options);
    }

    /**
     * Deposits TIP-31 tokens on DEX Trader's wallet.
     * Transfers TIP-31 from Client's native TIP-31 Wallet to a Trader's wallet on DEX.
     * @param flex
     * DEX instance
     * @param options
     * Deposit parameters
     * @returns
     * Address of the DEX Trader's wallet
     */
    static async deployTip31Wallet(
        flex: Flex,
        options: DeployTraderTip31WalletOptions,
    ): Promise<DeployTraderTip31WalletResult> {
        return await deployTraderTip31Wallet(flex, options);
    }

    /**
     * Places an order on a specified market.
     *
     * If this function throws error then making order message was not delivered to the blockchain.
     * Otherwise, this function returns result that depends on `status` field.
     * User can resume finalizing with `waitForMakeOrder` if result is not finalized yet
     * (neither success nor error).
     *
     * @param flex
     * DEX instance
     *
     * @param options
     * Order options
     *
     * @returns
     */
    static async makeOrder(flex: Flex, options: MakeOrderOptions): Promise<MakeOrderResult> {
        return await makeOrder(flex, options);
    }

    /**
     * Resumes previously terminated makeOrder.
     *
     * If this function throws error then waiting process can not be done at this time.
     * Otherwise, this function returns new result that depends on `status` field.
     * User can resume finalizing with `waitForMakeOrder` if result is not finalized yet
     * (neither success nor error).
     *
     * @param flex
     * DEX instance
     *
     * @param result
     * Order processing result.
     *
     * @returns
     */
    static async waitForMakeOrder(flex: Flex, result: MakeOrderResult): Promise<MakeOrderResult> {
        return await waitForMakeOrder(flex.evr, result);
    }

    /**
     * Cancels an order.
     *
     * If this function throws error then cancellation message was not delivered to the blockchain.
     * Otherwise, this function returns result that depends on `status` field.
     * User can resume finalizing with `waitForCancelOrder` if result is not finalized yet
     * (neither success nor error).
     *
     * @param flex
     * DEX instance
     *
     * @param options
     * Cancellation options
     *
     * @returns     */
    static async cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<CancelOrderResult> {
        return await cancelOrder(flex.evr, options);
    }

    /**
     * Resumes previously terminated `cancelOrder`.
     *
     * If this function throws error then waiting process can not be done at this time.
     * Otherwise, this function returns new result that depends on `status` field.
     * User can resume finalizing with `waitForCancelOrder` if result is not finalized yet
     * (neither success nor error).
     *
     * @param flex
     * DEX instance
     *
     * @param result
     * Order cancellation result.
     *
     * @returns
     */
    static async waitForCancelOrder(
        flex: Flex,
        result: CancelOrderResult,
    ): Promise<CancelOrderResult> {
        return await waitForCancelOrder(flex.evr, result);
    }

    /**
     * Returns Trader's open orders on DEX
     * @param flex
     * @param trader
     * @returns
     */
    static async queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]> {
        return await queryOrders(flex, trader);
    }

    /**
     * Returns Trader's trade history
     * @param flex
     * @param trader
     * @returns
     */
    static async queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]> {
        return await queryTrades(flex, trader);
    }

    /**
     * Returns Trader's DEX wallets
     * @param flex
     * @param options
     * @returns
     */
    static async queryWallets(flex: Flex, options: QueryWalletsOptions): Promise<WalletInfo[]> {
        return await queryWallets(flex, options);
    }

    /**
     * Returns Trader's index account info
     * @param flex
     * @param clientAddress
     * @param traderId
     */
    static async getIndexInfo(
        flex: Flex,
        clientAddress: string,
        traderId: string,
    ): Promise<GetIndexInfoResult> {
        return await getIndexInfo(flex.evr.accounts, clientAddress, traderId);
    }
}

export function makeOrderFinalized(result: MakeOrderResult): boolean {
    return result.status === MakeOrderStatus.SUCCESS || result.status === MakeOrderStatus.ERROR;
}

export function cancelOrderFinalized(result: CancelOrderResult): boolean {
    return result.status === CancelOrderStatus.SUCCESS || result.status === CancelOrderStatus.ERROR;
}
