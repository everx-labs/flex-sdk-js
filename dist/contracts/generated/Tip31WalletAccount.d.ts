import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31WalletSupportsInterfaceInput = {
    answerId: number;
    interfaceID: number;
};
export declare type Tip31WalletSupportsInterfaceOutput = {
    value0: boolean;
};
export declare type Tip31WalletDestroyInput = {
    remainingGasTo: string;
};
export declare type Tip31WalletBurnByRootInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31WalletBurnInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    callbackTo: string;
    payload: string;
};
export declare type Tip31WalletBalanceInput = {
    answerId: number;
};
export declare type Tip31WalletBalanceOutput = {
    value0: string;
};
export declare type Tip31WalletOwnerInput = {
    answerId: number;
};
export declare type Tip31WalletOwnerOutput = {
    value0: string;
};
export declare type Tip31WalletRootInput = {
    answerId: number;
};
export declare type Tip31WalletRootOutput = {
    value0: string;
};
export declare type Tip31WalletWalletCodeInput = {
    answerId: number;
};
export declare type Tip31WalletWalletCodeOutput = {
    value0: string;
};
export declare type Tip31WalletTransferInput = {
    amount: string | number | bigint;
    recipient: string;
    deployWalletValue: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletTransferToWalletInput = {
    amount: string | number | bigint;
    recipientTokenWallet: string;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletAcceptTransferInput = {
    amount: string | number | bigint;
    sender: string;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletAcceptMintInput = {
    amount: string | number | bigint;
    remainingGasTo: string;
    notify: boolean;
    payload: string;
};
export declare type Tip31WalletSendSurplusGasInput = {
    to: string;
};
export declare class Tip31WalletAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runSupportsInterface(input: Tip31WalletSupportsInterfaceInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WalletSupportsInterfaceOutput>>;
    supportsInterface(input: Tip31WalletSupportsInterfaceInput): Promise<RunLocalHelperResult<Tip31WalletSupportsInterfaceOutput>>;
    runDestroy(input: Tip31WalletDestroyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    destroy(input: Tip31WalletDestroyInput): Promise<RunLocalHelperResult<void>>;
    runBurnByRoot(input: Tip31WalletBurnByRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burnByRoot(input: Tip31WalletBurnByRootInput): Promise<RunLocalHelperResult<void>>;
    runBurn(input: Tip31WalletBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burn(input: Tip31WalletBurnInput): Promise<RunLocalHelperResult<void>>;
    runBalance(input: Tip31WalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WalletBalanceOutput>>;
    balance(input: Tip31WalletBalanceInput): Promise<RunLocalHelperResult<Tip31WalletBalanceOutput>>;
    runOwner(input: Tip31WalletOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WalletOwnerOutput>>;
    owner(input: Tip31WalletOwnerInput): Promise<RunLocalHelperResult<Tip31WalletOwnerOutput>>;
    runRoot(input: Tip31WalletRootInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WalletRootOutput>>;
    root(input: Tip31WalletRootInput): Promise<RunLocalHelperResult<Tip31WalletRootOutput>>;
    runWalletCode(input: Tip31WalletWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WalletWalletCodeOutput>>;
    walletCode(input: Tip31WalletWalletCodeInput): Promise<RunLocalHelperResult<Tip31WalletWalletCodeOutput>>;
    runTransfer(input: Tip31WalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: Tip31WalletTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferToWallet(input: Tip31WalletTransferToWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferToWallet(input: Tip31WalletTransferToWalletInput): Promise<RunLocalHelperResult<void>>;
    runAcceptTransfer(input: Tip31WalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptTransfer(input: Tip31WalletAcceptTransferInput): Promise<RunLocalHelperResult<void>>;
    runAcceptMint(input: Tip31WalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    acceptMint(input: Tip31WalletAcceptMintInput): Promise<RunLocalHelperResult<void>>;
    runSendSurplusGas(input: Tip31WalletSendSurplusGasInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    sendSurplusGas(input: Tip31WalletSendSurplusGasInput): Promise<RunLocalHelperResult<void>>;
}
//# sourceMappingURL=Tip31WalletAccount.d.ts.map