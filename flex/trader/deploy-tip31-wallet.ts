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
    clientAddress: string,

    /**
     * FLEX trader
     */
    traderId: string,

    /**
     * Client's native TIP-31 token wallet address
     */
    tokenWalletAddress: string,

    /**
     * Tip-31 DEX Token wrapper address
     */
    tokenWrapperAddress: string,

    /**
     * Token Wrapper's TIP-31 Vault wallet address
     */
    tokenWrapperWalletAddress: string,

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

export type DeployTraderTip31WalletResult = {
    address: string,
};

const DEFAULTS = {
    transferEvers: 30,
    evers: 15,
    keepEvers: 12,
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

    const payload = (await client.getPayloadForDeployInternalWallet({
        owner_addr: options.clientAddress,
        owner_pubkey: pubkey,
        evers: toUnits(evers),
        keep_evers: toUnits(keepEvers),
    })).output.value0;

    const everWallet = new EverWallet(flex.evr, options.everWallet);
    await everWallet.transfer({
        dest: options.tokenWalletAddress,
        value: toUnits(options.transferEvers ?? DEFAULTS.transferEvers),
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
        address: (await wrapper.getWalletAddress({
            pubkey,
            owner: options.clientAddress,
        })).output.value0,
    };
}


