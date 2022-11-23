import { Flex } from "../flex";
import { TokenValue, AccountOptionsEx } from "../web3";
export declare type TopUpOptions = {
    client: string;
    id: string;
    everWallet: AccountOptionsEx;
    minBalance: TokenValue;
    value: TokenValue;
};
export declare type TopUpAccountResult = {
    address: string;
    balanceBefore: string;
    topUpValue: string;
};
export declare type TopUpResult = {
    everWalletBalanceBefore: string;
    totalTopUpValue: string;
    accounts: TopUpAccountResult[];
};
export declare function topUp(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
export declare function getTopUpInfo(flex: Flex, options: TopUpOptions): Promise<TopUpResult>;
//# sourceMappingURL=top-up.d.ts.map