
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
        codeHash: "a86249807064a2cd7aec9e080b6434c8b3e31cbed4419bbaea439cf7c63ac028",
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

