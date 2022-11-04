/**
 * @module trader
 */
import { Flex } from "../flex";
import {
    makeOrder,
    MakeOrderOptions,
    MakeOrderProcessing,
    NewOrderInfo,
    waitForMakeOrder,
} from "./make-order";
import { cancelOrder, CancelOrderOptions, CancelOrderResult } from "./cancel-order";
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
    DeployTraderTip31WalletOptions, DeployTraderTip31WalletResult,
} from "./deploy-tip31-wallet";

export * from "./types";
export {
    DeployTraderOptions,
    MakeOrderOptions,
    NewOrderInfo,
    CancelOrderOptions,
    QueryWalletsOptions,
    DeployTraderTip31WalletOptions,
    DeployTraderEverWalletOptions,
    WalletInfo,
    EverWalletInfo,
    DeployTraderTip31WalletResult,
    CancelOrderResult,
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
     * This function can throw error with additional optional field `processing`.
     * If error object contains this field, then the current state of the order is unknown.
     * User must resume determining order state with `waitForMakeOrder`.
     *
     * @param flex
     * DEX instance
     *
     * @param options
     * Order options
     *
     * @returns
     */
    static async makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo> {
        return await makeOrder(flex, options);
    }

    /**
     * Resumes previously terminated makeOrder.
     *
     * This function can throw error with additional optional field `processing`.
     * If error object contains this field, then the current state of the order is unknown.
     * User must resume determining order state with `waitForMakeOrder`.
     *
     * @param flex
     * DEX instance
     *
     * @param processing
     * Order processing state (can be obtained from makeOrder's `Error.processing`).
     *
     * @returns
     */
    static async waitForMakeOrder(
        flex: Flex,
        processing: MakeOrderProcessing,
    ): Promise<NewOrderInfo> {
        return await waitForMakeOrder(flex, processing);
    }

    /**
     * Cancels an Order on DEX Market
     *
     * @param flex
     * DEX instance
     * @param options
     * Cancel options
     * @returns
     */
    static async cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<CancelOrderResult> {
        return await cancelOrder(flex.evr, options);
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
    static async queryWallets(
        flex: Flex,
        options: QueryWalletsOptions,
    ): Promise<WalletInfo[]> {
        return await queryWallets(flex, options);
    }
}
