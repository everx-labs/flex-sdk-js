
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
export type RootTokenContractSetWalletCodeInput = {
    _answer_id: number /* uint32 */,
    wallet_code: string /* cell */,
};

export type RootTokenContractSetWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractDeployWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type RootTokenContractDeployWalletOutput = {
    value0: string /* address */,
};

export type RootTokenContractDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type RootTokenContractDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type RootTokenContractGrantInput = {
    _answer_id: number /* uint32 */,
    dest: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type RootTokenContractMintInput = {
    _answer_id: number /* uint32 */,
    tokens: string | number | bigint /* uint128 */,
};

export type RootTokenContractMintOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type RootTokenContractRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractGetNameOutput = {
    value0: string /* string */,
};

export type RootTokenContractGetSymbolOutput = {
    value0: string /* string */,
};

export type RootTokenContractGetDecimalsOutput = {
    value0: number /* uint8 */,
};

export type RootTokenContractGetRootKeyOutput = {
    value0: string /* uint256 */,
};

export type RootTokenContractGetRootOwnerOutput = {
    value0?: string /* optional(address) */,
};

export type RootTokenContractGetTotalSupplyOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractGetTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type RootTokenContractHasWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type RootTokenContractGetWalletCodeOutput = {
    value0: string /* cell */,
};

export type RootTokenContractGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type RootTokenContractGetWalletAddressOutput = {
    value0: string /* address */,
};

export type RootTokenContractGetWalletCodeHashOutput = {
    value0: string /* uint256 */,
};


export class RootTokenContractAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "e397c6e7d17dee0441999daad43ac01b19bb703584d12ad18dce48cbac615c4c",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(RootTokenContractAccount.package, options);
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

    async runSetWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractSetWalletCodeOutput,
    }> {
        return await runHelper(this, "setWalletCode", input);
    }

    async setWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractSetWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployWallet(input: RootTokenContractDeployWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractDeployWalletOutput,
    }> {
        return await runHelper(this, "deployWallet", input);
    }

    async deployWallet(input: RootTokenContractDeployWalletInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractDeployWalletOutput,
    }> {
        return await runLocalHelper(this, "deployWallet", input);
    }

    async runDeployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runGrant(input: RootTokenContractGrantInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "grant", input);
    }

    async grant(input: RootTokenContractGrantInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "grant", input);
    }

    async runMint(input: RootTokenContractMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractMintOutput,
    }> {
        return await runHelper(this, "mint", input);
    }

    async mint(input: RootTokenContractMintInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractMintOutput,
    }> {
        return await runLocalHelper(this, "mint", input);
    }

    async runRequestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetName(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetNameOutput,
    }> {
        return await runHelper(this, "getName", {});
    }

    async getName(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetNameOutput,
    }> {
        return await runLocalHelper(this, "getName", {});
    }

    async runGetSymbol(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetSymbolOutput,
    }> {
        return await runHelper(this, "getSymbol", {});
    }

    async getSymbol(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetSymbolOutput,
    }> {
        return await runLocalHelper(this, "getSymbol", {});
    }

    async runGetDecimals(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetDecimalsOutput,
    }> {
        return await runHelper(this, "getDecimals", {});
    }

    async getDecimals(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetDecimalsOutput,
    }> {
        return await runLocalHelper(this, "getDecimals", {});
    }

    async runGetRootKey(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetRootKeyOutput,
    }> {
        return await runHelper(this, "getRootKey", {});
    }

    async getRootKey(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetRootKeyOutput,
    }> {
        return await runLocalHelper(this, "getRootKey", {});
    }

    async runGetRootOwner(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetRootOwnerOutput,
    }> {
        return await runHelper(this, "getRootOwner", {});
    }

    async getRootOwner(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetRootOwnerOutput,
    }> {
        return await runLocalHelper(this, "getRootOwner", {});
    }

    async runGetTotalSupply(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetTotalSupplyOutput,
    }> {
        return await runHelper(this, "getTotalSupply", {});
    }

    async getTotalSupply(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetTotalSupplyOutput,
    }> {
        return await runLocalHelper(this, "getTotalSupply", {});
    }

    async runGetTotalGranted(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetTotalGrantedOutput,
    }> {
        return await runHelper(this, "getTotalGranted", {});
    }

    async getTotalGranted(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "getTotalGranted", {});
    }

    async runHasWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractHasWalletCodeOutput,
    }> {
        return await runHelper(this, "hasWalletCode", {});
    }

    async hasWalletCode(): Promise<{
        transaction: Transaction,
        output: RootTokenContractHasWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasWalletCode", {});
    }

    async runGetWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetWalletCodeOutput,
    }> {
        return await runHelper(this, "getWalletCode", {});
    }

    async getWalletCode(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "getWalletCode", {});
    }

    async runGetWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetWalletCodeHash(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: RootTokenContractGetWalletCodeHashOutput,
    }> {
        return await runHelper(this, "getWalletCodeHash", {});
    }

    async getWalletCodeHash(): Promise<{
        transaction: Transaction,
        output: RootTokenContractGetWalletCodeHashOutput,
    }> {
        return await runLocalHelper(this, "getWalletCodeHash", {});
    }

}

