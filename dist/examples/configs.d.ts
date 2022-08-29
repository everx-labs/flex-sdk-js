declare type TraderConfig = {
    client: string;
    id: string;
    signer: string;
    wallet: string;
};
declare type ExamplesConfig = {
    endpoints: string[];
    superRoot: string;
    trader: TraderConfig;
    trader2?: TraderConfig;
    market: string;
    token: string;
};
export declare const DEFAULT_CONFIG: ExamplesConfig;
export {};
//# sourceMappingURL=configs.d.ts.map