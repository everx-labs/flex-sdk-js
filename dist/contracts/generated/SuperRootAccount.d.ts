import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type SuperRootOnDeployInput = {
    global_config_code: string;
    flex_client_stub: string;
    prev_super_root?: string;
};
export declare type SuperRootUpdateInput = {
    cfg_deploy_evers: string | number | bigint;
    cfg_keep_evers: string | number | bigint;
    version: {
        wallet: number;
        exchange: number;
        user: number;
    };
    wrappers_cfg: string;
    flex: string;
    user_cfg: string;
    description: string;
};
export declare type SuperRootUpdateConfirmedInput = {
    version: {
        wallet: number;
        exchange: number;
        user: number;
    };
};
export declare type SuperRootProxyInput = {
    msg: string;
    cant_work_during_update: boolean;
    starting_update: boolean;
};
export declare type SuperRootDeployWrappersConfigInput = {
    _answer_id: number;
    deploy_evers: string | number | bigint;
    wrappers_cfg_keep_evers: string | number | bigint;
    token_version: number;
    wrappers_cfg_code: string;
    wic_code: string;
};
export declare type SuperRootDeployWrappersConfigOutput = {
    value0: string;
};
export declare type SuperRootDeployFlexInput = {
    _answer_id: number;
    deploy_evers: string | number | bigint;
    keep_evers: string | number | bigint;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        pair_keep: string | number | bigint;
    };
    old_flex?: string;
    exchange_version: number;
    flex_code: string;
    xchg_pair_code: string;
    xchg_price_code: string;
    ev_cfg: {
        transfer_tip3: string | number | bigint;
        return_ownership: string | number | bigint;
        order_answer: string | number | bigint;
        process_queue: string | number | bigint;
        send_notify: string | number | bigint;
        dest_wallet_keep_evers: string | number | bigint;
    };
    deals_limit: number;
};
export declare type SuperRootDeployFlexOutput = {
    value0: string;
};
export declare type SuperRootDeployUserDataConfigInput = {
    _answer_id: number;
    deploy_evers: string | number | bigint;
    triplet: {
        wallet: number;
        exchange: number;
        user: number;
    };
    binding: {
        flex: string;
        unsalted_price_code_hash: string | number | bigint;
    };
    user_data_cfg_code: string;
    flex_client_code: string;
    auth_index_code: string;
    user_id_index_code: string;
};
export declare type SuperRootDeployUserDataConfigOutput = {
    value0: string;
};
export declare type SuperRootCloneWrappersConfigInput = {
    _answer_id: number;
    wrappers_cfg: string;
    wrapper_cfg_keep_evers: string | number | bigint;
    clone_deploy_evers: string | number | bigint;
    wic_evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    new_token_version: number;
    wrapper_deployers: string[];
};
export declare type SuperRootTransferInput = {
    to: string;
    evers: string | number | bigint;
};
export declare type SuperRootTransferReserveTokensInput = {
    wrapper: string;
    tokens: string | number | bigint;
    to: string;
};
export declare type SuperRootSetFlagsInput = {
    stop_trade?: boolean;
    abandon_ship?: boolean;
    update_started?: boolean;
};
export declare type SuperRootSetOwnerInput = {
    owner: string;
};
export declare type SuperRootSetUpdateTeamInput = {
    team?: string;
};
export declare type SuperRootSetNextSuperRootInput = {
    next_super_root: string;
};
export declare type SuperRootGetDetailsOutput = {
    pubkey: string;
    stop_trade_: boolean;
    abandon_ship_: boolean;
    update_started_: boolean;
    owner: string;
    update_team?: string;
    global_config_code: string;
    global_config_hash: string;
    workchain_id: number;
    version?: {
        wallet: number;
        exchange: number;
        user: number;
    };
    beta_version?: {
        wallet: number;
        exchange: number;
        user: number;
    };
    deploying_cfg?: string;
    cur_cfg?: string;
    beta_cfg?: string;
    prev_super_root?: string;
    next_super_root?: string;
    revision: number;
};
export declare type SuperRootGetGlobalConfigInput = {
    version: {
        wallet: number;
        exchange: number;
        user: number;
    };
};
export declare type SuperRootGetGlobalConfigOutput = {
    value0: string;
};
export declare type SuperRootGetCurrentGlobalConfigOutput = {
    value0: string;
};
export declare class SuperRootAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: SuperRootOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: SuperRootOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runUpdate(input: SuperRootUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    update(input: SuperRootUpdateInput): Promise<RunLocalHelperResult<void>>;
    runUpdateConfirmed(input: SuperRootUpdateConfirmedInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    updateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<RunLocalHelperResult<void>>;
    runRelease(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    release(): Promise<RunLocalHelperResult<void>>;
    runProxy(input: SuperRootProxyInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    proxy(input: SuperRootProxyInput): Promise<RunLocalHelperResult<void>>;
    runDeployWrappersConfig(input: SuperRootDeployWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployWrappersConfigOutput>>;
    deployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootDeployWrappersConfigOutput>>;
    runDeployFlex(input: SuperRootDeployFlexInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployFlexOutput>>;
    deployFlex(input: SuperRootDeployFlexInput): Promise<RunLocalHelperResult<SuperRootDeployFlexOutput>>;
    runDeployUserDataConfig(input: SuperRootDeployUserDataConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootDeployUserDataConfigOutput>>;
    deployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<RunLocalHelperResult<SuperRootDeployUserDataConfigOutput>>;
    runCloneWrappersConfig(input: SuperRootCloneWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    cloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<RunLocalHelperResult<void>>;
    runTransfer(input: SuperRootTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: SuperRootTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferReserveTokens(input: SuperRootTransferReserveTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<RunLocalHelperResult<void>>;
    runSetFlags(input: SuperRootSetFlagsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setFlags(input: SuperRootSetFlagsInput): Promise<RunLocalHelperResult<void>>;
    runSetOwner(input: SuperRootSetOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setOwner(input: SuperRootSetOwnerInput): Promise<RunLocalHelperResult<void>>;
    runSetUpdateTeam(input: SuperRootSetUpdateTeamInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<RunLocalHelperResult<void>>;
    runSetNextSuperRoot(input: SuperRootSetNextSuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<SuperRootGetDetailsOutput>>;
    runGetGlobalConfig(input: SuperRootGetGlobalConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetGlobalConfigOutput>>;
    getGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<RunLocalHelperResult<SuperRootGetGlobalConfigOutput>>;
    runGetCurrentGlobalConfig(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootGetCurrentGlobalConfigOutput>>;
    getCurrentGlobalConfig(): Promise<RunLocalHelperResult<SuperRootGetCurrentGlobalConfigOutput>>;
}
//# sourceMappingURL=SuperRootAccount.d.ts.map