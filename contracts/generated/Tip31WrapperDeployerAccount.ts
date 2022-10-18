
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
export type Tip31WrapperDeployerSetWrapperCodeInput = {
    code: string /* cell */,
};

export type Tip31WrapperDeployerSetFlexWalletCodeInput = {
    code: string /* cell */,
};

export type Tip31WrapperDeployerDeployInput = {
    _answer_id: number /* uint32 */,
    init_args: string /* cell */,
    wic_unsalted_code: string /* cell */,
};

export type Tip31WrapperDeployerDeployOutput = {
    first: string /* address */,
    second: string /* uint256 */,
};

export type Tip31WrapperDeployerGetArgsInput = {
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
};

export type Tip31WrapperDeployerGetArgsOutput = {
    value0: string /* cell */,
};


export class Tip31WrapperDeployerAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.3.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"},{"name":"out_deploy_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"out_deploy_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "e34cb80e71e3609ff996182432c3fcd0b3ab6e18c9a9cffa789561b2cf2f6e64",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(Tip31WrapperDeployerAccount.package, options);
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
        out_deploy_value: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setWrapperCode", input, options);
    }

    async setWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlexWalletCode", input, options);
    }

    async setFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: Tip31WrapperDeployerDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerDeployOutput>> {
        return await runHelper(this, "deploy", input, options);
    }

    async deploy_(input: Tip31WrapperDeployerDeployInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerDeployOutput>> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: Tip31WrapperDeployerGetArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerGetArgsOutput>> {
        return await runHelper(this, "getArgs", input, options);
    }

    async getArgs(input: Tip31WrapperDeployerGetArgsInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerGetArgsOutput>> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

