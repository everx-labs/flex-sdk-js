import { ClientConfig, TonClient } from "@eversdk/core";
import { Web3EvrSigners } from "./signers";
import { Web3EvrAccounts } from "./accounts";
import { Log } from "../../contracts/helpers";

export type Web3EvrConfig = {
    sdk: ClientConfig,
}

export class Web3Evr {
    /**
     * EverOS SDK Modules
     */
    sdk: TonClient;

    /**
     * Secrets used to sign messages sent to Flex Dex
     */
    signers: Web3EvrSigners;

    accounts: Web3EvrAccounts;

    /**
     * Log object.
     */
    log = Log.default;

    constructor(config?: Web3EvrConfig) {
        this.sdk = new TonClient(config?.sdk);
        this.signers = new Web3EvrSigners(this.sdk.crypto);
        this.accounts = new Web3EvrAccounts(this.sdk, this.signers, this.log);
    }

    async close() {
        await this.sdk.close();
    }
}
