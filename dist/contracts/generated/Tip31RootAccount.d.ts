import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type Tip31RootSupportsInterfaceInput = {
    answerId: number;
    interfaceID: number;
};
export type Tip31RootSupportsInterfaceOutput = {
    value0: boolean;
};
export type Tip31RootDisableMintInput = {
    answerId: number;
};
export type Tip31RootDisableMintOutput = {
    value0: boolean;
};
export type Tip31RootMintDisabledInput = {
    answerId: number;
};
export type Tip31RootMintDisabledOutput = {
    value0: boolean;
};
export type Tip31RootBurnTokensInput = {
    amount: string | number | bigint;
    walletOwner: string;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export type Tip31RootDisableBurnByRootInput = {
    answerId: number;
};
export type Tip31RootDisableBurnByRootOutput = {
    value0: boolean;
};
export type Tip31RootBurnByRootDisabledInput = {
    answerId: number;
};
export type Tip31RootBurnByRootDisabledOutput = {
    value0: boolean;
};
export type Tip31RootBurnPausedInput = {
    answerId: number;
};
export type Tip31RootBurnPausedOutput = {
    value0: boolean;
};
export type Tip31RootSetBurnPausedInput = {
    answerId: number;
    paused: boolean;
};
export type Tip31RootSetBurnPausedOutput = {
    value0: boolean;
};
export type Tip31RootTransferOwnershipInput = {
    newOwner: string;
    remainingGasTo: string;
    callbacks: {
        [key: string]: {
            value: string | number | bigint;
            payload: string;
        };
    };
};
export type Tip31RootNameInput = {
    answerId: number;
};
export type Tip31RootNameOutput = {
    value0: string;
};
export type Tip31RootSymbolInput = {
    answerId: number;
};
export type Tip31RootSymbolOutput = {
    value0: string;
};
export type Tip31RootDecimalsInput = {
    answerId: number;
};
export type Tip31RootDecimalsOutput = {
    value0: number;
};
export type Tip31RootTotalSupplyInput = {
    answerId: number;
};
export type Tip31RootTotalSupplyOutput = {
    value0: string;
};
export type Tip31RootWalletCodeInput = {
    answerId: number;
};
export type Tip31RootWalletCodeOutput = {
    value0: string;
};
export type Tip31RootRootOwnerInput = {
    answerId: number;
};
export type Tip31RootRootOwnerOutput = {
    value0: string;
};
export type Tip31RootWalletOfInput = {
    answerId: number;
    walletOwner: string;
};
export type Tip31RootWalletOfOutput = {
    value0: string;
};
export type Tip31RootDeployWalletInput = {
    answerId: number;
    walletOwner: string;
    deployWalletValue: string | number | bigint;
};
export type Tip31RootDeployWalletOutput = {
    tokenWallet: string;
};
export type Tip31RootMintInput = {
    amount: string | number | bigint;
    recipient: string;
    deployWalletValue: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export type Tip31RootAcceptBurnInput = {
    amount: string | number | bigint;
    walletOwner: string;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export type Tip31RootSendSurplusGasInput = {
    to: string;
};
export declare class Tip31RootAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        initialSupplyTo: string;
        initialSupply: string | number | bigint;
        deployWalletValue: string | number | bigint;
        mintDisabled: boolean;
        burnByRootDisabled: boolean;
        burnPaused: boolean;
        remainingGasTo: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSupportsInterface(input: Tip31RootSupportsInterfaceInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootSupportsInterfaceOutput>>;
    supportsInterface(input: Tip31RootSupportsInterfaceInput): Promise<RunLocalHelperResult<Tip31RootSupportsInterfaceOutput>>;
    runDisableMint(input: Tip31RootDisableMintInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootDisableMintOutput>>;
    disableMint(input: Tip31RootDisableMintInput): Promise<RunLocalHelperResult<Tip31RootDisableMintOutput>>;
    runMintDisabled(input: Tip31RootMintDisabledInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootMintDisabledOutput>>;
    mintDisabled(input: Tip31RootMintDisabledInput): Promise<RunLocalHelperResult<Tip31RootMintDisabledOutput>>;
    runBurnTokens(input: Tip31RootBurnTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnTokens(input: Tip31RootBurnTokensInput): Promise<RunLocalHelperResult<void>>;
    runDisableBurnByRoot(input: Tip31RootDisableBurnByRootInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootDisableBurnByRootOutput>>;
    disableBurnByRoot(input: Tip31RootDisableBurnByRootInput): Promise<RunLocalHelperResult<Tip31RootDisableBurnByRootOutput>>;
    runBurnByRootDisabled(input: Tip31RootBurnByRootDisabledInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootBurnByRootDisabledOutput>>;
    burnByRootDisabled(input: Tip31RootBurnByRootDisabledInput): Promise<RunLocalHelperResult<Tip31RootBurnByRootDisabledOutput>>;
    runBurnPaused(input: Tip31RootBurnPausedInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootBurnPausedOutput>>;
    burnPaused(input: Tip31RootBurnPausedInput): Promise<RunLocalHelperResult<Tip31RootBurnPausedOutput>>;
    runSetBurnPaused(input: Tip31RootSetBurnPausedInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootSetBurnPausedOutput>>;
    setBurnPaused(input: Tip31RootSetBurnPausedInput): Promise<RunLocalHelperResult<Tip31RootSetBurnPausedOutput>>;
    runTransferOwnership(input: Tip31RootTransferOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferOwnership(input: Tip31RootTransferOwnershipInput): Promise<RunLocalHelperResult<void>>;
    runName(input: Tip31RootNameInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootNameOutput>>;
    name(input: Tip31RootNameInput): Promise<RunLocalHelperResult<Tip31RootNameOutput>>;
    runSymbol(input: Tip31RootSymbolInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootSymbolOutput>>;
    symbol(input: Tip31RootSymbolInput): Promise<RunLocalHelperResult<Tip31RootSymbolOutput>>;
    runDecimals(input: Tip31RootDecimalsInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootDecimalsOutput>>;
    decimals(input: Tip31RootDecimalsInput): Promise<RunLocalHelperResult<Tip31RootDecimalsOutput>>;
    runTotalSupply(input: Tip31RootTotalSupplyInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootTotalSupplyOutput>>;
    totalSupply(input: Tip31RootTotalSupplyInput): Promise<RunLocalHelperResult<Tip31RootTotalSupplyOutput>>;
    runWalletCode(input: Tip31RootWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootWalletCodeOutput>>;
    walletCode(input: Tip31RootWalletCodeInput): Promise<RunLocalHelperResult<Tip31RootWalletCodeOutput>>;
    runRootOwner(input: Tip31RootRootOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootRootOwnerOutput>>;
    rootOwner(input: Tip31RootRootOwnerInput): Promise<RunLocalHelperResult<Tip31RootRootOwnerOutput>>;
    runWalletOf(input: Tip31RootWalletOfInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootWalletOfOutput>>;
    walletOf(input: Tip31RootWalletOfInput): Promise<RunLocalHelperResult<Tip31RootWalletOfOutput>>;
    runDeployWallet(input: Tip31RootDeployWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31RootDeployWalletOutput>>;
    deployWallet(input: Tip31RootDeployWalletInput): Promise<RunLocalHelperResult<Tip31RootDeployWalletOutput>>;
    runMint(input: Tip31RootMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    mint(input: Tip31RootMintInput): Promise<RunLocalHelperResult<void>>;
    runAcceptBurn(input: Tip31RootAcceptBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptBurn(input: Tip31RootAcceptBurnInput): Promise<RunLocalHelperResult<void>>;
    runSendSurplusGas(input: Tip31RootSendSurplusGasInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    sendSurplusGas(input: Tip31RootSendSurplusGasInput): Promise<RunLocalHelperResult<void>>;
}
//# sourceMappingURL=Tip31RootAccount.d.ts.map