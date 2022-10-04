
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
export type UserDataConfigOnDeployInput = {
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigDeployFlexClientInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    deploy_evers: string | number | bigint /* uint128 */,
};

export type UserDataConfigDeployFlexClientOutput = {
    value0: string /* address */,
};

export type UserDataConfigRequestDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type UserDataConfigRequestDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetFlexClientAddrInput = {
    pubkey: string | number | bigint /* uint256 */,
};

export type UserDataConfigGetFlexClientAddrOutput = {
    value0: string /* address */,
};

export type UserDataConfigGetDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetConfigOutput = {
    super_root: string /* address */,
};


export class UserDataConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[]},{"name":"deployFlexClient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"deploy_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getFlexClientAddr","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "a8d7d2653b9410c674346ccf4fd26ff78fd507210843c23b8515d5d495686078",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(UserDataConfigAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: UserDataConfigOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: UserDataConfigOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runDeployFlexClient(input: UserDataConfigDeployFlexClientInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigDeployFlexClientOutput>> {
        return await runHelper(this, "deployFlexClient", input, options);
    }

    async deployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<RunLocalHelperResult<UserDataConfigDeployFlexClientOutput>> {
        return await runLocalHelper(this, "deployFlexClient", input);
    }

    async runRequestDetails(input: UserDataConfigRequestDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigRequestDetailsOutput>> {
        return await runHelper(this, "requestDetails", input, options);
    }

    async requestDetails(input: UserDataConfigRequestDetailsInput): Promise<RunLocalHelperResult<UserDataConfigRequestDetailsOutput>> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runGetFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput, options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetFlexClientAddrOutput>> {
        return await runHelper(this, "getFlexClientAddr", input, options);
    }

    async getFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<RunLocalHelperResult<UserDataConfigGetFlexClientAddrOutput>> {
        return await runLocalHelper(this, "getFlexClientAddr", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<UserDataConfigGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<UserDataConfigGetConfigOutput>> {
        return await runHelper(this, "getConfig", {}, options);
    }

    async getConfig(): Promise<RunLocalHelperResult<UserDataConfigGetConfigOutput>> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

