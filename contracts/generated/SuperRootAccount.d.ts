import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    evers: string | number | bigint;
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
    runOnDeploy(input: SuperRootOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(input: SuperRootOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runUpdate(input: SuperRootUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    update(input: SuperRootUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    runUpdateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<{
        transaction: Transaction;
    }>;
    updateConfirmed(input: SuperRootUpdateConfirmedInput): Promise<{
        transaction: Transaction;
    }>;
    runRelease(): Promise<{
        transaction: Transaction;
    }>;
    release(): Promise<{
        transaction: Transaction;
    }>;
    runProxy(input: SuperRootProxyInput): Promise<{
        transaction: Transaction;
    }>;
    proxy(input: SuperRootProxyInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployWrappersConfigOutput;
    }>;
    deployWrappersConfig(input: SuperRootDeployWrappersConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployWrappersConfigOutput;
    }>;
    runDeployFlex(input: SuperRootDeployFlexInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployFlexOutput;
    }>;
    deployFlex(input: SuperRootDeployFlexInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployFlexOutput;
    }>;
    runDeployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployUserDataConfigOutput;
    }>;
    deployUserDataConfig(input: SuperRootDeployUserDataConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootDeployUserDataConfigOutput;
    }>;
    runCloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<{
        transaction: Transaction;
    }>;
    cloneWrappersConfig(input: SuperRootCloneWrappersConfigInput): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: SuperRootTransferInput): Promise<{
        transaction: Transaction;
    }>;
    transfer(input: SuperRootTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<{
        transaction: Transaction;
    }>;
    transferReserveTokens(input: SuperRootTransferReserveTokensInput): Promise<{
        transaction: Transaction;
    }>;
    runSetFlags(input: SuperRootSetFlagsInput): Promise<{
        transaction: Transaction;
    }>;
    setFlags(input: SuperRootSetFlagsInput): Promise<{
        transaction: Transaction;
    }>;
    runSetOwner(input: SuperRootSetOwnerInput): Promise<{
        transaction: Transaction;
    }>;
    setOwner(input: SuperRootSetOwnerInput): Promise<{
        transaction: Transaction;
    }>;
    runSetUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<{
        transaction: Transaction;
    }>;
    setUpdateTeam(input: SuperRootSetUpdateTeamInput): Promise<{
        transaction: Transaction;
    }>;
    runSetNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<{
        transaction: Transaction;
    }>;
    setNextSuperRoot(input: SuperRootSetNextSuperRootInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: SuperRootGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: SuperRootGetDetailsOutput;
    }>;
    runGetGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootGetGlobalConfigOutput;
    }>;
    getGlobalConfig(input: SuperRootGetGlobalConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootGetGlobalConfigOutput;
    }>;
    runGetCurrentGlobalConfig(): Promise<{
        transaction: Transaction;
        output: SuperRootGetCurrentGlobalConfigOutput;
    }>;
    getCurrentGlobalConfig(): Promise<{
        transaction: Transaction;
        output: SuperRootGetCurrentGlobalConfigOutput;
    }>;
}
//# sourceMappingURL=SuperRootAccount.d.ts.map