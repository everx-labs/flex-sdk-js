
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type FlexTokenRootSetWalletCodeInput = {
    _answer_id: number /* uint32 */,
    wallet_code: string /* cell */,
};

export type FlexTokenRootSetWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type FlexTokenRootDeployWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type FlexTokenRootDeployWalletOutput = {
    value0: string /* address */,
};

export type FlexTokenRootDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type FlexTokenRootDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type FlexTokenRootGrantInput = {
    _answer_id: number /* uint32 */,
    dest: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type FlexTokenRootMintInput = {
    _answer_id: number /* uint32 */,
    tokens: string | number | bigint /* uint128 */,
};

export type FlexTokenRootMintOutput = {
    value0: boolean /* bool */,
};

export type FlexTokenRootRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type FlexTokenRootRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type FlexTokenRootGetNameOutput = {
    value0: string /* string */,
};

export type FlexTokenRootGetSymbolOutput = {
    value0: string /* string */,
};

export type FlexTokenRootGetDecimalsOutput = {
    value0: number /* uint8 */,
};

export type FlexTokenRootGetRootKeyOutput = {
    value0: string /* uint256 */,
};

export type FlexTokenRootGetRootOwnerOutput = {
    value0?: string /* optional(address) */,
};

export type FlexTokenRootGetTotalSupplyOutput = {
    value0: string /* uint128 */,
};

export type FlexTokenRootGetTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type FlexTokenRootHasWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type FlexTokenRootGetWalletCodeOutput = {
    value0: string /* cell */,
};

export type FlexTokenRootGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type FlexTokenRootGetWalletAddressOutput = {
    value0: string /* address */,
};

export type FlexTokenRootGetWalletCodeHashOutput = {
    value0: string /* uint256 */,
};


export class FlexTokenRootAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "e9300ccb30beb743f1d1086b751efff8b114d147bd819e0e1e6c34e470fa2d8d",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexTokenRootAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_owner?: string /* optional(address) */,
        total_supply: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootSetWalletCodeOutput,
    }> {
        return await runHelper(this, "setWalletCode", input);
    }

    async setWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootSetWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployWallet(input: FlexTokenRootDeployWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootDeployWalletOutput,
    }> {
        return await runHelper(this, "deployWallet", input);
    }

    async deployWallet(input: FlexTokenRootDeployWalletInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootDeployWalletOutput,
    }> {
        return await runLocalHelper(this, "deployWallet", input);
    }

    async runDeployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runGrant(input: FlexTokenRootGrantInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "grant", input);
    }

    async grant(input: FlexTokenRootGrantInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "grant", input);
    }

    async runMint(input: FlexTokenRootMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootMintOutput,
    }> {
        return await runHelper(this, "mint", input);
    }

    async mint(input: FlexTokenRootMintInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootMintOutput,
    }> {
        return await runLocalHelper(this, "mint", input);
    }

    async runRequestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetName(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetNameOutput,
    }> {
        return await runHelper(this, "getName", {});
    }

    async getName(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetNameOutput,
    }> {
        return await runLocalHelper(this, "getName", {});
    }

    async runGetSymbol(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetSymbolOutput,
    }> {
        return await runHelper(this, "getSymbol", {});
    }

    async getSymbol(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetSymbolOutput,
    }> {
        return await runLocalHelper(this, "getSymbol", {});
    }

    async runGetDecimals(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetDecimalsOutput,
    }> {
        return await runHelper(this, "getDecimals", {});
    }

    async getDecimals(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetDecimalsOutput,
    }> {
        return await runLocalHelper(this, "getDecimals", {});
    }

    async runGetRootKey(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetRootKeyOutput,
    }> {
        return await runHelper(this, "getRootKey", {});
    }

    async getRootKey(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetRootKeyOutput,
    }> {
        return await runLocalHelper(this, "getRootKey", {});
    }

    async runGetRootOwner(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetRootOwnerOutput,
    }> {
        return await runHelper(this, "getRootOwner", {});
    }

    async getRootOwner(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetRootOwnerOutput,
    }> {
        return await runLocalHelper(this, "getRootOwner", {});
    }

    async runGetTotalSupply(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetTotalSupplyOutput,
    }> {
        return await runHelper(this, "getTotalSupply", {});
    }

    async getTotalSupply(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetTotalSupplyOutput,
    }> {
        return await runLocalHelper(this, "getTotalSupply", {});
    }

    async runGetTotalGranted(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetTotalGrantedOutput,
    }> {
        return await runHelper(this, "getTotalGranted", {});
    }

    async getTotalGranted(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "getTotalGranted", {});
    }

    async runHasWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootHasWalletCodeOutput,
    }> {
        return await runHelper(this, "hasWalletCode", {});
    }

    async hasWalletCode(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootHasWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasWalletCode", {});
    }

    async runGetWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetWalletCodeOutput,
    }> {
        return await runHelper(this, "getWalletCode", {});
    }

    async getWalletCode(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "getWalletCode", {});
    }

    async runGetWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetWalletCodeHash(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexTokenRootGetWalletCodeHashOutput,
    }> {
        return await runHelper(this, "getWalletCodeHash", {});
    }

    async getWalletCodeHash(): Promise<{
        transaction: Transaction,
        output: FlexTokenRootGetWalletCodeHashOutput,
    }> {
        return await runLocalHelper(this, "getWalletCodeHash", {});
    }

}

