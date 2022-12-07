import { ClientConfig, TonClient } from "@eversdk/core";
import { EvrSigners } from "./signers";
import { EvrAccounts } from "./accounts";
import { Log } from "../../contracts/helpers";
export type EvrConfig = {
    sdk: ClientConfig;
};
export declare class Evr {
    static readonly NATIVE_DECIMALS = 9;
    static readonly NATIVE_TOKEN_IN_UNITS: bigint;
    sdk: TonClient;
    signers: EvrSigners;
    accounts: EvrAccounts;
    log: Log;
    static unitsFromTokens(tokens: number): number;
    static toUnits(tokens: number): bigint;
    constructor(config?: EvrConfig);
    close(): Promise<void>;
}
//# sourceMappingURL=evr.d.ts.map