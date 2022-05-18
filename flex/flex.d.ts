import { ClientConfig, Signer, TonClient } from "@eversdk/core";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
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
    private _state;
    private static _config;
    private static _default;
    static set default(flex: Flex);
    static get default(): Flex;
    static set config(config: FlexConfig);
    static get config(): FlexConfig;
    static resolve(options: FlexBoundOptions): Flex;
    constructor(config: FlexConfig);
    resolveSigner(signer: Signer | string): Promise<Signer>;
    signerPublicKey(signer: Signer): Promise<string>;
    getState(): Promise<FlexState>;
    close(): Promise<void>;
}
export declare type FlexBoundOptions = {
    flex?: Flex | {
        flex?: Flex;
    };
};
export declare abstract class FlexBoundLazy<O extends FlexBoundOptions, S> {
    flex: Flex;
    getState(): Promise<S>;
    protected constructor(options: O);
    protected abstract createState(options: O): Promise<S>;
    private readonly _options;
    private _state;
}
//# sourceMappingURL=flex.d.ts.map