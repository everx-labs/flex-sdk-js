import { Flex } from "../flex";
import { Signer } from "@eversdk/core";
import {
    FlexWalletAccount,
    WrapperAccount,
    XchgPairAccount,
} from "../../contracts";

/** @internal */
export async function getWallet(
    flex: Flex,
    options: {
        market: string,
        client: string,
        trader: {
            id: string,
            signer: Signer | string,
        }
        sell: boolean
    },
): Promise<FlexWalletAccount> {
    const pair = await flex.getAccount(XchgPairAccount, options.market);
    const pairDetails = (await pair.getDetails()).output;
    const token = await flex.getAccount(WrapperAccount, options.sell
        ? pairDetails.major_tip3cfg.root_address
        : pairDetails.minor_tip3cfg.root_address);
    const signer = await flex.signers.resolve(options.trader.signer);
    const address = (await token.getWalletAddress({
        pubkey: `0x${options.trader}`,
        owner: options.client,
    })).output.value0;
    return flex.getAccount(FlexWalletAccount, {
        address,
        signer,
    });
}
