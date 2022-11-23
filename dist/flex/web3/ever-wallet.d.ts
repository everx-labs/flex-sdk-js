import { AbiContract } from "@eversdk/core";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Evr } from "./evr";
export declare type TransferOptions = {
    dest: string;
    value: string | number | bigint;
    payload: string | {
        abi: AbiContract;
        fn: string;
        params: object;
    };
};
export declare class EverWallet {
    evr: Evr;
    options: AccountOptionsEx;
    constructor(web3: Evr, options: AccountOptionsEx);
    transfer(options: TransferOptions): Promise<void>;
    topUp(address: string, value: number): Promise<void>;
    topUpUnits(address: string, value: bigint): Promise<void>;
    getAddress(): Promise<string>;
    private getAccount;
}
//# sourceMappingURL=ever-wallet.d.ts.map