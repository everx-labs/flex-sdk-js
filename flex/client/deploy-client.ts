import { Flex } from "../flex";
import { AccountOptionsEx, UserDataConfigAccount } from "../../contracts";
import { EverWallet, Evr, SignerOption, TokenValue, toUnitsString } from "../web3";

export type DeployClientOptions = {
    /**
     * Ever Wallet (multisig) that will deploy Flex Client contract and
     * become its only owner. Only this wallet can call functions of Flex Client contract.
     */
    everWallet: AccountOptionsEx;
    /**
     * Secret key of Ever Wallet custodian (owner)
     */
    signer: SignerOption;
    /**
     * Evers, transferred to User Config contract. The change will be returned.
     */
    transferEvers?: TokenValue;
    /**
     * Evers transferred to Flex Client during deploy
     */
    deployEvers?: TokenValue;
};

const DEFAULTS = {
    transferEvers: { tokens: 55 },
    deployEvers: { tokens: 50 },
};

/** @internal */
export async function deployClient(flex: Flex, options: DeployClientOptions): Promise<string> {
    const signer = await flex.evr.signers.resolve(options.signer);
    const publicKey = await flex.evr.signers.publicKey(signer);
    const userConfig = await flex.getUserConfigAccount();
    const pubkey = `0x${publicKey}`;
    const address = (
        await userConfig.getFlexClientAddr({
            pubkey,
        })
    ).output.value0;

    const isActive = await flex.evr.accounts.isActive(address);
    if (!isActive) {
        const transferEvers = options.transferEvers ?? DEFAULTS.transferEvers;
        const deployEvers = options.deployEvers ?? DEFAULTS.deployEvers;
        const accountId = address.split(":")[1] ?? address;
        const signature = await flex.evr.signers.getHashSignature(signer, accountId);
        const everWallet = new EverWallet(flex.evr, options.everWallet);
        await everWallet.transfer({
            dest: await userConfig.getAddress(),
            value: transferEvers,
            payload: {
                abi: UserDataConfigAccount.package.abi,
                fn: "deployFlexClient",
                params: {
                    pubkey,
                    deploy_evers: toUnitsString(deployEvers, Evr),
                    signature,
                },
            },
        });
    }
    return address;
}
