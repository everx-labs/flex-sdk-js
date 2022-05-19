import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { abiContract, AbiContract, Signer, signerNone } from "@eversdk/core";

export type EverWalletOptions = FlexBoundOptions & {
    address: string,
    signer?: Signer | string,
}

type EverWalletState = {
    account: MultisigWalletAccount,
}

type SubmitTransactionOptions = {
    dest: string,
    value: string | number | bigint,
    messageBody: {
        abi: AbiContract,
        fn: string,
        params: object
    }
}

export class EverWallet extends FlexBoundLazy<EverWalletOptions, EverWalletState> {
    constructor(options: EverWalletOptions) {
        super(options);
    }

    protected async createState(options: EverWalletOptions): Promise<EverWalletState> {
        return {
            account: new MultisigWalletAccount({
                log: this.log,
                client: this.flex.client,
                address: options.address,
                signer: await this.flex.resolveSigner(options.signer),
            }),
        };
    }

    async transfer(options: SubmitTransactionOptions) {
        const { account } = await this.getState();
        const payload = (await this.flex.client.abi.encode_message_body({
            abi: abiContract(options.messageBody.abi),
            call_set: {
                function_name: options.messageBody.fn,
                input: {
                    _answer_id: 0,
                    ...options.messageBody.params,
                },
            },
            is_internal: true,
            signer: signerNone(),
        })).body;
        await account.runSubmitTransaction({
            dest: options.dest,
            allBalance: false,
            bounce: true,
            value: options.value,
            payload,
        });
    }
}
