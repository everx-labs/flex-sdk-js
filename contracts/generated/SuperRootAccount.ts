
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
        codeHash: "d322e0f58c331e52456b0c969cf8cbdf98cd0ebbcdeea7ce9940d91ea765b09d",
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

