import { defaultConfig, FlexConfig } from "./config";
import { Signer, TonClient } from "@eversdk/core";
import { AccountOptionsEx, SignerRegistry } from "../contracts/account-ex";
import { Log } from "../contracts/helpers";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";

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
            ...defaultConfig(),
            ...config,
        };
    }

    static get config(): FlexConfig {
        if (!this._config) {
            this._config = defaultConfig();
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
        accountClass: new (options: { client: TonClient, address?: string, signer?: Signer, log?: Log }) => T,
        options: string | AccountOptionsEx,
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

}
