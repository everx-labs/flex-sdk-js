import { Flex } from "../flex";
import { WrapperEverAccount, AccountOptionsEx } from "../../contracts";
import { EverWallet, Evr, TokenValue, toUnitsString, uint256 } from "../web3";
import { toUnits } from "../web3/utils";

export type DeployTraderEverWalletOptions = {
    /**
     * Multisig EVER wallet from which EVERs are deposited on Trader's wallet on DEX
     */
    everWallet: AccountOptionsEx;
    /**
     * Flex Client contract address
     */
    clientAddress: string;
    /**
     * Trader ID. uint256 hex string.
     */
    traderId: string;
    /**
     * EVER wrapper (that also acts as EVER Vault) address
     */
    wrapperAddress: string;
    /**
     * Amount of EVERs to deposit
     */
    tokens: TokenValue;

    /**
     * Amount of native EVERs that the deposit message carries. Later on, DEX wallet will spend them to pay for gas.
     */
    evers?: TokenValue;
    /**
     * Minimum amount of EVERs on DEX wallet. If balance drops below this amount,
     * wallet is automatically topped-up from the Trader's Index wallet.
     */
    keepEvers?: TokenValue;
};

export type EverWalletInfo = {
    address: string;
};

const DEFAULTS = {
    evers: 15,
    keepEvers: 12,
};

/** @internal */
export async function deployTraderEverWallet(
    flex: Flex,
    options: DeployTraderEverWalletOptions,
): Promise<EverWalletInfo> {
    const pubkey = uint256(options.traderId);
    const wrapper = await flex.evr.accounts.get(WrapperEverAccount, options.wrapperAddress);
    const walletAddress = (
        await wrapper.getWalletAddress({
            owner: options.clientAddress,
            pubkey,
        })
    ).output.value0;
    const everWallet = new EverWallet(flex.evr, options.everWallet);
    const evers = options.evers ?? DEFAULTS.evers;
    const keepEvers = options.keepEvers ?? DEFAULTS.keepEvers;
    await everWallet.transfer({
        dest: options.wrapperAddress,
        value: { units: toUnits(options.tokens, Evr) + toUnits(evers, Evr) },
        payload: {
            abi: WrapperEverAccount.package.abi,
            fn: "onEverTransfer",
            params: {
                tokens: toUnitsString(options.tokens, Evr),
                args: {
                    pubkey,
                    owner: options.clientAddress,
                    evers: toUnitsString(evers, Evr),
                    keep_evers: toUnitsString(keepEvers, Evr),
                },
                answer_addr: await everWallet.getAddress(),
            },
        },
    });

    return {
        address: walletAddress,
    };
}
