
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
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
        codeHash: "cc0c3ccd58dc53bd7d914bc3ba9ce7d93936bbe966c6bc23583c9c7583c534bc",
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

