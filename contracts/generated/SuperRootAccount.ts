
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"global_config_code","type":"cell"},{"name":"flex_client_stub","type":"cell"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[],"id":"0xa"},{"name":"update","inputs":[{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[],"id":"0xb"},{"name":"updateConfirmed","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[],"id":"0xc"},{"name":"release","inputs":[],"outputs":[],"id":"0xd"},{"name":"proxy","inputs":[{"name":"msg","type":"cell"},{"name":"cant_work_during_update","type":"bool"},{"name":"starting_update","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"deployWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"},{"name":"wrappers_cfg_code","type":"cell"},{"name":"wic_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xf"},{"name":"deployFlex","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"name":"flex_code","type":"cell"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x10"},{"name":"deployUserDataConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"user_data_cfg_code","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x11"},{"name":"cloneWrappersConfig","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[],"id":"0x12"},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"transferReserveTokens","inputs":[{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"}],"outputs":[],"id":"0x14"},{"name":"setFlags","inputs":[{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[],"id":"0x15"},{"name":"setOwner","inputs":[{"name":"owner","type":"address"}],"outputs":[],"id":"0x16"},{"name":"setUpdateTeam","inputs":[{"name":"team","type":"optional(address)"}],"outputs":[],"id":"0x17"},{"name":"setNextSuperRoot","inputs":[{"name":"next_super_root","type":"address"}],"outputs":[],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"pubkey","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner","type":"address"},{"name":"update_team","type":"optional(address)"},{"name":"global_config_code","type":"cell"},{"name":"global_config_hash","type":"uint256"},{"name":"workchain_id","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version","type":"optional(tuple)"},{"name":"deploying_cfg","type":"optional(address)"},{"name":"cur_cfg","type":"optional(address)"},{"name":"beta_cfg","type":"optional(address)"},{"name":"prev_super_root","type":"optional(address)"},{"name":"next_super_root","type":"optional(address)"},{"name":"revision","type":"uint32"}],"id":"0x19"},{"name":"getGlobalConfig","inputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1a"},{"name":"getCurrentGlobalConfig","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x1b"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"stop_trade_","type":"bool"},{"name":"abandon_ship_","type":"bool"},{"name":"update_started_","type":"bool"},{"name":"owner_","type":"address"},{"name":"update_team_","type":"optional(address)"},{"name":"global_config_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"workchain_id_","type":"int8"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version_","type":"optional(tuple)"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"beta_version_","type":"optional(tuple)"},{"name":"deploying_cfg_","type":"optional(address)"},{"name":"prev_super_root_","type":"optional(address)"},{"name":"next_super_root_","type":"optional(address)"},{"name":"revision_","type":"uint32"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "905fd91d72345581ba463749383df23acae9a19cad805e248eb44225baf3b718",
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

    async runOnDeploy(input: SuperRootOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: SuperRootOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runUpdate(input: SuperRootUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "update", input, options);
    }

    async update(input: SuperRootUpdateInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "update", input);
    }

    async runUpdateConfirmed(input: SuperRootUpdateConfirmedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "updateConfirmed", input, options);
    }

    async updateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "updateConfirmed", input);
    }

    async runRelease(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "release", {}, options);
    }

    async release(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "release", {});
    }

    async runProxy(input: SuperRootProxyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "proxy", input, options);
    }

    async proxy(input: SuperRootProxyInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "proxy", input);
    }

    async runDeployWrappersConfig(input: SuperRootDeployWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployWrappersConfigOutput>> {
        return await runHelper(this, "deployWrappersConfig", input, options);
    }

    async deployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootDeployWrappersConfigOutput>> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootDeployFlexInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployFlexOutput>> {
        return await runHelper(this, "deployFlex", input, options);
    }

    async deployFlex(input: SuperRootDeployFlexInput): Promise<RunLocalHelperResult<SuperRootDeployFlexOutput>> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootDeployUserDataConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployUserDataConfigOutput>> {
        return await runHelper(this, "deployUserDataConfig", input, options);
    }

    async deployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<RunLocalHelperResult<SuperRootDeployUserDataConfigOutput>> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootCloneWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "cloneWrappersConfig", input, options);
    }

    async cloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runTransfer(input: SuperRootTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: SuperRootTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferReserveTokens(input: SuperRootTransferReserveTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferReserveTokens", input, options);
    }

    async transferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferReserveTokens", input);
    }

    async runSetFlags(input: SuperRootSetFlagsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlags", input, options);
    }

    async setFlags(input: SuperRootSetFlagsInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runSetOwner(input: SuperRootSetOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setOwner", input, options);
    }

    async setOwner(input: SuperRootSetOwnerInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootSetUpdateTeamInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setUpdateTeam", input, options);
    }

    async setUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootSetNextSuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setNextSuperRoot", input, options);
    }

    async setNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<SuperRootGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetGlobalConfig(input: SuperRootGetGlobalConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetGlobalConfigOutput>> {
        return await runHelper(this, "getGlobalConfig", input, options);
    }

    async getGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<RunLocalHelperResult<SuperRootGetGlobalConfigOutput>> {
        return await runLocalHelper(this, "getGlobalConfig", input);
    }

    async runGetCurrentGlobalConfig(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetCurrentGlobalConfigOutput>> {
        return await runHelper(this, "getCurrentGlobalConfig", {}, options);
    }

    async getCurrentGlobalConfig(): Promise<RunLocalHelperResult<SuperRootGetCurrentGlobalConfigOutput>> {
        return await runLocalHelper(this, "getCurrentGlobalConfig", {});
    }

}

