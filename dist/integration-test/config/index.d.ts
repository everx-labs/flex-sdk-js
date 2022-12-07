import { Flex, PriceOrder } from "../../flex";
import { Trading } from "./trading";
import { TestConfig } from "./config";
import { TestAccounts } from "./accounts";
export { expect } from "@playwright/test";
export type FlexFixture = {
    flex: Flex;
    config: TestConfig;
    accounts: TestAccounts;
    trading: Trading;
    orders: PriceOrder[];
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions & FlexFixture>;
//# sourceMappingURL=index.d.ts.map