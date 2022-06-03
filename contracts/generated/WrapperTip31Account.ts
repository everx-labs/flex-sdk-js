
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
export type WrapperTip31InitInput = {
    external_wallet: string /* address */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperTip31DeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperTip31DeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperTip31OnAcceptTokensTransferInput = {
    tokenRoot: string /* address */,
    amount: string | number | bigint /* uint128 */,
    sender: string /* address */,
    senderWallet: string /* address */,
    remainingGasTo: string /* address */,
    payload: string /* cell */,
};

export type WrapperTip31BurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    notify?: string /* optional(cell) */,
};

export type WrapperTip31TransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperTip31RequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperTip31RequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperTip31ClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperTip31ClonedOutput = {
    first?: string /* optional(address) */,
    second: string /* uint256 */,
};

export type WrapperTip31SetClonedInput = {
    cloned?: string /* optional(address) */,
    cloned_pubkey: string | number | bigint /* uint256 */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperTip31GetDetailsOutput = {
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

export type WrapperTip31GetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperTip31HasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperTip31GetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperTip31GetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperTip31GetReserveWalletOutput = {
    value0: string /* address */,
};


export class WrapperTip31Account extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onAcceptTokensTransfer","inputs":[{"name":"tokenRoot","type":"address"},{"name":"amount","type":"uint128"},{"name":"sender","type":"address"},{"name":"senderWallet","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"},{"name":"type_id","type":"uint8"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"},{"name":"out_deploy_value_","type":"uint128"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "d79e185018ee4cb0a4b6c6151833dc980579beb00e14fb25c5ab1dedfaff35fd",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperTip31Account.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperTip31InitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperTip31InitInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperTip31DeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31DeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperTip31DeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperTip31DeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnAcceptTokensTransfer(input: WrapperTip31OnAcceptTokensTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onAcceptTokensTransfer", input);
    }

    async onAcceptTokensTransfer(input: WrapperTip31OnAcceptTokensTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onAcceptTokensTransfer", input);
    }

    async runBurn(input: WrapperTip31BurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperTip31BurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperTip31TransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperTip31TransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperTip31RequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31RequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperTip31RequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperTip31RequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperTip31ClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31ClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperTip31ClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperTip31ClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperTip31SetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperTip31SetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31GetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperTip31GetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31GetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperTip31GetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31HasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperTip31HasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperTip31GetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31GetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperTip31GetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperTip31GetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperTip31GetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperTip31GetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

