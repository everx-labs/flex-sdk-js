import { Flex } from "../flex";
import { priceToUnits } from "../../contracts/helpers";
import {
    FlexClientAccount, PriceXchgAccount,
    XchgPairAccount,
} from "../../contracts";
import {
    getWallet,
} from "./internals";
import { PriceXchgGetDetailsOutput } from "../../contracts/generated/PriceXchgAccount";
import { TraderOptions } from "./types";

export type CancelOrderOptions = {
    client: string,
    trader: TraderOptions,
    market: string,
    price: number,
    orderId: number | string,
    evers?: bigint | number | string,
};

export async function cancelOrder(flex: Flex, options: CancelOrderOptions): Promise<void> {
    const pair = await flex.getAccount(XchgPairAccount, options.market);
    const pairDetails = (await pair.getDetails()).output;
    const price = priceToUnits(options.price, pairDetails.price_denum);
    const priceDetails = await getPriceDetails(flex, options.client, pair, price.num);
    let sell: boolean;
    if (findOrder(options.orderId, priceDetails.sells)) {
        sell = true;
    } else if (findOrder(options.orderId, priceDetails.buys)) {
        sell = false;
    } else {
        throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
    }
    const wallet = await getWallet(flex, {
        market: options.market,
        sell,
        client: options.client,
        trader: options.trader,
    });
    await wallet.runCancelOrder({
        order_id: options.orderId,
        sell,
        price: priceDetails.address,
        evers: options.evers ?? 3e9,
    });
}

function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}

async function getPriceDetails(
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
