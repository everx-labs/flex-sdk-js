import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type Tip31WrapperDeployerSetWrapperCodeInput = {
    code: string;
};
export type Tip31WrapperDeployerSetFlexWalletCodeInput = {
    code: string;
};
export type Tip31WrapperDeployerDeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export type Tip31WrapperDeployerDeployOutput = {
    first: string;
    second: string;
};
export type Tip31WrapperDeployerGetArgsInput = {
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export type Tip31WrapperDeployerGetArgsOutput = {
    value0: string;
};
export declare class Tip31WrapperDeployerAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        ext_wallet_value: string | number | bigint;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
        out_deploy_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setWrapperCode(input: Tip31WrapperDeployerSetWrapperCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setFlexWalletCode(input: Tip31WrapperDeployerSetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runDeploy(input: Tip31WrapperDeployerDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerDeployOutput>>;
    deploy_(input: Tip31WrapperDeployerDeployInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerDeployOutput>>;
    runGetArgs(input: Tip31WrapperDeployerGetArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<Tip31WrapperDeployerGetArgsOutput>>;
    getArgs(input: Tip31WrapperDeployerGetArgsInput): Promise<RunLocalHelperResult<Tip31WrapperDeployerGetArgsOutput>>;
}
//# sourceMappingURL=Tip31WrapperDeployerAccount.d.ts.map