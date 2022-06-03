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
     * Token wallet address
     */
    tokenWallet: string,

    /**
     * Token wallet address
     */
    tokenWrapper: string,

    /**
     * Token wallet address
     */
    tokenWrapperWallet: string,

    /**
     * Tip31 wallet token balance
     */
    tokenUnits: string,

    /**
     * Ever wallet that will be used to start deployment process
     */
    everWallet: AccountOptionsEx,

    /**
     * TODO: Evers that will be sent to ever wallet
     */
    transferEvers?: number,

    /**
     * TODO: Evers that will be sent to ever wallet
     */
    evers?: number,

    /**
     * TODO: Evers that must be kept on ever wallet
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


