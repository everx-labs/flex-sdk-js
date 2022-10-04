import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperDeployerEverSetWrapperEverCodeInput = {
    code: string;
};
export declare type WrapperDeployerEverSetFlexWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerEverDeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export declare type WrapperDeployerEverDeployOutput = {
    first: string;
    second: string;
};
export declare class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runDeploy(input: WrapperDeployerEverDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerEverDeployOutput>>;
    deploy_(input: WrapperDeployerEverDeployInput): Promise<RunLocalHelperResult<WrapperDeployerEverDeployOutput>>;
}
//# sourceMappingURL=WrapperDeployerEverAccount.d.ts.map