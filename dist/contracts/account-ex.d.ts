import { Log, SignerOption } from "../flex";
import { Account, AccountOptions } from "@eversdk/appkit";
import { ContractPackageEx } from "./helpers";
export declare type AccountOptionsEx = {
    useCachedState?: boolean;
} & ({
    address: string;
    signer?: SignerOption;
} | {
    signer: SignerOption;
});
export declare type AbiError = {
    name: string;
    exitCode: number;
    message: string;
};
export interface AccountClass {
    package: ContractPackageEx;
    new (options: AccountOptions & {
        log?: Log;
    }): Account;
}
export declare function abiError(name: string, exitCode: number, message: string): AbiError;
export declare function getAbiErrors(accountClass: AccountClass): AbiError[];
export declare const flexWalletErrors: AbiError[];
export declare const priceXchgErrors: AbiError[];
//# sourceMappingURL=account-ex.d.ts.map