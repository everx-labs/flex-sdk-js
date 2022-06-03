import { ClientConfig, TonClient } from "@eversdk/core";
import { Web3EvrSigners } from "./signers";
import { Web3EvrAccounts } from "./accounts";
import { Log } from "../../contracts/helpers";
export declare type Web3EvrConfig = {
    sdk: ClientConfig;
};
export declare class Web3Evr {
    sdk: TonClient;
    signers: Web3EvrSigners;
    accounts: Web3EvrAccounts;
    log: Log;
    constructor(config?: Web3EvrConfig);
    close(): Promise<void>;
}
//# sourceMappingURL=evr.d.ts.map