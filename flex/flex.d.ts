import { ClientConfig, Signer, TonClient } from "@eversdk/core";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
import { Log } from "../contracts/helpers";
import { SignerRegistry } from "../contracts/account-ex";
export declare enum MakeOrderMode {
    IOP = "IOP",
    IOC = "IOC",
    POST = "POST"
}
export declare type FlexConfig = {
    superRoot: string;
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
export declare class Flex {
    config: FlexConfig;
    web3: TonClient;
    signers: SignerRegistry;
    log: Log;
    private static _config;
    private static _default;
    static set default(flex: Flex);
    static get default(): Flex;
    static set config(config: Partial<FlexConfig>);
    static get config(): FlexConfig;
    constructor(config: FlexConfig);
    getAccount<T>(accountClass: new (options: {
        address: string;
        client: TonClient;
        signer?: Signer;
        log?: Log;
    }) => T, options: string | {
        address: string;
        signer?: Signer | string;
    }): Promise<T>;
    getSuperRootAccount(): Promise<SuperRootAccount>;
    getGlobalConfigAccount(): Promise<GlobalConfigAccount>;
    getFlexAccount(): Promise<FlexAccount>;
    getUserConfigAccount(): Promise<UserDataConfigAccount>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
    private static defaultConfig;
}
//# sourceMappingURL=flex.d.ts.map