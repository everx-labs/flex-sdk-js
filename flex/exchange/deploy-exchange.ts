import { Flex } from "../flex";
import { AccountEx, AccountOptionsEx } from "../../contracts/account-ex";
import {
    AuthIndexAccount,
    FlexAccount,
    FlexClientAccount, FlexClientStubAccount,
    GlobalConfigAccount, PriceXchgAccount,
    SuperRootAccount, SuperRootOwnerAccount,
    UserDataConfigAccount, UserIdIndexAccount, WICAccount, WrappersConfigAccount, XchgPairAccount,
} from "../../contracts";
import { Signer } from "@eversdk/core";
import { EverWallet } from "../ever-wallet";
import { amountToUnits, ContractPackageEx } from "../../contracts/helpers";
import {
    SuperRootOwnerDeployFlexInput,
    SuperRootOwnerDeployWrappersConfigInput,
} from "../../contracts/generated/SuperRootOwnerAccount";
import { TokenType } from "./add-token-type";

export type DeployExchangeOptions = {
    everWallet: AccountOptionsEx,
    signer: Signer | string,
    version: {
        wallet: 1,
        exchange: 1,
        user: 1
    },
    superRootOwnerEvers?: number,
    superRootEvers?: number,
    prevSuperRoot?: string,
    wrappers?: {
        mainEvers?: number,
        deployEvers?: number,
        keepEvers?: number,
        version?: number,
    },
    flex?: {
        mainEvers?: number,
        deployEvers?: number,
        keepEvers?: number,
        evers?: {
            deploy?: number,
            setNext?: number,
            pairKeep?: number,
        },
        oldFlex?: string /* optional(address) */,
        version?: number /* uint32 */,
        fees?: {
            transferTip3?: number,
            returnOwnership?: number,
            orderAnswer?: number,
            processQueue?: number,
            sendNotify?: number,
            destWalletKeepEvers: number,
        },
        dealsLimit: number /* uint8 */,
    },
    tokenTypes?: TokenType[],
}

const DEFAULTS = {
    superRootOwnerEvers: 200,
    superRootEvers: 5,
    wrappers: {
        mainEvers: 4,
        deployEvers: 2,
        keepEvers: 1,
    },
    flex: {
        mainEvers: 2,
        deployEvers: 1.5,
        keepEvers: 1,
        evers: {
            deploy: 1.3,
            setNext: 0.2,
            pairKeep: 1,
        },
        fees: {
            transferTip3: 0.3,
            returnOwnership: 0.2,
            orderAnswer: 0.1,
            processQueue: 0.4,
            sendNotify: 0.1,
            destWalletKeepEvers: 0.01,
        },
        dealsLimit: 20,
    },
};

enum FlexCode {
    SUPER_ROOT = 1,
    GLOBAL_CFG = 2,
    FLEX_CLIENT_STUB = 3,
    WRAPPERS_CFG = 4,
    WIC = 5,
    FLEX = 6,
    PAIR = 7,
    PRICE = 8,
    USER_DATA_CFG = 9,
    FLEX_CLIENT = 10,
    AUTH_INDEX = 11,
    USER_ID_INDEX = 12,
}

/** @internal */
export async function deployExchange(
    flex: Flex,
    options: DeployExchangeOptions,
): Promise<SuperRootAccount> {
    const superRootOwner = await deploySuperRootOwner(flex, options);

    const superRootAddress = (await superRootOwner.runDeploySuperRoot({
        evers: amountToUnits(options.superRootEvers ?? DEFAULTS.superRootEvers),
        prev_super_root: options.prevSuperRoot,
    })).output.value0;

    // const wrappersConfigAddress =
    (await superRootOwner.runDeployWrappersConfig(wrappersConfig(options))).output.value0;

    // const flexAddress =
    (await superRootOwner.runDeployFlex(flexConfig(options))).output.value0;
    return await flex.getAccount(SuperRootAccount, superRootAddress);
}

function wrappersConfig(exchangeOptions: DeployExchangeOptions): SuperRootOwnerDeployWrappersConfigInput {
    const options = exchangeOptions.wrappers;
    const defaults = DEFAULTS.wrappers;
    return {
        main_evers: amountToUnits(options?.mainEvers ?? defaults.mainEvers),
        deploy_evers: amountToUnits(options?.deployEvers ?? defaults.deployEvers),
        wrappers_cfg_keep_evers: amountToUnits(options?.keepEvers ?? defaults.keepEvers),
        token_version: options?.version ?? exchangeOptions.version.wallet,
    };
}

function flexConfig(exchangeOptions: DeployExchangeOptions): SuperRootOwnerDeployFlexInput {
    const options = exchangeOptions.flex;
    const defaults = DEFAULTS.flex;
    return {
        main_evers: amountToUnits(options?.mainEvers ?? defaults.mainEvers),
        deploy_evers: amountToUnits(options?.deployEvers ?? defaults.deployEvers),
        keep_evers: amountToUnits(options?.keepEvers ?? defaults.keepEvers),
        evers: {
            deploy: amountToUnits(options?.evers?.deploy ?? defaults.evers.deploy),
            setnext: amountToUnits(options?.evers?.setNext ?? defaults.evers.setNext),
            pair_keep: amountToUnits(options?.evers?.pairKeep ?? defaults.evers.pairKeep),
        },
        old_flex: options?.oldFlex,
        exchange_version: options?.version ?? exchangeOptions.version.exchange,
        ev_cfg: {
            transfer_tip3: amountToUnits(options?.fees?.transferTip3 ?? defaults.fees.transferTip3),
            return_ownership: amountToUnits(options?.fees?.returnOwnership ?? defaults.fees.returnOwnership),
            order_answer: amountToUnits(options?.fees?.orderAnswer ?? defaults.fees.orderAnswer),
            process_queue: amountToUnits(options?.fees?.processQueue ?? defaults.fees.processQueue),
            send_notify: amountToUnits(options?.fees?.sendNotify ?? defaults.fees.sendNotify),
            dest_wallet_keep_evers: amountToUnits(options?.fees?.destWalletKeepEvers ?? defaults.fees.destWalletKeepEvers),
        },
        deals_limit: options?.dealsLimit ?? defaults.dealsLimit,
    };
}

async function deploySuperRootOwner(
    flex: Flex,
    options: DeployExchangeOptions,
): Promise<SuperRootOwnerAccount> {
    const pubkey = await flex.signers.resolvePublicKey(options.signer);
    const superRootOwner = new SuperRootOwnerAccount({
        signer: await flex.signers.resolve(options.signer),
        client: flex.web3,
        log: flex.log,
    });
    const superRootOwnerAddress = await superRootOwner.getAddress();

    if (await AccountEx.isActive(superRootOwnerAddress, flex.web3)) {
        return superRootOwner;
    }
    const everWallet = new EverWallet(options.everWallet, flex);
    await everWallet.topUp(
        superRootOwnerAddress,
        options.superRootOwnerEvers ?? DEFAULTS.superRootOwnerEvers,
    );
    await superRootOwner.deployContract({
        pubkey: `0x${pubkey}`,
    });

    const setCode = async (
        type: FlexCode,
        contract: { package: ContractPackageEx },
    ) => {
        await superRootOwner.runSetCode({
            type,
            code: contract.package.code,
        });
    };

    await setCode(FlexCode.SUPER_ROOT, SuperRootAccount);
    await setCode(FlexCode.GLOBAL_CFG, GlobalConfigAccount);
    await setCode(FlexCode.FLEX_CLIENT_STUB, FlexClientStubAccount);
    await setCode(FlexCode.WRAPPERS_CFG, WrappersConfigAccount);
    await setCode(FlexCode.WIC, WICAccount);
    await setCode(FlexCode.FLEX, FlexAccount);
    await setCode(FlexCode.PAIR, XchgPairAccount);
    await setCode(FlexCode.PRICE, PriceXchgAccount);
    await setCode(FlexCode.USER_DATA_CFG, UserDataConfigAccount);
    await setCode(FlexCode.FLEX_CLIENT, FlexClientAccount);
    await setCode(FlexCode.AUTH_INDEX, AuthIndexAccount);
    await setCode(FlexCode.USER_ID_INDEX, UserIdIndexAccount);
    return superRootOwner;
}


