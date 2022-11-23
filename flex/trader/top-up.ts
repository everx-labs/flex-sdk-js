import { Flex } from "../flex";
import { toUnits, TokenValue, AccountOptionsEx, uint256, Evr, EverWallet } from "../web3";
import { SdkError } from "./processing";
import { TvmErrorCode } from "@eversdk/core";
import { decimalFromNumAndDenomAsPowerOf10 } from "../web3/utils";

function toNativeUnits(value: TokenValue): bigint {
    return BigInt(toUnits(value, Evr.NATIVE_DECIMALS));
}

export type TopUpOptions = {
    client: string;

    id: string;

    /**
     * Ever Wallet (multisig) that will be used to topup.
     */
    everWallet: AccountOptionsEx;

    minBalance: TokenValue;

    value: TokenValue;
};

export type TopUpAccountResult = {
    address: string;
    balanceBefore: string; // Decimal in EVERs
    topUpValue: string; // Decimal in EVERs
};

export type TopUpResult = {
    everWalletBalanceBefore: string; // Decimal in EVERs
    totalTopUpValue: string; // Decimal in EVERs
    accounts: TopUpAccountResult[];
};

type TopUpAccountPlan = {
    address: string;
    balanceBefore: bigint;
    value: bigint;
};

type TopUpPlan = {
    everWalletBalance: bigint;
    value: bigint;
    accounts: TopUpAccountPlan[];
};

async function getTopupPlan(
    flex: Flex,
    everWallet: EverWallet,
    options: TopUpOptions,
): Promise<TopUpPlan> {
    const everWalletAddress = await everWallet.getAddress();
    const clientAccount = await flex.getCachedFlexClient(options.client);
    const userId = uint256(options.id);
    const indexAddress = (
        await clientAccount.getUserIdIndex({
            user_id: userId,
        })
    ).output.value0;
    const addresses: string[] = [everWalletAddress, indexAddress];
    const wallets = await flex.getCachedTraderWallets(options.client, options.id);
    for (const wallet of wallets) {
        addresses.push(wallet.address);
    }
    const balances = await flex.evr.accounts.getBalancesUnits(addresses);
    const plan: TopUpPlan = {
        everWalletBalance: BigInt(0),
        value: BigInt(0),
        accounts: [],
    };
    const minBalance = toNativeUnits(options.minBalance);
    const topupValue = toNativeUnits(options.value);
    for (const [address, balanceBefore] of balances.entries()) {
        if (address === everWalletAddress) {
            plan.everWalletBalance = balanceBefore;
        } else if (balanceBefore < minBalance) {
            const value = minBalance + topupValue - balanceBefore;
            plan.value += value;
            plan.accounts.push({
                address,
                balanceBefore,
                value,
            });
        }
    }
    return plan;
}

function toDecimalEvers(units: bigint): string {
    return decimalFromNumAndDenomAsPowerOf10(units.toString(), Evr.NATIVE_DECIMALS);
}

function topUpResultFromPlan(plan: TopUpPlan): TopUpResult {
    return {
        everWalletBalanceBefore: toDecimalEvers(plan.everWalletBalance),
        totalTopUpValue: toDecimalEvers(plan.value),
        accounts: plan.accounts.map(acc => ({
            address: acc.address,
            balanceBefore: toDecimalEvers(acc.balanceBefore),
            topUpValue: toDecimalEvers(acc.value),
        })),
    };
}

/** @internal */
export async function topUp(flex: Flex, options: TopUpOptions): Promise<TopUpResult> {
    const everWallet = new EverWallet(flex.evr, options.everWallet);
    const plan = await getTopupPlan(flex, everWallet, options);

    if (plan.value > plan.everWalletBalance + toNativeUnits(1)) {
        const error: SdkError = new Error(
            `Ever wallet balance is too low to topup trader balances.`,
        );
        error.code = TvmErrorCode.LowBalance;
        throw error;
    }

    for (const account of plan.accounts) {
        await everWallet.topUpUnits(account.address, account.value);
    }

    return topUpResultFromPlan(plan);
}

/** @internal */
export async function getTopUpInfo(flex: Flex, options: TopUpOptions): Promise<TopUpResult> {
    const everWallet = new EverWallet(flex.evr, options.everWallet);
    return topUpResultFromPlan(await getTopupPlan(flex, everWallet, options));
}
