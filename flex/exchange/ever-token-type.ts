import {
    FlexWalletAccount,
    SuperRootOwnerAccount,
    // TONTokenWalletAccount,
    WrapperDeployerEverAccount,
    WrapperEverAccount,
    AccountOptionsEx,
} from "../../contracts";
import { EverWallet, toUnitsBigIntString, Evr, SignerOption } from "../web3";

export const EVER_TOKEN_TYPE = 1;

export type EverTokenTypeOptions = {
    wrapperSigner: SignerOption;
    wrapperDeployerSigner: SignerOption;
    wrapperDeployerBalance?: number;
    wrapperDeployEvers?: number;
    wrapperKeepEvers?: number;
    reserveWalletEvers?: number;
    mainEvers?: number;
    callEvers?: number;
    keepEvers?: number;
};

export type AddEverTokenTypeOptions = {
    everWallet: AccountOptionsEx;
    superRootOwner: AccountOptionsEx;
    superRoot: string;
    wrappersConfigAddress: string;
} & EverTokenTypeOptions;

const DEFAULTS = {
    wrapperDeployerBalance: 100,
    wrapperDeployEvers: 2,
    wrapperKeepEvers: 1,
    reserveWalletEvers: 0.5,
    extWalletEvers: 1,
    outDeployEvers: 1,
    mainEvers: 3,
    callEvers: 2,
    keepEvers: 1,
};

export type TokenTypeInfo = {
    deployer: string;
};

/** @internal */
export async function addEverTokenType(
    web3: Evr,
    options: AddEverTokenTypeOptions,
): Promise<TokenTypeInfo> {
    const deployer = await web3.accounts.get(WrapperDeployerEverAccount, {
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
        wrapper_deploy_value: toUnitsBigIntString(options.wrapperDeployEvers ?? DEFAULTS.wrapperDeployEvers),
        wrapper_keep_balance: toUnitsBigIntString(options.wrapperKeepEvers ?? DEFAULTS.wrapperKeepEvers),
        reserve_wallet_value: toUnitsBigIntString(options.reserveWalletEvers ?? DEFAULTS.reserveWalletEvers),
    });
    await deployer.runSetWrapperEverCode({ code: WrapperEverAccount.package.code });
    // await deployer.runSetExtWalletCode({ code: TONTokenWalletAccount.package.code });
    await deployer.runSetFlexWalletCode({ code: FlexWalletAccount.package.code });

    const superRootOwner = await web3.accounts.get(SuperRootOwnerAccount, options.superRootOwner);
    await superRootOwner.runAddWrapperType({
        type: EVER_TOKEN_TYPE,
        main_evers: toUnitsBigIntString(options.mainEvers ?? DEFAULTS.mainEvers),
        wrappers_cfg_keep_evers: toUnitsBigIntString(options.keepEvers ?? DEFAULTS.keepEvers),
        wrappers_cfg: options.wrappersConfigAddress,
        wrapper_deployer: await deployer.getAddress(),
    });
    return {
        deployer: await deployer.getAddress(),
    };
}
