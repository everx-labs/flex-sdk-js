import { Flex, FlexBoundLazy } from "./flex";
import {
    FlexClientAccount,
    UserDataConfigAccount,
} from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
import { AccountEx } from "../contracts/account-ex";
import { Token, TokenInfo } from "./token";
import { Wallet } from "./wallet";
import { MarketOptions } from "./market";

export type ClientOptions = {
    address: string,
    signer?: Signer | string,
}

export type ClientDeployOptions = {
    everWallet: EverWallet,
    signer: Signer | string,
}

export type TraderDeployOptions = {
    id: string,
    name: string,
    pubkey: string,
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
}

export type WalletDeployOptions = {
    token: Token,
    signer?: Signer | string,
}

type ClientState = {
    account: FlexClientAccount,
}

export type WalletInfo = {
    /// Flex wallet address
    address: string,

    /// Flex client account address
    clientAddress: string,

    /// User id the account owner
    traderId: string,

    /// Dapp public key
    traderPublicKey: string

    /// Wallet token
    token: TokenInfo,

    /// Balance of native currency of the wallet in EVERs
    nativeCurrencyBalance: number,

    /// Token balance of the wallet in tokens
    totalBalance: number,

    /// Available balance in tokens
    availableBalance: number,

    /// Balance in orders
    balanceInOrders: number,

    /// Unsalted price code hash
    unsaltedPriceCodeHash: string,

    cursor: string,
}

export class Client extends FlexBoundLazy<ClientOptions, ClientState> {

    /** @internal */
    static resolve(from: Client | MarketOptions | string, flex?: Flex): Client {
        return from instanceof Client
            ? from
            : new Client(typeof from === "string" ? { address: from } : from, flex);
    }

    static async deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client> {
        const { everWallet } = options;
        const flex = bindFlex ?? Flex.default;
        const signer = await flex.signers.resolve(options.signer);
        const publicKey = await flex.signers.publicKey(signer);
        const { userConfig } = await flex.getState();
        const pubkey = `0x${publicKey}`;
        const address = (await userConfig.getFlexClientAddr({
            pubkey,
        })).output.value0;

        const isActive = await AccountEx.isActive(address, flex.web3);
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

    async deployTrader(options: TraderDeployOptions): Promise<void> {
        const { account: clientAccount } = await this.getState();
        const address = (await clientAccount.getUserIdIndex({
            user_id: options.id,
        })).output.value0;
        if (!(await AccountEx.isActive(address, this.flex.web3))) {
            const defaults = this.flex.config.trader.deploy;
            await clientAccount.runDeployIndex({
                user_id: options.id,
                lend_pubkey: options.pubkey,
                name: options.name,
                evers_all: options.eversAll ?? defaults.eversAll,
                evers_to_auth_idx: options.eversAuth ?? defaults.eversAuth,
                refill_wallet: options.refillWallet ?? defaults.refillWallet,
                min_refill: options.minRefill ?? defaults.minRefill,
            });
        }
    }

    async deployWallet(options: WalletDeployOptions, useFlex?: Flex): Promise<Wallet> {
        const flex = useFlex ?? Flex.default;
        const signer = await flex.signers.resolve(options.signer);
        const publicKey = await flex.signers.publicKey(signer);
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
                client: this.flex.web3,
                address: options.address,
                signer: await this.flex.signers.resolve(options.signer),
            }),
        };
    }

    async queryWallets(): Promise<WalletInfo[]> {
        const result = await this.flex.query(`
            wallets(
                clientAddress: "${this.options.address}"
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
}

/** @internal */
export function walletInfoFromApi(result: any): WalletInfo {
    return {
        address: result.address,
        clientAddress: result.clientAddress,
        traderId: result.userId,
        traderPublicKey: result.dappPubkey,
        token: result.token,
        nativeCurrencyBalance: result.nativeCurrencyBalance,
        totalBalance: result.totalBalance,
        availableBalance: result.availableBalance,
        balanceInOrders: result.balanceInOrders,
        unsaltedPriceCodeHash: result.unsaltedPriceCodeHash,
        cursor: result.cursor,
    };
}
