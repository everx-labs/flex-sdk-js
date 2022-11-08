import {
    findTransactionError,
    FlexClientAccount,
    FlexWalletAccount,
    PriceXchgAccount,
    resolveContractError,
    XchgPairAccount,
} from "../../contracts";
import { getWallet } from "./internals";
import { PriceXchgGetDetailsOutput } from "../../contracts/generated/PriceXchgAccount";
import { TraderOptions } from "./types";
import { Evr, TokenValue } from "../web3";
import { priceToUnits } from "../flex";
import { abiContract, ProcessingErrorCode, TvmErrorCode } from "@eversdk/core";
import { AccountClass } from "../../contracts/account-ex";
import { DerivativeTransaction } from "../web3/accounts";

export type CancelOrderOptions = {
    /**
     * Flex Client address. If you are a trader, ask the person who lent you the money.
     */
    clientAddress: string;
    /**
     * Trader info
     */
    trader: TraderOptions;
    /**
     * Trading market
     */
    marketAddress: string;
    /**
     * Order price
     */
    price: TokenValue;
    /**
     * Optional order ID. If omitted, all orders with this price will be canceled.
     * Otherwise, only order with orderId will be canceled.
     *
     */
    orderId: number | string;
    /**
     * Evers for commission.
     */
    evers?: bigint | number | string;

    /** Wait for the transaction which updates the price contract (orderbook) */
    waitForOrderbookUpdate?: boolean;
};

export enum CancelOrderStatus {
    /**
     * Primary message was sent to the blockchain.
     * Now waiting for the primary transaction.
     */
    STARTING,
    /**
     * Primary message was successfully processed on the blockchain.
     * Now waiting for finalizing flow.
     */
    FINALIZING,
    /**
     * Cancel order was successfully finished.
     */
    SUCCESS,
    /**
     * Cancel order was failed.
     */
    ERROR,
}

/**
 * Parameters of the cancelling order.
 * Required while the flow is not finalized.
 */
type CancelOrderParams = {
    tokenSymbol: string;
    walletAddress: string;
    priceAddress: string;
};

type CancelOrderStarting = {
    status: CancelOrderStatus.STARTING;
    params: CancelOrderParams;
    message: string;
    shard_block_id: string;
};

type CancelOrderFinalizing = {
    status: CancelOrderStatus.FINALIZING;
    params: CancelOrderParams;
    walletTransactionId: string;
};

type CancelOrderSuccess = {
    status: CancelOrderStatus.SUCCESS;
    walletTransactionId: string;
    priceTransactionId: string;
};

type CancelOrderError = {
    status: CancelOrderStatus.ERROR;
    error: ErrorInfo;
};

type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};

export type CancelOrderResult =
    | CancelOrderStarting
    | CancelOrderFinalizing
    | CancelOrderSuccess
    | CancelOrderError;

function cancelOrderError(error: Error): CancelOrderResult {
    return {
        status: CancelOrderStatus.ERROR,
        error: {
            ...error,
            message: error.message,
        },
    };
}

export async function cancelOrder(
    evr: Evr,
    options: CancelOrderOptions,
): Promise<CancelOrderResult> {
    const pair = await evr.accounts.get(XchgPairAccount, options.marketAddress);
    const pairDetails = (await pair.getDetails()).output;
    const price = priceToUnits(
        options.price,
        pairDetails.price_denum,
        pairDetails.major_tip3cfg.decimals,
        pairDetails.minor_tip3cfg.decimals,
    );
    const priceDetails = await getPriceDetails(
        evr,
        options.clientAddress,
        pair,
        price.num,
        options.price,
    );
    let sell: boolean;
    if (findOrder(options.orderId, priceDetails.sells)) {
        sell = true;
    } else if (findOrder(options.orderId, priceDetails.buys)) {
        sell = false;
    } else {
        throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
    }
    const wallet = await getWallet(evr, {
        marketAddress: options.marketAddress,
        sell,
        clientAddress: options.clientAddress,
        trader: options.trader,
    });
    const walletAddress = await wallet.getAddress();
    const priceAddress = priceDetails.address;
    let result: CancelOrderResult | undefined = undefined;
    let walletTransactionId: string | undefined = undefined;
    try {
        walletTransactionId = (
            await wallet.runCancelOrder(
                {
                    order_id: options.orderId,
                    sell,
                    price: priceDetails.address,
                    evers: options.evers ?? 3e9,
                },
                {
                    skipTransactionTree: true,
                    onProcessing: evt => {
                        if (evt.type === "WillSend") {
                            result = {
                                status: CancelOrderStatus.STARTING,
                                params: {
                                    tokenSymbol: sell
                                        ? pairDetails.major_tip3cfg.symbol
                                        : pairDetails.minor_tip3cfg.symbol,
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

    return await finalizeCancelOrder(
        evr,
        result,
        walletTransactionId,
        options.waitForOrderbookUpdate ?? false,
    );
}

function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}

async function getPriceDetails(
    evr: Evr,
    client: string,
    pair: XchgPairAccount,
    priceNum: string,
    price: TokenValue,
): Promise<PriceXchgGetDetailsOutput & { address: string }> {
    const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
    const clientAccount = await evr.accounts.get(FlexClientAccount, client);
    const address = (
        await clientAccount.getPriceXchgAddress({
            price_num: priceNum,
            salted_price_code: saltedPriceCode,
        })
    ).output.value0;
    if (!(await evr.accounts.isActive(address))) {
        throw new Error(
            `Orderbook's price account [${address}] does not exist. Please check that the price (${JSON.stringify(
                price,
            )}) is correct.`,
        );
    }
    const priceAccount = await evr.accounts.get(PriceXchgAccount, address);
    const details = (await priceAccount.getDetails()).output;
    return {
        address,
        ...details,
    };
}

/** @internal */
export async function waitForCancelOrder(
    evr: Evr,
    result: CancelOrderResult,
): Promise<CancelOrderResult> {
    let walletTransactionId = undefined;
    switch (result.status) {
        case CancelOrderStatus.SUCCESS:
        case CancelOrderStatus.ERROR:
            return result;
        case CancelOrderStatus.STARTING:
            try {
                walletTransactionId = (
                    await evr.sdk.processing.wait_for_transaction({
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
        case CancelOrderStatus.FINALIZING:
            walletTransactionId = result.walletTransactionId;
    }
    return finalizeCancelOrder(evr, result, walletTransactionId, true);
}

/** @internal */
export async function finalizeCancelOrder(
    evr: Evr,
    result: CancelOrderResult,
    startingTransactionId: string,
    priceTransactionRequired: boolean,
): Promise<CancelOrderResult> {
    if (result.status === CancelOrderStatus.SUCCESS || result.status === CancelOrderStatus.ERROR) {
        return result;
    }
    const params = result.params;
    const { walletAddress, priceAddress } = params;

    const accounts: { [address: string]: AccountClass } = {};
    if (result.status === CancelOrderStatus.STARTING) {
        accounts[walletAddress] = FlexWalletAccount;
    }
    if (priceTransactionRequired) {
        accounts[priceAddress] = PriceXchgAccount;
    }

    let newResult: CancelOrderResult = result;
    if (Object.keys(accounts).length > 0) {
        const transactions = await evr.accounts.waitForDerivativeTransactions(
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
                    status: CancelOrderStatus.FINALIZING,
                    params,
                    walletTransactionId: transaction.id,
                };
            },
        );
        if (newResult.status === CancelOrderStatus.FINALIZING) {
            const { walletTransactionId } = newResult;
            newResult = resolveDerivativeTransaction(
                transactions,
                priceAddress,
                PriceXchgAccount,
                newResult,
                transaction => {
                    return {
                        status: CancelOrderStatus.SUCCESS,
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
    result: CancelOrderResult,
    success: (transaction: DerivativeTransaction) => CancelOrderResult,
): CancelOrderResult {
    const transaction = transactions[address];
    if (transaction) {
        const error = findTransactionError(transaction, contract);
        if (error) {
            return cancelOrderError(error);
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

function resolveStartingError(original: SdkError, result: CancelOrderResult): CancelOrderResult {
    if (result.status === CancelOrderStatus.SUCCESS || result.status === CancelOrderStatus.ERROR) {
        return result;
    }

    const messageRejected =
        original.code === ProcessingErrorCode.MessageExpired ||
        original.code === ProcessingErrorCode.MessageRejected;

    if (!messageRejected) {
        throw original;
    }

    let originalError = original;
    const localCode = originalError.data?.local_error?.code;
    const { tokenSymbol, walletAddress } = result.params;
    const T = tokenSymbol;
    const W = walletAddress;
    let message = `Error occurred while cancelling order.`;
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
        status: CancelOrderStatus.ERROR,
        error: error,
    };
}
