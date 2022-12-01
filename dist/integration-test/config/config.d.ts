import { FlexConfig, SignerOption } from "../../flex";
declare type AccountConfig = {
    address?: string;
    signer: SignerOption;
};
export declare type TestConfig = {
    flex: FlexConfig;
    everWallet: AccountConfig;
    client: AccountConfig;
    trader: {
        signer: string;
    };
    market: string;
    EVER: {
        wrapper: string;
        wallet: AccountConfig;
    };
    TSDT: {
        wrapper: string;
        wrapperWallet: string;
        wallet: AccountConfig;
    };
};
export declare function createConfig(): TestConfig;
export {};
//# sourceMappingURL=config.d.ts.map