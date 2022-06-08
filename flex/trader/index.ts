/**
 * @module trader
 */
import { Flex } from "../flex";
import { makeOrder, MakeOrderOptions, NewOrderInfo } from "./make-order";
import { cancelOrder, CancelOrderOptions } from "./cancel-order";
import { OrderInfo, TradeInfo } from "./types";
import { queryOrders, queryTrades, queryWallets, QueryWalletsOptions } from "./query";
import { WalletInfo } from "../client/index";
import { deployTrader, DeployTraderOptions } from "./deploy-trader";
import {
    deployTraderEverWallet,
    DeployTraderEverWalletOptions,
    EverWalletInfo,
} from "./deploy-ever-wallet";
import {
    deployTraderTip31Wallet,
    DeployTraderTip31WalletOptions,
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
};


export class Trader {
    /**
     * Deploys Trader's Index contract, that is used to pay gas
     * @param flex 
     * DEX instance
     * @param options 
     * Paramerers
     * @returns 
     */
    static async deploy(flex: Flex, options: DeployTraderOptions): Promise<void> {
        return await deployTrader(flex, options);
    }

    static async deployEverWallet(
        flex: Flex,
        options: DeployTraderEverWalletOptions,
    ): Promise<EverWalletInfo> {
        return await deployTraderEverWallet(flex, options);
    }

    static async deployTip31Wallet(
        flex: Flex,
        options: DeployTraderTip31WalletOptions,
    ): Promise<string> {
        return await deployTraderTip31Wallet(flex, options);
    }

    /**
     * Creates an Order on Flex Dex Market
     *
     * @param flex
     * @param {MakeOrderOptions} options
     * Order parameters
     *
     * @returns NewOrderInfo
     */
    static async makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo> {
        return await makeOrder(flex, options);
    }

    /**
     * Cancels an Order on Flex Dex Market
     * 
     * @param flex 
     * DEX instance
     * @param options 
     * Cancelation options
     * @returns 
     */
    static async cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<void> {
        return await cancelOrder(flex.evr, options);
    }
    /**
     * 
     * @param flex 
     * @param trader 
     * @returns 
     */
    static async queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]> {
        return await queryOrders(flex, trader);
    }

    static async queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]> {
        return await queryTrades(flex, trader);
    }

    static async queryWallets(
        flex: Flex,
        options: QueryWalletsOptions,
    ): Promise<WalletInfo[]> {
        return await queryWallets(flex, options);
    }
}
