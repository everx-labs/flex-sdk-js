import { FlexBoundLazy } from "./flex";
import { Signer } from "@eversdk/core";
import { FlexWalletAccount } from "../contracts";

export type WalletOptions = {
    address: string,
    signer?: Signer | string,
}

type WalletState = {
    account: FlexWalletAccount,
};

export class Wallet extends FlexBoundLazy<WalletOptions, WalletState> {

    protected async createState(options: WalletOptions): Promise<WalletState> {
        return {
            account: new FlexWalletAccount({
                client: this.flex.client,
                address: options.address,
                signer: await this.flex.signers.resolve(options.signer),
            }),
        };
    }

}
