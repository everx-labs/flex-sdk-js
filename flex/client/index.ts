import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import { EverWallet } from "../ever-wallet";
import { AccountEx } from "../../contracts/account-ex";
import { Token, TokenInfo } from "../token";
import { deployClient } from "./deploy-client";
import { FlexClientAccount } from "../../contracts";

export type TraderDeployOptions = {
    id: string,
    name: string,
    pubkey: string,
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
}

// export type WalletDeployOptions = {
//     token: Token,
//     signer?: Signer | string,
// }

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

export type ClientOptions = {
    address: string,
    signer?: Signer | string,
}

export type ClientDeployOptions = {
    everWallet: EverWallet,
    signer: Signer | string,
}

export class Client {
    flex: Flex;
    address: string;
    signer?: Signer | string;

    constructor(options: ClientOptions, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.address = options.address;
        this.signer = options.signer;
    }

    static async deploy(options: ClientDeployOptions, flex?: Flex): Promise<Client> {
        return new Client(await deployClient({
            ...options,
            flex,
        }), flex);
    }

    async deployTrader(options: TraderDeployOptions): Promise<void> {
        const clientAccount = await this.flex.getAccount(FlexClientAccount, this);
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

    // async deployWallet(options: WalletDeployOptions): Promise<Wallet> {
    //     const signer = await flex.signers.resolve(options.signer);
    //     const publicKey = await flex.signers.publicKey(signer);
    //     const { account: clientAccount } = await this.getState();
    //     const clientAddress = await clientAccount.getAddress();
    //     // const payload = await clientAccount.runLocalGetPayloadForDeployInternalWallet({
    //     //     owner_pubkey: `0x${publicKey}`,
    //     //     owner_addr: clientAddress,
    //     //     evers: 15e9,
    //     //     keep_evers: 12e9,
    //     // });
    //
    //     const { wrapper } = await options.token.getState();
    //     const address = (await wrapper.getWalletAddress({
    //         pubkey: `0x${publicKey}`,
    //         owner: clientAddress,
    //     })).output.value0;
    //     // await wrapper.transfer(ton, flx_wallet,
    //     //     flx_wallet.addr, flx_wrapper_wallet, 500e9, 22e9, 0, payload,
    //     // );
    //     return new Wallet({
    //         address,
    //         signer,
    //     }, flex);
    // }
    //

    async queryWallets(): Promise<WalletInfo[]> {
        const result = await this.flex.query(`
            wallets(
                clientAddress: "${this.address}"
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
