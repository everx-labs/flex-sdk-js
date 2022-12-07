import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type WrapperInitInput = {
    external_wallet: string;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export type WrapperDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export type WrapperDeployEmptyWalletOutput = {
    value0: string;
};
export type WrapperOnTip3TransferInput = {
    _answer_id: number;
    balance: string | number | bigint;
    new_tokens: string | number | bigint;
    evers_balance: string | number | bigint;
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    sender?: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    receiver: {
        pubkey: string | number | bigint;
        owner?: string;
    };
    payload: string;
    answer_addr: string;
};
export type WrapperOnTip3TransferOutput = {
    err_code: number;
    flex_wallet: string;
};
export type WrapperBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
    notify?: string;
};
export type WrapperTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export type WrapperRequestTotalGrantedInput = {
    _answer_id: number;
};
export type WrapperRequestTotalGrantedOutput = {
    value0: string;
};
export type WrapperClonedInput = {
    _answer_id: number;
};
export type WrapperClonedOutput = {
    first?: string;
    second: string;
};
export type WrapperSetClonedInput = {
    cloned?: string;
    cloned_pubkey: string | number | bigint;
    wrappers_cfg: string;
    wrappers_cfg_code_hash: string | number | bigint;
    wrappers_cfg_code_depth: number;
};
export type WrapperGetDetailsOutput = {
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
export type WrapperGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export type WrapperHasInternalWalletCodeOutput = {
    value0: boolean;
};
export type WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export type WrapperGetWalletAddressOutput = {
    value0: string;
};
export type WrapperGetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperInitInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    init(input: WrapperInitInput): Promise<RunLocalHelperResult<void>>;
    runDeployEmptyWallet(input: WrapperDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployEmptyWalletOutput>>;
    deployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<RunLocalHelperResult<WrapperDeployEmptyWalletOutput>>;
    runOnTip3Transfer(input: WrapperOnTip3TransferInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperOnTip3TransferOutput>>;
    onTip3Transfer(input: WrapperOnTip3TransferInput): Promise<RunLocalHelperResult<WrapperOnTip3TransferOutput>>;
    runBurn(input: WrapperBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    burn(input: WrapperBurnInput): Promise<RunLocalHelperResult<void>>;
    runTransferFromReserveWallet(input: WrapperTransferFromReserveWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<RunLocalHelperResult<void>>;
    runRequestTotalGranted(input: WrapperRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperRequestTotalGrantedOutput>>;
    requestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<RunLocalHelperResult<WrapperRequestTotalGrantedOutput>>;
    runCloned(input: WrapperClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperClonedOutput>>;
    cloned(input: WrapperClonedInput): Promise<RunLocalHelperResult<WrapperClonedOutput>>;
    runSetCloned(input: WrapperSetClonedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setCloned(input: WrapperSetClonedInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WrapperGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<WrapperGetDetailsOutput>>;
    runGetTip3Config(options?: RunHelperOptions): Promise<RunHelperResult<WrapperGetTip3ConfigOutput>>;
    getTip3Config(): Promise<RunLocalHelperResult<WrapperGetTip3ConfigOutput>>;
    runHasInternalWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<WrapperHasInternalWalletCodeOutput>>;
    hasInternalWalletCode(): Promise<RunLocalHelperResult<WrapperHasInternalWalletCodeOutput>>;
    runGetWalletAddress(input: WrapperGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperGetWalletAddressOutput>>;
    getWalletAddress(input: WrapperGetWalletAddressInput): Promise<RunLocalHelperResult<WrapperGetWalletAddressOutput>>;
    runGetReserveWallet(options?: RunHelperOptions): Promise<RunHelperResult<WrapperGetReserveWalletOutput>>;
    getReserveWallet(): Promise<RunLocalHelperResult<WrapperGetReserveWalletOutput>>;
}
//# sourceMappingURL=WrapperAccount.d.ts.map