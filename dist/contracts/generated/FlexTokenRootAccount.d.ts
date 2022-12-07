import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type FlexTokenRootSetWalletCodeInput = {
    _answer_id: number;
    wallet_code: string;
};
export type FlexTokenRootSetWalletCodeOutput = {
    value0: boolean;
};
export type FlexTokenRootDeployWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export type FlexTokenRootDeployWalletOutput = {
    value0: string;
};
export type FlexTokenRootDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export type FlexTokenRootDeployEmptyWalletOutput = {
    value0: string;
};
export type FlexTokenRootGrantInput = {
    _answer_id: number;
    dest: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export type FlexTokenRootMintInput = {
    _answer_id: number;
    tokens: string | number | bigint;
};
export type FlexTokenRootMintOutput = {
    value0: boolean;
};
export type FlexTokenRootRequestTotalGrantedInput = {
    _answer_id: number;
};
export type FlexTokenRootRequestTotalGrantedOutput = {
    value0: string;
};
export type FlexTokenRootGetNameOutput = {
    value0: string;
};
export type FlexTokenRootGetSymbolOutput = {
    value0: string;
};
export type FlexTokenRootGetDecimalsOutput = {
    value0: number;
};
export type FlexTokenRootGetRootKeyOutput = {
    value0: string;
};
export type FlexTokenRootGetRootOwnerOutput = {
    value0?: string;
};
export type FlexTokenRootGetTotalSupplyOutput = {
    value0: string;
};
export type FlexTokenRootGetTotalGrantedOutput = {
    value0: string;
};
export type FlexTokenRootHasWalletCodeOutput = {
    value0: boolean;
};
export type FlexTokenRootGetWalletCodeOutput = {
    value0: string;
};
export type FlexTokenRootGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export type FlexTokenRootGetWalletAddressOutput = {
    value0: string;
};
export type FlexTokenRootGetWalletCodeHashOutput = {
    value0: string;
};
export declare class FlexTokenRootAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_owner?: string;
        total_supply: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWalletCode(input: FlexTokenRootSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootSetWalletCodeOutput>>;
    setWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<RunLocalHelperResult<FlexTokenRootSetWalletCodeOutput>>;
    runDeployWallet(input: FlexTokenRootDeployWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootDeployWalletOutput>>;
    deployWallet(input: FlexTokenRootDeployWalletInput): Promise<RunLocalHelperResult<FlexTokenRootDeployWalletOutput>>;
    runDeployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootDeployEmptyWalletOutput>>;
    deployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<RunLocalHelperResult<FlexTokenRootDeployEmptyWalletOutput>>;
    runGrant(input: FlexTokenRootGrantInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    grant(input: FlexTokenRootGrantInput): Promise<RunLocalHelperResult<void>>;
    runMint(input: FlexTokenRootMintInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootMintOutput>>;
    mint(input: FlexTokenRootMintInput): Promise<RunLocalHelperResult<FlexTokenRootMintOutput>>;
    runRequestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootRequestTotalGrantedOutput>>;
    requestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<RunLocalHelperResult<FlexTokenRootRequestTotalGrantedOutput>>;
    runGetName(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetNameOutput>>;
    getName(): Promise<RunLocalHelperResult<FlexTokenRootGetNameOutput>>;
    runGetSymbol(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetSymbolOutput>>;
    getSymbol(): Promise<RunLocalHelperResult<FlexTokenRootGetSymbolOutput>>;
    runGetDecimals(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetDecimalsOutput>>;
    getDecimals(): Promise<RunLocalHelperResult<FlexTokenRootGetDecimalsOutput>>;
    runGetRootKey(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetRootKeyOutput>>;
    getRootKey(): Promise<RunLocalHelperResult<FlexTokenRootGetRootKeyOutput>>;
    runGetRootOwner(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetRootOwnerOutput>>;
    getRootOwner(): Promise<RunLocalHelperResult<FlexTokenRootGetRootOwnerOutput>>;
    runGetTotalSupply(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetTotalSupplyOutput>>;
    getTotalSupply(): Promise<RunLocalHelperResult<FlexTokenRootGetTotalSupplyOutput>>;
    runGetTotalGranted(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetTotalGrantedOutput>>;
    getTotalGranted(): Promise<RunLocalHelperResult<FlexTokenRootGetTotalGrantedOutput>>;
    runHasWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootHasWalletCodeOutput>>;
    hasWalletCode(): Promise<RunLocalHelperResult<FlexTokenRootHasWalletCodeOutput>>;
    runGetWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletCodeOutput>>;
    getWalletCode(): Promise<RunLocalHelperResult<FlexTokenRootGetWalletCodeOutput>>;
    runGetWalletAddress(input: FlexTokenRootGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletAddressOutput>>;
    getWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<RunLocalHelperResult<FlexTokenRootGetWalletAddressOutput>>;
    runGetWalletCodeHash(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletCodeHashOutput>>;
    getWalletCodeHash(): Promise<RunLocalHelperResult<FlexTokenRootGetWalletCodeHashOutput>>;
}
//# sourceMappingURL=FlexTokenRootAccount.d.ts.map