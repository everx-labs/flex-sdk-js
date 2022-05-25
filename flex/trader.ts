import { Market, MarketOptions } from "./market";
import { Client, ClientOptions, WalletInfo } from "./client";
import { Flex } from "./flex";
import { Signer } from "@eversdk/core";
import { amountToUnits, priceToUnits } from "../contracts/helpers";
import { FlexWalletAccount, PriceXchgAccount, WrapperAccount } from "../contracts";
import { Token, TokenInfo } from "./token";

export type TraderOptions = {
    client: Client | ClientOptions | string,
    id: string,
    signer: Signer | string,
};

type OrderOperationOptions = {
    market: Market | MarketOptions | string,
    sell: boolean,
}

type MakeOrderOptions = OrderOperationOptions & {
    amount: number,
    price: number,
    orderId?: number | string,
    evers?: bigint | number | string,
    finishTime?: number;
};

type CancelOrderOptions = OrderOperationOptions & {
    price: number,
    orderId?: number | string,
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
    orderId: string,
    traderId: string,
    price: number,
    amountProcessed: number,
    amountLeft: number,
    side: TradeSide,
    finishTime: number,
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
        const market = Market.resolve(options.market);
        const pair = await market.getPair();
        const flex = (await this.flex.getState()).flex;
        const client = (await this.client.getState()).account;

        const pairDetails = (await pair.getDetails()).output;
        const wallet = await this.getWallet(options);
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

        await wallet.runMakeOrder({
            _answer_id: 0,
            evers: options.evers ?? 3e9,
            lend_balance,
            lend_finish_time: finishTime,
            price_num: price.num,
            unsalted_price_code: priceCode,
            salt: priceSalt,
            args: {
                sell: options.sell,
                immediate_client: true,
                post_order: true,
                amount,
                client_addr: await client.getAddress(),
                user_id: "0x" + this.id,
                order_id: orderId,
            },
        });

        const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
        const priceAddress = (await client.getPriceXchgAddress({
            price_num: price.num,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        const priceAccount = new PriceXchgAccount({
            client: this.flex.client,
            log: this.flex.log,
            address: priceAddress,

        });
        const priceDetails = (await priceAccount.getDetails()).output;
        const order = (options.sell
            ? priceDetails.sells
            : priceDetails.buys).find(x => Number(x.order_id) === orderId);
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
        const wallet = await this.getWallet(options);
        const pairDetails = await market.getPairDetails();
        const pair = await market.getPair();
        const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const priceAddress = (await (await this.client.getState()).account.getPriceXchgAddress({
            price_num: price.num,
            salted_price_code: saltedPriceCode,
        })).output.value0;

        await wallet.runCancelOrder({
            order_id: options.orderId,
            sell: options.sell,
            price: priceAddress,
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
            : `token: "${typeof token === "string" ? token : await token.getAddress()}",`;
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
        return result.wallets.map(Client.mapWalletInfo);
    }

    private async getWallet(options: OrderOperationOptions): Promise<FlexWalletAccount> {
        const market = Market.resolve(options.market);
        const clientAddress = await this.client.getAddress();
        const pairDetails = await market.getPairDetails();
        const token = new WrapperAccount({
            client: this.flex.client,
            address: options.sell
                ? pairDetails.major_tip3cfg.root_address
                : pairDetails.minor_tip3cfg.root_address,
            log: this.flex.log,
        });
        const signer = await this.flex.resolveSigner(this.signer);
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

