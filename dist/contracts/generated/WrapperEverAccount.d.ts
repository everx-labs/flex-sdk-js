import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperEverInitInput = {
    _answer_id: number;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type WrapperEverInitOutput = {
    value0: boolean;
};
export declare type WrapperEverDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type WrapperEverDeployEmptyWalletOutput = {
    value0: string;
};
export declare type WrapperEverOnEverTransferInput = {
    tokens: string | number | bigint;
    args: {
        pubkey: string | number | bigint;
        owner?: string;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    };
};
export declare type WrapperEverBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export declare type WrapperEverTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type WrapperEverRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type WrapperEverRequestTotalGrantedOutput = {
    value0: string;
};
export declare type WrapperEverClonedInput = {
    _answer_id: number;
};
export declare type WrapperEverClonedOutput = {
    first?: string;
    second: string;
};
export declare type WrapperEverSetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export declare type WrapperEverGetDetailsOutput = {
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
export declare type WrapperEverGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type WrapperEverHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type WrapperEverGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type WrapperEverGetWalletAddressOutput = {
    value0: string;
};
export declare type WrapperEverGetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperEverAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperEverInitInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverInitOutput>>;
    init(input: WrapperEverInitInput): Promise<RunLocalHelperResult<WrapperEverInitOutput>>;
    runDeployEmptyWallet(input: WrapperEverDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverDeployEmptyWalletOutput>>;
    deployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<RunLocalHelperResult<WrapperEverDeployEmptyWalletOutput>>;
    runOnEverTransfer(input: WrapperEverOnEverTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onEverTransfer(input: WrapperEverOnEverTransferInput): Promise<RunLocalHelperResult<void>>;
    runBurn(input: WrapperEverBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burn(input: WrapperEverBurnInput): Promise<RunLocalHelperResult<void>>;
    runTransferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<RunLocalHelperResult<void>>;
    runRequestTotalGranted(input: WrapperEverRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverRequestTotalGrantedOutput>>;
    requestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<RunLocalHelperResult<WrapperEverRequestTotalGrantedOutput>>;
    runCloned(input: WrapperEverClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverClonedOutput>>;
    cloned(input: WrapperEverClonedInput): Promise<RunLocalHelperResult<WrapperEverClonedOutput>>;
    runSetCloned(input: WrapperEverSetClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setCloned(input: WrapperEverSetClonedInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<WrapperEverGetDetailsOutput>>;
    runGetTip3Config(options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverGetTip3ConfigOutput>>;
    getTip3Config(): Promise<RunLocalHelperResult<WrapperEverGetTip3ConfigOutput>>;
    runHasInternalWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverHasInternalWalletCodeOutput>>;
    hasInternalWalletCode(): Promise<RunLocalHelperResult<WrapperEverHasInternalWalletCodeOutput>>;
    runGetWalletAddress(input: WrapperEverGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverGetWalletAddressOutput>>;
    getWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<RunLocalHelperResult<WrapperEverGetWalletAddressOutput>>;
    runGetReserveWallet(options?: RunHelperOptions): Promise<RunHelperResult<WrapperEverGetReserveWalletOutput>>;
    getReserveWallet(): Promise<RunLocalHelperResult<WrapperEverGetReserveWalletOutput>>;
}
//# sourceMappingURL=WrapperEverAccount.d.ts.map