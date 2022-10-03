import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type XchgPairOnDeployInput = {
    min_amount: string | number | bigint;
    minmove: string | number | bigint;
    price_denum: string | number | bigint;
    deploy_value: string | number | bigint;
    notify_addr: string;
    major_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
    minor_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export declare type XchgPairRequestDetailsInput = {
    _answer_id: number;
};
export declare type XchgPairRequestDetailsOutput = {
    tip3_major_root: string;
    tip3_minor_root: string;
    min_amount: string;
    minmove: string;
    price_denum: string;
    notify_addr: string;
    major_reserve_wallet: string;
    minor_reserve_wallet: string;
    major_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string;
        root_address: string;
    };
    minor_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string;
        root_address: string;
    };
    next?: string;
    unlisted: boolean;
};
export declare type XchgPairSetNextInput = {
    next: string;
};
export declare type XchgPairGetDetailsOutput = {
    tip3_major_root: string;
    tip3_minor_root: string;
    min_amount: string;
    minmove: string;
    price_denum: string;
    notify_addr: string;
    major_reserve_wallet: string;
    minor_reserve_wallet: string;
    major_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string;
        root_address: string;
    };
    minor_tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string;
        root_address: string;
    };
    next?: string;
    unlisted: boolean;
};
export declare type XchgPairGetConfigOutput = {
    flex: string;
    ev_cfg: {
        transfer_tip3: string;
        return_ownership: string;
        order_answer: string;
        process_queue: string;
        send_notify: string;
        dest_wallet_keep_evers: string;
    };
    deals_limit: number;
    xchg_price_code: string;
};
export declare type XchgPairGetPriceXchgCodeInput = {
    salted: boolean;
};
export declare type XchgPairGetPriceXchgCodeOutput = {
    value0: string;
};
export declare type XchgPairGetPriceXchgSaltOutput = {
    value0: string;
};
export declare class XchgPairAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runOnDeploy(input: XchgPairOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    onDeploy(input: XchgPairOnDeployInput): Promise<RunLocalHelperResult<void>>;
    runRequestDetails(input: XchgPairRequestDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<XchgPairRequestDetailsOutput>>;
    requestDetails(input: XchgPairRequestDetailsInput): Promise<RunLocalHelperResult<XchgPairRequestDetailsOutput>>;
    runSetNext(input: XchgPairSetNextInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setNext(input: XchgPairSetNextInput): Promise<RunLocalHelperResult<void>>;
    runUnlist(options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    unlist(): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<XchgPairGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<XchgPairGetDetailsOutput>>;
    runGetConfig(options?: RunHelperOptions): Promise<RunHelperResult<XchgPairGetConfigOutput>>;
    getConfig(): Promise<RunLocalHelperResult<XchgPairGetConfigOutput>>;
    runGetPriceXchgCode(input: XchgPairGetPriceXchgCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<XchgPairGetPriceXchgCodeOutput>>;
    getPriceXchgCode(input: XchgPairGetPriceXchgCodeInput): Promise<RunLocalHelperResult<XchgPairGetPriceXchgCodeOutput>>;
    runGetPriceXchgSalt(options?: RunHelperOptions): Promise<RunHelperResult<XchgPairGetPriceXchgSaltOutput>>;
    getPriceXchgSalt(): Promise<RunLocalHelperResult<XchgPairGetPriceXchgSaltOutput>>;
}
//# sourceMappingURL=XchgPairAccount.d.ts.map