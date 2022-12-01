import { EverWallet, Flex, FlexConfig, SignerOption } from "../flex";
import { FlexClientAccount, FlexWalletAccount, MultisigWalletAccount, Tip31WalletAccount } from "../contracts";
declare type AccountConfig = {
    address?: string;
    signer: SignerOption;
};
export declare type IntegrationTestConfig = {
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
export declare function createConfig(): IntegrationTestConfig;
declare type TestAccounts = {
    everWallet: EverWallet;
    flexClient: FlexClientAccount;
    EVER: {
        external: MultisigWalletAccount;
        internal: FlexWalletAccount;
    };
    TSDT: {
        external: Tip31WalletAccount;
        internal: FlexWalletAccount;
    };
};
declare type TestAddresses = {
    everWallet: string;
    flexClient: string;
    EVER: {
        external: string;
        internal: string;
    };
    TSDT: {
        external: string;
        internal: string;
    };
};
export declare type FlexFixture = {
    flex: Flex;
    config: IntegrationTestConfig;
    accounts: TestAccounts;
    addresses: TestAddresses;
    traderId: string;
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions & FlexFixture>;
export { expect } from "@playwright/test";
//# sourceMappingURL=config.d.ts.map