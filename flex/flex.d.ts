import { ClientConfig, TonClient } from "@eversdk/core";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Log } from "../contracts/helpers";
import { SignerRegistry } from "../contracts/account-ex";
export declare enum MakeOrderMode {
    IOP = "IOP",
    IOC = "IOC",
    POST = "POST"
}
export declare type FlexConfig = {
    superRoot?: string;
    globalConfig?: string;
    web3?: ClientConfig;
    trader: {
        deploy: {
            eversAll: number;
            eversAuth: number;
            refillWallet: number;
            minRefill: number;
        };
        order: {
            evers: number;
            mode: MakeOrderMode;
        };
    };
};
export declare type FlexState = {
    superRoot: SuperRootAccount;
    globalConfig: GlobalConfigAccount;
    flex: FlexAccount;
    userConfig: UserDataConfigAccount;
};
export declare class Flex {
    config: FlexConfig;
    web3: TonClient;
    signers: SignerRegistry;
    log: Log;
    private _state;
    private static _config;
    private static _default;
    static set default(flex: Flex);
    static get default(): Flex;
    static set config(config: Partial<FlexConfig>);
    static get config(): FlexConfig;
    constructor(config: FlexConfig);
    getState(): Promise<FlexState>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
    private static defaultConfig;
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