import { Flex, FlexConfig } from "../flex";
export declare type IntegrationTestConfig = {
    flex: FlexConfig;
    everWallet: {
        address?: string;
        signer: string;
    };
    client: {
        address?: string;
        signer: string;
    };
    trader: {
        id: string;
        wallet: string;
        signer: string;
    };
    market: string;
};
export declare function integrationTestConfig(): IntegrationTestConfig;
export declare let CONFIG: IntegrationTestConfig;
export declare let FLEX: Flex;
export declare function initIntegrationTest(): void;
//# sourceMappingURL=init.d.ts.map