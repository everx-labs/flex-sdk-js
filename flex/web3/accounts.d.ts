import { AbiContract, Signer, TonClient, TransactionNode } from "@eversdk/core";
import { Log } from "../../contracts/helpers";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Web3EvrSigners } from "./signers";
export declare class Web3EvrAccounts {
    everos: TonClient;
    signers: Web3EvrSigners;
    log: Log;
    constructor(everos: TonClient, signers: Web3EvrSigners, log: Log);
    get<T>(accountClass: new (options: {
        client: TonClient;
        address?: string;
        signer?: Signer;
        log?: Log;
    }) => T, options: string | AccountOptionsEx): Promise<T>;
    isActive(address: string): Promise<boolean>;
    waitForFinalExternalAnswer(transaction: TransactionNode, abi: AbiContract): Promise<any>;
    waitForInternalAnswer(transaction: TransactionNode, abi: AbiContract[]): Promise<import("@eversdk/core").MessageNode>;
}
//# sourceMappingURL=accounts.d.ts.map