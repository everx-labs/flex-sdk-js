import { ClientConfig, TonClient } from "@eversdk/core";
import { EvrSigners } from "./signers";
import { EvrAccounts } from "./accounts";
import { Log } from "../../contracts/helpers";

export type EvrConfig = {
    sdk: ClientConfig,
}

export class Evr {
    /**
     * Everscale client instance
     */
    sdk: TonClient;

    /**
     * Secrets used to sign messages sent to  Dex
     */
    signers: EvrSigners;

    accounts: EvrAccounts;

    /**
     * Log object.
     */
    log = Log.default;

    constructor(config?: EvrConfig) {
        this.sdk = new TonClient(config?.sdk);
        this.signers = new EvrSigners(this.sdk.crypto);
        this.accounts = new EvrAccounts(this.sdk, this.signers, this.log);
    }

    async close() {
        await this.sdk.close();
    }
}
