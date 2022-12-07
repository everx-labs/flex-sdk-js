import { AccountOptionsEx } from "../../contracts";
import { Flex } from "../flex";
export type DeployTraderOptions = {
    client: AccountOptionsEx;
    id: string;
    name: string;
    pubkey: string;
    eversAll?: string | number | bigint;
    eversAuth?: string | number | bigint;
    refillWallet?: string | number | bigint;
    minRefill?: string | number | bigint;
};
export declare function deployTrader(flex: Flex, options: DeployTraderOptions): Promise<void>;
//# sourceMappingURL=deploy-trader.d.ts.map