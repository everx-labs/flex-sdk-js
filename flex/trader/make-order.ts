import { Flex, MakeOrderMode } from "../exchange";
import { abiContract, ProcessingErrorCode, TvmErrorCode } from "@eversdk/core";
import {
    findTransactionError,
    FlexClientAccount,
    FlexWalletAccount,
    PriceXchgAccount,
    resolveContractError,
    XchgPairAccount,
} from "../../contracts";
import { getWallet } from "./internals";
import { TraderOptions } from "./types";
import { toUnits, Evr, TokenValue } from "../web3";
import { priceToUnits } from "../flex";
import { AccountClass } from "../../contracts/account-ex";
import { DerivativeTransaction } from "../web3/accounts";

export type MakeOrderOptions = {
    clientAddress: string;
    trader: TraderOptions;
    marketAddress: string;
    /** Trade direction */
    sell: boolean;
    /** Amount of Major token to buy or sell */
    amount: TokenValue;
    /** Price of Major token */
    price: TokenValue;
    /**
     * Optional uint64 size number, MUST be unique for each Trader's order.
     * If omitted library uses random generator.
     */
    orderId?: number | string;
    /** Amount of native currency attached for processing fees */
    evers?: bigint | number | string;
    /** Order expiration time */
    finishTime?: number;
    /** Order type */
    mode?: MakeOrderMode;

    /** Wait for the transaction which updates the price contract (orderbook) */
    waitForOrderbookUpdate?: boolean;
};

export enum MakeOrderStatus {
    /**
     * MakeOrder initialization message to FlexWallet was sent to the blockchain.
     * Now waiting for the transaction on the wallet.
     */
    STARTING,
    /**
     * Transaction on the wallet received. Now waiting for the transaction on the orderbook.
     * Now waiting for finalizing making order flow.
     */
    FINALIZING,
    /**
     * Make order was successfully finished.
     */
    SUCCESS,
    /**
     * Make order failed.
     */
    ERROR,
}

/**
 * Parameters of the making order.
 * Required while the making order flow is not finalized.
 */
type MakeOrderParams = {
    isSell: boolean;
    majorSymbol: string;
    minorSymbol: string;
    walletAddress: string;
    priceAddress: string;
};

type MakeOrderStarting = {
    status: MakeOrderStatus.STARTING;
    params: MakeOrderParams;
    message: string;
    shard_block_id: string;
};

type MakeOrderFinalizing = {
    status: MakeOrderStatus.FINALIZING;
    params: MakeOrderParams;
    walletTransactionId: string;
};

type MakeOrderSuccess = {
    status: MakeOrderStatus.SUCCESS;
    walletTransactionId: string;
    priceTransactionId: string;
};

type MakeOrderError = {
    status: MakeOrderStatus.ERROR;
    error: ErrorInfo;
};

type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};

export type MakeOrderResult = {
    orderId: string;
} & (MakeOrderStarting | MakeOrderFinalizing | MakeOrderSuccess | MakeOrderError);

function makeOrderError(orderId: string, error: Error): MakeOrderResult {
    return {
        orderId,
        status: MakeOrderStatus.ERROR,
        error: {
            ...error,
            message: error.message,
        },
    };
}

/** @internal */
export async function makeOrder(flex: Flex, options: MakeOrderOptions): Promise<MakeOrderResult> {
    const defaults = flex.config.trader.order;
    const pair = await flex.evr.accounts.get(XchgPairAccount, options.marketAddress);
    const flexAccount = await flex.getFlexAccount();

    const pairDetails = (await pair.getDetails()).output;
    const wallet = await getWallet(flex.evr, {
        marketAddress: options.marketAddress,
        sell: options.sell,
        clientAddress: options.clientAddress,
        trader: options.trader,
    });
    const priceCode = (await pair.getPriceXchgCode({ salted: false })).output.value0;
    const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
    const priceSalt = (await pair.getPriceXchgSalt()).output.value0;
    const amount = toUnits(options.amount, pairDetails.major_tip3cfg.decimals);
    const orderId =
        options.orderId !== undefined ? options.orderId : await generateRandomOrderId(flex.evr);
    const price = priceToUnits(
        options.price,
        pairDetails.price_denum,
        pairDetails.major_tip3cfg.decimals,
        pairDetails.minor_tip3cfg.decimals,
    );
    const lend_balance = (
        await flexAccount.calcLendTokensForOrder({
            sell: options.sell,
            major_tokens: amount,
            price,
        })
    ).output.value0;
    const finishTime = options.finishTime ?? Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

    if (BigInt(amount) < BigInt(pairDetails.min_amount)) {
        throw new Error(
            `Specified amount ${amount} is less that market min amount ${pairDetails.min_amount}`,
        );
    }
    const clientAccount = await flex.evr.accounts.get(FlexClientAccount, options.clientAddress);

    const priceAddress = (
        await clientAccount.getPriceXchgAddress({
            price_num: price.num,
            salted_price_code: saltedPriceCode,
        })
    ).output.value0;
    const walletAddress = await wallet.getAddress();
    const mode = options.mode ?? defaults.mode;

    let result: MakeOrderResult | undefined = undefined;
    let walletTransactionId: string | undefined = undefined;
    try {
        walletTransactionId = (
            await wallet.runMakeOrder(
                {
                    _answer_id: 0,
                    evers: options.evers ?? defaults.evers,
                    lend_balance,
                    lend_finish_time: finishTime,
                    price_num: price.num,
                    unsalted_price_code: priceCode,
                    salt: priceSalt,
                    args: {
                        sell: options.sell,
                        immediate_client: mode === MakeOrderMode.IOP || mode === MakeOrderMode.IOC,
                        post_order: mode === MakeOrderMode.IOP || mode === MakeOrderMode.POST,
                        amount,
                        client_addr: options.clientAddress,
                        user_id: "0x" + options.trader.id,
                        order_id: orderId,
                    },
                },
                {
                    skipTransactionTree: true,
                    onProcessing: evt => {
                        if (evt.type === "WillSend") {
                            result = {
                                orderId: orderId.toString(),
                                status: MakeOrderStatus.STARTING,
                                params: {
                                    isSell: options.sell,
                                    majorSymbol: pairDetails.major_tip3cfg.symbol,
                                    minorSymbol: pairDetails.minor_tip3cfg.symbol,
                                    walletAddress,
                                    priceAddress,
                                },
                                message: evt.message,
                                shard_block_id: evt.shard_block_id,
                            };
                        }
                    },
                },
            )
        ).transaction.id;
    } catch (err: any) {
        if (!result) {
            throw err;
        }
        return resolveStartingError(err, result);
    }
    if (!result) {
        throw new Error("Message did not sent.");
    }
    return await finalizeMakeOrder(
        flex,
        result,
        walletTransactionId,
        options.waitForOrderbookUpdate ?? false,
    );
}

/** @internal */
export async function waitForMakeOrder(flex: Flex, result: MakeOrderResult): Promise<MakeOrderResult> {
    let walletTransactionId = undefined;
    switch (result.status) {
        case MakeOrderStatus.SUCCESS:
        case MakeOrderStatus.ERROR:
            return result;
        case MakeOrderStatus.STARTING:
            try {
                walletTransactionId = (
                    await flex.evr.sdk.processing.wait_for_transaction({
                        message: result.message,
                        shard_block_id: result.shard_block_id,
                        abi: abiContract(FlexWalletAccount.package.abi),
                        send_events: false,
                        sending_endpoints: [],
                    })
                ).transaction.id;
            } catch (err: any) {
                return resolveStartingError(err, result);
            }
            break;
        case MakeOrderStatus.FINALIZING:
            walletTransactionId = result.walletTransactionId;
    }
    return finalizeMakeOrder(flex, result, walletTransactionId, true);
}

/** @internal */
export async function finalizeMakeOrder(
    flex: Flex,
    result: MakeOrderResult,
    startingTransactionId: string,
    priceTransactionRequired: boolean,
): Promise<MakeOrderResult> {
    if (result.status === MakeOrderStatus.SUCCESS || result.status === MakeOrderStatus.ERROR) {
        return result;
    }
    const orderId = result.orderId;
    const params = result.params;
    const { walletAddress, priceAddress } = params;

    const accounts: { [address: string]: AccountClass } = {};
    if (result.status === MakeOrderStatus.STARTING) {
        accounts[walletAddress] = FlexWalletAccount;
    }
    if (priceTransactionRequired) {
        accounts[priceAddress] = PriceXchgAccount;
    }

    let newResult: MakeOrderResult = result;
    if (Object.keys(accounts).length > 0) {
        const transactions = await flex.evr.accounts.waitForDerivativeTransactions(
            startingTransactionId,
            accounts,
        );
        newResult = resolveDerivativeTransaction(
            transactions,
            walletAddress,
            FlexWalletAccount,
            newResult,
            transaction => {
                return {
                    orderId,
                    status: MakeOrderStatus.FINALIZING,
                    params,
                    walletTransactionId: transaction.id,
                };
            },
        );
        if (newResult.status === MakeOrderStatus.FINALIZING) {
            const { walletTransactionId } = newResult;
            newResult = resolveDerivativeTransaction(
                transactions,
                priceAddress,
                PriceXchgAccount,
                newResult,
                transaction => {
                    return {
                        orderId,
                        status: MakeOrderStatus.SUCCESS,
                        walletTransactionId: walletTransactionId,
                        priceTransactionId: transaction.id,
                    };
                },
            );
        }
    }
    return newResult;
}

function resolveDerivativeTransaction(
    transactions: { [address: string]: DerivativeTransaction },
    address: string,
    contract: AccountClass,
    result: MakeOrderResult,
    success: (transaction: DerivativeTransaction) => MakeOrderResult,
): MakeOrderResult {
    const transaction = transactions[address];
    if (transaction) {
        const error = findTransactionError(transaction, contract);
        if (error) {
            return makeOrderError(result.orderId, error);
        }
        return success(transaction);
    }
    return result;
}

type SdkError = Error & {
    code?: number;
    data?: {
        local_error?: {
            code: number;
            data?: {
                exit_code?: number;
            };
        };
    };
};

function resolveStartingError(original: SdkError, state: MakeOrderResult): MakeOrderResult {
    if (state.status === MakeOrderStatus.SUCCESS || state.status === MakeOrderStatus.ERROR) {
        return state;
    }

    const messageRejected =
        original.code === ProcessingErrorCode.MessageExpired ||
        original.code === ProcessingErrorCode.MessageRejected;

    if (!messageRejected) {
        throw original;
    }

    let originalError = original;
    const localCode = originalError.data?.local_error?.code;
    const { isSell, majorSymbol, minorSymbol, walletAddress } = state.params;
    const O = isSell ? "sell" : "buy";
    const M = `${majorSymbol}/${minorSymbol}`;
    const T = isSell ? majorSymbol : minorSymbol;
    const W = walletAddress;
    let message = `Error occurred while performing ${O} on ${M}.`;
    switch (localCode) {
        case TvmErrorCode.AccountCodeMissing:
            message += ` ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
            break;
        case TvmErrorCode.AccountMissing:
            message += ` You need to activate ${T} wallet ${W} to trade on this Market.`;
            break;
        case TvmErrorCode.AccountFrozenOrDeleted:
            message += ` ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
            break;
        case TvmErrorCode.LowBalance:
            message += ` You need to top-up ${T} wallet ${W} to pay fees.`;
            break;
        default:
            originalError = resolveContractError(originalError, FlexWalletAccount);
            message += ` ${originalError.message}. Ask DEX Support team for help.`;
            break;
    }
    const error: Error & {
        originalError?: SdkError;
    } = new Error(message);

    error.originalError = {
        ...originalError,
        message: originalError.message,
    };
    return {
        orderId: state.orderId,
        status: MakeOrderStatus.ERROR,
        error: error,
    };
}

export async function generateRandomOrderId(evr: Evr): Promise<string> {
    const result = await evr.sdk.crypto.generate_random_bytes({
        length: 8,
    });
    return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
}
