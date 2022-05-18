import { Flex, FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../contracts";
import { Market } from "./market";

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
    clientAddress: string,
    userId: string,
    sell: boolean,
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

    async makeOrder(options: OrderOptions) {
        const { pair } = await options.market.getState();
        const { flex } = await this.flex.getState();
        const { account } = await this.getState();

        const pairDetails = (await pair.runLocalGetDetails()).output;
        const price_denom = Number(pairDetails.price_denum);
        const price_num = Math.floor(options.price * price_denom);
        const xchgPriceCode = (await pair.runLocalGetPriceXchgCode({ salted: false })).output.value0;
        const priceSalt = (await pair.runLocalGetPriceXchgSalt()).output.value0;
        const amount = options.amount * Math.pow(10, pairDetails.major_tip3cfg.decimals);
        const evers = 3e9;
        const order_id = Math.floor(Date.now() / 1000);// unique value for the user (u32)
        const price = {
            num: price_num.toString(),
            denum: price_denom.toString(),
        };
        const lend_balance = (await flex.runLocalCalcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount.toString(),
            price,
        })).output.value0;
        const lend_finish_time = Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

        await account.runMakeOrder({
            _answer_id: 0,
            evers: evers.toString(),
            lend_balance,
            lend_finish_time,
            price_num: price_num.toString(),
            unsalted_price_code: xchgPriceCode,
            salt: priceSalt,
            args: {
                sell: options.sell,
                immediate_client: true,
                post_order: true,
                amount: amount.toString(),
                client_addr: options.clientAddress,
                user_id: "0x" + options.userId,
                order_id: order_id.toString(),
            },
        });
    }

}
