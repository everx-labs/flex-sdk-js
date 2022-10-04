import { AbiContract, Signer, TonClient, TransactionNode } from "@eversdk/core";
import { Log } from "../../contracts/helpers";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { EvrSigners } from "./signers";
export { AccountOptionsEx };
export declare class EvrAccounts {
    everos: TonClient;
    signers: EvrSigners;
    log: Log;
    constructor(everos: TonClient, signers: EvrSigners, log: Log);
    get<T>(accountClass: new (options: {
        client: TonClient;
        address?: string;
        signer?: Signer;
        log?: Log;
    }) => T, options: string | AccountOptionsEx): Promise<T>;
    isActive(address: string): Promise<boolean>;
    waitForFinalExternalAnswer(transaction: TransactionNode, abi: AbiContract): Promise<any>;
    waitForInternalAnswer(transaction: TransactionNode, abi: AbiContract[]): Promise<import("@eversdk/core").MessageNode>;
    waitForDerivativeTransactionOnAccount(options: {
        originTransactionId: string;
        accountAddress: string;
    }): Promise<TransactionNode>;
}
//# sourceMappingURL=accounts.d.ts.map