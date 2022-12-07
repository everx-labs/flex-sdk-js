import { FlexConfig } from "./config";
import { FlexAccount, FlexClientAccount, FlexWalletAccount, GlobalConfigAccount, SuperRootAccount, Tip31WalletAccount, TONTokenWalletAccount, UserDataConfigAccount } from "../contracts";
import { Evr } from "./web3";
import { WalletInfo } from "./client";
export declare class Flex {
    config: FlexConfig;
    evr: Evr;
    private cachedFlexClients;
    private cachedTraderWallets;
    constructor(config: Partial<FlexConfig>);
    getSuperRootAccount(): Promise<SuperRootAccount>;
    getGlobalConfigAccount(): Promise<GlobalConfigAccount>;
    getFlexAccount(): Promise<FlexAccount>;
    getUserConfigAccount(): Promise<UserDataConfigAccount>;
    getCachedFlexClient(client: string): Promise<FlexClientAccount>;
    getCachedTraderWallets(client: string, id: string): Promise<WalletInfo[]>;
    query(text: string): Promise<any>;
    close(): Promise<void>;
    getTip3TokenBalance(account: Tip31WalletAccount): Promise<number>;
    getTokenBalance(account: TONTokenWalletAccount): Promise<number>;
    getFlexTokenBalance(account: FlexWalletAccount): Promise<number>;
}
//# sourceMappingURL=flex.d.ts.map