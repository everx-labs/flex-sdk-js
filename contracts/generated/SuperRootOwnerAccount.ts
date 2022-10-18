
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

export type SuperRootOwnerUpgradeBroxusWrapperWalletInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrapper: string /* address */,
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
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[]},{"name":"setCode","inputs":[{"name":"type","type":"uint8"},{"name":"code","type":"cell"}],"outputs":[]},{"name":"deploySuperRoot","inputs":[{"name":"evers","type":"uint128"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"update","inputs":[{"name":"main_evers","type":"uint128"},{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"release","inputs":[{"name":"main_evers","type":"uint128"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"addXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wic","type":"address"}],"outputs":[]},{"name":"unlistXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"name":"pair","type":"address"}],"outputs":[]},{"name":"upgradeBroxusWrapperWallet","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrapper","type":"address"}],"outputs":[]},{"name":"deployWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployFlex","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployUserDataConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"name":"flex","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"cloneWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"setFlags","inputs":[{"name":"main_evers","type":"uint128"},{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"main_evers","type":"uint128"},{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[]},{"name":"transferReserveTokens","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"main_evers","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"setUpdateTeam","inputs":[{"name":"main_evers","type":"uint128"},{"name":"team","type":"optional(address)"}],"outputs":[]},{"name":"setNextSuperRoot","inputs":[{"name":"main_evers","type":"uint128"},{"name":"next_super_root","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"initialized","type":"bool"},{"name":"pubkey","type":"uint256"},{"name":"super_root","type":"optional(address)"},{"name":"super_root_code","type":"optional(cell)"},{"name":"global_cfg_code","type":"optional(cell)"},{"name":"flex_client_stub","type":"optional(cell)"},{"name":"wrappers_cfg_code","type":"optional(cell)"},{"name":"wic_code","type":"optional(cell)"},{"name":"flex_code","type":"optional(cell)"},{"name":"pair_code","type":"optional(cell)"},{"name":"price_code","type":"optional(cell)"},{"name":"user_data_cfg_code","type":"optional(cell)"},{"name":"flex_client_code","type":"optional(cell)"},{"name":"auth_index_code","type":"optional(cell)"},{"name":"user_id_index_code","type":"optional(cell)"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"super_root_","type":"optional(address)"},{"name":"super_root_code_","type":"optional(cell)"},{"name":"global_cfg_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"wrappers_cfg_code_","type":"optional(cell)"},{"name":"wic_code_","type":"optional(cell)"},{"name":"flex_code_","type":"optional(cell)"},{"name":"pair_code_","type":"optional(cell)"},{"name":"price_code_","type":"optional(cell)"},{"name":"user_data_cfg_code_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "4c45e159361d5229a880970860b3950829caace08f8a02f650d0c84c1874b4e9",
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

    async runSetCode(input: SuperRootOwnerSetCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setCode", input, options);
    }

    async setCode(input: SuperRootOwnerSetCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setCode", input);
    }

    async runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeploySuperRootOutput>> {
        return await runHelper(this, "deploySuperRoot", input, options);
    }

    async deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<RunLocalHelperResult<SuperRootOwnerDeploySuperRootOutput>> {
        return await runLocalHelper(this, "deploySuperRoot", input);
    }

    async runUpdate(input: SuperRootOwnerUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "update", input, options);
    }

    async update(input: SuperRootOwnerUpdateInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "update", input);
    }

    async runRelease(input: SuperRootOwnerReleaseInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "release", input, options);
    }

    async release(input: SuperRootOwnerReleaseInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "release", input);
    }

    async runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapperType", input, options);
    }

    async addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: SuperRootOwnerAddWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapper", input, options);
    }

    async addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runAddXchgPair(input: SuperRootOwnerAddXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addXchgPair", input, options);
    }

    async addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistWrapper", input, options);
    }

    async unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistXchgPair", input, options);
    }

    async unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runUpgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "upgradeBroxusWrapperWallet", input, options);
    }

    async upgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "upgradeBroxusWrapperWallet", input);
    }

    async runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployWrappersConfigOutput>> {
        return await runHelper(this, "deployWrappersConfig", input, options);
    }

    async deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployWrappersConfigOutput>> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootOwnerDeployFlexInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployFlexOutput>> {
        return await runHelper(this, "deployFlex", input, options);
    }

    async deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployFlexOutput>> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployUserDataConfigOutput>> {
        return await runHelper(this, "deployUserDataConfig", input, options);
    }

    async deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployUserDataConfigOutput>> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerCloneWrappersConfigOutput>> {
        return await runHelper(this, "cloneWrappersConfig", input, options);
    }

    async cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerCloneWrappersConfigOutput>> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runSetFlags(input: SuperRootOwnerSetFlagsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlags", input, options);
    }

    async setFlags(input: SuperRootOwnerSetFlagsInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runTransfer(input: SuperRootOwnerTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: SuperRootOwnerTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferReserveTokens", input, options);
    }

    async transferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferReserveTokens", input);
    }

    async runSetOwner(input: SuperRootOwnerSetOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setOwner", input, options);
    }

    async setOwner(input: SuperRootOwnerSetOwnerInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setUpdateTeam", input, options);
    }

    async setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setNextSuperRoot", input, options);
    }

    async setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<SuperRootOwnerGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

