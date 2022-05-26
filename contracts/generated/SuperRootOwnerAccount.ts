
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
export type SuperRootOwnerSetCodeInput = {
    type: number /* uint8 */,
    code: string /* cell */,
};

export type SuperRootOwnerDeploySuperRootInput = {
    evers: string | number | bigint /* uint128 */,
    prev_super_root?: string /* optional(address) */,
};

export type SuperRootOwnerDeploySuperRootOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerUpdateInput = {
    main_evers: string | number | bigint /* uint128 */,
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

export type SuperRootOwnerReleaseInput = {
    main_evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerAddWrapperTypeInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    type: number /* uint8 */,
    wrapper_deployer: string /* address */,
};

export type SuperRootOwnerAddWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    symbol: string /* string */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type SuperRootOwnerAddXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    min_amount: string | number | bigint /* uint128 */,
    minmove: string | number | bigint /* uint128 */,
    price_denum: string | number | bigint /* uint128 */,
    notify_addr: string /* address */,
};

export type SuperRootOwnerUnlistWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    wic: string /* address */,
};

export type SuperRootOwnerUnlistXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    pair: string /* address */,
};

export type SuperRootOwnerDeployWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    token_version: number /* uint32 */,
};

export type SuperRootOwnerDeployWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployFlexInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
    exchange_version: number /* uint32 */,
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

export type SuperRootOwnerDeployFlexOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    flex: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerCloneWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
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

export type SuperRootOwnerCloneWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerSetFlagsInput = {
    main_evers: string | number | bigint /* uint128 */,
    stop_trade?: boolean /* optional(bool) */,
    abandon_ship?: boolean /* optional(bool) */,
    update_started?: boolean /* optional(bool) */,
};

export type SuperRootOwnerTransferInput = {
    main_evers: string | number | bigint /* uint128 */,
    to: string /* address */,
    evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerTransferReserveTokensInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrapper: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    to: string /* address */,
    evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerSetOwnerInput = {
    main_evers: string | number | bigint /* uint128 */,
    owner: string /* address */,
};

export type SuperRootOwnerSetUpdateTeamInput = {
    main_evers: string | number | bigint /* uint128 */,
    team?: string /* optional(address) */,
};

export type SuperRootOwnerSetNextSuperRootInput = {
    main_evers: string | number | bigint /* uint128 */,
    next_super_root: string /* address */,
};

export type SuperRootOwnerGetDetailsOutput = {
    initialized: boolean /* bool */,
    pubkey: string /* uint256 */,
    super_root?: string /* optional(address) */,
    super_root_code?: string /* optional(cell) */,
    global_cfg_code?: string /* optional(cell) */,
    flex_client_stub?: string /* optional(cell) */,
    wrappers_cfg_code?: string /* optional(cell) */,
    wic_code?: string /* optional(cell) */,
    flex_code?: string /* optional(cell) */,
    pair_code?: string /* optional(cell) */,
    price_code?: string /* optional(cell) */,
    user_data_cfg_code?: string /* optional(cell) */,
    flex_client_code?: string /* optional(cell) */,
    auth_index_code?: string /* optional(cell) */,
    user_id_index_code?: string /* optional(cell) */,
};


export class SuperRootOwnerAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[]},{"name":"setCode","inputs":[{"name":"type","type":"uint8"},{"name":"code","type":"cell"}],"outputs":[]},{"name":"deploySuperRoot","inputs":[{"name":"evers","type":"uint128"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"update","inputs":[{"name":"main_evers","type":"uint128"},{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"release","inputs":[{"name":"main_evers","type":"uint128"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"addXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wic","type":"address"}],"outputs":[]},{"name":"unlistXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"name":"pair","type":"address"}],"outputs":[]},{"name":"deployWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployFlex","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployUserDataConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"name":"flex","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"cloneWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"setFlags","inputs":[{"name":"main_evers","type":"uint128"},{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"main_evers","type":"uint128"},{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[]},{"name":"transferReserveTokens","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"main_evers","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"setUpdateTeam","inputs":[{"name":"main_evers","type":"uint128"},{"name":"team","type":"optional(address)"}],"outputs":[]},{"name":"setNextSuperRoot","inputs":[{"name":"main_evers","type":"uint128"},{"name":"next_super_root","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"initialized","type":"bool"},{"name":"pubkey","type":"uint256"},{"name":"super_root","type":"optional(address)"},{"name":"super_root_code","type":"optional(cell)"},{"name":"global_cfg_code","type":"optional(cell)"},{"name":"flex_client_stub","type":"optional(cell)"},{"name":"wrappers_cfg_code","type":"optional(cell)"},{"name":"wic_code","type":"optional(cell)"},{"name":"flex_code","type":"optional(cell)"},{"name":"pair_code","type":"optional(cell)"},{"name":"price_code","type":"optional(cell)"},{"name":"user_data_cfg_code","type":"optional(cell)"},{"name":"flex_client_code","type":"optional(cell)"},{"name":"auth_index_code","type":"optional(cell)"},{"name":"user_id_index_code","type":"optional(cell)"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"super_root_","type":"optional(address)"},{"name":"super_root_code_","type":"optional(cell)"},{"name":"global_cfg_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"wrappers_cfg_code_","type":"optional(cell)"},{"name":"wic_code_","type":"optional(cell)"},{"name":"flex_code_","type":"optional(cell)"},{"name":"pair_code_","type":"optional(cell)"},{"name":"price_code_","type":"optional(cell)"},{"name":"user_data_cfg_code_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "03020af1ad1ccea2e5884ddb97b5e143fa9beb374b022bf6023c923bdc5765f1",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(SuperRootOwnerAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCode", input);
    }

    async setCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCode", input);
    }

    async runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerDeploySuperRootOutput,
    }> {
        return await runHelper(this, "deploySuperRoot", input);
    }

    async deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeploySuperRootOutput,
    }> {
        return await runLocalHelper(this, "deploySuperRoot", input);
    }

    async runUpdate(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "update", input);
    }

    async update(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "update", input);
    }

    async runRelease(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "release", input);
    }

    async release(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "release", input);
    }

    async runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "addWrapperType", input);
    }

    async addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "addWrapper", input);
    }

    async addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runAddXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "addXchgPair", input);
    }

    async addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unlistWrapper", input);
    }

    async unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unlistXchgPair", input);
    }

    async unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerDeployWrappersConfigOutput,
    }> {
        return await runHelper(this, "deployWrappersConfig", input);
    }

    async deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployWrappersConfigOutput,
    }> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerDeployFlexOutput,
    }> {
        return await runHelper(this, "deployFlex", input);
    }

    async deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployFlexOutput,
    }> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerDeployUserDataConfigOutput,
    }> {
        return await runHelper(this, "deployUserDataConfig", input);
    }

    async deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployUserDataConfigOutput,
    }> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerCloneWrappersConfigOutput,
    }> {
        return await runHelper(this, "cloneWrappersConfig", input);
    }

    async cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerCloneWrappersConfigOutput,
    }> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runSetFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setFlags", input);
    }

    async setFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runTransfer(input: SuperRootOwnerTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: SuperRootOwnerTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferReserveTokens", input);
    }

    async transferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferReserveTokens", input);
    }

    async runSetOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setOwner", input);
    }

    async setOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setUpdateTeam", input);
    }

    async setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setNextSuperRoot", input);
    }

    async setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: SuperRootOwnerGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

