
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
export type WrapperEverInitInput = {
    _answer_id: number /* uint32 */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperEverInitOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperEverDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperEverOnEverTransferInput = {
    tokens: string | number | bigint /* uint128 */,
    args: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
        evers: string | number | bigint /* uint128 */,
        keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
};

export type WrapperEverBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    notify?: string /* optional(cell) */,
};

export type WrapperEverTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperEverRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperEverClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperEverClonedOutput = {
    first?: string /* optional(address) */,
    second: string /* uint256 */,
};

export type WrapperEverSetClonedInput = {
    cloned?: string /* optional(address) */,
    cloned_pubkey: string | number | bigint /* uint256 */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperEverGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    total_granted: string /* uint128 */,
    wallet_code: string /* cell */,
    external_wallet?: string /* optional(address) */,
    reserve_wallet: string /* address */,
    super_root: string /* address */,
    cloned?: string /* optional(address) */,
    type_id: number /* uint8 */,
};

export type WrapperEverGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperEverHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperEverGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperEverGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperEverGetReserveWalletOutput = {
    value0: string /* address */,
};


export class WrapperEverAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"bool"}],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onEverTransfer","inputs":[{"name":"tokens","type":"uint128"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"name":"args","type":"tuple"}],"outputs":[],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"},{"name":"type_id","type":"uint8"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"},{"name":"type_id_","type":"uint8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "5750bdac374eff1abe7ec3049fdc98f6bcef01a2024a4bb323b1c7100041294c",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperEverAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverInitOutput,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperEverInitInput): Promise<{
        transaction: Transaction,
        output: WrapperEverInitOutput,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperEverDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onEverTransfer", input);
    }

    async onEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onEverTransfer", input);
    }

    async runBurn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperEverClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperEverClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperEverSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperEverHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperEverGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperEverGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

