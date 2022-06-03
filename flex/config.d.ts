import { Web3EvrConfig } from "./web3/index";
export declare enum MakeOrderMode {
    IOP = "IOP",
    IOC = "IOC",
    POST = "POST"
}
export declare type FlexConfig = {
    superRoot: string;
    globalConfig?: string;
    evr?: Web3EvrConfig;
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
export declare function defaultConfig(): FlexConfig;
//# sourceMappingURL=config.d.ts.map