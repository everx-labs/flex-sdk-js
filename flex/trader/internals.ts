import { Flex } from "../flex";
import { ProcessingErrorCode, Signer, TonClient, TvmErrorCode } from "@eversdk/core";
import {
    FlexClientAccount,
    FlexWalletAccount, PriceXchgAccount,
    WrapperAccount,
    XchgPairAccount,
} from "../../contracts";
import { PriceXchgGetDetailsOutput } from "../../contracts/generated/PriceXchgAccount";

/** @internal */
export async function getWallet(options: {
    flex: Flex,
    market: string,
    client: string,
    trader: string,
    traderSigner: Signer | string,
    sell: boolean
}): Promise<FlexWalletAccount> {
    const pair = await options.flex.getAccount(XchgPairAccount, options.market);
    const pairDetails = (await pair.getDetails()).output;
    const token = await options.flex.getAccount(WrapperAccount, options.sell
        ? pairDetails.major_tip3cfg.root_address
        : pairDetails.minor_tip3cfg.root_address);
    const signer = await options.flex.signers.resolve(options.traderSigner);
    const address = (await token.getWalletAddress({
        pubkey: `0x${options.trader}`,
        owner: options.client,
    })).output.value0;
    return options.flex.getAccount(FlexWalletAccount, {
        address,
        signer,
    });
}

/** @internal */
export async function generateRandomOrderId(web3: TonClient): Promise<string> {
    const result = await web3.crypto.generate_random_bytes({
        length: 8,
    });
    return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
}

/** @internal */
export function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}

/** @internal */
export function resolveError(original: Error & {
    code?: number,
    data?: {
        local_error?: {
            code: number,
        }
    }
}, context: { O: string, M: string, T: string, W: string }): Error {

    if (original.code !== ProcessingErrorCode.MessageExpired) {
        return original;
    }
    const localCode = original.data?.local_error?.code;
    const {
        O,
        M,
        T,
        W,
    } = context;
    let message: string;
    switch (localCode) {
    case TvmErrorCode.AccountCodeMissing:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.AccountMissing:
        message = `Error occurred while performing operation ${O} on ${M} market. You need to activate ${T} wallet ${W} to trade on this Market.`;
        break;
    case TvmErrorCode.AccountFrozenOrDeleted:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.LowBalance:
        message = `Error occurred while performing ${O} on ${M} Market. You need to top-up ${T} wallet ${W} to pay fees.`;
        break;
    default:
        message = `Error occurred while performing ${O} on ${M}. Ask DEX Support team for help.`;
        break;
    }
    const flexErr = new Error(message);
    (flexErr as any).originalError = original;
    return flexErr;

}

/** @internal */
export async function getPriceDetails(
    flex: Flex,
    client: string,
    pair: XchgPairAccount,
    priceNum: string,
): Promise<PriceXchgGetDetailsOutput & { address: string }> {
    const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
    const clientAccount = await flex.getAccount(FlexClientAccount, client);
    const address = (await clientAccount.getPriceXchgAddress({
        price_num: priceNum,
        salted_price_code: saltedPriceCode,
    })).output.value0;
    const priceAccount = await flex.getAccount(PriceXchgAccount, address);
    const details = (await priceAccount.getDetails()).output;
    return {
        address,
        ...details,
    };
}
