import { Flex } from "../flex";
import { TokenValue, AccountOptionsEx } from "../web3";
export type TopUpOptions = {
    client: string;
    id: string;
    everWallet: AccountOptionsEx;
    minBalance: TokenValue;
    value: TokenValue;
};
export type TopUpAccountResult = {
    address: string;
    balanceBefore: string;
    topUpValue: string;
};
export type TopUpResult = {
    everWalletBalanceBefore: string;
    totalTopUpValue: string;
    accounts: TopUpAccountResult[];
};
export declare function topUp(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
export declare function getTopUpInfo(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
//# sourceMappingURL=top-up.d.ts.map