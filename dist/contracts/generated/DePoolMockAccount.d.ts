import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type DePoolMockSendOnTransferInput = {
    dst: string;
    src: string;
    amount: string | number | bigint;
};
export type DePoolMockTransferStakeInput = {
    destination: string;
    amount: string | number | bigint;
};
export type DePoolMockGetDetailsOutput = {
    owner_pubkey: string;
    fwd_records: {
        dst: string;
        src: string;
        amount: string;
        timestamp: string;
    }[];
    bck_records: {
        dst: string;
        src: string;
        amount: string;
        timestamp: string;
    }[];
};
export declare class DePoolMockAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        owner_pubkey: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSendOnTransfer(input: DePoolMockSendOnTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    sendOnTransfer(input: DePoolMockSendOnTransferInput): Promise<RunLocalHelperResult<void>>;
    runTransferStake(input: DePoolMockTransferStakeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    transferStake(input: DePoolMockTransferStakeInput): Promise<RunLocalHelperResult<void>>;
    runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<DePoolMockGetDetailsOutput>>;
    getDetails(): Promise<RunLocalHelperResult<DePoolMockGetDetailsOutput>>;
}
//# sourceMappingURL=DePoolMockAccount.d.ts.map