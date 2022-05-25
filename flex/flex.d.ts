import { ClientConfig, TonClient } from "@eversdk/core";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Log } from "../contracts/helpers";
import { SignerRegistry } from "../contracts/account-ex";
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
    signers: SignerRegistry;
    log: Log;
    private _state;
    private static _config;
    private static _default;
    static set default(flex: Flex);
    static get default(): Flex;
    static set config(config: FlexConfig);
    static get config(): FlexConfig;
    constructor(config: FlexConfig);
    getState(): Promise<FlexState>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
}
export declare abstract class FlexBoundLazy<O, S> {
    flex: Flex;
    log: Log;
    readonly options: O;
    constructor(options: O, flex?: Flex);
    getState(): Promise<S>;
    protected abstract createState(options: O): Promise<S>;
    private _state;
}
//# sourceMappingURL=flex.d.ts.map