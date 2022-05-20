import { Flex, FlexBoundLazy } from "./flex";
import { FlexClientAccount, UserDataConfigAccount, UserIdIndexAccount } from "../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "./ever-wallet";
import { AccountEx } from "../contracts/account-ex";

export type ClientOptions = {
    address: string,
    signer?: Signer | string,
}

export type ClientDeployOptions = {
    everWallet: EverWallet,
    signer: Signer | string,
}

export type UserDeployOptions = {
    id: number,
    name: string,
    signer: Signer | string,
    refillWallet: string | number | bigint;
    minRefill: string | number | bigint;
    eversAuth: string | number | bigint;
    eversAll: string | number | bigint;
}

type ClientState = {
    account: FlexClientAccount,
}

export class Client extends FlexBoundLazy<ClientOptions, ClientState> {

    static async deploy(options: ClientDeployOptions, bindFlex?: Flex): Promise<Client> {
        const { everWallet } = options;
        const flex = bindFlex ?? Flex.default;
        const signer = await flex.resolveSigner(options.signer);
        const publicKey = await flex.signerPublicKey(signer);
        const { userConfig } = await flex.getState();
        const pubkey = `0x${publicKey}`;
        const address = (await userConfig.runLocalGetFlexClientAddr({
            pubkey,
        })).output.value0;

        const isActive = await AccountEx.isActive(address, flex.client);
        if (!isActive) {
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
        }
        return new Client({
            address,
            signer,
        }, flex);
    }

    async deployUser(options: UserDeployOptions): Promise<UserIdIndexAccount> {
        const signer = await this.flex.resolveSigner(options.signer);
        const publicKey = `0x${await this.flex.signerPublicKey(signer)}`;
        const { account: clientAccount } = await this.getState();
        await clientAccount.runDeployIndex({
            user_id: options.id,
            lend_pubkey: publicKey,
            name: options.name,
            evers_all: options.eversAll,
            evers_to_auth_idx: options.eversAuth,
            min_refill: options.minRefill,
            refill_wallet: options.refillWallet,
        });
        const address = (await clientAccount.runLocalGetUserIdIndex({
            user_id: options.id,
        })).output.value0;
        return new UserIdIndexAccount({
            address,
            signer,
            log: this.log,
        });
    }

    protected async createState(options: ClientOptions): Promise<ClientState> {
        return {
            account: new FlexClientAccount({
                client: this.flex.client,
                address: options.address,
            }),
        };
    }
}
