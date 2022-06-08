import { Flex } from "../flex";
import {
    FlexClientAccount, Tip31WalletAccount,
    WrapperAccount,
} from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { EverWallet, toUnits, uint256 } from "../web3";

export type DeployTraderTip31WalletOptions = {
    /**
     * FLEX client address
     */
    client: string,

    /**
     * FLEX trader
     */
    trader: string,

    /**
     * Client's native TIP-31 token wallet address
     */
    tokenWallet: string,

    /**
     * Tip-31 DEX Token wrapper address
     */
    tokenWrapper: string,

    /**
     * Token Wrapper's TIP-31 Vault wallet address
     */
    tokenWrapperWallet: string,

    /**
     * How much TIP-31 tokens to deposit on DEX. 
     */
    tokenUnits: string,

    /**
     * Ever Wallet, that is the owner of native TIP31 Wallet
     */
    everWallet: AccountOptionsEx,

    /**
     *  TODO: need to describe
     */
    transferEvers?: number,

    /**
     * TODO: need to describe
     */
    evers?: number,

    /**
     * Minimum amount of EVERs on DEX wallet. If balance drops below this amount, 
     * wallet is topped-up from Trader's Index wallet.
     */
    keepEvers?: number,
}

const DEFAULTS = {
    transferEvers: 30,
    evers: 15,
    keepEvers: 12,
};

/** @internal */
export async function deployTraderTip31Wallet(
    flex: Flex,
    options: DeployTraderTip31WalletOptions,
): Promise<string> {
    const pubkey = uint256(options.trader);


    const client = await flex.evr.accounts.get(FlexClientAccount, options.client);
    const evers = options.evers ?? DEFAULTS.evers;
    const keepEvers = options.keepEvers ?? DEFAULTS.keepEvers;

    const payload = (await client.getPayloadForDeployInternalWallet({
        owner_addr: options.client,
        owner_pubkey: pubkey,
        evers: toUnits(evers),
        keep_evers: toUnits(keepEvers),
    })).output.value0;

    const everWallet = new EverWallet(flex.evr, options.everWallet);
    await everWallet.transfer({
        dest: options.tokenWallet,
        value: toUnits(options.transferEvers ?? DEFAULTS.transferEvers),
        payload: {
            abi: Tip31WalletAccount.package.abi,
            fn: "transferToWallet",
            params: {
                _answer_id: 0,
                amount: options.tokenUnits,
                recipientTokenWallet: options.tokenWrapperWallet,
                remainingGasTo: await everWallet.getAddress(),
                notify: true,
                payload,
            },
        },
    });

    const wrapper = await flex.evr.accounts.get(WrapperAccount, options.tokenWrapper);
    return (await wrapper.getWalletAddress({
        pubkey,
        owner: options.client,
    })).output.value0;

}


