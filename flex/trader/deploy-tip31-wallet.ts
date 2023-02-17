import { Flex } from "../flex";
import {
    FlexClientAccount,
    Tip31WalletAccount,
    WrapperAccount,
    AccountOptionsEx,
} from "../../contracts";
import { EverWallet, Evr, TokenValue, toUnitsString, uint256 } from "../web3";

export type DeployTraderTip31WalletOptions = {
    /**
     * FLEX client address
     */
    clientAddress: string;

    /**
     * Ever Wallet, that is the owner of native TIP31 Wallet
     */
    everWallet: AccountOptionsEx;

    /**
     * FLEX trader
     */
    traderId: string;

    /**
     * Client's native TIP-31 token wallet address
     */
    tokenWalletAddress: string;

    /**
     * Tip-31 DEX Token wrapper address
     */
    tokenWrapperAddress: string;

    /**
     * Token Wrapper's TIP-31 Vault wallet address
     */
    tokenWrapperWalletAddress: string;

    /**
     * How much TIP-31 tokens to deposit on DEX.
     */
    tokenUnits: string;

    /**
     *  TODO: need to describe
     */
    transferEvers?: TokenValue;

    /**
     * TODO: need to describe
     */
    evers?: TokenValue;

    /**
     * Minimum amount of EVERs on DEX wallet. If balance drops below this amount,
     * wallet is topped-up from Trader's Index wallet.
     */
    keepEvers?: TokenValue;
};

export type DeployTraderTip31WalletResult = {
    address: string;
};

const DEFAULTS = {
    transferEvers: { tokens: 30 },
    evers: { tokens: 15 },
    keepEvers: { tokens: 12 },
};

/** @internal */
export async function deployTraderTip31Wallet(
    flex: Flex,
    options: DeployTraderTip31WalletOptions,
): Promise<DeployTraderTip31WalletResult> {
    const pubkey = uint256(options.traderId);

    const client = await flex.evr.accounts.get(FlexClientAccount, options.clientAddress);
    const evers = options.evers ?? DEFAULTS.evers;
    const keepEvers = options.keepEvers ?? DEFAULTS.keepEvers;

    const payload = (
        await client.getPayloadForDeployInternalWallet({
            owner_addr: options.clientAddress,
            owner_pubkey: pubkey,
            evers: toUnitsString(evers, Evr),
            keep_evers: toUnitsString(keepEvers, Evr),
        })
    ).output.value0;

    const everWallet = new EverWallet(flex.evr, options.everWallet);
    await everWallet.transfer({
        dest: options.tokenWalletAddress,
        value: options.transferEvers ?? DEFAULTS.transferEvers,
        payload: {
            abi: Tip31WalletAccount.package.abi,
            fn: "transferToWallet",
            params: {
                _answer_id: 0,
                amount: options.tokenUnits,
                recipientTokenWallet: options.tokenWrapperWalletAddress,
                remainingGasTo: await everWallet.getAddress(),
                notify: true,
                payload,
            },
        },
    });

    const wrapper = await flex.evr.accounts.get(WrapperAccount, options.tokenWrapperAddress);
    return {
        address: (
            await wrapper.getWalletAddress({
                pubkey,
                owner: options.clientAddress,
            })
        ).output.value0,
    };
}
