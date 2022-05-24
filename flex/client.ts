import { Flex, FlexBoundLazy } from "./flex";
import {
    FlexClientAccount,
    FlexWalletAccount,
    PriceXchgAccount,
    UserDataConfigAccount,
    UserIdIndexAccount,
    WrapperAccount,
} from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
import { AccountEx } from "../contracts/account-ex";
import { Token } from "./token";
import { Wallet } from "./wallet";
import { amountToUnits, priceToUnits } from "../contracts/helpers";
import { Market } from "./market";

export type ClientOptions = {
    address: string,
    signer?: Signer | string,
}

export type ClientDeployOptions = {
    everWallet: EverWallet,
    signer: Signer | string,
}

export type UserDeployOptions = {
    id: number,
    name: string,
    signer: Signer | string,
    refillWallet: string | number | bigint;
    minRefill: string | number | bigint;
    eversAuth: string | number | bigint;
    eversAll: string | number | bigint;
}

export type WalletDeployOptions = {
    token: Token,
    signer?: Signer | string,
}

type TradingOptions = {
    market: Market,
    sell: boolean,
    walletSigner: Signer | string,
    userId: string,
}

type OrderOptions = TradingOptions & {
    amount: number,
    price: number,
    orderId?: number | string,
    evers?: bigint | number | string,
    finishTime?: number;
};

type CancelOrderOptions = TradingOptions & {
    price: number,
    orderId?: number | string,
    evers?: bigint | number | string,
};

export type OrderInfo = {
    order_id: string,
    [name: string]: unknown
}


type ClientState = {
    account: FlexClientAccount,
}

export class Client extends FlexBoundLazy<ClientOptions, ClientState> {

    static async deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client> {
        const { everWallet } = options;
        const flex = bindFlex ?? Flex.default;
        const signer = await flex.resolveSigner(options.signer);
        const publicKey = await flex.signerPublicKey(signer);
        const { userConfig } = await flex.getState();
        const pubkey = `0x${publicKey}`;
        const address = (await userConfig.getFlexClientAddr({
            pubkey,
        })).output.value0;

        const isActive = await AccountEx.isActive(address, flex.client);
        if (!isActive) {
            await everWallet.transfer({
                dest: await userConfig.getAddress(),
                value: 55e9,
                messageBody: {
                    abi: UserDataConfigAccount.package.abi,
                    fn: "deployFlexClient",
                    params: {
                        pubkey,
                        deploy_evers: 50e9,
                    },
                },
            });
        }
        return new Client({
            address,
            signer,
        }, flex);
    }

    async deployUser(options: UserDeployOptions): Promise<UserIdIndexAccount> {
        const signer = await this.flex.resolveSigner(options.signer);
        const publicKey = `0x${await this.flex.signerPublicKey(signer)}`;
        const { account: clientAccount } = await this.getState();
        const address = (await clientAccount.getUserIdIndex({
            user_id: options.id,
        })).output.value0;
        if (!(await AccountEx.isActive(address, this.flex.client))) {
            await clientAccount.runDeployIndex({
                user_id: options.id,
                lend_pubkey: publicKey,
                name: options.name,
                evers_all: options.eversAll,
                evers_to_auth_idx: options.eversAuth,
                min_refill: options.minRefill,
                refill_wallet: options.refillWallet,
            });
        }
        return new UserIdIndexAccount({
            address,
            signer,
            log: this.log,
        });
    }

    async deployWallet(options: WalletDeployOptions, useFlex?: Flex): Promise<Wallet> {
        const flex = useFlex ?? Flex.default;
        const signer = await flex.resolveSigner(options.signer);
        const publicKey = await flex.signerPublicKey(signer);
        const { account: clientAccount } = await this.getState();
        const clientAddress = await clientAccount.getAddress();
        // const payload = await clientAccount.runLocalGetPayloadForDeployInternalWallet({
        //     owner_pubkey: `0x${publicKey}`,
        //     owner_addr: clientAddress,
        //     evers: 15e9,
        //     keep_evers: 12e9,
        // });

        const { wrapper } = await options.token.getState();
        const address = (await wrapper.getWalletAddress({
            pubkey: `0x${publicKey}`,
            owner: clientAddress,
        })).output.value0;
        // await wrapper.transfer(ton, flx_wallet,
        //     flx_wallet.addr, flx_wrapper_wallet, 500e9, 22e9, 0, payload,
        // );
        return new Wallet({
            address,
            signer,
        }, flex);
    }

    protected async createState(options: ClientOptions): Promise<ClientState> {
        return {
            account: new FlexClientAccount({
                client: this.flex.client,
                address: options.address,
                signer: await this.flex.resolveSigner(options.signer),
            }),
        };
    }

    async getDetails(): Promise<any> {
        return (await (await this.getState()).account.getDetails()).output;
    }

    async getAddress(): Promise<string> {
        return await (await this.getState()).account.getAddress();
    }

    private async getTradingWallet(options: TradingOptions): Promise<FlexWalletAccount> {
        const clientAddress = await this.getAddress();
        const pairDetails = await options.market.getPairDetails();
        const token = new WrapperAccount({
            client: this.flex.client,
            address: options.sell
                ? pairDetails.major_tip3cfg.root_address
                : pairDetails.minor_tip3cfg.root_address,
            log: this.log,
        });
        const walletSigner = await this.flex.resolveSigner(options.walletSigner);
        const walletAddress = (await token.getWalletAddress({
            pubkey: `0x${options.userId}`,
            owner: clientAddress,
        })).output.value0;
        return new FlexWalletAccount({
            client: this.flex.client,
            address: walletAddress,
            signer: walletSigner,
            log: this.log,
        });
    }

    async makeOrder(options: OrderOptions): Promise<OrderInfo> {
        const pair = await options.market.getPair();
        const flex = (await this.flex.getState()).flex;
        const client = (await this.getState()).account;

        const pairDetails = (await pair.getDetails()).output;
        const wallet = await this.getTradingWallet(options);
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
        const lend_finish_time = options.finishTime ?? Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

        await wallet.runMakeOrder({
            _answer_id: 0,
            evers: options.evers ?? 3e9,
            lend_balance,
            lend_finish_time,
            price_num: price.num,
            unsalted_price_code: priceCode,
            salt: priceSalt,
            args: {
                sell: options.sell,
                immediate_client: true,
                post_order: true,
                amount,
                client_addr: await client.getAddress(),
                user_id: "0x" + options.userId,
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
            log: this.log,
            address: priceAddress,

        });
        const priceDetails = (await priceAccount.getDetails()).output;
        const order = (options.sell
            ? priceDetails.sells
            : priceDetails.buys).find(x => Number(x.order_id) === orderId);
        if (!order) {
            throw Error("Make order failed: order isn't presented in price.");
        }
        return order;
    }

    async cancelOrder(options: CancelOrderOptions) {
        const wallet = await this.getTradingWallet(options);
        const pairDetails = await options.market.getPairDetails();
        const pair = await options.market.getPair();
        const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
        const price = priceToUnits(options.price, pairDetails.price_denum);
        const priceAddress = (await (await this.getState()).account.getPriceXchgAddress({
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
}
