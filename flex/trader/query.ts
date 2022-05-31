import { Flex } from "../flex";
import { Market } from "../market";
import { OrderInfo } from "./order";
import { TradeInfo } from "./trade";
import { Token } from "../token";
import { WalletInfo, walletInfoFromApi } from "../client/index";

/** @internal */
export async function queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]> {
    const result = await flex.query(`
            userOrders(userId:"0x${trader}") {
                pair { ${Market.queryFields()} }
                side
                price
                orderId
                userId
                amountProcessed
                amountLeft
            }
        `);
    return result.userOrders;
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
            cursor
        }
    `);
    return result.userTrades;
}

/** @internal */
export async function queryWallets(
    flex: Flex,
    client: string,
    trader: string,
    token?: string,
): Promise<WalletInfo[]> {
    const result = await flex.query(`
        wallets(
            clientAddress: "${client}",
            userId:"0x${trader}",
            ${token ? `token: "${token}",` : ""}
        ) {
            address
            clientAddress
            userId
            dappPubkey
            token { ${Token.queryFields()} }
            nativeCurrencyBalance
            totalBalance
            availableBalance
            balanceInOrders
            unsaltedPriceCodeHash
            cursor
        }
    `);
    return result.wallets.map(walletInfoFromApi);
}
