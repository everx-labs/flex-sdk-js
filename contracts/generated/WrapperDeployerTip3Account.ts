
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
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setExtWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"},{"name":"wic_unsalted_code","type":"cell"}],"outputs":[{"name":"first","type":"address"},{"name":"second","type":"uint256"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"ext_wallet_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "d2c5e169d42d22b859c7ab7ca712b4c9b5be26bca08d4f42a506bc70969aad7c",
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

    async runSetWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setWrapperCode", input);
    }

    async setWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setExtWalletCode", input);
    }

    async setExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setExtWalletCode", input);
    }

    async runSetFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setFlexWalletCode", input);
    }

    async setFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: WrapperDeployerTip3DeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployerTip3DeployOutput,
    }> {
        return await runHelper(this, "deploy", input);
    }

    async deploy_(input: WrapperDeployerTip3DeployInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerTip3DeployOutput,
    }> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: WrapperDeployerTip3GetArgsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployerTip3GetArgsOutput,
    }> {
        return await runHelper(this, "getArgs", input);
    }

    async getArgs(input: WrapperDeployerTip3GetArgsInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployerTip3GetArgsOutput,
    }> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

