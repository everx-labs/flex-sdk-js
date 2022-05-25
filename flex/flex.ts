import { ClientConfig, TonClient } from "@eversdk/core";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";
import { Log } from "../contracts/helpers";
import { SignerRegistry } from "../contracts/account-ex";

export enum MakeOrderMode {
    IOP = "IOP",
    IOC = "IOC",
    POST = "POST",
}

export type FlexConfig = {
    superRoot?: string,
    globalConfig?: string,
    client?: ClientConfig,
    trader: {
        deploy: {
            eversAll: number,
            eversAuth: number,
            refillWallet: number,
            minRefill: number,
        },
        order: {
            evers: number,
            mode: MakeOrderMode,
        }
    }
}

/** @internal */
export type FlexState = {
    superRoot: SuperRootAccount,
    globalConfig: GlobalConfigAccount,
    flex: FlexAccount,
    userConfig: UserDataConfigAccount,
}


export class Flex {
    config: FlexConfig;
    client: TonClient;
    signers: SignerRegistry;
    /** @internal */
    log = Log.default;

    private _state: FlexState | undefined = undefined;

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
        this.client = new TonClient(config.client);
        this.signers = new SignerRegistry(this.client);
    }

    /** @internal */
    async getState(): Promise<FlexState> {
        if (!this._state) {
            const superRoot = new SuperRootAccount({
                client: this.client,
                address: this.config.superRoot,
            });
            const globalConfigAddress =
                this.config.globalConfig
                ?? (await superRoot.getCurrentGlobalConfig()).output.value0;
            const globalConfig = new GlobalConfigAccount({
                client: this.client,
                address: globalConfigAddress,
            });
            const globalConfigDetails = (await globalConfig.getDetails()).output;
            const flex = new FlexAccount({
                client: this.client,
                address: globalConfigDetails.flex,
            });
            const userConfig = new UserDataConfigAccount({
                client: this.client,
                address: globalConfigDetails.user_cfg,
            });
            this._state = {
                superRoot,
                globalConfig,
                flex,
                userConfig,
            };
        }
        return this._state;
    }

    async query(text: string): Promise<any> {
        const result = await this.client.net.query({
            query: `query {
                flex {
                    ${text}
                }
            }`,
        });
        return result.result.data.flex;
    }


    async close() {
        await this.client.close();
    }

    private static defaultConfig(): FlexConfig {
        return {
            client: TonClient.defaultConfig,
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
        };
    }
}

/** @internal */
export abstract class FlexBoundLazy<O, S> {
    /** @internal */
    flex: Flex;
    /** @internal */
    log: Log;
    /** @internal */
    readonly options: O;

    constructor(options: O, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.log = this.flex.log;
        this.options = options;
    }

    /** @internal */
    async getState(): Promise<S> {
        if (!this._state) {
            this._state = await this.createState(this.options);
        }
        return this._state;
    }

    // To Implement

    protected abstract createState(options: O): Promise<S>;

    // Internals

    private _state: S | undefined = undefined;
}

