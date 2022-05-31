import { ClientConfig, Signer, TonClient } from "@eversdk/core";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";
import { Log } from "../contracts/helpers";
import { SignerRegistry } from "../contracts/account-ex";

export enum MakeOrderMode {
    /**
     * Immediate-or-post
     *
     * Simple order that will immediately execute (partially or fully)
     * and place the left amount into the orderbook
     */
    IOP = "IOP",
    /**
     * Immediate-or-cancel
     *
     * Order that will immediately execute (partially or fully)
     * and return the left amount back to the Trader wallet
     */
    IOC = "IOC",
    /**
     * Post order
     *
     * Order that will be created only if there is no liquidity with this
     * price on the opposite side on the Market
     */
    POST = "POST",
}

export type FlexConfig = {
    superRoot: string,
    globalConfig?: string,
    web3?: ClientConfig,
    trader: {
        deploy: {
            /**
             * Full payment for Trader creation.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 40e9.
             */
            eversAll: number,
            /**
             * Payment for Auth Contract deploy. Included into eversAll.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 1e9.
             */
            eversAuth: number,
            /**
             * When trader receives tokens the sum (refillWallet-wallet.eversBalance)
             * is additionally sent to this wallet from `userIdIndex` contract.
             * Included into eversAll.
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 10e9.
             */
            refillWallet: number,
            /**
             * Minimal amount of EVERs the wallet receives from `userIdIndex`
             * contract when a trade happens (when the wallet receives tokens)
             * if the wallet's balance > refillWallet.
             * Included into eversAll
             *
             * @remarks
             * Must be specified in nanotokens, i.e. 1e9. Default value is 0.1e9.
             */
            minRefill: number,
        },
        order: {
            evers: number,
            mode: MakeOrderMode,
        }
    }
}

export class Flex {
    /**
     * Configuration of Flex Dex
     */
    config: FlexConfig;
    /**
     * Web3 instance
     */
    web3: TonClient;
    /**
     * Secrets used to sign messages sent to Flex Dex
     *
     */
    signers: SignerRegistry;

    /** @internal */
    log = Log.default;

    private static _config: FlexConfig | undefined = undefined;
    private static _default: Flex | undefined = undefined;

    static set default(flex: Flex) {
        this._default = flex;
    }

    static get default(): Flex {
        if (!this._default) {
            this._default = new Flex(this.config);
        }
        return this._default;
    }

    static set config(config: Partial<FlexConfig>) {
        this._config = {
            ...Flex.defaultConfig(),
            ...config,
        };
    }

    static get config(): FlexConfig {
        if (!this._config) {
            this._config = Flex.defaultConfig();
        }
        return this._config;
    }

    constructor(config: FlexConfig) {
        this.config = config;
        this.web3 = new TonClient(config.web3);
        this.signers = new SignerRegistry(this.web3);
    }

    /** @internal */
    async getAccount<T>(
        accountClass: new (options: { address: string, client: TonClient, signer?: Signer, log?: Log }) => T,
        options: string | {
            address: string,
            signer?: Signer | string,
        },
    ): Promise<T> {
        const address = typeof options === "string" ? options : options.address;
        const signer = typeof options === "string" ? undefined : options.signer;
        return new accountClass({
            address,
            client: this.web3,
            log: this.log,
            signer: await this.signers.resolve(signer),
        });
    }

    /** @internal */
    async getSuperRootAccount(): Promise<SuperRootAccount> {
        return this.getAccount(SuperRootAccount, this.config.superRoot);
    }

    /** @internal */
    async getGlobalConfigAccount(): Promise<GlobalConfigAccount> {
        const globalConfigAddress =
            this.config.globalConfig
            ?? (await (await this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
        return await this.getAccount(GlobalConfigAccount, globalConfigAddress);
    }

    /** @internal */
    async getFlexAccount(): Promise<FlexAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.getAccount(FlexAccount, globalConfigDetails.flex);
    }

    /** @internal */
    async getUserConfigAccount(): Promise<UserDataConfigAccount> {
        const globalConfig = await this.getGlobalConfigAccount();
        const globalConfigDetails = (await globalConfig.getDetails()).output;
        return await this.getAccount(UserDataConfigAccount, globalConfigDetails.user_cfg);
    }

    async query(text: string): Promise<any> {
        const result = await this.web3.net.query({
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
        await this.web3.close();
    }

    private static defaultConfig(): FlexConfig {
        return {
            web3: TonClient.defaultConfig,
            trader: {
                deploy: {
                    eversAll: 40e9,
                    eversAuth: 1e9,
                    refillWallet: 10e9,
                    minRefill: 0.1e9,
                },
                order: {
                    evers: 3e9,
                    mode: MakeOrderMode.IOP,
                },
            },
            superRoot: "",
        };
    }
}
