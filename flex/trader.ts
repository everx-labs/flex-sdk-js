import { Market, MarketOptions } from "./market";
import { Client, ClientOptions, WalletInfo, walletInfoFromApi } from "./client";
import { Flex, MakeOrderMode } from "./flex";
import { ProcessingErrorCode, Signer, TvmErrorCode } from "@eversdk/core";
import { amountToUnits, priceToUnits } from "../contracts/helpers";
import { FlexWalletAccount, PriceXchgAccount, WrapperAccount, XchgPairAccount } from "../contracts";
import { Token, TokenInfo } from "./token";
import { PriceXchgGetDetailsOutput } from "../contracts/generated/PriceXchgAccount";

export type TraderOptions = {
    client: Client | ClientOptions | string,
    id: string,
    signer: Signer | string,
};

export type MakeOrderOptions = {
    market: Market | MarketOptions | string,
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
    market: Market | MarketOptions | string,
    price: number,
    orderId: number | string,
    evers?: bigint | number | string,
};

export enum TradeSide {
    SELL = "SELL",
    BUY = "BUY",
}

export enum TradeLiquidity {
    TAKER = "TAKER",
    MAKER = "MAKER",
}

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

export type TradeInfo = {
    /** Flex market (pair) */
    pair: { address: string },

    /** Price of the major token */
    price: number,

    /** Amount of the major tokens */
    amount: number,

    /** Trade time as a unix time stamp */
    time: number,

    /** Determines the type of the later order (taker) in trade. */
    side: TradeSide,

    /**
     * Determines the users position in trade. Maker or taker.
     * Maker is a trade counterparty whose order was earlier.
     *Taker is a counterparty with a later order.
     */
    liquidity: TradeLiquidity,
    /**
     * User fees for this trade. Measured in major tokens.
     * If the user is a maker then fees is a value
     * received by user as a bonus for making order.
     * Note that in this case the fees is a negative value.
     *
     * If the user is a taker then fees is a value that
     * the user pays to the exchange and maker.
     */
    fees: number,


    /** User fees token. */
    feesToken: TokenInfo

    cursor: string
}

export class Trader {
    flex: Flex;
    client: Client;
    id: string;
    signer: Signer | string;

    constructor(options: TraderOptions, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.client = Client.resolve(options.client);
        this.id = options.id;
        this.signer = options.signer;
    }

    /**
     * Creates an Order on Flex Dex Market
     *
     * @param {MakeOrderOptions} options
     * Order parameters
     *
     * @returns OrderInfo
     */
    async makeOrder(options: MakeOrderOptions): Promise<OrderInfo> {
        const defaults = this.flex.config.trader.order;
        const market = Market.resolve(options.market);
        const pair = (await market.getState()).pair;
        const flex = (await this.flex.getState()).flex;
        const client = (await this.client.getState()).account;

        const pairDetails = (await pair.getDetails()).output;
        const wallet = await this.getWallet(market, options.sell);
        const priceCode = (await pair.getPriceXchgCode({ salted: false })).output.value0;
        const priceSalt = (await pair.getPriceXchgSalt()).output.value0;
        const amount = amountToUnits(options.amount, pairDetails.major_tip3cfg.decimals);
        const orderId = options.orderId !== undefined
            ? options.orderId
            : await this.generateRandomOrderId();
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const lend_balance = (await flex.calcLendTokensForOrder({
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
                    client_addr: await client.getAddress(),
                    user_id: "0x" + this.id,
                    order_id: orderId,
                },
            });
            flex.log.debug(`${JSON.stringify(result.transactionTree, undefined, "   ")}\n`);
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

        // const priceDetails = await this.getPriceDetails(pair, price.num);
        // const order = findOrder(orderId, options.sell ? priceDetails.sells : priceDetails.buys);
        // if (!order) {
        //     throw Error("Make order failed: order isn't presented in price.");
        // }


        return {
            side: options.sell ? TradeSide.SELL : TradeSide.BUY,
            pair: {
                address: await pair.getAddress(),
            },
            orderId: orderId.toString(),
            traderId: this.id,
            finishTime: finishTime,
            price: options.price,
            amountProcessed: options.amount,
            amountLeft: 0,
        };
    }

    /**
     * Cancels an Order on Flex Dex Market
     *
     * @param {CancelOrderOptions} options
     * Cancel order parameters
     *
     * @returns void
     */
    async cancelOrder(options: CancelOrderOptions): Promise<void> {
        const market = Market.resolve(options.market);
        const pair = (await market.getState()).pair;
        const pairDetails = (await pair.getDetails()).output;
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const priceDetails = await this.getPriceDetails(pair, price.num);
        let sell: boolean;
        if (findOrder(options.orderId, priceDetails.sells)) {
            sell = true;
        } else if (findOrder(options.orderId, priceDetails.buys)) {
            sell = false;
        } else {
            throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
        }
        const wallet = await this.getWallet(market, sell);
        await wallet.runCancelOrder({
            order_id: options.orderId,
            sell,
            price: priceDetails.address,
            evers: options.evers ?? 3e9,
        });
    }

    /**
     * Gets the list of Trader's open orders.
     *
     * @returns the list of open orders, including expired orders.
     */
    async queryOrders(): Promise<OrderInfo[]> {
        const result = await this.flex.query(`
            userOrders(userId:"0x${this.id}") {
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

    /**
     * Gets the list of Trader's executed trades.
     *
     * @returns the list of executed trades.
     */
    async queryTrades(): Promise<TradeInfo[]> {
        const result = await this.flex.query(`
            userTrades(userId:"0x${this.id}") {
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

    /**
     * Gets the list of Trader's wallets
     * optionally filtered by a token
     *
     * @param {Token | string} token?
     * Optional parameter with Token instance or token root address
     *
     * @returns list of wallets
     */
    async queryWallets(token?: Token | string): Promise<WalletInfo[]> {
        const tokenParam = token === undefined
            ? ""
            : `token: "${typeof token === "string"
                ? token
                : await (await token.getState()).wrapper.getAddress()}",`;
        const result = await this.flex.query(`
            wallets(
                clientAddress: "${this.client.options.address}",
                userId:"0x${this.id}",
                ${tokenParam}
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

    private async getPriceDetails(
        pair: XchgPairAccount,
        priceNum: string,
    ): Promise<PriceXchgGetDetailsOutput & { address: string }> {
        const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
        const address = (await (await this.client.getState()).account.getPriceXchgAddress({
            price_num: priceNum,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        const priceAccount = new PriceXchgAccount({
            client: this.flex.web3,
            log: this.flex.log,
            address,

        });
        const details = (await priceAccount.getDetails()).output;
        return {
            address,
            ...details,
        };
    }

    private async getWallet(market: Market, sell: boolean): Promise<FlexWalletAccount> {
        const clientAddress = await (await this.client.getState()).account.getAddress();
        const pair = (await market.getState()).pair;
        const pairDetails = (await pair.getDetails()).output;
        const token = new WrapperAccount({
            client: this.flex.web3,
            address: sell
                ? pairDetails.major_tip3cfg.root_address
                : pairDetails.minor_tip3cfg.root_address,
            log: this.flex.log,
        });
        const signer = await this.flex.signers.resolve(this.signer);
        const address = (await token.getWalletAddress({
            pubkey: `0x${this.id}`,
            owner: clientAddress,
        })).output.value0;
        return new FlexWalletAccount({
            client: this.flex.web3,
            address,
            signer,
            log: this.flex.log,
        });
    }

    private async generateRandomOrderId(): Promise<string> {
        const result = await this.flex.web3.crypto.generate_random_bytes({
            length: 8,
        });
        return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
    }
}

function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}

function resolveError(original: Error & {
    code?: number,
    data?: {
        local_error?: {
            code: number,
        }
    }
}, context: { O: string, M: string, T: string, W: string }): Error {

    if (original.code !== ProcessingErrorCode.MessageExpired) {
        return original;
    }
    const localCode = original.data?.local_error?.code;
    const {
        O,
        M,
        T,
        W,
    } = context;
    let message: string;
    switch (localCode) {
    case TvmErrorCode.AccountCodeMissing:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.AccountMissing:
        message = `Error occurred while performing operation ${O} on ${M} market. You need to activate ${T} wallet ${W} to trade on this Market.`;
        break;
    case TvmErrorCode.AccountFrozenOrDeleted:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.LowBalance:
        message = `Error occurred while performing ${O} on ${M} Market. You need to top-up ${T} wallet ${W} to pay fees.`;
        break;
    default:
        message = `Error occurred while performing ${O} on ${M}. Ask DEX Support team for help.`;
        break;
    }
    const flexErr = new Error(message);
    (flexErr as any).originalError = original;
    return flexErr;

}
