import { Flex } from "../flex";
import {
    FlexClientAccount,
    RootTokenContractAccount,
    TONTokenWalletAccount,
    WrapperAccount,
} from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { SignerOption, toUnits, uint256 } from "../web3";

export type DeployTraderTip3WalletOptions = {
    /**
     * FLEX client address
     */
    client: string,
    /**
     * FLEX trader
     */
    trader: string,
    /**
     * Token root wrapper address
     */
    tokenRoot: AccountOptionsEx,
    /**
     * Token wrapper address
     */
    tokenWrapper: string,
    /**
     * Ever wallet token balance
     */
    tokens: number,

    externalWalletSigner: SignerOption,

    /**
     * TODO: Evers that will be sent to ever wallet
     */
    externalEvers?: number,

    /**
     * TODO: Evers that will be sent to ever wallet
     */
    internalTransferEvers?: number,
    /**
     * TODO: Evers that will be sent to ever wallet
     */
    internalEvers?: number,
    /**
     * TODO: Evers that must be kept on ever wallet
     */
    internalKeepEvers?: number,
}

export type Tip3WalletInfo = {
    externalAddress: string,
    address: string,
}

const DEFAULTS = {
    externalEvers: 15,
    internalTransferEvers: 7,
    internalEvers: 15,
    internalKeepEvers: 12,
};

/** @internal */
export async function deployTraderTip3Wallet(
    flex: Flex,
    options: DeployTraderTip3WalletOptions,
): Promise<Tip3WalletInfo> {
    const externalAddress = await deployExternalWallet(flex, options);
    const internalAddress = await deployInternalWallet(flex, options, externalAddress);
    return {
        externalAddress,
        address: internalAddress,
    };
}

async function deployExternalWallet(
    flex: Flex,
    options: DeployTraderTip3WalletOptions,
): Promise<string> {
    const root = await flex.evr.accounts.get(RootTokenContractAccount, options.tokenRoot);
    return (await root.runDeployWallet({
        _answer_id: 0,
        tokens: toUnits(options.tokens),
        evers: toUnits(options.externalEvers ?? DEFAULTS.externalEvers),
        pubkey: uint256(await flex.evr.signers.resolvePublicKey(options.externalWalletSigner)),
    })).output.value0;
}

async function deployInternalWallet(
    flex: Flex,
    options: DeployTraderTip3WalletOptions,
    externalAddress: string,
): Promise<string> {
    const pubkey = uint256(options.trader);

    const externalWallet = await flex.evr.accounts.get(TONTokenWalletAccount, {
        address: externalAddress,
        signer: options.externalWalletSigner,
    });

    const wrapper = await flex.evr.accounts.get(WrapperAccount, options.tokenWrapper);
    const wrapperWalletAddress = (await wrapper.getDetails()).output.external_wallet ?? "";

    const client = await flex.evr.accounts.get(FlexClientAccount, options.client);
    const transferEvers = options.internalTransferEvers ?? DEFAULTS.internalTransferEvers;
    const evers = options.internalEvers ?? DEFAULTS.internalEvers;
    const keepEvers = options.internalKeepEvers ?? DEFAULTS.internalKeepEvers;
    const payload = (await client.getPayloadForDeployInternalWallet({
        owner_addr: options.client,
        owner_pubkey: pubkey,
        evers: toUnits(evers),
        keep_evers: toUnits(keepEvers),
    })).output.value0;

    await externalWallet.runTransfer({
        _answer_id: 0,
        answer_addr: externalAddress,
        to: wrapperWalletAddress,
        tokens: toUnits(options.tokens),
        evers: toUnits(evers + transferEvers),
        return_ownership: 0,
        notify_payload: payload,
    });

    return (await wrapper.getWalletAddress({
        pubkey,
        owner: options.client,
    })).output.value0;
}
