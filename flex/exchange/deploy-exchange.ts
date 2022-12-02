import {
    AuthIndexAccount,
    FlexAccount,
    FlexClientAccount,
    FlexClientStubAccount,
    GlobalConfigAccount,
    PriceXchgAccount,
    SuperRootAccount,
    SuperRootOwnerAccount,
    UserDataConfigAccount,
    UserIdIndexAccount,
    AccountOptionsEx,
    WICAccount,
    WrappersConfigAccount,
    XchgPairAccount,
} from "../../contracts";
import { TransactionNode } from "@eversdk/core";
import { ContractPackageEx } from "../../contracts/helpers";
import {
    SuperRootOwnerDeployFlexInput,
    SuperRootOwnerDeployWrappersConfigInput,
} from "../../contracts/generated/SuperRootOwnerAccount";
import { addEverTokenType, EverTokenTypeOptions, TokenTypeInfo } from "./ever-token-type";
import { addTip3TokenType, Tip3TokenTypeOptions } from "./tip3-token-type";
import { EverWallet, SignerOption, toUnits, Evr } from "../web3";

export type DeployExchangeOptions = {
    everWallet: AccountOptionsEx;
    signer: SignerOption;
    version?: {
        wallet: number;
        exchange: number;
        user: number;
    };
    superRootOwnerEvers?: number;
    superRootEvers?: number;
    prevSuperRoot?: string;
    wrappers?: {
        mainEvers?: number;
        deployEvers?: number;
        keepEvers?: number;
        version?: number;
    };
    flex?: {
        mainEvers?: number;
        deployEvers?: number;
        keepEvers?: number;
        evers?: {
            deploy?: number;
            setNext?: number;
            pairKeep?: number;
        };
        oldFlex?: string /* optional(address) */;
        version?: number /* uint32 */;
        fees?: {
            transferTip3?: number;
            returnOwnership?: number;
            orderAnswer?: number;
            processQueue?: number;
            sendNotify?: number;
            destWalletKeepEvers: number;
        };
        dealsLimit: number /* uint8 */;
    };
    tokenTypes?: {
        ever?: EverTokenTypeOptions;
        tip3?: Tip3TokenTypeOptions;
    };
};

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

enum FlexSetCodeType {
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

export type ExchangeInfo = {
    superRootOwner: string;
    superRoot: string;
    wrappersConfig: string;
    flex: string;
    tokenTypes: {
        ever?: TokenTypeInfo;
        tip3?: TokenTypeInfo;
    };
};

/** @internal */
export async function deployExchange(
    web3: Evr,
    options: DeployExchangeOptions,
): Promise<ExchangeInfo> {
    const superRootOwnerAddress = await deploySuperRootOwner(web3, options);
    const superRootOwner = await web3.accounts.get(SuperRootOwnerAccount, {
        address: superRootOwnerAddress,
        signer: options.signer,
    });
    const details = (await superRootOwner.getDetails()).output;
    let superRootAddress = details.super_root ?? "";
    if (!superRootAddress || !(await web3.accounts.isActive(superRootAddress))) {
        superRootAddress = (
            await superRootOwner.runDeploySuperRoot({
                evers: toUnits(options.superRootEvers ?? DEFAULTS.superRootEvers),
                prev_super_root: options.prevSuperRoot,
            })
        ).output.value0;
    }
    //
    // "wrappersConfig": "0:3cacf420de239c6f17e3be4224c278411f18c47cc5f49ae716dde072300037a1",
    //  "flex": "0:fd794c5fe241aacafa88d1e5bac6620b45400bfd58f2c762ae9f50289cf7e549",

    let wrappersConfigAddress =
        "0:3cacf420de239c6f17e3be4224c278411f18c47cc5f49ae716dde072300037a1";
    if (!(await web3.accounts.isActive(wrappersConfigAddress))) {
        wrappersConfigAddress = (
            await web3.accounts.waitForFinalExternalAnswer(
                (
                    await superRootOwner.runDeployWrappersConfig(wrappersConfig(options))
                ).transaction as TransactionNode,
                SuperRootOwnerAccount.package.abi,
            )
        ).value0;
    }

    let flexAddress = "0:fd794c5fe241aacafa88d1e5bac6620b45400bfd58f2c762ae9f50289cf7e549";
    if (!(await web3.accounts.isActive(flexAddress))) {
        flexAddress = (
            await web3.accounts.waitForFinalExternalAnswer(
                (
                    await superRootOwner.runDeployFlex(flexConfig(options))
                ).transaction as TransactionNode,
                SuperRootOwnerAccount.package.abi,
            )
        ).value0;
    }

    const tokenTypeOptions = {
        everWallet: options.everWallet,
        superRootOwner: {
            address: await superRootOwner.getAddress(),
            signer: superRootOwner.signer,
        },
        superRoot: superRootAddress,
        wrappersConfigAddress,
    };
    const info: ExchangeInfo = {
        superRootOwner: superRootOwnerAddress,
        superRoot: superRootAddress,
        wrappersConfig: wrappersConfigAddress,
        flex: flexAddress,
        tokenTypes: {},
    };

    if (options.tokenTypes?.ever) {
        info.tokenTypes.ever = await addEverTokenType(web3, {
            ...options.tokenTypes.ever,
            ...tokenTypeOptions,
        });
    }
    if (options.tokenTypes?.tip3) {
        info.tokenTypes.tip3 = await addTip3TokenType(web3, {
            ...options.tokenTypes.tip3,
            ...tokenTypeOptions,
        });
    }
    return info;
}

function wrappersConfig(
    exchangeOptions: DeployExchangeOptions,
): SuperRootOwnerDeployWrappersConfigInput {
    const options = exchangeOptions.wrappers;
    const defaults = DEFAULTS.wrappers;
    return {
        main_evers: toUnits(options?.mainEvers ?? defaults.mainEvers),
        deploy_evers: toUnits(options?.deployEvers ?? defaults.deployEvers),
        wrappers_cfg_keep_evers: toUnits(options?.keepEvers ?? defaults.keepEvers),
        token_version: options?.version ?? exchangeOptions.version?.wallet ?? 1,
    };
}

function flexConfig(exchangeOptions: DeployExchangeOptions): SuperRootOwnerDeployFlexInput {
    const options = exchangeOptions.flex;
    const defaults = DEFAULTS.flex;
    return {
        main_evers: toUnits(options?.mainEvers ?? defaults.mainEvers),
        deploy_evers: toUnits(options?.deployEvers ?? defaults.deployEvers),
        keep_evers: toUnits(options?.keepEvers ?? defaults.keepEvers),
        evers: {
            deploy: toUnits(options?.evers?.deploy ?? defaults.evers.deploy),
            setnext: toUnits(options?.evers?.setNext ?? defaults.evers.setNext),
            pair_keep: toUnits(options?.evers?.pairKeep ?? defaults.evers.pairKeep),
        },
        old_flex: options?.oldFlex,
        exchange_version: options?.version ?? exchangeOptions.version?.exchange ?? 1,
        ev_cfg: {
            transfer_tip3: toUnits(options?.fees?.transferTip3 ?? defaults.fees.transferTip3),
            return_ownership: toUnits(
                options?.fees?.returnOwnership ?? defaults.fees.returnOwnership,
            ),
            order_answer: toUnits(options?.fees?.orderAnswer ?? defaults.fees.orderAnswer),
            process_queue: toUnits(options?.fees?.processQueue ?? defaults.fees.processQueue),
            send_notify: toUnits(options?.fees?.sendNotify ?? defaults.fees.sendNotify),
            dest_wallet_keep_evers: toUnits(
                options?.fees?.destWalletKeepEvers ?? defaults.fees.destWalletKeepEvers,
            ),
        },
        deals_limit: options?.dealsLimit ?? defaults.dealsLimit,
    };
}

async function deploySuperRootOwner(web3: Evr, options: DeployExchangeOptions): Promise<string> {
    const pubkey = await web3.signers.resolvePublicKey(options.signer);
    const superRootOwner = await web3.accounts.get(SuperRootOwnerAccount, {
        signer: options.signer,
    });
    const superRootOwnerAddress = await superRootOwner.getAddress();

    if (!(await web3.accounts.isActive(superRootOwnerAddress))) {
        await new EverWallet(web3, options.everWallet).topUp(
            superRootOwnerAddress,
            options.superRootOwnerEvers ?? DEFAULTS.superRootOwnerEvers,
        );
        await superRootOwner.deployContract({
            pubkey: `0x${pubkey}`,
        });
    }
    const details = (await superRootOwner.getDetails()).output;
    const setCode = async (
        type: FlexSetCodeType,
        contract: { package: ContractPackageEx },
        existing: string | null | undefined,
    ) => {
        if (existing === contract.package.code) {
            return;
        }
        await superRootOwner.runSetCode({
            type,
            code: contract.package.code,
        });
    };

    await setCode(FlexSetCodeType.SUPER_ROOT, SuperRootAccount, details.super_root_code);
    await setCode(FlexSetCodeType.GLOBAL_CFG, GlobalConfigAccount, details.global_cfg_code);
    await setCode(
        FlexSetCodeType.FLEX_CLIENT_STUB,
        FlexClientStubAccount,
        details.flex_client_stub,
    );
    await setCode(FlexSetCodeType.WRAPPERS_CFG, WrappersConfigAccount, details.wrappers_cfg_code);
    await setCode(FlexSetCodeType.WIC, WICAccount, details.wic_code);
    await setCode(FlexSetCodeType.FLEX, FlexAccount, details.flex_code);
    await setCode(FlexSetCodeType.PAIR, XchgPairAccount, details.pair_code);
    await setCode(FlexSetCodeType.PRICE, PriceXchgAccount, details.price_code);
    await setCode(FlexSetCodeType.USER_DATA_CFG, UserDataConfigAccount, details.user_data_cfg_code);
    await setCode(FlexSetCodeType.FLEX_CLIENT, FlexClientAccount, details.flex_client_code);
    await setCode(FlexSetCodeType.AUTH_INDEX, AuthIndexAccount, details.auth_index_code);
    await setCode(FlexSetCodeType.USER_ID_INDEX, UserIdIndexAccount, details.user_id_index_code);
    return superRootOwnerAddress;
}
