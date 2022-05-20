import { TonClient } from "@eversdk/core";
import { AccountType } from "@eversdk/appkit";

export class AccountEx {
    static async isActive(address: string, useClient?: TonClient): Promise<boolean> {
        const client = useClient ?? TonClient.default;
        const accounts = (await client.net.query_collection({
            collection: "accounts",
            filter: { id: { eq: address } },
            result: "acc_type",
            limit: 1,
        })).result as { acc_type: number }[];
        return accounts.length > 0 && accounts[0].acc_type === AccountType.active;
    }
}
