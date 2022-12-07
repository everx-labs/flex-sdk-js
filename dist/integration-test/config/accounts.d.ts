import { EverWallet, Flex } from "../../flex";
import { FlexClientAccount, FlexWalletAccount, MultisigWalletAccount, Tip31WalletAccount } from "../../contracts";
import { TestConfig } from "./config";
export type TestAccounts = {
    traderId: string;
    everWallet: EverWallet;
    everWalletAddress: string;
    flexClient: FlexClientAccount;
    flexClientAddress: string;
    EVER: {
        external: MultisigWalletAccount;
        externalAddress: string;
        internal: FlexWalletAccount;
        internalAddress: string;
    };
    TSDT: {
        external: Tip31WalletAccount;
        externalAddress: string;
        internal: FlexWalletAccount;
        internalAddress: string;
    };
};
export declare function createAccounts(flex: Flex, config: TestConfig): Promise<TestAccounts>;
//# sourceMappingURL=accounts.d.ts.map