
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
        codeHash: "94e6779d739866969d68cef1dfea2771c0680dd2441f0888b95d86b10b04ac40",
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

