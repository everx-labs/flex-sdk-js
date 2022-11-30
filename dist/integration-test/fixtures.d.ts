import { Flex, FlexConfig, SignerOption } from "../flex";
declare type AccountConfig = {
    address?: string;
    signer: SignerOption;
};
export declare type IntegrationTestConfig = {
    flex: FlexConfig;
    everWallet: AccountConfig;
    client: AccountConfig;
    trader: {
        id: string;
        wallet: string;
        signer: string;
        TSDT: {
            external: AccountConfig;
            internal: string;
        };
        Ever: {
            external: AccountConfig;
            internal: string;
        };
    };
    market: string;
};
export declare function integrationTestConfig(): IntegrationTestConfig;
export declare type FlexFixture = {
    flex: Flex;
    config: IntegrationTestConfig;
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & FlexFixture, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export { expect } from '@playwright/test';
//# sourceMappingURL=fixtures.d.ts.map