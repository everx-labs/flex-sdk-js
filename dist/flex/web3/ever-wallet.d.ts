import { AccountOptionsEx, MultisigWalletAccount } from "../../contracts";
import { AbiContract } from "@eversdk/core";
import { Evr } from "./evr";
export type TransferOptions = {
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
    getAccount(): Promise<MultisigWalletAccount>;
}
//# sourceMappingURL=ever-wallet.d.ts.map