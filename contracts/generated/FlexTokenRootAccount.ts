
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "8b7f59d7fc19eb2db0b3fb6e3d8c50d1c5fe6360a7df592a412069172e735cd6",
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

    async runSetWalletCode(input: FlexTokenRootSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootSetWalletCodeOutput>> {
        return await runHelper(this, "setWalletCode", input, options);
    }

    async setWalletCode(input: FlexTokenRootSetWalletCodeInput): Promise<RunLocalHelperResult<FlexTokenRootSetWalletCodeOutput>> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployWallet(input: FlexTokenRootDeployWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootDeployWalletOutput>> {
        return await runHelper(this, "deployWallet", input, options);
    }

    async deployWallet(input: FlexTokenRootDeployWalletInput): Promise<RunLocalHelperResult<FlexTokenRootDeployWalletOutput>> {
        return await runLocalHelper(this, "deployWallet", input);
    }

    async runDeployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootDeployEmptyWalletOutput>> {
        return await runHelper(this, "deployEmptyWallet", input, options);
    }

    async deployEmptyWallet(input: FlexTokenRootDeployEmptyWalletInput): Promise<RunLocalHelperResult<FlexTokenRootDeployEmptyWalletOutput>> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runGrant(input: FlexTokenRootGrantInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "grant", input, options);
    }

    async grant(input: FlexTokenRootGrantInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "grant", input);
    }

    async runMint(input: FlexTokenRootMintInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootMintOutput>> {
        return await runHelper(this, "mint", input, options);
    }

    async mint(input: FlexTokenRootMintInput): Promise<RunLocalHelperResult<FlexTokenRootMintOutput>> {
        return await runLocalHelper(this, "mint", input);
    }

    async runRequestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootRequestTotalGrantedOutput>> {
        return await runHelper(this, "requestTotalGranted", input, options);
    }

    async requestTotalGranted(input: FlexTokenRootRequestTotalGrantedInput): Promise<RunLocalHelperResult<FlexTokenRootRequestTotalGrantedOutput>> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetName(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetNameOutput>> {
        return await runHelper(this, "getName", {}, options);
    }

    async getName(): Promise<RunLocalHelperResult<FlexTokenRootGetNameOutput>> {
        return await runLocalHelper(this, "getName", {});
    }

    async runGetSymbol(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetSymbolOutput>> {
        return await runHelper(this, "getSymbol", {}, options);
    }

    async getSymbol(): Promise<RunLocalHelperResult<FlexTokenRootGetSymbolOutput>> {
        return await runLocalHelper(this, "getSymbol", {});
    }

    async runGetDecimals(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetDecimalsOutput>> {
        return await runHelper(this, "getDecimals", {}, options);
    }

    async getDecimals(): Promise<RunLocalHelperResult<FlexTokenRootGetDecimalsOutput>> {
        return await runLocalHelper(this, "getDecimals", {});
    }

    async runGetRootKey(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetRootKeyOutput>> {
        return await runHelper(this, "getRootKey", {}, options);
    }

    async getRootKey(): Promise<RunLocalHelperResult<FlexTokenRootGetRootKeyOutput>> {
        return await runLocalHelper(this, "getRootKey", {});
    }

    async runGetRootOwner(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetRootOwnerOutput>> {
        return await runHelper(this, "getRootOwner", {}, options);
    }

    async getRootOwner(): Promise<RunLocalHelperResult<FlexTokenRootGetRootOwnerOutput>> {
        return await runLocalHelper(this, "getRootOwner", {});
    }

    async runGetTotalSupply(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetTotalSupplyOutput>> {
        return await runHelper(this, "getTotalSupply", {}, options);
    }

    async getTotalSupply(): Promise<RunLocalHelperResult<FlexTokenRootGetTotalSupplyOutput>> {
        return await runLocalHelper(this, "getTotalSupply", {});
    }

    async runGetTotalGranted(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetTotalGrantedOutput>> {
        return await runHelper(this, "getTotalGranted", {}, options);
    }

    async getTotalGranted(): Promise<RunLocalHelperResult<FlexTokenRootGetTotalGrantedOutput>> {
        return await runLocalHelper(this, "getTotalGranted", {});
    }

    async runHasWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootHasWalletCodeOutput>> {
        return await runHelper(this, "hasWalletCode", {}, options);
    }

    async hasWalletCode(): Promise<RunLocalHelperResult<FlexTokenRootHasWalletCodeOutput>> {
        return await runLocalHelper(this, "hasWalletCode", {});
    }

    async runGetWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletCodeOutput>> {
        return await runHelper(this, "getWalletCode", {}, options);
    }

    async getWalletCode(): Promise<RunLocalHelperResult<FlexTokenRootGetWalletCodeOutput>> {
        return await runLocalHelper(this, "getWalletCode", {});
    }

    async runGetWalletAddress(input: FlexTokenRootGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletAddressOutput>> {
        return await runHelper(this, "getWalletAddress", input, options);
    }

    async getWalletAddress(input: FlexTokenRootGetWalletAddressInput): Promise<RunLocalHelperResult<FlexTokenRootGetWalletAddressOutput>> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetWalletCodeHash(options?: RunHelperOptions): Promise<RunHelperResult<FlexTokenRootGetWalletCodeHashOutput>> {
        return await runHelper(this, "getWalletCodeHash", {}, options);
    }

    async getWalletCodeHash(): Promise<RunLocalHelperResult<FlexTokenRootGetWalletCodeHashOutput>> {
        return await runLocalHelper(this, "getWalletCodeHash", {});
    }

}

