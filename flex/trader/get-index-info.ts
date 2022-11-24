import { FlexClientAccount } from "../../contracts";
import { EvrAccounts, uint256 } from "../web3";

export type GetIndexInfoResult = {
    /**
     * Address of the index account
     */
    address: string;
    /**
     * Balance of the index account in native cryptocurrency.
     */
    nativeCurrencyBalance: string;
};

export async function getIndexInfo(
    accounts: EvrAccounts,
    clientAddress: string,
    traderId: string,
): Promise<GetIndexInfoResult> {
    const client = await accounts.get(FlexClientAccount, clientAddress);
    const address = (
        await client.getUserIdIndex({
            user_id: uint256(traderId),
        })
    ).output.value0;
    return {
        address,
        nativeCurrencyBalance: await accounts.getDecimalBalance(address),
    };
}
