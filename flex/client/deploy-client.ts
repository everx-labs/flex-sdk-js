import { Flex } from "../flex";
import { AccountEx } from "../../contracts/account-ex";
import { UserDataConfigAccount } from "../../contracts";
import { ClientDeployOptions } from "./index";
import { Signer } from "@eversdk/core";

/** @internal */
export async function deployClient(options: ClientDeployOptions & { flex?: Flex }): Promise<{ address: string, signer: Signer }> {
    const { everWallet } = options;
    const flex = options.flex ?? Flex.default;
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
