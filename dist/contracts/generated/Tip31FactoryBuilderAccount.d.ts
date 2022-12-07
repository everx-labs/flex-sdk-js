import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type Tip31FactoryBuilderSetRootCodeInput = {
    rootCode: string;
};
export type Tip31FactoryBuilderSetWalletCodeInput = {
    walletCode: string;
};
export type Tip31FactoryBuilderDeployTokenFactoryInput = {
    factoryCode: string;
    nonce: string | number | bigint;
    owner: string;
    factoryDeployValue: string | number | bigint;
    rootDeployValue: string | number | bigint;
};
export type Tip31FactoryBuilderDeployTokenFactoryOutput = {
    value0: string;
};
export type Tip31FactoryBuilder_rootCodeOutput = {
    _rootCode: string;
};
export type Tip31FactoryBuilder_walletCodeOutput = {
    _walletCode: string;
};
export declare class Tip31FactoryBuilderAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runSetRootCode(input: Tip31FactoryBuilderSetRootCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setRootCode(input: Tip31FactoryBuilderSetRootCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setWalletCode(input: Tip31FactoryBuilderSetWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runDeployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilderDeployTokenFactoryOutput>>;
    deployTokenFactory(input: Tip31FactoryBuilderDeployTokenFactoryInput): Promise<RunLocalHelperResult<Tip31FactoryBuilderDeployTokenFactoryOutput>>;
    run_rootCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilder_rootCodeOutput>>;
    _rootCode(): Promise<RunLocalHelperResult<Tip31FactoryBuilder_rootCodeOutput>>;
    run_walletCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryBuilder_walletCodeOutput>>;
    _walletCode(): Promise<RunLocalHelperResult<Tip31FactoryBuilder_walletCodeOutput>>;
}
//# sourceMappingURL=Tip31FactoryBuilderAccount.d.ts.map