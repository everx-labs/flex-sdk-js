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
        EVER: {
            external: AccountConfig;
            internal: string;
        };
        TSDT: {
            external: AccountConfig;
            internal: string;
        };
    };
    market: {
        address: string;
        EVER: {
            wrapper: string;
        };
        TSDT: {
            wrapper: string;
            wrapperWallet: string;
        };
    };
};
export declare function integrationTestConfig(): IntegrationTestConfig;
export declare type FlexFixture = {
    flex: Flex;
    config: IntegrationTestConfig;
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & FlexFixture, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export { expect } from "@playwright/test";
//# sourceMappingURL=fixture.d.ts.map