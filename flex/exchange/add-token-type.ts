import { Flex } from "../flex";
import {
    FlexWalletAccount,
    SuperRootOwnerAccount,
    TONTokenWalletAccount,
    WrapperAccount,
    WrapperDeployerBroxusAccount,
    WrapperDeployerEverAccount,
    WrapperDeployerTip3Account,
    WrapperEverAccount,
} from "../../contracts";
import { Signer } from "@eversdk/core";
import { amountToUnits } from "../../contracts/helpers";
import { EverWallet } from "../ever-wallet";
import { AccountOptionsEx } from "../../contracts/account-ex";
import { Account } from "@eversdk/appkit";

export enum TokenType {
    TIP3 = 0,
    EVER = 1,
    BROXUS = 2,
}

type BaseAddTokenTypeOptions = {
    everWallet: AccountOptionsEx,
    superRootOwner: AccountOptionsEx,
    superRoot: string,
    type: TokenType,
    wrappersConfigAddress: string,
    wrapperSigner: Signer | string,
    wrapperDeployerSigner: Signer | string,
    wrapperDeployerBalance?: number,
    wrapperDeployEvers?: number,
    wrapperKeepEvers?: number,
    reserveWalletEvers?: number
    mainEvers?: number,
    callEvers?: number,
    keepEvers?: number,
}

type BaseDeployerCtorInput = {
    pubkey: string | number | bigint /* uint256 */,
    wrapper_pubkey: string | number | bigint /* uint256 */,
    super_root: string /* address */,
    wrapper_deploy_value: string | number | bigint /* uint128 */,
    wrapper_keep_balance: string | number | bigint /* uint128 */,
    reserve_wallet_value: string | number | bigint /* uint128 */,

}

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

type AddEverTokenTypeOptions = BaseAddTokenTypeOptions;

export async function addEverTokenType(flex: Flex, options: AddEverTokenTypeOptions) {
    const deployer = new WrapperDeployerEverAccount({
        signer: await flex.signers.resolve(options.wrapperDeployerSigner),
    });
    await topUpDeployer(flex, deployer, options);

    await deployer.deployContract(await baseDeployerCtorInput(flex, options));
    await deployer.runSetWrapperEverCode({ code: WrapperEverAccount.package.code });
    await deployer.runSetExtWalletCode({ code: TONTokenWalletAccount.package.code });
    await deployer.runSetFlexWalletCode({ code: FlexWalletAccount.package.code });

    await addTokenType(flex, deployer, options);
}

type AddTip3TokenTypeOptions = BaseAddTokenTypeOptions & {
    extWalletEvers?: number,
};

export async function addTip3TokenType(flex: Flex, options: AddTip3TokenTypeOptions) {
    const deployer = new WrapperDeployerTip3Account({
        signer: await flex.signers.resolve(options.wrapperDeployerSigner),
    });
    await topUpDeployer(flex, deployer, options);

    await deployer.deployContract({
        ...await baseDeployerCtorInput(flex, options),
        ext_wallet_value: amountToUnits(options.extWalletEvers ?? DEFAULTS.extWalletEvers),
    });
    await deployer.runSetWrapperCode({ code: WrapperAccount.package.code });
    await deployer.runSetExtWalletCode({ code: TONTokenWalletAccount.package.code });
    await deployer.runSetFlexWalletCode({ code: FlexWalletAccount.package.code });

    await addTokenType(flex, deployer, options);
}

type AddBroxusTokenTypeOptions = AddTip3TokenTypeOptions & {
    outDeployEvers?: number,
};

export async function addBroxusTokenType(flex: Flex, options: AddBroxusTokenTypeOptions) {
    const deployer = new WrapperDeployerBroxusAccount({
        signer: await flex.signers.resolve(options.wrapperDeployerSigner),
    });
    await topUpDeployer(flex, deployer, options);
    await deployer.deployContract({
        ...await baseDeployerCtorInput(flex, options),
        ext_wallet_value: amountToUnits(options.extWalletEvers ?? DEFAULTS.extWalletEvers),
        out_deploy_value: amountToUnits(options.outDeployEvers ?? DEFAULTS.outDeployEvers),
    });
    await deployer.runSetWrapperCode({ code: WrapperAccount.package.code });
    await deployer.runSetFlexWalletCode({ code: FlexWalletAccount.package.code });

    await addTokenType(flex, deployer, options);
}

async function topUpDeployer(flex: Flex, deployer: Account, options: BaseAddTokenTypeOptions) {
    await new EverWallet(options.everWallet, flex).topUp(
        await deployer.getAddress(),
        options.wrapperDeployerBalance ?? DEFAULTS.wrapperDeployerBalance,
    );

}

async function baseDeployerCtorInput(
    flex: Flex,
    options: BaseAddTokenTypeOptions,
): Promise<BaseDeployerCtorInput> {
    const deployerPublicKey = await flex.signers.resolvePublicKey(options.wrapperDeployerSigner);
    const wrapperPublicKey = await flex.signers.resolvePublicKey(options.wrapperSigner);
    return {
        pubkey: `0x${deployerPublicKey}`,
        wrapper_pubkey: `0x${wrapperPublicKey}`,
        super_root: options.superRoot,
        wrapper_deploy_value: amountToUnits(options.wrapperDeployEvers ?? DEFAULTS.wrapperDeployEvers),
        wrapper_keep_balance: amountToUnits(options.wrapperKeepEvers ?? DEFAULTS.wrapperKeepEvers),
        reserve_wallet_value: amountToUnits(options.reserveWalletEvers ?? DEFAULTS.reserveWalletEvers),
    };
}

async function addTokenType(flex: Flex, deployer: Account, options: AddTip3TokenTypeOptions) {
    const superRootOwner = await flex.getAccount(SuperRootOwnerAccount, options.superRootOwner);
    await superRootOwner.runAddWrapperType({
        type: options.type,
        main_evers: amountToUnits(options.mainEvers ?? DEFAULTS.mainEvers),
        wrappers_cfg_keep_evers: amountToUnits(options.keepEvers ?? DEFAULTS.keepEvers),
        wrappers_cfg: options.wrappersConfigAddress,
        wrapper_deployer: await deployer.getAddress(),
    });
}
