import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
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
    runOnDeploy(input: XchgPairOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    onDeploy(input: XchgPairOnDeployInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestDetails(input: XchgPairRequestDetailsInput): Promise<{
        transaction: Transaction;
        output: XchgPairRequestDetailsOutput;
    }>;
    requestDetails(input: XchgPairRequestDetailsInput): Promise<{
        transaction: Transaction;
        output: XchgPairRequestDetailsOutput;
    }>;
    runSetNext(input: XchgPairSetNextInput): Promise<{
        transaction: Transaction;
    }>;
    setNext(input: XchgPairSetNextInput): Promise<{
        transaction: Transaction;
    }>;
    runUnlist(): Promise<{
        transaction: Transaction;
    }>;
    unlist(): Promise<{
        transaction: Transaction;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: XchgPairGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: XchgPairGetDetailsOutput;
    }>;
    runGetConfig(): Promise<{
        transaction: Transaction;
        output: XchgPairGetConfigOutput;
    }>;
    getConfig(): Promise<{
        transaction: Transaction;
        output: XchgPairGetConfigOutput;
    }>;
    runGetPriceXchgCode(input: XchgPairGetPriceXchgCodeInput): Promise<{
        transaction: Transaction;
        output: XchgPairGetPriceXchgCodeOutput;
    }>;
    getPriceXchgCode(input: XchgPairGetPriceXchgCodeInput): Promise<{
        transaction: Transaction;
        output: XchgPairGetPriceXchgCodeOutput;
    }>;
    runGetPriceXchgSalt(): Promise<{
        transaction: Transaction;
        output: XchgPairGetPriceXchgSaltOutput;
    }>;
    getPriceXchgSalt(): Promise<{
        transaction: Transaction;
        output: XchgPairGetPriceXchgSaltOutput;
    }>;
}
//# sourceMappingURL=XchgPairAccount.d.ts.map