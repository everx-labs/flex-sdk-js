import { Flex } from "../flex";
import { TokenValue, AccountOptionsEx } from "../web3";
export declare type TopupAllBalancesOptions = {
    client: string;
    id: string;
    everWallet: AccountOptionsEx;
    minBalance: TokenValue;
    value: TokenValue;
};
export declare type TopupAllBalancesResult = {
    address: string;
    balanceDelta: string;
    finalBalance: string;
}[];
export declare function topupAllBalances(flex: Flex, options: TopupAllBalancesOptions): Promise<TopupAllBalancesResult>;
//# sourceMappingURL=topup-all-balances.d.ts.map