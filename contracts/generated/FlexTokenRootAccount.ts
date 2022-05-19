
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

export class FlexTokenRootAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_owner","type":"optional(address)"},{"name":"total_supply","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWalletCode","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xb"},{"name":"deployWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xc"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xd"},{"name":"grant","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"dest","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"mint","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"tokens","type":"uint128"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xf"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x10"},{"name":"getName","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x11"},{"name":"getSymbol","inputs":[],"outputs":[{"name":"value0","type":"string"}],"id":"0x12"},{"name":"getDecimals","inputs":[],"outputs":[{"name":"value0","type":"uint8"}],"id":"0x13"},{"name":"getRootKey","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x14"},{"name":"getRootOwner","inputs":[],"outputs":[{"name":"value0","type":"optional(address)"}],"id":"0x15"},{"name":"getTotalSupply","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"},{"name":"getTotalGranted","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"},{"name":"hasWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x18"},{"name":"getWalletCode","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0x19"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getWalletCodeHash","inputs":[],"outputs":[{"name":"value0","type":"uint256"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_owner_","type":"optional(address)"},{"name":"total_supply_","type":"uint128"},{"name":"total_granted_","type":"uint128"},{"name":"wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "a4a40941de11fd50129c147f40dd802bb51ada99ca7162b7d1f15169903b64b1",
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

    async runSetWalletCode(input: {
        _answer_id: number /* uint32 */,
        wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runHelper(this, "setWalletCode", input);
    }

    async runLocalSetWalletCode(input: {
        _answer_id: number /* uint32 */,
        wallet_code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runLocalHelper(this, "setWalletCode", input);
    }

    async runDeployWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        notify?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployWallet", input);
    }

    async runLocalDeployWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        notify?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployWallet", input);
    }

    async runDeployEmptyWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async runLocalDeployEmptyWallet(input: {
        _answer_id: number /* uint32 */,
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runGrant(input: {
        _answer_id: number /* uint32 */,
        dest: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        notify?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "grant", input);
    }

    async runLocalGrant(input: {
        _answer_id: number /* uint32 */,
        dest: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        notify?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "grant", input);
    }

    async runMint(input: {
        _answer_id: number /* uint32 */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runHelper(this, "mint", input);
    }

    async runLocalMint(input: {
        _answer_id: number /* uint32 */,
        tokens: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runLocalHelper(this, "mint", input);
    }

    async runRequestTotalGranted(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async runLocalRequestTotalGranted(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runGetName(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* string */,
        }
    }> {
        return await runHelper(this, "getName", {});
    }

    async runLocalGetName(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* string */,
        }
    }> {
        return await runLocalHelper(this, "getName", {});
    }

    async runGetSymbol(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* string */,
        }
    }> {
        return await runHelper(this, "getSymbol", {});
    }

    async runLocalGetSymbol(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* string */,
        }
    }> {
        return await runLocalHelper(this, "getSymbol", {});
    }

    async runGetDecimals(): Promise<{
        transaction: Transaction,
        output: {
            value0: number /* uint8 */,
        }
    }> {
        return await runHelper(this, "getDecimals", {});
    }

    async runLocalGetDecimals(): Promise<{
        transaction: Transaction,
        output: {
            value0: number /* uint8 */,
        }
    }> {
        return await runLocalHelper(this, "getDecimals", {});
    }

    async runGetRootKey(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runHelper(this, "getRootKey", {});
    }

    async runLocalGetRootKey(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runLocalHelper(this, "getRootKey", {});
    }

    async runGetRootOwner(): Promise<{
        transaction: Transaction,
        output: {
            value0?: string /* optional(address) */,
        }
    }> {
        return await runHelper(this, "getRootOwner", {});
    }

    async runLocalGetRootOwner(): Promise<{
        transaction: Transaction,
        output: {
            value0?: string /* optional(address) */,
        }
    }> {
        return await runLocalHelper(this, "getRootOwner", {});
    }

    async runGetTotalSupply(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "getTotalSupply", {});
    }

    async runLocalGetTotalSupply(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "getTotalSupply", {});
    }

    async runGetTotalGranted(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "getTotalGranted", {});
    }

    async runLocalGetTotalGranted(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "getTotalGranted", {});
    }

    async runHasWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runHelper(this, "hasWalletCode", {});
    }

    async runLocalHasWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: boolean /* bool */,
        }
    }> {
        return await runLocalHelper(this, "hasWalletCode", {});
    }

    async runGetWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runHelper(this, "getWalletCode", {});
    }

    async runLocalGetWalletCode(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runLocalHelper(this, "getWalletCode", {});
    }

    async runGetWalletAddress(input: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async runLocalGetWalletAddress(input: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetWalletCodeHash(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runHelper(this, "getWalletCodeHash", {});
    }

    async runLocalGetWalletCodeHash(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint256 */,
        }
    }> {
        return await runLocalHelper(this, "getWalletCodeHash", {});
    }

}

