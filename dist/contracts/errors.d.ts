import { AccountClass } from "./account-ex";
import { DerivativeTransaction } from "../flex/web3/accounts";
export declare type ContractError = Error & {
    code?: number;
    data?: Record<string, unknown>;
};
export declare function errorFromExitCode(contract: AccountClass, exitCode: number): ContractError;
export declare function resolveContractError(originalError: ContractError, contract: AccountClass): ContractError;
export declare function successRequired(transactions: {
    [address: string]: DerivativeTransaction;
}, address: string, contract: AccountClass): void;
//# sourceMappingURL=errors.d.ts.map