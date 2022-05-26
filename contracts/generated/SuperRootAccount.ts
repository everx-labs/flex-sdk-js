
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
    evers: string | number | bigint /* uint128 */,
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
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"global_config_code","type":"cell"},{"name":"flex_client_stub","type":"cell"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[],"id":"0xa"},{"name":"update","inputs":[{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[],"id":"0xb"},{"name":"updateConfirmed","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[],"id":"0xc"},{"name":"release","inputs":[],"outputs":[],"id":"0xd"},{"name":"proxy","inputs":[{"name":"msg","type":"cell"},{"name":"cant_work_during_update","type":"bool"},{"name":"starting_update","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"deployWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"},{"name":"wrappers_cfg_code","type":"cell"},{"name":"wic_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xf"},{"name":"deployFlex","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"name":"flex_code","type":"cell"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x10"},{"name":"deployUserDataConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"user_data_cfg_code","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x11"},{"name":"cloneWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[],"id":"0x12"},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"transferReserveTokens","inputs":[{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x14"},{"name":"setFlags","inputs":[{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[],"id":"0x15"},{"name":"setOwner","inputs":[{"name":"owner","type":"address"}],"outputs":[],"id":"0x16"},{"name":"setUpdateTeam","inputs":[{"name":"team","type":"optional(address)"}],"outputs":[],"id":"0x17"},{"name":"setNextSuperRoot","inputs":[{"name":"next_super_root","type":"address"}],"outputs":[],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"pubkey","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner","type":"address"},{"name":"update_team","type":"optional(address)"},{"name":"global_config_code","type":"cell"},{"name":"global_config_hash","type":"uint256"},{"name":"workchain_id","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version","type":"optional(tuple)"},{"name":"deploying_cfg","type":"optional(address)"},{"name":"cur_cfg","type":"optional(address)"},{"name":"beta_cfg","type":"optional(address)"},{"name":"prev_super_root","type":"optional(address)"},{"name":"next_super_root","type":"optional(address)"},{"name":"revision","type":"uint32"}],"id":"0x19"},{"name":"getGlobalConfig","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getCurrentGlobalConfig","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner_","type":"address"},{"name":"update_team_","type":"optional(address)"},{"name":"global_config_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"workchain_id_","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version_","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version_","type":"optional(tuple)"},{"name":"deploying_cfg_","type":"optional(address)"},{"name":"prev_super_root_","type":"optional(address)"},{"name":"next_super_root_","type":"optional(address)"},{"name":"revision_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "4d1add36972bbb6c08164207bda9973b019b332bbe3fe20b2a61aa14df130cc1",
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

