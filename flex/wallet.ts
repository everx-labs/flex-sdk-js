import { Flex, FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount, PriceXchgAccount } from "../contracts";
import { Market } from "./market";
import { amountToUnits, priceToUnits } from "../contracts/helpers";
import { Client } from "./client";

export type WalletOptions = {
    flex?: Flex,
    address: string,
    signer: Signer | string,
}

type WalletState = {
    account: FlexWalletAccount,
};

type OrderOptions = {
    market: Market,
    client: Client,
    userId: string,
    amount: number,
    price: number,
};

export class Wallet extends FlexBoundLazy<WalletOptions, WalletState> {

    constructor(options: WalletOptions) {
        super(options);
    }

    protected async createState(options: WalletOptions): Promise<WalletState> {
        return {
            account: new FlexWalletAccount({
                client: this.flex.client,
                address: options.address,
                signer: await this.flex.resolveSigner(options.signer),
            }),
        };
    }


    async makeOrder(options: OrderOptions): Promise<any> {
        const { pair } = await options.market.getState();
        const { flex } = await this.flex.getState();
        const { account } = await this.getState();
        const { account: client } = await options.client.getState();

        const pairDetails = (await pair.runLocalGetDetails()).output;
        const walletDetails = (await account.runLocalGetDetails()).output;
        const sell = walletDetails.root_address === pairDetails.major_tip3cfg.root_address;
        const priceCode = (await pair.runLocalGetPriceXchgCode({ salted: false })).output.value0;
        const priceSalt = (await pair.runLocalGetPriceXchgSalt()).output.value0;
        const amount = amountToUnits(options.amount, pairDetails.major_tip3cfg.decimals);
        const evers = 3e9;
        const orderId = Math.floor(Date.now() / 1000);
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const lend_balance = (await flex.runLocalCalcLendTokensForOrder({
            sell,
            major_tokens: amount,
            price,
        })).output.value0;
        const lend_finish_time = Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

        await account.runMakeOrder({
            _answer_id: 0,
            evers: evers.toString(),
            lend_balance,
            lend_finish_time,
            price_num: price.num,
            unsalted_price_code: priceCode,
            salt: priceSalt,
            args: {
                sell,
                immediate_client: true,
                post_order: true,
                amount,
                client_addr: await client.getAddress(),
                user_id: "0x" + options.userId,
                order_id: orderId,
            },
        });

        const saltedPriceCode = (await pair.runLocalGetPriceXchgCode({ salted: true })).output.value0;
        const priceAddress = (await client.runLocalGetPriceXchgAddress({
            price_num: price.num,
            salted_price_code: saltedPriceCode,
        })).output.value0;
        const priceAccount = new PriceXchgAccount({
            client: this.flex.client,
            log: this.log,
            address: priceAddress,

        });
        const priceDetails = (await priceAccount.runLocalGetDetails()).output;
        const order = (sell
            ? priceDetails.sells
            : priceDetails.buys).find(x => Number(x.order_id) === orderId);
        if (!order) {
            throw Error("Make order failed: order isn't presented in price.");
        }
        return order;
    }
}
