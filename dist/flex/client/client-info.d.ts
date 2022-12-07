import { EvrAccounts } from "../web3";
export type GetClientInfoResult = {
    nativeCurrencyBalance: string;
};
export declare function getClientInfo(accounts: EvrAccounts, clientAddress: string): Promise<GetClientInfoResult>;
//# sourceMappingURL=client-info.d.ts.map