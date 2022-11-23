import { EvrAccounts } from "../web3";

export type GetClientInfoResult = {
    /**
     * FlexInfo account balance in native cryptocurrency.
     */
    nativeCurrencyBalance: string;
};

/** @internal */
export async function getClientInfo(
    accounts: EvrAccounts,
    clientAddress: string,
): Promise<GetClientInfoResult> {
    return {
        nativeCurrencyBalance: await accounts.getDecimalBalance(clientAddress),
    };
}
