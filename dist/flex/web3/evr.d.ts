import { ClientConfig, TonClient } from "@eversdk/core";
import { EvrSigners } from "./signers";
import { EvrAccounts } from "./accounts";
import { Log } from "../../contracts/helpers";
export declare type EvrConfig = {
    sdk: ClientConfig;
};
export declare class Evr {
    sdk: TonClient;
    signers: EvrSigners;
    accounts: EvrAccounts;
    log: Log;
    static ONE_TOKEN: number;
    constructor(config?: EvrConfig);
    close(): Promise<void>;
}
//# sourceMappingURL=evr.d.ts.map