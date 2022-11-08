
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
export type WrapperDeployerTip3SetWrapperCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerTip3SetExtWalletCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerTip3SetFlexWalletCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerTip3DeployInput = {
    _answer_id: number /* uint32 */,
    init_args: string /* cell */,
    wic_unsalted_code: string /* cell */,
};

export type WrapperDeployerTip3DeployOutput = {
    first: string /* address */,
    second: string /* uint256 */,
};

export type WrapperDeployerTip3GetArgsInput = {
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
};

export type WrapperDeployerTip3GetArgsOutput = {
    value0: string /* cell */,
};


export class WrapperDeployerTip3Account extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setExtWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"ext_wallet_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "d4c764f045a28b1a34181604d6cd05c63e677294b95c48e356b23ab7a94bc3a9",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperDeployerTip3Account.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
        wrapper_pubkey: string | number | bigint /* uint256 */,
        super_root: string /* address */,
        ext_wallet_value: string | number | bigint /* uint128 */,
        wrapper_deploy_value: string | number | bigint /* uint128 */,
        wrapper_keep_balance: string | number | bigint /* uint128 */,
        reserve_wallet_value: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setWrapperCode", input, options);
    }

    async setWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setExtWalletCode", input, options);
    }

    async setExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setExtWalletCode", input);
    }

    async runSetFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlexWalletCode", input, options);
    }

    async setFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: WrapperDeployerTip3DeployInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerTip3DeployOutput>> {
        return await runHelper(this, "deploy", input, options);
    }

    async deploy_(input: WrapperDeployerTip3DeployInput): Promise<RunLocalHelperResult<WrapperDeployerTip3DeployOutput>> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: WrapperDeployerTip3GetArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerTip3GetArgsOutput>> {
        return await runHelper(this, "getArgs", input, options);
    }

    async getArgs(input: WrapperDeployerTip3GetArgsInput): Promise<RunLocalHelperResult<WrapperDeployerTip3GetArgsOutput>> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

