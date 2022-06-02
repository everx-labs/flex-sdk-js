import { FlexConfig } from "./config";
import { Signer, TonClient } from "@eversdk/core";
import { AccountOptionsEx, SignerRegistry } from "../contracts/account-ex";
import { Log } from "../contracts/helpers";
import { FlexAccount, GlobalConfigAccount, SuperRootAccount, UserDataConfigAccount } from "../contracts";
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
        client: TonClient;
        address?: string;
        signer?: Signer;
        log?: Log;
    }) => T, options: string | AccountOptionsEx): Promise<T>;
    getSuperRootAccount(): Promise<SuperRootAccount>;
    getGlobalConfigAccount(): Promise<GlobalConfigAccount>;
    getFlexAccount(): Promise<FlexAccount>;
    getUserConfigAccount(): Promise<UserDataConfigAccount>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
}
//# sourceMappingURL=flex.d.ts.map