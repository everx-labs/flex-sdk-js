import { Flex } from "../flex";
import { Market } from "../market";
import { Token } from "../token";
import { WalletInfo, walletInfoFromApi } from "../client";
import { OrderInfo, TradeInfo } from "./types";

function orderInfoInfoFromApi(result: any): OrderInfo {
    return {
        orderId: result.orderId,
        traderId: result.userId,
        price: result.price,
        priceNum: result.priceNum,
        priceScale: result.priceScale,
        amountProcessed: result.amountProcessed,
        amountLeft: result.amountLeft,
        side: result.side,
        finishTime: result.finishTime,
        pair: result.pair,
    };
}

/** @internal */
export async function queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]> {
    const result = await flex.query(`
            userOrders(userId:"0x${trader}") {
                pair { ${Market.queryFields()} }
                side
                price
                priceNum
                priceScale
                orderId
                userId
                amountProcessed
                amountLeft
                finishTime
            }
        `);
    return result.userOrders.map(orderInfoInfoFromApi);
}

function tradeFromApi(result: any): TradeInfo {
    return {
        pair: result.pair,
        price: result.price,
        amount: result.amount,
        time: result.time,
        side: result.side,
        liquidity: result.liquidity,
        fees: result.fees,
        feesToken: result.feesToken,
        userOrderId: result.userOrderId,
        cursor: result.cursor,
    };
}

/** @internal */
export async function queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]> {
    const result = await flex.query(`
        userTrades(userId:"0x${trader}") {
            pair { ${Market.queryFields()} }
            price
            amount
            time
            side
            liquidity
            fees
            feesToken { ${Token.queryFields()} }
            userOrderId 
            cursor
        }
    `);
    return result.userTrades.map(tradeFromApi);
}

export type QueryWalletsOptions = {
    clientAddress: string;
    /**
     * Trader ID as uint256 hex string
     */
    traderId?: string;
    /**
     * Token DEX Wrapper address
     */
    token?: string;
};

/** @internal */
export async function queryWallets(
    flex: Flex,
    options: QueryWalletsOptions,
): Promise<WalletInfo[]> {
    const result = await flex.query(`
        wallets(
            clientAddress: "${options.clientAddress}"
            ${options.traderId ? `userId: "0x${options.traderId}"` : ""}
            ${options.token ? `token: "${options.token}",` : ""}
        ) {
            address
            clientAddress
            userId
            dappPubkey
            token { ${Token.queryFields()} }
            nativeCurrencyBalance
            nativeCurrencyBalanceUnits
            totalBalance
            totalBalanceUnits
            availableBalance
            availableBalanceUnits
            balanceInOrders
            balanceInOrdersUnits
            unsaltedPriceCodeHash
            cursor
        }
    `);
    return result.wallets.map(walletInfoFromApi);
}
