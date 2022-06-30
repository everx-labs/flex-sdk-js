import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { UserDataConfigAccount } from "../../contracts";
import { EverWallet, SignerOption, toUnits } from "../web3";

export type DeployClientOptions = {
    /**
     * Ever Wallet (multisig) that will deploy Flex Client contract and
     * become its only owner. Only this wallet can call functions of Flex Client contract.
     */
    everWallet: AccountOptionsEx,
    /**
     * Secret key of Ever Wallet custodian (owner)
     */
    signer: SignerOption,
    /**
     * TODO: Need to describe
     */
    transferEvers?: number,
    /**
     * TODO: Need to describe
     */
    deployEvers?: number,
}

const DEFAULTS = {
    transferEvers: 55,
    deployEvers: 50,
};

/** @internal */
export async function deployClient(
    flex: Flex,
    options: DeployClientOptions,
): Promise<string> {
    const everWallet = new EverWallet(flex.evr, options.everWallet);
    const signer = await flex.evr.signers.resolve(options.signer);
    const publicKey = await flex.evr.signers.publicKey(signer);
    const userConfig = await flex.getUserConfigAccount();
    const pubkey = `0x${publicKey}`;
    const address = (await userConfig.getFlexClientAddr({
        pubkey,
    })).output.value0;

    const isActive = await flex.evr.accounts.isActive(address);
    if (!isActive) {
        const transferEvers = options.transferEvers ?? DEFAULTS.transferEvers;
        const deployEvers = options.deployEvers ?? DEFAULTS.deployEvers;
        await everWallet.transfer({
            dest: await userConfig.getAddress(),
            value: toUnits(transferEvers + deployEvers),
            payload: {
                abi: UserDataConfigAccount.package.abi,
                fn: "deployFlexClient",
                params: {
                    pubkey,
                    deploy_evers: toUnits(deployEvers),
                },
            },
        });
    }
    return address;
}
