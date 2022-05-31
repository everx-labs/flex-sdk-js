import { Flex, MakeOrderMode } from "../flex";
import { TradeSide } from "./trade";
import { amountToUnits, priceToUnits } from "../../contracts/helpers";
import { Signer } from "@eversdk/core";
import {
    XchgPairAccount,
} from "../../contracts";
import {
    findOrder,
    generateRandomOrderId,
    getPriceDetails,
    getWallet,
    resolveError,
} from "./internals";

export type MakeOrderOptions = {
    market: string,
    sell: boolean,
    /// Amount of Major token to buy or sell
    amount: number,
    /// Price of Major token
    price: number,
    /// Optional, GUID may be used to process on Client side if needed
    orderId?: number | string,
    /// Amount of native currency attached for processing fees
    evers?: bigint | number | string,
    /// Order expiration time
    finishTime?: number;
    mode?: MakeOrderMode,
};

export type CancelOrderOptions = {
    market: string,
    price: number,
    orderId: number | string,
    evers?: bigint | number | string,
};

export type OrderInfo = {
    /** May be assigned to some GUID*/
    orderId: string,
    /** Trader ID */
    traderId: string,
    /** Price of Major token */
    price: number,
    /** Amount that has been processed */
    amountProcessed: number,
    /** Amount left in the order*/
    amountLeft: number,
    /** Trader's side in the order*/
    side: TradeSide,
    /** Order expiration time */
    finishTime: number,
    /** Market of the order */
    pair: {
        address: string,
    }
}

/** @internal */
export async function makeOrder(options: MakeOrderOptions & {
    flex: Flex,
    client: string;
    trader: string;
    traderSigner: Signer | string;
}): Promise<{
    orderId: string,
    transactionId: string,
}> {
    const flex = options.flex;
    const defaults = flex.config.trader.order;
    const pair = await flex.getAccount(XchgPairAccount, options.market);
    const flexAccount = await flex.getFlexAccount();

    const pairDetails = (await pair.getDetails()).output;
    const wallet = await getWallet({
        flex: options.flex,
        market: options.market,
        sell: options.sell,
        client: options.client,
        trader: options.trader,
        traderSigner: options.traderSigner,
    });
    const priceCode = (await pair.getPriceXchgCode({ salted: false })).output.value0;
    const priceSalt = (await pair.getPriceXchgSalt()).output.value0;
    const amount = amountToUnits(options.amount, pairDetails.major_tip3cfg.decimals);
    const orderId = options.orderId !== undefined
        ? options.orderId
        : await generateRandomOrderId(flex.web3);
    const price = priceToUnits(options.price, pairDetails.price_denum);
    const lend_balance = (await flexAccount.calcLendTokensForOrder({
        sell: options.sell,
        major_tokens: amount,
        price,
    })).output.value0;
    const finishTime = options.finishTime ?? Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

    const minAmount = Number(pairDetails.min_amount) / Math.pow(
        10,
        Number(pairDetails.major_tip3cfg.decimals),
    );
    if (options.amount < minAmount) {
        throw new Error(`Specified amount ${options.amount} is less that market min amount ${minAmount}`);
    }
    const mode = options.mode ?? defaults.mode;
    try {
        const result = await wallet.runMakeOrder({
            _answer_id: 0,
            evers: options.evers ?? defaults.evers,
            lend_balance,
            lend_finish_time: finishTime,
            price_num: price.num,
            unsalted_price_code: priceCode,
            salt: priceSalt,
            args: {
                sell: options.sell,
                immediate_client: mode === MakeOrderMode.IOP || mode === MakeOrderMode.IOC,
                post_order: mode === MakeOrderMode.IOP || mode === MakeOrderMode.POST,
                amount,
                client_addr: options.client,
                user_id: "0x" + options.trader,
                order_id: orderId,
            },
        });
        flex.log.debug(`${JSON.stringify(result.transactionTree, undefined, "   ")}\n`);
        return {
            orderId: orderId.toString(),
            transactionId: result.transaction.id,
        };
    } catch (err: any) {
        throw resolveError(err, {
            O: options.sell ? "sell" : "buy",
            M: `${pairDetails.major_tip3cfg.symbol}/${pairDetails.minor_tip3cfg.symbol}`,
            T: options.sell
                ? pairDetails.major_tip3cfg.symbol
                : pairDetails.minor_tip3cfg.symbol,
            W: await wallet.getAddress(),
        });
    }
}

/** @internal */
export async function cancelOrder(options: CancelOrderOptions & {
    flex: Flex,
    client: string,
    traderId: string,
    traderSigner: Signer | string,
}): Promise<void> {
    const pair = await options.flex.getAccount(XchgPairAccount, options.market);
    const pairDetails = (await pair.getDetails()).output;
    const price = priceToUnits(options.price, pairDetails.price_denum);
    const priceDetails = await getPriceDetails(options.flex, options.client, pair, price.num);
    let sell: boolean;
    if (findOrder(options.orderId, priceDetails.sells)) {
        sell = true;
    } else if (findOrder(options.orderId, priceDetails.buys)) {
        sell = false;
    } else {
        throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
    }
    const wallet = await getWallet({
        flex: options.flex,
        market: options.market,
        sell,
        client: options.client,
        trader: options.traderId,
        traderSigner: options.traderSigner,
    });
    await wallet.runCancelOrder({
        order_id: options.orderId,
        sell,
        price: priceDetails.address,
        evers: options.evers ?? 3e9,
    });
}

