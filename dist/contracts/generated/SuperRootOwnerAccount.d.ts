import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type SuperRootOwnerSetCodeInput = {
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
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerDeploySuperRootOutput;
    }>;
    deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerDeploySuperRootOutput;
    }>;
    runUpdate(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    update(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction;
    }>;
    runRelease(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    release(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction;
    }>;
    runAddWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction;
    }>;
    runAddXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction;
    }>;
    runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction;
    }>;
    runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction;
    }>;
    runUpgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    upgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerDeployWrappersConfigOutput;
    }>;
    deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerDeployWrappersConfigOutput;
    }>;
    runDeployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerDeployFlexOutput;
    }>;
    deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerDeployFlexOutput;
    }>;
    runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerDeployUserDataConfigOutput;
    }>;
    deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerDeployUserDataConfigOutput;
    }>;
    runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerCloneWrappersConfigOutput;
    }>;
    cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerCloneWrappersConfigOutput;
    }>;
    runSetFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction;
    }>;
    runTransfer(input: SuperRootOwnerTransferInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transfer(input: SuperRootOwnerTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    transferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<{
        transaction: Transaction;
    }>;
    runSetOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction;
    }>;
    runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction;
    }>;
    runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: SuperRootOwnerGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: SuperRootOwnerGetDetailsOutput;
    }>;
}
//# sourceMappingURL=SuperRootOwnerAccount.d.ts.map