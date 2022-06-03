import { AbiContract } from "@eversdk/core";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Evr } from "./evr";
export declare type SubmitTransactionOptions = {
    dest: string;
    value: string | number | bigint;
    messageBody: {
        abi: AbiContract;
        fn: string;
        params: object;
    };
};
export declare class EverWallet {
    evr: Evr;
    options: AccountOptionsEx;
    constructor(web3: Evr, options: AccountOptionsEx);
    transfer(options: SubmitTransactionOptions): Promise<void>;
    topUp(address: string, evers: number): Promise<void>;
    getAddress(): Promise<string>;
    private getAccount;
}
//# sourceMappingURL=ever-wallet.d.ts.map