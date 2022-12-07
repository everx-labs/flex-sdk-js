import { EvrAccounts } from "../web3";
export type GetIndexInfoResult = {
    address: string;
    nativeCurrencyBalance: string;
};
export declare function getIndexInfo(accounts: EvrAccounts, clientAddress: string, traderId: string): Promise<GetIndexInfoResult>;
//# sourceMappingURL=get-index-info.d.ts.map