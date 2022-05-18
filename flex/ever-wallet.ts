import { FlexBoundLazy, FlexBoundOptions } from "./flex";
import { MultisigWalletAccount } from "../contracts";
import { abiContract, AbiContract } from "@eversdk/core";

export type EverWalletOptions = FlexBoundOptions & {
    address: string,
}

type EverWalletState = {
    account: MultisigWalletAccount,
}

type SubmitPayloadOptions = {
    dest: string,
    value: string | number | bigint,
    abi: AbiContract,
    fn: string,
    params: object
}

export class EverWallet extends FlexBoundLazy<EverWalletOptions, EverWalletState> {
    constructor(options: EverWalletOptions) {
        super(options);
    }

    protected async createState(options: EverWalletOptions): Promise<EverWalletState> {
        return {
            account: new MultisigWalletAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }

    async submitPayload(options: SubmitPayloadOptions) {
        const { account } = await this.getState();
        const payload = (await this.flex.client.abi.encode_message_body({
            abi: abiContract(options.abi),
            call_set: {
                function_name: options.fn,
                input: { _answer_id: 0, ...options.params },
            },
            is_internal: true,
            signer: { type: "None" },
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
