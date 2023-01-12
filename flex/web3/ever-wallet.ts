import { AccountOptionsEx, MultisigWalletAccount } from "../../contracts";
import { abiContract, AbiContract, signerNone } from "@eversdk/core";
import { Evr } from "./evr";
import { toUnitsBigIntString } from "./utils";

export type TransferOptions = {
    dest: string;
    value: string | number | bigint;
    payload:
        | string
        | {
              abi: AbiContract;
              fn: string;
              params: object;
          };
};

export class EverWallet {
    evr: Evr;
    options: AccountOptionsEx;

    constructor(web3: Evr, options: AccountOptionsEx) {
        this.evr = web3;
        this.options = options;
    }
    async transfer(options: TransferOptions) {
        const account = await this.getAccount();
        const payload =
            typeof options.payload === "string"
                ? options.payload
                : (
                      await this.evr.sdk.abi.encode_message_body({
                          abi: abiContract(options.payload.abi),
                          call_set: {
                              function_name: options.payload.fn,
                              input: {
                                  _answer_id: 0,
                                  ...options.payload.params,
                              },
                          },
                          is_internal: true,
                          signer: signerNone(),
                      })
                  ).body;
        await account.runSubmitTransaction({
            dest: options.dest,
            allBalance: false,
            bounce: true,
            value: options.value,
            payload,
        });
    }

    async topUp(address: string, value: number) {
        await this.topUpUnits(address, BigInt(toUnitsBigIntString(value, Evr.NATIVE_DECIMALS)));
    }

    async topUpUnits(address: string, value: bigint) {
        const account = await this.getAccount();
        await account.runSubmitTransaction({
            dest: address,
            value: value.toString(),
            allBalance: false,
            bounce: false,
            payload: "",
        });
    }

    async getAddress(): Promise<string> {
        return await (await this.getAccount()).getAddress();
    }

    async getAccount(): Promise<MultisigWalletAccount> {
        return await this.evr.accounts.get(MultisigWalletAccount, this.options);
    }
}
