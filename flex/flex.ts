import { ClientConfig, Signer, signerKeys, TonClient } from "@eversdk/core";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";

export type FlexConfig = {
    superRoot?: string,
    globalConfig?: string,
    client?: ClientConfig,
}

export type FlexState = {
    superRoot: SuperRootAccount,
    globalConfig: GlobalConfigAccount,
    flex: FlexAccount,
    userConfig: UserDataConfigAccount,
}

export class Flex {
    config: FlexConfig;
    client: TonClient;

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

    static set config(config: FlexConfig) {
        this._config = config;
    }

    static get config(): FlexConfig {
        if (!this._config) {
            this._config = {
                client: TonClient.defaultConfig,
            };
        }
        return this._config;
    }

    static resolve(options: FlexBoundOptions): Flex {
        const source = options.flex;
        if (source) {
            return source instanceof Flex ? source : (source.flex ?? Flex.default);
        }
        return Flex.default;
    }

    constructor(config: FlexConfig) {
        this.config = config;
        this.client = new TonClient(config.client);
    }

    async resolveSigner(signer: Signer | string): Promise<Signer> {
        if (typeof signer === "string") {
            const keys = await this.client.crypto.nacl_sign_keypair_from_secret_key({
                secret: signer,
            });
            keys.secret = keys.secret.substring(0, 64);
            return signerKeys(keys);
        } else {
            return signer;
        }
    }

    async signerPublicKey(signer: Signer): Promise<string> {
        switch (signer.type) {
        case "External":
            return signer.public_key;
        case "Keys":
            return signer.keys.public;
        case "SigningBox":
            return (await this.client.crypto.signing_box_get_public_key({ handle: signer.handle })).pubkey;
        default:
            return "";
        }
    }

    async getState(): Promise<FlexState> {
        if (!this._state) {
            const superRoot = new SuperRootAccount({
                client: this.client,
                address: this.config.superRoot,
            });
            const globalConfigAddress =
                this.config.globalConfig
                ?? (await superRoot.runLocalGetCurrentGlobalConfig()).output.value0;
            const globalConfig = new GlobalConfigAccount({
                client: this.client,
                address: globalConfigAddress,
            });
            const globalConfigDetails = (await globalConfig.runLocalGetDetails()).output;
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

    async close() {
        await this.client.close();
    }
}

export type FlexBoundOptions = {
    flex?: Flex | { flex?: Flex }
}


export abstract class FlexBoundLazy<O extends FlexBoundOptions, S> {
    public flex: Flex;

    async getState(): Promise<S> {
        if (!this._state) {
            this._state = await this.createState(this._options);
        }
        return this._state;
    }

    // To Implement

    protected constructor(options: O) {
        this.flex = Flex.resolve(options);
        this._options = options;
    }

    protected abstract createState(options: O): Promise<S>;

    // Internals

    private readonly _options: O;
    private _state: S | undefined = undefined;
}
