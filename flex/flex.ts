import { ClientConfig, KeyPair, Signer, signerKeys, signerNone, TonClient } from "@eversdk/core";
import {
    FlexAccount,
    GlobalConfigAccount,
    SuperRootAccount,
    UserDataConfigAccount,
} from "../contracts";
import path from "path";
import os from "os";
import fs from "fs";
import { Log } from "../contracts/helpers";

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
    signers = new Map<string, Signer>();
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

    constructor(config: FlexConfig) {
        this.config = config;
        this.client = new TonClient(config.client);
    }

    async resolveSigner(signer: Signer | string | undefined): Promise<Signer> {
        if (signer === undefined) {
            return signerNone();
        }
        if (typeof signer === "string") {
            try {
                return await this.signerFromSecret(signer);
            } catch {
                return await this.signerFromName(signer);
            }
        }
        return signer;

    }

    async signerFromSecret(secret: string): Promise<Signer> {
        const keys = await this.client.crypto.nacl_sign_keypair_from_secret_key({
            secret,
        });
        keys.secret = keys.secret.substring(0, 64);
        return signerKeys(keys);
    }

    async signerFromName(name: string): Promise<Signer> {
        const signer = this.signers.get(name);
        if (signer) {
            return signer;
        }
        const everdevSignerRegistryPath = path.resolve(
            os.homedir(),
            ".everdev",
            "signer",
            "registry.json",
        );
        if (fs.existsSync(everdevSignerRegistryPath)) {
            const registry = JSON.parse(fs.readFileSync(
                everdevSignerRegistryPath,
                "utf8",
            )) as EverdevSignerRegistry;
            const item = registry.items.find(x => x.name === name);
            if (item) {
                return signerKeys(item.keys);
            }
        }
        throw new Error(
            `Invalid signer: "${name}".
             You must use one of: \`secret key\`, \`everdev\` signer name or \`Flex.signers\` name.`,
        );
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

    async close() {
        await this.client.close();
    }
}

export abstract class FlexBoundLazy<O, S> {
    public flex: Flex;
    public log: Log;

    constructor(options: O, flex?: Flex) {
        this.flex = flex ?? Flex.default;
        this.log = this.flex.log;
        this._options = options;
    }

    async getState(): Promise<S> {
        if (!this._state) {
            this._state = await this.createState(this._options);
        }
        return this._state;
    }

    // To Implement

    protected abstract createState(options: O): Promise<S>;

    // Internals

    private readonly _options: O;
    private _state: S | undefined = undefined;
}

type EverdevSignerRegistry = {
    items: {
        name: string,
        keys: KeyPair,
    }[]
};
