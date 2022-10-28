import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type SuperRootOwnerSetCodeInput = {
    type: number;
    code: string;
};
export declare type SuperRootOwnerSetCodeInternalInput = {
    type: number;
    code: string;
};
export declare type SuperRootOwnerDeploySuperRootInput = {
    evers: string | number | bigint;
    prev_super_root?: string;
};
export declare type SuperRootOwnerDeploySuperRootOutput = {
    value0: string;
};
export declare type SuperRootOwnerUpdateInput = {
    main_evers: string | number | bigint;
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
export declare type SuperRootOwnerReleaseInput = {
    main_evers: string | number | bigint;
};
export declare type SuperRootOwnerAddWrapperTypeInput = {
    main_evers: string | number | bigint;
    wrappers_cfg_keep_evers: string | number | bigint;
    wrappers_cfg: string;
    type: number;
    wrapper_deployer: string;
};
export declare type SuperRootOwnerAddWrapperInput = {
    main_evers: string | number | bigint;
    wrappers_cfg_keep_evers: string | number | bigint;
    wrappers_cfg: string;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        wic_keep: string | number | bigint;
    };
    symbol: string;
    type: number;
    init_args: string;
};
export declare type SuperRootOwnerAddXchgPairInput = {
    main_evers: string | number | bigint;
    flex: string;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        pair_keep: string | number | bigint;
    };
    major_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    minor_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    min_amount: string | number | bigint;
    minmove: string | number | bigint;
    price_denum: string | number | bigint;
    notify_addr: string;
};
export declare type SuperRootOwnerUnlistWrapperInput = {
    main_evers: string | number | bigint;
    wrappers_cfg: string;
    wic: string;
};
export declare type SuperRootOwnerUnlistXchgPairInput = {
    main_evers: string | number | bigint;
    flex: string;
    pair: string;
};
export declare type SuperRootOwnerUpgradeBroxusWrapperWalletInput = {
    main_evers: string | number | bigint;
    wrapper: string;
};
export declare type SuperRootOwnerDeployWrappersConfigInput = {
    main_evers: string | number | bigint;
    deploy_evers: string | number | bigint;
    wrappers_cfg_keep_evers: string | number | bigint;
    token_version: number;
};
export declare type SuperRootOwnerDeployWrappersConfigOutput = {
    value0: string;
};
export declare type SuperRootOwnerDeployFlexInput = {
    main_evers: string | number | bigint;
    deploy_evers: string | number | bigint;
    keep_evers: string | number | bigint;
    evers: {
        deploy: string | number | bigint;
        setnext: string | number | bigint;
        pair_keep: string | number | bigint;
    };
    old_flex?: string;
    exchange_version: number;
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
export declare type SuperRootOwnerDeployFlexOutput = {
    value0: string;
};
export declare type SuperRootOwnerDeployUserDataConfigInput = {
    main_evers: string | number | bigint;
    deploy_evers: string | number | bigint;
    triplet: {
        wallet: number;
        exchange: number;
        user: number;
    };
    flex: string;
};
export declare type SuperRootOwnerDeployUserDataConfigOutput = {
    value0: string;
};
export declare type SuperRootOwnerCloneWrappersConfigInput = {
    main_evers: string | number | bigint;
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
export declare type SuperRootOwnerCloneWrappersConfigOutput = {
    value0: string;
};
export declare type SuperRootOwnerSetFlagsInput = {
    main_evers: string | number | bigint;
    stop_trade?: boolean;
    abandon_ship?: boolean;
    update_started?: boolean;
};
export declare type SuperRootOwnerTransferInput = {
    main_evers: string | number | bigint;
    to: string;
    evers: string | number | bigint;
};
export declare type SuperRootOwnerTransferReserveTokensInput = {
    main_evers: string | number | bigint;
    wrapper: string;
    tokens: string | number | bigint;
    to: string;
};
export declare type SuperRootOwnerSetOwnerInput = {
    main_evers: string | number | bigint;
    owner: string;
};
export declare type SuperRootOwnerSetUpdateTeamInput = {
    main_evers: string | number | bigint;
    team?: string;
};
export declare type SuperRootOwnerSetNextSuperRootInput = {
    main_evers: string | number | bigint;
    next_super_root: string;
};
export declare type SuperRootOwnerGetDetailsOutput = {
    initialized: boolean;
    pubkey: string;
    super_root?: string;
    super_root_code?: string;
    global_cfg_code?: string;
    flex_client_stub?: string;
    wrappers_cfg_code?: string;
    wic_code?: string;
    flex_code?: string;
    pair_code?: string;
    price_code?: string;
    user_data_cfg_code?: string;
    flex_client_code?: string;
    auth_index_code?: string;
    user_id_index_code?: string;
};
export declare class SuperRootOwnerAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        builder?: string;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetCode(input: SuperRootOwnerSetCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setCode(input: SuperRootOwnerSetCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetCodeInternal(input: SuperRootOwnerSetCodeInternalInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setCodeInternal(input: SuperRootOwnerSetCodeInternalInput): Promise<RunLocalHelperResult<void>>;
    runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeploySuperRootOutput>>;
    deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<RunLocalHelperResult<SuperRootOwnerDeploySuperRootOutput>>;
    runUpdate(input: SuperRootOwnerUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    update(input: SuperRootOwnerUpdateInput): Promise<RunLocalHelperResult<void>>;
    runRelease(input: SuperRootOwnerReleaseInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    release(input: SuperRootOwnerReleaseInput): Promise<RunLocalHelperResult<void>>;
    runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<RunLocalHelperResult<void>>;
    runAddWrapper(input: SuperRootOwnerAddWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<RunLocalHelperResult<void>>;
    runAddXchgPair(input: SuperRootOwnerAddXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<RunLocalHelperResult<void>>;
    runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<RunLocalHelperResult<void>>;
    runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<RunLocalHelperResult<void>>;
    runUpgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    upgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput): Promise<RunLocalHelperResult<void>>;
    runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployWrappersConfigOutput>>;
    deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployWrappersConfigOutput>>;
    runDeployFlex(input: SuperRootOwnerDeployFlexInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployFlexOutput>>;
    deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployFlexOutput>>;
    runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployUserDataConfigOutput>>;
    deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployUserDataConfigOutput>>;
    runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerCloneWrappersConfigOutput>>;
    cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerCloneWrappersConfigOutput>>;
    runSetFlags(input: SuperRootOwnerSetFlagsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setFlags(input: SuperRootOwnerSetFlagsInput): Promise<RunLocalHelperResult<void>>;
    runTransfer(input: SuperRootOwnerTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transfer(input: SuperRootOwnerTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<RunLocalHelperResult<void>>;
    runSetOwner(input: SuperRootOwnerSetOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setOwner(input: SuperRootOwnerSetOwnerInput): Promise<RunLocalHelperResult<void>>;
    runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<RunLocalHelperResult<void>>;
    runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<SuperRootOwnerGetDetailsOutput>>;
}
//# sourceMappingURL=SuperRootOwnerAccount.d.ts.map