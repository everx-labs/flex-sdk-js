type TraderConfig = {
    client: string;
    id: string;
};
type EverWalletConfig = {
    address: string;
    signer: string;
};
type Tip3Config = {
    TBTC: {
        tokenWalletAddress: string;
        tokenWrapperAddress: string;
        tokenWrapperWalletAddress: string;
    };
    TSDT: {
        tokenWalletAddress: string;
        tokenWrapperAddress: string;
        tokenWrapperWalletAddress: string;
    };
    EVER: {
        wrapperAddress: string;
    };
};
type ExamplesConfig = {
    endpoints: string[];
    superRoot: string;
    trader: TraderConfig;
    everWallet: EverWalletConfig;
    tip3: Tip3Config;
    market: string;
};
export declare const DEFAULT_CONFIG: ExamplesConfig;
export {};
//# sourceMappingURL=configs.d.ts.map