import { Market, MarketOptions } from "./market";
import { Client, ClientOptions, WalletInfo, walletInfoFromApi } from "./client";
import { Flex, MakeOrderMode } from "./flex";
import { Signer } from "@eversdk/core";
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
    /// Optional. May be assigned to some GUID if needed
    orderId: string,
    /// Trader ID
    traderId: string,
    /// Price of Major token
    price: number,
    /// Amount that has been processed
    amountProcessed: number,
    /// Amount left in the order
    amountLeft: number,
    /// Trader's side in the order
    side: TradeSide,
    /// Order expiration time
    finishTime: number,
    /// Market of the order
    pair: {
        address: string,
    }
}

export type TradeInfo = {
    /// Flex market (pair)
    pair: { address: string },

    /// Price of the major token
    price: number,

    /// Amount of the major tokens
    amount: number,

    /// Trade time as a unix time stamp
    time: number,

    /// Determines the type of the later order (taker) in trade.
    side: TradeSide,

    /// Determines the users position in trade. Maker or taker.
    /// Maker is a trade counterparty whose order was earlier.
    /// Taker is a counterparty with a later order.
    liquidity: TradeLiquidity,

    /// User fees for this trade. Measured in major tokens.
    ///
    /// If the user is a maker then fees is a value
    /// received by user as a bonus for making order.
    /// Note that in this case the fees is a negative value.
    ///
    /// If the user is a taker then fees is a value that
    /// the user pays to the exchange and maker.
    fees: number,


    /// User fees token.
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
            : Math.floor(Date.now() / 1000);
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const lend_balance = (await flex.calcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount,
            price,
        })).output.value0;
        const finishTime = options.finishTime ?? Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

        const mode = options.mode ?? defaults.mode;
        await wallet.runMakeOrder({
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

        const priceDetails = await this.getPriceDetails(pair, price.num);
        const order = findOrder(orderId, options.sell ? priceDetails.sells : priceDetails.buys);
        if (!order) {
            throw Error("Make order failed: order isn't presented in price.");
        }
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
            client: this.flex.client,
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
            client: this.flex.client,
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
            client: this.flex.client,
            address,
            signer,
            log: this.flex.log,
        });
    }
}

function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}
