import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type Tip31FactoryDeployRootInput = {
    answerId: number;
    name: string;
    symbol: string;
    decimals: number;
    owner: string;
    initialSupplyTo: string;
    initialSupply: string | number | bigint;
    deployWalletValue: string | number | bigint;
    mintDisabled: boolean;
    burnByRootDisabled: boolean;
    burnPaused: boolean;
    remainingGasTo: string;
    upgradeable: boolean;
};
export type Tip31FactoryDeployRootOutput = {
    value0: string;
};
export type Tip31FactoryChangeDeployValueInput = {
    deployValue: string | number | bigint;
};
export type Tip31FactoryChangeRootCodeInput = {
    rootCode: string;
};
export type Tip31FactoryChangeWalletCodeInput = {
    walletCode: string;
};
export type Tip31FactoryChangeRootUpgradeableCodeInput = {
    rootUpgradeableCode: string;
};
export type Tip31FactoryChangeWalletUpgradeableCodeInput = {
    walletUpgradeableCode: string;
};
export type Tip31FactoryChangePlatformCodeInput = {
    platformCode: string;
};
export type Tip31FactoryTransferOwnerInput = {
    owner: string;
};
export type Tip31FactoryUpgradeInput = {
    code: string;
};
export type Tip31Factory_ownerOutput = {
    _owner: string;
};
export type Tip31Factory_pendingOwnerOutput = {
    _pendingOwner: string;
};
export type Tip31Factory_tokenNonceOutput = {
    _tokenNonce: string;
};
export type Tip31Factory_deployValueOutput = {
    _deployValue: string;
};
export type Tip31Factory_rootCodeOutput = {
    _rootCode: string;
};
export type Tip31Factory_walletCodeOutput = {
    _walletCode: string;
};
export type Tip31Factory_rootUpgradeableCodeOutput = {
    _rootUpgradeableCode: string;
};
export type Tip31Factory_walletUpgradeableCodeOutput = {
    _walletUpgradeableCode: string;
};
export type Tip31Factory_platformCodeOutput = {
    _platformCode: string;
};
export declare class Tip31FactoryAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owner: string;
        deployValue: string | number | bigint;
        rootCode: string;
        walletCode: string;
        rootUpgradeableCode: string;
        walletUpgradeableCode: string;
        platformCode: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runDeployRoot(input: Tip31FactoryDeployRootInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31FactoryDeployRootOutput>>;
    deployRoot(input: Tip31FactoryDeployRootInput): Promise<RunLocalHelperResult<Tip31FactoryDeployRootOutput>>;
    runChangeDeployValue(input: Tip31FactoryChangeDeployValueInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changeDeployValue(input: Tip31FactoryChangeDeployValueInput): Promise<RunLocalHelperResult<void>>;
    runChangeRootCode(input: Tip31FactoryChangeRootCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changeRootCode(input: Tip31FactoryChangeRootCodeInput): Promise<RunLocalHelperResult<void>>;
    runChangeWalletCode(input: Tip31FactoryChangeWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changeWalletCode(input: Tip31FactoryChangeWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runChangeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changeRootUpgradeableCode(input: Tip31FactoryChangeRootUpgradeableCodeInput): Promise<RunLocalHelperResult<void>>;
    runChangeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changeWalletUpgradeableCode(input: Tip31FactoryChangeWalletUpgradeableCodeInput): Promise<RunLocalHelperResult<void>>;
    runChangePlatformCode(input: Tip31FactoryChangePlatformCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    changePlatformCode(input: Tip31FactoryChangePlatformCodeInput): Promise<RunLocalHelperResult<void>>;
    runTransferOwner(input: Tip31FactoryTransferOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferOwner(input: Tip31FactoryTransferOwnerInput): Promise<RunLocalHelperResult<void>>;
    runAcceptOwner(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptOwner(): Promise<RunLocalHelperResult<void>>;
    runUpgrade(input: Tip31FactoryUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    upgrade(input: Tip31FactoryUpgradeInput): Promise<RunLocalHelperResult<void>>;
    run_owner(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_ownerOutput>>;
    _owner(): Promise<RunLocalHelperResult<Tip31Factory_ownerOutput>>;
    run_pendingOwner(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_pendingOwnerOutput>>;
    _pendingOwner(): Promise<RunLocalHelperResult<Tip31Factory_pendingOwnerOutput>>;
    run_tokenNonce(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_tokenNonceOutput>>;
    _tokenNonce(): Promise<RunLocalHelperResult<Tip31Factory_tokenNonceOutput>>;
    run_deployValue(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_deployValueOutput>>;
    _deployValue(): Promise<RunLocalHelperResult<Tip31Factory_deployValueOutput>>;
    run_rootCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_rootCodeOutput>>;
    _rootCode(): Promise<RunLocalHelperResult<Tip31Factory_rootCodeOutput>>;
    run_walletCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_walletCodeOutput>>;
    _walletCode(): Promise<RunLocalHelperResult<Tip31Factory_walletCodeOutput>>;
    run_rootUpgradeableCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_rootUpgradeableCodeOutput>>;
    _rootUpgradeableCode(): Promise<RunLocalHelperResult<Tip31Factory_rootUpgradeableCodeOutput>>;
    run_walletUpgradeableCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_walletUpgradeableCodeOutput>>;
    _walletUpgradeableCode(): Promise<RunLocalHelperResult<Tip31Factory_walletUpgradeableCodeOutput>>;
    run_platformCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31Factory_platformCodeOutput>>;
    _platformCode(): Promise<RunLocalHelperResult<Tip31Factory_platformCodeOutput>>;
}
//# sourceMappingURL=Tip31FactoryAccount.d.ts.map