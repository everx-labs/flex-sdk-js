import {
    FlexWalletAccount,
    SuperRootOwnerAccount,
    TONTokenWalletAccount,
    WrapperAccount,
    WrapperDeployerTip3Account,
} from "../../contracts";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { TokenTypeInfo } from "./ever-token-type";
import { EverWallet, SignerOption, toUnits, Web3Evr } from "../web3";

export const TIP3_TOKEN_TYPE = 0;
export type Tip3TokenTypeOptions = {
    wrapperSigner: SignerOption,
    wrapperDeployerSigner: SignerOption,
    wrapperDeployerBalance?: number,
    wrapperDeployEvers?: number,
    wrapperKeepEvers?: number,
    reserveWalletEvers?: number
    mainEvers?: number,
    callEvers?: number,
    keepEvers?: number,
    extWalletEvers?: number,
}

export type AddTip3TokenTypeOptions = {
    everWallet: AccountOptionsEx,
    superRootOwner: AccountOptionsEx,
    superRoot: string,
    wrappersConfigAddress: string,
} & Tip3TokenTypeOptions;

const DEFAULTS = {
    wrapperDeployerBalance: 100,
    wrapperDeployEvers: 2,
    wrapperKeepEvers: 1,
    reserveWalletEvers: 0.5,
    extWalletEvers: 1,
    mainEvers: 3,
    callEvers: 2,
    keepEvers: 1,
};

/** @internal */
export async function addTip3TokenType(
    web3: Web3Evr,
    options: AddTip3TokenTypeOptions,
): Promise<TokenTypeInfo> {
    const deployer = await web3.accounts.get(WrapperDeployerTip3Account, {
        signer: options.wrapperDeployerSigner,
    });
    await new EverWallet(web3, options.everWallet).topUp(
        await deployer.getAddress(),
        options.wrapperDeployerBalance ?? DEFAULTS.wrapperDeployerBalance,
    );

    const deployerPublicKey = await web3.signers.resolvePublicKey(options.wrapperDeployerSigner);
    const wrapperPublicKey = await web3.signers.resolvePublicKey(options.wrapperSigner);
    await deployer.deployContract({
        pubkey: `0x${deployerPublicKey}`,
        wrapper_pubkey: `0x${wrapperPublicKey}`,
        super_root: options.superRoot,
        wrapper_deploy_value: toUnits(options.wrapperDeployEvers ?? DEFAULTS.wrapperDeployEvers),
        wrapper_keep_balance: toUnits(options.wrapperKeepEvers ?? DEFAULTS.wrapperKeepEvers),
        reserve_wallet_value: toUnits(options.reserveWalletEvers ?? DEFAULTS.reserveWalletEvers),
        ext_wallet_value: toUnits(options.extWalletEvers ?? DEFAULTS.extWalletEvers),
    });
    await deployer.runSetWrapperCode({ code: WrapperAccount.package.code });
    await deployer.runSetExtWalletCode({ code: TONTokenWalletAccount.package.code });
    await deployer.runSetFlexWalletCode({ code: FlexWalletAccount.package.code });

    const superRootOwner = await web3.accounts.get(SuperRootOwnerAccount, options.superRootOwner);
    await superRootOwner.runAddWrapperType({
        type: TIP3_TOKEN_TYPE,
        main_evers: toUnits(options.mainEvers ?? DEFAULTS.mainEvers),
        wrappers_cfg_keep_evers: toUnits(options.keepEvers ?? DEFAULTS.keepEvers),
        wrappers_cfg: options.wrappersConfigAddress,
        wrapper_deployer: await deployer.getAddress(),
    });
    return {
        deployer: await deployer.getAddress(),
    };
}

