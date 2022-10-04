import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type Tip31WrapperInitInput = {
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type Tip31WrapperDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type Tip31WrapperDeployEmptyWalletOutput = {
    value0: string;
};
export declare type Tip31WrapperOnAcceptTokensTransferInput = {
    tokenRoot: string;
    amount: string | number | bigint;
    sender: string;
    senderWallet: string;
    remainingGasTo: string;
    payload: string;
};
export declare type Tip31WrapperBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export declare type Tip31WrapperTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type Tip31WrapperRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type Tip31WrapperRequestTotalGrantedOutput = {
    value0: string;
};
export declare type Tip31WrapperClonedInput = {
    _answer_id: number;
};
export declare type Tip31WrapperClonedOutput = {
    first?: string;
    second: string;
};
export declare type Tip31WrapperSetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export declare type Tip31WrapperGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    total_granted: string;
    wallet_code: string;
    external_wallet?: string;
    reserve_wallet: string;
    super_root: string;
    cloned?: string;
    type_id: number;
};
export declare type Tip31WrapperGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type Tip31WrapperHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type Tip31WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type Tip31WrapperGetWalletAddressOutput = {
    value0: string;
};
export declare type Tip31WrapperGetReserveWalletOutput = {
    value0: string;
};
export declare class Tip31WrapperAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: Tip31WrapperInitInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    init(input: Tip31WrapperInitInput): Promise<RunLocalHelperResult<void>>;
    runDeployEmptyWallet(input: Tip31WrapperDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployEmptyWalletOutput>>;
    deployEmptyWallet(input: Tip31WrapperDeployEmptyWalletInput): Promise<RunLocalHelperResult<Tip31WrapperDeployEmptyWalletOutput>>;
    runOnAcceptTokensTransfer(input: Tip31WrapperOnAcceptTokensTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onAcceptTokensTransfer(input: Tip31WrapperOnAcceptTokensTransferInput): Promise<RunLocalHelperResult<void>>;
    runBurn(input: Tip31WrapperBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burn(input: Tip31WrapperBurnInput): Promise<RunLocalHelperResult<void>>;
    runTransferFromReserveWallet(input: Tip31WrapperTransferFromReserveWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferFromReserveWallet(input: Tip31WrapperTransferFromReserveWalletInput): Promise<RunLocalHelperResult<void>>;
    runRequestTotalGranted(input: Tip31WrapperRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperRequestTotalGrantedOutput>>;
    requestTotalGranted(input: Tip31WrapperRequestTotalGrantedInput): Promise<RunLocalHelperResult<Tip31WrapperRequestTotalGrantedOutput>>;
    runCloned(input: Tip31WrapperClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperClonedOutput>>;
    cloned(input: Tip31WrapperClonedInput): Promise<RunLocalHelperResult<Tip31WrapperClonedOutput>>;
    runSetCloned(input: Tip31WrapperSetClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setCloned(input: Tip31WrapperSetClonedInput): Promise<RunLocalHelperResult<void>>;
    runUpgradeExternalWallet(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    upgradeExternalWallet(): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<Tip31WrapperGetDetailsOutput>>;
    runGetTip3Config(options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperGetTip3ConfigOutput>>;
    getTip3Config(): Promise<RunLocalHelperResult<Tip31WrapperGetTip3ConfigOutput>>;
    runHasInternalWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperHasInternalWalletCodeOutput>>;
    hasInternalWalletCode(): Promise<RunLocalHelperResult<Tip31WrapperHasInternalWalletCodeOutput>>;
    runGetWalletAddress(input: Tip31WrapperGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperGetWalletAddressOutput>>;
    getWalletAddress(input: Tip31WrapperGetWalletAddressInput): Promise<RunLocalHelperResult<Tip31WrapperGetWalletAddressOutput>>;
    runGetReserveWallet(options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperGetReserveWalletOutput>>;
    getReserveWallet(): Promise<RunLocalHelperResult<Tip31WrapperGetReserveWalletOutput>>;
}
//# sourceMappingURL=Tip31WrapperAccount.d.ts.map