
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
export type SuperRootOnDeployInput = {
    global_config_code: string /* cell */,
    flex_client_stub: string /* cell */,
    prev_super_root?: string /* optional(address) */,
};

export type SuperRootUpdateInput = {
    cfg_deploy_evers: string | number | bigint /* uint128 */,
    cfg_keep_evers: string | number | bigint /* uint128 */,
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    wrappers_cfg: string /* address */,
    flex: string /* address */,
    user_cfg: string /* address */,
    description: string /* string */,
};

export type SuperRootUpdateConfirmedInput = {
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
};

export type SuperRootProxyInput = {
    msg: string /* cell */,
    cant_work_during_update: boolean /* bool */,
    starting_update: boolean /* bool */,
};

export type SuperRootDeployWrappersConfigInput = {
    _answer_id: number /* uint32 */,
    deploy_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    token_version: number /* uint32 */,
    wrappers_cfg_code: string /* cell */,
    wic_code: string /* cell */,
};

export type SuperRootDeployWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootDeployFlexInput = {
    _answer_id: number /* uint32 */,
    deploy_evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
    exchange_version: number /* uint32 */,
    flex_code: string /* cell */,
    xchg_pair_code: string /* cell */,
    xchg_price_code: string /* cell */,
    ev_cfg: {
        transfer_tip3: string | number | bigint /* uint128 */,
        return_ownership: string | number | bigint /* uint128 */,
        order_answer: string | number | bigint /* uint128 */,
        process_queue: string | number | bigint /* uint128 */,
        send_notify: string | number | bigint /* uint128 */,
        dest_wallet_keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
};

export type SuperRootDeployFlexOutput = {
    value0: string /* address */,
};

export type SuperRootDeployUserDataConfigInput = {
    _answer_id: number /* uint32 */,
    deploy_evers: string | number | bigint /* uint128 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* tuple */,
    user_data_cfg_code: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type SuperRootDeployUserDataConfigOutput = {
    value0: string /* address */,
};

export type SuperRootCloneWrappersConfigInput = {
    _answer_id: number /* uint32 */,
    wrappers_cfg: string /* address */,
    wrapper_cfg_keep_evers: string | number | bigint /* uint128 */,
    clone_deploy_evers: string | number | bigint /* uint128 */,
    wic_evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    new_token_version: number /* uint32 */,
    wrapper_deployers: string[] /* address[] */,
};

export type SuperRootTransferInput = {
    to: string /* address */,
    evers: string | number | bigint /* uint128 */,
};

export type SuperRootTransferReserveTokensInput = {
    wrapper: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    to: string /* address */,
};

export type SuperRootSetFlagsInput = {
    stop_trade?: boolean /* optional(bool) */,
    abandon_ship?: boolean /* optional(bool) */,
    update_started?: boolean /* optional(bool) */,
};

export type SuperRootSetOwnerInput = {
    owner: string /* address */,
};

export type SuperRootSetUpdateTeamInput = {
    team?: string /* optional(address) */,
};

export type SuperRootSetNextSuperRootInput = {
    next_super_root: string /* address */,
};

export type SuperRootGetDetailsOutput = {
    pubkey: string /* uint256 */,
    stop_trade_: boolean /* bool */,
    abandon_ship_: boolean /* bool */,
    update_started_: boolean /* bool */,
    owner: string /* address */,
    update_team?: string /* optional(address) */,
    global_config_code: string /* cell */,
    global_config_hash: string /* uint256 */,
    workchain_id: number /* int8 */,
    version?: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* optional(tuple) */,
    beta_version?: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* optional(tuple) */,
    deploying_cfg?: string /* optional(address) */,
    cur_cfg?: string /* optional(address) */,
    beta_cfg?: string /* optional(address) */,
    prev_super_root?: string /* optional(address) */,
    next_super_root?: string /* optional(address) */,
    revision: number /* uint32 */,
};

export type SuperRootGetGlobalConfigInput = {
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
};

export type SuperRootGetGlobalConfigOutput = {
    value0: string /* address */,
};

export type SuperRootGetCurrentGlobalConfigOutput = {
    value0: string /* address */,
};


export class SuperRootAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"global_config_code","type":"cell"},{"name":"flex_client_stub","type":"cell"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[],"id":"0xa"},{"name":"update","inputs":[{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[],"id":"0xb"},{"name":"updateConfirmed","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[],"id":"0xc"},{"name":"release","inputs":[],"outputs":[],"id":"0xd"},{"name":"proxy","inputs":[{"name":"msg","type":"cell"},{"name":"cant_work_during_update","type":"bool"},{"name":"starting_update","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"deployWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"},{"name":"wrappers_cfg_code","type":"cell"},{"name":"wic_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xf"},{"name":"deployFlex","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"name":"flex_code","type":"cell"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x10"},{"name":"deployUserDataConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"user_data_cfg_code","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x11"},{"name":"cloneWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[],"id":"0x12"},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"transferReserveTokens","inputs":[{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"}],"outputs":[],"id":"0x14"},{"name":"setFlags","inputs":[{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[],"id":"0x15"},{"name":"setOwner","inputs":[{"name":"owner","type":"address"}],"outputs":[],"id":"0x16"},{"name":"setUpdateTeam","inputs":[{"name":"team","type":"optional(address)"}],"outputs":[],"id":"0x17"},{"name":"setNextSuperRoot","inputs":[{"name":"next_super_root","type":"address"}],"outputs":[],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"pubkey","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner","type":"address"},{"name":"update_team","type":"optional(address)"},{"name":"global_config_code","type":"cell"},{"name":"global_config_hash","type":"uint256"},{"name":"workchain_id","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version","type":"optional(tuple)"},{"name":"deploying_cfg","type":"optional(address)"},{"name":"cur_cfg","type":"optional(address)"},{"name":"beta_cfg","type":"optional(address)"},{"name":"prev_super_root","type":"optional(address)"},{"name":"next_super_root","type":"optional(address)"},{"name":"revision","type":"uint32"}],"id":"0x19"},{"name":"getGlobalConfig","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getCurrentGlobalConfig","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner_","type":"address"},{"name":"update_team_","type":"optional(address)"},{"name":"global_config_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"workchain_id_","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version_","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version_","type":"optional(tuple)"},{"name":"deploying_cfg_","type":"optional(address)"},{"name":"prev_super_root_","type":"optional(address)"},{"name":"next_super_root_","type":"optional(address)"},{"name":"revision_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "82fd7723dc58393a0a1088fb4781579f8596e139d82fe258bb2e35fdb33595d6",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(SuperRootAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: SuperRootOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: SuperRootOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runUpdate(input: SuperRootUpdateInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "update", input);
    }

    async update(input: SuperRootUpdateInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "update", input);
    }

    async runUpdateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "updateConfirmed", input);
    }

    async updateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "updateConfirmed", input);
    }

    async runRelease(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "release", {});
    }

    async release(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "release", {});
    }

    async runProxy(input: SuperRootProxyInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "proxy", input);
    }

    async proxy(input: SuperRootProxyInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "proxy", input);
    }

    async runDeployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootDeployWrappersConfigOutput,
    }> {
        return await runHelper(this, "deployWrappersConfig", input);
    }

    async deployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootDeployWrappersConfigOutput,
    }> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootDeployFlexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootDeployFlexOutput,
    }> {
        return await runHelper(this, "deployFlex", input);
    }

    async deployFlex(input: SuperRootDeployFlexInput): Promise<{
        transaction: Transaction,
        output: SuperRootDeployFlexOutput,
    }> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootDeployUserDataConfigOutput,
    }> {
        return await runHelper(this, "deployUserDataConfig", input);
    }

    async deployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootDeployUserDataConfigOutput,
    }> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cloneWrappersConfig", input);
    }

    async cloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runTransfer(input: SuperRootTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: SuperRootTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferReserveTokens", input);
    }

    async transferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferReserveTokens", input);
    }

    async runSetFlags(input: SuperRootSetFlagsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setFlags", input);
    }

    async setFlags(input: SuperRootSetFlagsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runSetOwner(input: SuperRootSetOwnerInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setOwner", input);
    }

    async setOwner(input: SuperRootSetOwnerInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setUpdateTeam", input);
    }

    async setUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setNextSuperRoot", input);
    }

    async setNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: SuperRootGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootGetGlobalConfigOutput,
    }> {
        return await runHelper(this, "getGlobalConfig", input);
    }

    async getGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootGetGlobalConfigOutput,
    }> {
        return await runLocalHelper(this, "getGlobalConfig", input);
    }

    async runGetCurrentGlobalConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootGetCurrentGlobalConfigOutput,
    }> {
        return await runHelper(this, "getCurrentGlobalConfig", {});
    }

    async getCurrentGlobalConfig(): Promise<{
        transaction: Transaction,
        output: SuperRootGetCurrentGlobalConfigOutput,
    }> {
        return await runLocalHelper(this, "getCurrentGlobalConfig", {});
    }

}

