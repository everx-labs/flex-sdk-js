import { Flex, FlexBoundLazy, FlexBoundOptions } from "./flex";
import { FlexClientAccount, UserDataConfigAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";

export type ClientOptions = FlexBoundOptions & {
    address: string,
}

export type ClientDeployOptions = FlexBoundOptions & {
    everWallet: EverWallet,
    signer: Signer | string,
}

type ClientState = {
    client: FlexClientAccount,
}

export class Client extends FlexBoundLazy<ClientOptions, ClientState> {
    constructor(options: ClientOptions) {
        super(options);
    }

    static async deploy(options: ClientDeployOptions): Promise<Client> {
        const { everWallet } = options;
        const flex = Flex.resolve(options);
        const signer = await flex.resolveSigner(options.signer);
        const publicKey = await flex.signerPublicKey(signer);
        const { userConfig } = await flex.getState();
        const pubkey = `0x${publicKey}`;
        await everWallet.transfer({
            dest: await userConfig.getAddress(),
            value: 55e9,
            messageBody: {
                abi: UserDataConfigAccount.package.abi,
                fn: "deployFlexClient",
                params: {
                    pubkey,
                    deploy_evers: 50e9,
                },
            },
        });
        const address = (await userConfig.runLocalGetFlexClientAddr({
            pubkey,
        })).output.value0;
        return new Client({
            flex,
            address,
        });
    }

    protected async createState(options: ClientOptions): Promise<ClientState> {
        return {
            client: new FlexClientAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }

}
