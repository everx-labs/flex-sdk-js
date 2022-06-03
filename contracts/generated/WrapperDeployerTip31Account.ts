
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
export type WrapperDeployerTip31SetWrapperCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerTip31SetFlexWalletCodeInput = {
    code: string /* cell */,
};

export type WrapperDeployerTip31DeployInput = {
    _answer_id: number /* uint32 */,
    init_args: string /* cell */,
    wic_unsalted_code: string /* cell */,
};

export type WrapperDeployerTip31DeployOutput = {
    first: string /* address */,
    second: string /* uint256 */,
};

export type WrapperDeployerTip31GetArgsInput = {
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
};

export type WrapperDeployerTip31GetArgsOutput = {
    value0: string /* cell */,
};


export class WrapperDeployerTip31Account extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"},{"name":"out_deploy_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"out_deploy_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "1ee2c1cd481add77ef8cb310af696e3d4941fef2759871fa31046cce74cb8546",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperDeployerTip31Account.package, options);
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

    async runSetWrapperCode(input: WrapperDeployerTip31SetWrapperCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setWrapperCode", input);
    }

    async setWrapperCode(input: WrapperDeployerTip31SetWrapperCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetFlexWalletCode(input: WrapperDeployerTip31SetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setFlexWalletCode", input);
    }

    async setFlexWalletCode(input: WrapperDeployerTip31SetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: WrapperDeployerTip31DeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployerTip31DeployOutput,
    }> {
        return await runHelper(this, "deploy", input);
    }

    async deploy_(input: WrapperDeployerTip31DeployInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerTip31DeployOutput,
    }> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: WrapperDeployerTip31GetArgsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployerTip31GetArgsOutput,
    }> {
        return await runHelper(this, "getArgs", input);
    }

    async getArgs(input: WrapperDeployerTip31GetArgsInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerTip31GetArgsOutput,
    }> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

