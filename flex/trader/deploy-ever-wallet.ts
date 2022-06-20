import { Flex } from "../flex";
import { WrapperAccount } from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { EverWallet, toUnits, uint256 } from "../web3";

export type DeployTraderEverWalletOptions = {
    /**
     * Multisig wallet that act as a sponsor for wallet deploying.
     */
    everWallet: AccountOptionsEx,
    /**
     * FLEX client address
     */
    client: string,
    /**
     * FLEX trader
     */
    trader: string,
    /**
     * Ever Token wrapper address
     */
    wrapper: string,
    /**
     * Ever wallet token balance
     */
    tokens: number,

    /**
     * TODO: Evers that will be sent to ever wallet
     */
    evers?: number,
    /**
     * TODO: Evers that must be kept on ever wallet
     */
    keepEvers?: number,
}

export type EverWalletInfo = {
    address: string,
}

const DEFAULTS = {
    evers: 15,
    keepEvers: 12,
};

/** @internal */
export async function deployTraderEverWallet(
    flex: Flex,
    options: DeployTraderEverWalletOptions,
): Promise<EverWalletInfo> {
    const pubkey = uint256(options.trader);
    const wrapper = await flex.evr.accounts.get(WrapperAccount, options.wrapper);
    const walletAddress = (await wrapper.getWalletAddress({
        owner: options.client,
        pubkey,
    })).output.value0;
    const everWallet = new EverWallet(flex.evr, options.everWallet);
    const evers = options.evers ?? DEFAULTS.evers;
    const keepEvers = options.keepEvers ?? DEFAULTS.keepEvers;
    await everWallet.transfer({
        dest: options.wrapper,
        value: toUnits(options.tokens + evers),
        payload: {
            abi: WrapperAccount.package.abi,
            fn: "onEverTransfer",
            params: {
                tokens: toUnits(options.tokens),
                args: {
                    pubkey,
                    owner: options.client,
                    evers: toUnits(evers),
                    keep_evers: toUnits(keepEvers),
                },
                answer_addr: await everWallet.getAddress(),
            },
        },
    });
    await everWallet.topUp(walletAddress, evers);
    return {
        address: walletAddress,
    };
}
