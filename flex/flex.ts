import { defaultConfig, FlexConfig } from "./config";
import {
    FlexAccount,
    FlexClientAccount,
    FlexWalletAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    Tip31RootAccount,
    Tip31WalletAccount,
    TONTokenWalletAccount,
    UserDataConfigAccount,
} from "../contracts";
import { Evr } from "./web3";
import { queryWallets } from "./trader/query";
import { WalletInfo } from "./client";
import { decimalFromNumAndDenomAsPowerOf10 } from "./web3/utils";

export class Flex {
    /**
     * Configuration of Flex Dex
     */
    config: FlexConfig;
    /**
     * Dex Config
     */
    evr: Evr;

    private cachedFlexClients = new Map<string, FlexClientAccount>();
    private cachedTraderWallets = new Map<string, WalletInfo[]>();

    constructor(config: Partial<FlexConfig>) {
        this.config = {
            ...defaultConfig(),
            ...config,
        };
        this.evr = new Evr(config.evr);
    }

    /** @internal */
    async getSuperRootAccount(): Promise<SuperRootAccount> {
        return this.evr.accounts.get(SuperRootAccount, this.config.superRoot);
    }

    /** @internal */
    async getGlobalConfigAccount(): Promise<GlobalConfigAccount> {
        const globalConfigAddress =
            this.config.globalConfig ??
            (await (await this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
        return await this.evr.accounts.get(GlobalConfigAccount, globalConfigAddress);
    }

    /** @internal */
    async getFlexAccount(): Promise<FlexAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.evr.accounts.get(FlexAccount, globalConfigDetails.flex);
    }

    /** @internal */
    async getUserConfigAccount(): Promise<UserDataConfigAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.evr.accounts.get(UserDataConfigAccount, globalConfigDetails.user_cfg);
    }

    /** @internal */
    async getCachedFlexClient(client: string): Promise<FlexClientAccount> {
        const existing = this.cachedFlexClients.get(client);
        if (existing) {
            return existing;
        }
        const account = await this.evr.accounts.get(FlexClientAccount, {
            address: client,
            useCachedState: true,
        });
        this.cachedFlexClients.set(client, account);
        return account;
    }

    /** @internal */
    async getCachedTraderWallets(client: string, id: string) {
        const key = `${client}/${id}`;
        const existing = this.cachedTraderWallets.get(key);
        if (existing) {
            return existing;
        }
        const wallets = await queryWallets(this, {
            clientAddress: client,
            traderId: id,
        });
        this.cachedTraderWallets.set(key, wallets);
        return wallets;
    }

    async query(text: string): Promise<any> {
        const result = await this.evr.sdk.net.query({
            query: `query {
                flex {
                    ${text}
                }
            }`,
        });
        return result.result.data.flex;
    }

    /**
     * Closes all Node.js tasks that were initiated and consumed by web3 instance
     * Use this function in the closing part of your application
     * otherwise the node.js process will not stop.
     */
    async close() {
        await this.evr.close();
    }

    async getTip3TokenBalance(account: Tip31WalletAccount): Promise<string> {
        const balance = (await account.balance({ answerId: 0 })).output.value0;
        const rootAddress = (await account.root({ answerId: 0 })).output.value0;
        const root = await this.evr.accounts.get(Tip31RootAccount, rootAddress);
        const decimals = (await root.decimals({ answerId: 0 })).output.value0;
        return decimalFromNumAndDenomAsPowerOf10(balance, decimals);
    }

    async getTokenBalance(account: TONTokenWalletAccount): Promise<string> {
        const details = (await account.getDetails()).output;
        return decimalFromNumAndDenomAsPowerOf10(details.balance, details.decimals);
    }

    async getFlexTokenBalance(account: FlexWalletAccount): Promise<string> {
        const details = (await account.getDetails()).output;
        return decimalFromNumAndDenomAsPowerOf10(details.balance, details.decimals);
    }
}
