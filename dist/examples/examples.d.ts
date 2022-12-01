import { FlexConfig } from "../flex";
export declare const CONFIG: {
    endpoints: string[];
    superRoot: string;
    trader: {
        client: string;
        id: string;
    };
    everWallet: {
        address: string;
        signer: string;
    };
    tip3: {
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
    market: string;
};
export declare const EXAMPLES_FLEX_CONFIG: Partial<FlexConfig>;
//# sourceMappingURL=examples.d.ts.map