import { Flex } from "../flex";
import { AccountEx, AccountOptionsEx } from "../../contracts/account-ex";
import { UserDataConfigAccount } from "../../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "../ever-wallet";

export type DeployClientOptions = {
    everWallet: AccountOptionsEx,
    signer: Signer | string,
}

/** @internal */
export async function deployClient(
    flex: Flex,
    options: DeployClientOptions,
): Promise<{ address: string, signer: Signer }> {
    const everWallet = new EverWallet(options.everWallet, flex);
    const signer = await flex.signers.resolve(options.signer);
    const publicKey = await flex.signers.publicKey(signer);
    const userConfig = await flex.getUserConfigAccount();
    const pubkey = `0x${publicKey}`;
    const address = (await userConfig.getFlexClientAddr({
        pubkey,
    })).output.value0;

    const isActive = await AccountEx.isActive(address, flex.web3);
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
    return {
        address,
        signer,
    };
}
