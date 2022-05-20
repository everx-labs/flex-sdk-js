import { ClientConfig, Signer, TonClient } from "@eversdk/core";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Log } from "../contracts/helpers";
export declare type FlexConfig = {
    superRoot?: string;
    globalConfig?: string;
    client?: ClientConfig;
};
export declare type FlexState = {
    superRoot: SuperRootAccount;
    globalConfig: GlobalConfigAccount;
    flex: FlexAccount;
    userConfig: UserDataConfigAccount;
};
export declare class Flex {
    config: FlexConfig;
    client: TonClient;
    signers: Map<string, Signer>;
    log: Log;
    private _state;
    private static _config;
    private static _default;
    static set default(flex: Flex);
    static get default(): Flex;
    static set config(config: FlexConfig);
    static get config(): FlexConfig;
    constructor(config: FlexConfig);
    resolveSigner(signer: Signer | string | undefined): Promise<Signer>;
    signerFromSecret(secret: string): Promise<Signer>;
    signerFromName(name: string): Promise<Signer>;
    signerPublicKey(signer: Signer): Promise<string>;
    getState(): Promise<FlexState>;
    close(): Promise<void>;
}
export declare abstract class FlexBoundLazy<O, S> {
    flex: Flex;
    log: Log;
    constructor(options: O, flex?: Flex);
    getState(): Promise<S>;
    protected abstract createState(options: O): Promise<S>;
    private readonly _options;
    private _state;
}
//# sourceMappingURL=flex.d.ts.map